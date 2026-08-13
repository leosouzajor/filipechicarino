# Phase 3 source reference — /contato

These files were copied directly from the original Hostinger Horizons export and are the authoritative reference for Phase 3.

Read in this order:
1. `original-hostinger-src/pages/ContatoPage.jsx`
2. `original-hostinger-src/components/ContactSection.jsx`
3. `original-hostinger-src/hooks/use-toast.js`
4. `original-hostinger-src/index.css`

Goal: faithfully migrate `/contato` into the existing Lovable/TanStack Start project.

Rules:
- Preserve all original text, labels, links, section order, fields, required-field behavior and visual structure.
- Keep the form submission SIMULATED exactly as in the original. Do not add backend, database, email sending, Lovable Cloud, or third-party form services.
- Preserve the current approved homepage, `/quem-sou` and `/solucoes`.
- Adapt routing/framework details to the current TanStack Start project; do not blindly restore React Router or react-helmet.
- Reuse current project assets/components/styles whenever equivalent.
- Do not redesign or add content.
