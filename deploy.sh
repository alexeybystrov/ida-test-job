#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
npm run generate

# переход в каталог сборки
cd dist

# если вы публикуете на пользовательский домен
# echo 'www.example.com' > CNAMEk

git init
git add -A
git commit -m 'deploy'

# если вы публикуете по адресу https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# если вы публикуете по адресу https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:alexeybystrov/ida-test-job.git master:gh-pages

cd -