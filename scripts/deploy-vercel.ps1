# Requires: npx vercel login (once), then link project to creditriskdynamics.com
$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
Set-Location (Join-Path $Root "preview-html")

npx --yes vercel@latest deploy --prod
