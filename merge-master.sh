npm run build

mkdir git-work
cd git-work
git clone git@github.com:wmccall/test-site

cd test-site

cp -r ../build/* ./

git add -A

git commit -m "Deploy site"

git remote add origin git@github.com:wmccall/test-site.git

git push -u origin master