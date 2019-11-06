npm run build

mkdir git-work
cd git-work
git clone git@github.com:wmccall/test-site

cd test-site

rm -rf -v !(".git"|".gitignore"|"CNAME") 

cp -r ../build/* ./

git add -A

git commit -m "Deploy site"

git remote add origin git@github.com:wmccall/test-site.git

git push -u origin master