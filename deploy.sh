npm install
ng build --prod --output-path=dist --base-href /transposition-experiment/
git push origin `git subtree split --prefix dist master`:gh-pages --force
