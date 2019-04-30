## Notes

ref: https://gohugo.io/hosting-and-deployment/hosting-on-github/

To deploy:

```bash
./deploy
```

```bash
rm -rf public
git -r --cached submodules/public
git submodule add -b master -f git@github.com:garrardkitchen/garrardkitchen.github.io.git public
```