#!/usr/bin/env sh
# sudo chmod -R 777 ./test.sh 给予权限
# 当发生错误时中止脚本
set -e
npm run build

docker build -t test .       

docker push test

