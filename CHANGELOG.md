# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


v0.1.0
------------------------------
*March 13, 2018*

### Added
- Added prettier.
- Added `precommit` hook to automatically format changed files using prettier.

### Changed
- All source files have been formatted using prettier.
- Updated to use `babel-preset-env`.


v0.0.7
------------------------------
*October 12, 2017*

### Fixed
- Fixed export of modules.


v0.0.6
------------------------------
*October 12, 2017*

### Added
- Create new `simulate` module.
- Added unit tests for `simulate` module.
- Added unit test npm scripts.
- JS unit test coverage reported to coveralls.
- Added coveralls badge to readme.

### Changed
- Module now exports `getBodyHtml` and `setBodyHtml` functions.
- Moved `click` function into `simulate` module.
- Updated `prepare` npm script.
- Updated Travis config.


v0.0.5
------------------------------
*October 11, 2017*

### Changed
- Prepare script uses `concurrently` in order to run tasks concurrently..!


v0.0.4
------------------------------
*October 11, 2017*

### Changed
- Updated `eslint` and `dom-buddy` packages.


v0.0.3
------------------------------
*September 18, 2017*

### Changed
- Updated `dom-buddy`.
- Updated npm script hooks.


v0.0.2
------------------------------
*September 18, 2017*

### Changed
- Updated npm script hooks.
- Moved build packages in `devDependencies`.


v0.0.1
------------------------------
*September 18, 2017*

### Added
- Added initial project files.
