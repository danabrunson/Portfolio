# Troubleshooting GitHub Pages White Screen

If your site shows a white screen on GitHub Pages, check these:

## 1. Check Browser Console
Open your browser's developer tools (F12) and check the Console tab for errors.

Common errors:
- `Failed to load resource` - Asset path issues
- `Uncaught SyntaxError` - JavaScript errors
- `404 Not Found` - Missing files

## 2. Verify Base Path
Make sure `vite.config.js` has:
```javascript
base: mode === 'production' ? '/Portfolio/' : '/',
```

## 3. Check Built Files
After running `npm run build`, check `dist/index.html`:
- Script tags should reference `/Portfolio/assets/...`
- CSS links should reference `/Portfolio/assets/...`

## 4. Verify GitHub Pages Settings
- Go to Settings → Pages
- Source should be "GitHub Actions" (not "Deploy from a branch")
- Check Actions tab for deployment errors

## 5. Clear Browser Cache
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Or clear browser cache completely

## 6. Check Network Tab
In browser DevTools → Network tab:
- Are JavaScript files loading? (status 200)
- Are CSS files loading? (status 200)
- Any 404 errors?

## 7. Rebuild and Redeploy
```bash
npm run build
git add dist
git commit -m "Rebuild for GitHub Pages"
git push origin main
```

## Common Fixes

### If assets aren't loading:
- Make sure all images are in the `public/` folder
- Use paths starting with `/` (Vite handles base path automatically)

### If routes aren't working:
- Verify `basename="/Portfolio"` in App.jsx Router
- Check that all Links use relative paths (they should)

### If still white screen:
1. Check browser console for specific errors
2. Verify the build completed successfully
3. Check GitHub Actions logs for build errors

