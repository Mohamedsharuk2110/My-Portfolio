Mohamed Sharuk | AI & Data Science
Saved version 6. Source commit cfbaa5646a787ab831b3b86e0d3b4d144c87bca3.

Use Node.js 24.x with npm. Save the ZIP in your Downloads folder.
Run these commands in PowerShell:

$zip = Join-Path "$env:USERPROFILE\Downloads" "Mohamed-Sharuk-Portfolio-v6.zip"
$project = Join-Path "$env:USERPROFILE" "Mohamed-Sharuk-Portfolio-v6"
Expand-Archive -LiteralPath $zip -DestinationPath $project
Set-Location -LiteralPath $project
npm.cmd ci
npm.cmd exec -- vite --host 127.0.0.1 --port 5173 --open

Keep PowerShell open. Press Ctrl+C to stop. To restart later, change into the project directory and repeat the last command.

To build and serve the production version from the project directory:
npm.cmd run build
npm.cmd exec -- vite preview --host 127.0.0.1 --port 4173 --open

Edit main.tsx for portfolio content, style.css for styling, scroll-reveal.ts for scroll effects, and components/ui for the animated hero, letter, book and project symbols. Images and the downloadable resume are in public/. Fonts are embedded in fonts.css. npm ci installs the dependencies recorded in package-lock.json.
