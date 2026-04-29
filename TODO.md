# Deployment Fix Progress

## Steps:

1. [x] Fix PowerShell execution policy (`Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`)
2. [x] Run `npm install`
3. [x] Edit package.json (remove unnecessary deps, add deploy scripts)
4. [x] Test `npm run lint` and `npm run build` (clean)
5. [x] Install gh-pages package
6. [x] Build and deploy to gh-pages branch
7. [ ] Update README.md with deploy instructions
8. [ ] Commit all changes and push
9. [x] Complete: Repo ready for GitHub Pages (user enable in Settings > Pages > Deploy from gh-pages branch)
