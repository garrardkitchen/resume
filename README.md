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
Then to remove a submodule, run:

_e.g. <submodule> could be "themes/ananke"_

```
git submodule deinit -f -- <submodule>
rm -r -fo .git/modules/<submodule>
OR
Remove-Item -Recurse -Force .git/modules/<submodule>
git rm -f <submodule>
```