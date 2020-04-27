## Notes

ref: https://gohugo.io/hosting-and-deployment/hosting-on-github/

#### To edit content

Edit the resume repo, commit and push regularly.

#### To run locally

```
hugo server
```

Navigate to: http://localhost:1313/

##### Useful links

- https://gohugo.io/getting-started/quick-start/

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

If you can't pull submodules, run:
```bash
git submodule init && git submodule update && git submodule status
```

git submodule deinit -f -- public
Remove-Item -Recurse -Force .git/modules/public
OR
rm -r -fo .git/modules/public
