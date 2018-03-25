#### 1. .both `semantic-release` and `corp-semantic-release` use `npm info package-name gitHead` as the benchmark, and compare your current head with the benchmark to determine the changed commits;

it uses `max(git tag | package.json) ` to work out the old version, combined the changed commits to work the new version, then commit the changes (update package.json) and tag the new commit. 

#### 2.`lerna publish --yes --conventional-commits` uses 
[conventional-changelog](
https://github.com/conventional-changelog/conventional-changelog) which is a monorepo comprised of 
[conventional-recommended-bump](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-recommended-bump)


* `conventionalRecommendedBump(options, [parserOpts,] callback)`   does not check npm at all

321ae61 :  chore(themes): a patch-level change on themes
Changes:
 - @lernatest/gel-button: 0.70.0 => 0.70.1  # a patch bump for packages who depends on it
 - @lernatest/library: 0.68.2 => 0.68.3     # a patch bump for packages who depends on it
 - @lernatest/gel-themes: 0.71.0 => 0.71.1  # a patch bump for itself


3715a55 :  feat(button): a minor-level change for button only
Changes:
 - @lernatest/gel-button: 0.70.1 => 0.71.0  # a mino bump for itself
 - @lernatest/library: 0.68.3 => 0.68.4     # a patch bump for packages who depends on it


perf change is treated as a patch change
```
 /opt/git/lerna-muckaround (master)$ git add .
/opt/git/lerna-muckaround (master +)$ git commit -m 'perf(themes): update themes'
[master fbc4bdd] perf(themes): update themes
 1 file changed, 1 insertion(+), 1 deletion(-)
/opt/git/lerna-muckaround (master)$ yarn lerna publish --yes --conventional-commits
yarn run v1.5.1
$ /opt/git/lerna-muckaround/node_modules/.bin/lerna publish --yes --conventional-commits
lerna info version 2.9.0
lerna info versioning independent
lerna info Checking for updated packages...
lerna info Comparing with @lernatest/gel-button@0.71.1.
lerna info Checking for prereleased packages...

Changes:
 - @lernatest/gel-button: 0.71.1 => 0.71.2
 - @lernatest/library: 0.68.5 => 0.68.6
 - @lernatest/gel-themes: 0.72.0 => 0.72.1

lerna info auto-confirmed
lerna info publish Publishing packages to npm...
lerna info published @lernatest/gel-themes
lerna info published @lernatest/gel-button
lerna info published @lernatest/library
lerna info git Pushing tags...
Successfully published:
 - @lernatest/gel-button@0.71.2
 - @lernatest/library@0.68.6
 - @lernatest/gel-themes@0.72.1
lerna success publish finished
Done in 19.96s.
```