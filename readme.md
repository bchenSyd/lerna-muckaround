#### 1. .both `semantic-release` and `corp-semantic-release` use `npm info package-name gitHead` as the benchmark, and compare your current head with the benchmark to determine the changed commits;

it uses `max(git tag | package.json) ` to work out the old version, combined the changed commits to work the new version, then commit the changes (update package.json) and tag the new commit. 

#### 2.`lerna publish --yes --conventional-commits` uses 

[conventional-recommended-bump](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-recommended-bump)


* `conventionalRecommendedBump(options, [parserOpts,] callback)` relies on `git-semver-tags` to return all local git semver tags

* `git-semver-tags` which is [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)
```json
  "name": "git-semver-tags",
  "version": "1.3.4",
  "description": "Get all git semver tags of your repository in reverse chronological order",
  "bugs": {
    "url": "https://github.com/conventional-changelog/conventional-changelog/issues"
  },
```


```js
//filter out tags
`git log --decorate --no-color || /tag:\s*(.+?)[,\)]/gi.test()`

//filter out lerna version tags
function lernaTag(tag, pkg) {
  if (pkg && !(new RegExp('^' + pkg + '@')).test(tag)) {
    return false;
  } else {
    return /^.+@[0-9]+\.[0-9]+\.[0-9]+(-.+)?$/.test(tag);
  }
}
// tag[0] (latest git semver tag) onwards, bump to new ver
```

# examples
```sh
321ae61 :  chore(themes): a patch-level change on themes
Changes:
 - lerna-test-gel-button: 0.70.0 => 0.70.1  # a patch bump for packages who depends on it
 - lerna-test-/library: 0.68.2 => 0.68.3     # a patch bump for packages who depends on it
 - lerna-test-gel-themes: 0.71.0 => 0.71.1  # a patch bump for itself


3715a55 :  feat(button): a minor-level change for button only
Changes:
 - lerna-test-gel-button: 0.70.1 => 0.71.0  # a mino bump for itself
 - lerna-test-/library: 0.68.3 => 0.68.4     # a patch bump for packages who depends on it


# perf change is treated as a patch change
`  git add .`

`  git commit -m 'perf(themes): update themes'       `
[master fbc4bdd] perf(themes): update themes
 1 file changed, 1 insertion(+), 1 deletion(-)

` yarn lerna publish --yes --conventional-commits`
yarn run v1.5.1
$ /opt/git/lerna-muckaround/node_modules/.bin/lerna publish --yes --conventional-commits
lerna info version 2.9.0
lerna info versioning independent
lerna info Checking for updated packages...
lerna info Comparing with lerna-test-gel-button@0.71.1.
lerna info Checking for prereleased packages...

Changes:
 - lerna-test-gel-button: 0.71.1 => 0.71.2
 - lerna-test-/library: 0.68.5 => 0.68.6
 - lerna-test-gel-themes: 0.72.0 => 0.72.1

lerna info auto-confirmed
lerna info publish Publishing packages to npm...
lerna info published lerna-test-gel-themes
lerna info published lerna-test-gel-button
lerna info published lerna-test-/library
lerna info git Pushing tags...
Successfully published:
 - lerna-test-gel-button@0.71.2
 - lerna-test-/library@0.68.6
 - lerna-test-gel-themes@0.72.1
lerna success publish finished
Done in 19.96s.

```

### precedence

1. when no change happens in `packages` folder, no changes to publish;
2. when package.json says ver = `1.0.2` , while associated commit tag says `2.0.0`, `pacakge.json` takes precedence

`git lg`
```sh
* 844148c - (18 seconds ago) Publish - bochen (HEAD, tag: @wdpui/api-client-new@1.0.3, master)
* 5e3319f - (37 seconds ago) chore(update packages itself): update - bochen
* 4f3efd3 - (2 minutes ago) chore(update-package.json): update - bochen
* aea5b5e - (6 minutes ago) Publish - bochen (tag: @wdpui/api-client-new@2.0.0)
* 107c0cf - (6 minutes ago) chore(change-name): update - bochen
* 25c4875 - (10 minutes ago) Publish - bochen (tag: @wdpui/api-client@1.0.1)
* e7ebcc1 - (12 minutes ago) chore(test): update - bochen
# package starts from `npm init`, so version defaults to '1.0.0'
```


### nuts and bolts

```sh
# foreach package
# {
` git diff --name-only $(git describe --tag --abbrev=0)  -- packages/xxx `

# if empty, return;
# otherwise:
#    node ../../node_modules/conventional-recommended-bump/cli.js -l @wdpui/gel-button --commmit-path packages/gel-button -p angular

# //******************************************************************************** */
#       return _semver2.default.inc(pkg.version /**** ALWAYS PACKAGE.JSON VERSION !!! always ****/, recommendedBump);
# //******************************************************************************** */


Changes:
 - @wdpui/api-client-new: 1.0.4 => 1.0.5

lerna info auto-confirmed 
lerna sill initialize success
lerna sill execute attempt
lerna sill runScriptSync preversion lerna-test
lerna sill runScriptSync preversion @wdpui/api-client-new
lerna sill runScriptSync version @wdpui/api-client-new
lerna sill updateIndependentChangelog for @wdpui/api-client-new at /opt/lerna-test/packages/api-client
```


## log.silly("pushWithTags")

```js
  static pushWithTags(remote, tags, opts) {
    log.silly("pushWithTags", [remote, tags]);

    const branch = GitUtilities.getCurrentBranch(opts);
    ChildProcessUtilities.execSync("git", ["push", remote, branch], opts);
    ChildProcessUtilities.execSync("git", ["push", remote].concat(tags), opts);
  }
```