git checkout master
npm install
ng build --prod --output-path=dist --base-href /transposition-experiment/
git subtree split --prefix dist -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages
