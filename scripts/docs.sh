echo "npm install"
npm install
echo "build start."
npm run build
echo "rm docs"
rm -rf docs
echo "move files."
mv dist docs
echo "git commit & push."
git add .
git commit -m '@docs: build docs.'
# git push origin