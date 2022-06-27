## Install notes:

### Step 1:

_Install on windows_

```
choco install hugo -confirm
choco install hugo-extended -confirm
```

### Step 2:

```
git submodule init && git submodule update && git submodule status
```

Change 
```
 {{ .Hugo.Generator }}
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
