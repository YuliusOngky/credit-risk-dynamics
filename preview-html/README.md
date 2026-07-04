Open `index.html` in a browser, or from the parent folder run: `npx serve preview-html`

## Undo (Git)

Repo root: `F:\AA_MARKETING BRANDING FINAL`

- Tag **`preview-snapshot`** = versi preview saat ini (sebelum polish CSS process).
- Branch **`preview-stable`** = titik yang sama.

Restore hanya HTML preview:

```powershell
cd "F:\AA_MARKETING BRANDING FINAL"
git checkout preview-snapshot -- preview-html/index.html
```

Kembalikan seluruh project ke snapshot:

```powershell
git reset --hard preview-snapshot
```

(Pastikan tidak ada perubahan penting yang belum di-commit sebelum `reset --hard`.)
