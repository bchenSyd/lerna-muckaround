1. both `semantic-release` and `corp-semantic-release` use `npm info package-name gitHead` as the benchmark, and compare your current head with the benchmark to determine the changed commits;
it uses `max(git tag | package.json) ` to work out the old version, combined the changed commits to work the new version, then commit the changes (update package.json) and tag the new commit. 

2. `lerna publish --yes --conventional-commits` uses 
[conventional-changelog]
https://github.com/conventional-changelog/conventional-changelog
[conventional-recommended-bump](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-recommended-bump)