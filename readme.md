#### 1. .both `semantic-release` and `corp-semantic-release` use `npm info package-name gitHead` as the benchmark, and compare your current head with the benchmark to determine the changed commits;

it uses `max(git tag | package.json) ` to work out the old version, combined the changed commits to work the new version, then commit the changes (update package.json) and tag the new commit. 

#### 2.`lerna publish --yes --conventional-commits` uses 
[conventional-changelog](
https://github.com/conventional-changelog/conventional-changelog) which is a monorepo comprised of 
[conventional-recommended-bump](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-recommended-bump)


* `conventionalRecommendedBump(options, [parserOpts,] callback)`   
##### whatBump

**Type:** `function`

A function that takes parsed commits as an argument.

```javascript
whatBump(commits) {};
```

`commits` is an array of all commits from last semver tag to `HEAD` as parsed by [conventional-commits-parser](https://github.com/conventional-changelog/conventional-commits-parser)

This should return an object including but not limited to `level` and `reason`. `level` is a `number` indicating what bump it should be and `reason` is the reason of such release.

