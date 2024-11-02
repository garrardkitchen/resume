## Install notes:

### Step 1:

_Install on windows_

windows:
```
choco install hugo -confirm
choco install hugo-extended -confirm
```

mac:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install hugo
```

### Step 2:

```
git submodule init && git submodule update && git submodule status
```

Change 
```
 {{ .hugo.Generator }}
```
to
```
 {{ hugo.Generator }}
```

### Step 3:

```
hugo server
```

To server up draft posts:
```
huge server -D
```

---

##### Useful links

- https://gohugo.io/getting-started/quick-start/

#### To deploy

```script
hugo
git commit -m "docs:<comment>"
git push origin master
```