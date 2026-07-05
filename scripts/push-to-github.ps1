# One-time: gh auth login --web
# Then run: .\scripts\push-to-github.ps1

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot
if (-not (Test-Path (Join-Path $Root ".git"))) {
  $Root = "F:\AA_MARKETING BRANDING FINAL"
}
Set-Location $Root

$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" +
  [System.Environment]::GetEnvironmentVariable("Path", "User")

gh auth status | Out-Null
if ($LASTEXITCODE -ne 0) {
  Write-Host "Belum login GitHub. Jalankan: gh auth login --web"
  exit 1
}

if (-not (git remote get-url origin 2>$null)) {
  git remote add origin https://github.com/YuliusOngky/credit-risk-dynamics.git
}

$repoExists = $false
try {
  gh repo view YuliusOngky/credit-risk-dynamics *> $null
  if ($LASTEXITCODE -eq 0) { $repoExists = $true }
} catch { }

if (-not $repoExists) {
  gh repo create credit-risk-dynamics --public `
    --description "Credit Risk Dynamics marketing site (CAP)" `
    --source=. --remote=origin --push
  exit $LASTEXITCODE
}

git push -u origin master
exit $LASTEXITCODE
