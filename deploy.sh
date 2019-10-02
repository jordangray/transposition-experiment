# Ensure branch is up-to-date
git checkout master

# Build project
npm install
ng build --prod --output-path=dist --base-href /transposition-experiment/

# Push to GitHub Pages branch
git worktree add dist gh-pages
(cd dist; git add .)
(cd dist; git commit -m "Build output as of $(git log '--format=format:%H' master -1)")
git push origin gh-pages
