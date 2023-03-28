@echo off    

call npm run build
call cd dist
call type NUL > .nojekyll
call git init
call git checkout -B master
call git add -A
call git commit -m 'deploy'
call git push -f https://github.com/jtbcodes/jasontb.com.git master:gh-pages

exit /b