# Trayaam CRM preview

The independent private source repository is https://github.com/akashcsolanki/CRM-Trayaam .

`public/crm` contains its generated read-only, fictional-data preview. The website's existing Astro build copies this to `/crm/` without changing other pages. No API, login, customer dataset or credentials are included.

For `crm.trayaam.com`, create a second Cloudflare Pages project connected to this same repository, branch `main`, no build command, and output directory `public/crm`. Add the custom domain on that project's Custom domains page. Keep the current website Pages settings intact. Relative asset paths support the preview on either origin.

This preview is not the production CRM. Google/Titan/Supabase integration and authenticated access remain pending. Future preview updates should be generated from the private source's `npm run build:preview -- --base=./`, verified, and then copied here.
