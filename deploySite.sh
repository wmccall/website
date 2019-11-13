npm run build
shopt -s extglob

mkdir git-work
cd git-work

git clone git@github.com:wmccall/wmccall.github.io

cd wmccall.github.io
rm -rf !(".git"|".gitignore"|"CNAME")
cp -r ../../build/* ./
ls

git status
git add -A
git commit -m "Deploy site"
git push -u origin master

cd ../../
rm -rf git-work