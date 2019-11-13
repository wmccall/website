npm run build
shopt -s extglob

mkdir git-work
cd git-work

git clone git@github.com:wmccall/wmccall.github.io

cd wmccall.github.io
rm -rf !(".git"|".gitignore"|"CNAME")
cp -r ../../build/* ./

git commit -a -m "Deploy site"
git remote add origin git@github.com:wmccall/wmccall.github.io.git
git push -u origin master

cd ../../
rm -rf git-work