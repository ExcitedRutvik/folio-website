// Trayaam contact-enquiry handler (reference copy of the deployed Apps Script).
//
// Deploy: open the Google Sheet > Extensions > Apps Script > paste this file >
//   Deploy > New deployment > Web app (Execute as: Me, Who has access: Anyone).
//   Copy the /exec URL into the site's PUBLIC_ENQUIRY_ENDPOINT env var.
//
// Script Properties (Project Settings > Script properties):
//   TELEGRAM_TOKEN  = bot token from @BotFather
//   TELEGRAM_CHAT   = your numeric chat id (from @userinfobot)

function doPost(e) {
  try {
    var p = (e && e.parameter) || {};
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Enquiries')
             || SpreadsheetApp.getActiveSpreadsheet().insertSheet('Enquiries');
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Company', 'Email', 'Phone', 'Website', 'Interest', 'Message', 'Page']);
    }
    sheet.appendRow([
      new Date(), p.name || '', p.company || '', p.email || '', p.phone || '',
      p.website || '', p.interest || '', p.msg || '', p.page || ''
    ]);

    var props = PropertiesService.getScriptProperties();
    var token = props.getProperty('TELEGRAM_TOKEN');
    var chat  = props.getProperty('TELEGRAM_CHAT');
    if (token && chat) {
      var text = '🟡 *New Trayaam enquiry*\n'
        + '*Name:* ' + (p.name || '-') + '\n'
        + '*Interest:* ' + (p.interest || '-') + '\n'
        + '*Email:* ' + (p.email || '-') + '\n'
        + '*Phone:* ' + (p.phone || '-') + '\n'
        + '*Company:* ' + (p.company || '-') + '\n'
        + '*Website:* ' + (p.website || '-') + '\n'
        + '*Message:* ' + (p.msg || '-');
      UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/sendMessage', {
        method: 'post',
        payload: { chat_id: chat, text: text, parse_mode: 'Markdown', disable_web_page_preview: 'true' },
        muteHttpExceptions: true
      });
    }
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) })).setMimeType(ContentService.MimeType.JSON);
  }
}
