## Notes

ref: https://gohugo.io/hosting-and-deployment/hosting-on-github/

#### To edit content

Edit the resume repo, commit and push regularly.

#### To deploy

Run bash terminal

`cd` into resume folder

Finally release changes by:

```bash
./deploy
```

Go to site to check content is correct

Fin.

### Trouble shooting

If you experience issues, do:

```bash
rm -rf public
git -r --cached submodules/public
git submodule add -b master -f git@github.com:garrardkitchen/garrardkitchen.github.io.git public
```

