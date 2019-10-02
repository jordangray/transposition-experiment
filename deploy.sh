# Ensure branch is up-to-date
git checkout master

# Build and deploy
npm install
ng deploy --base-href=/transposition-experiment/
