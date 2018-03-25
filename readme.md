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