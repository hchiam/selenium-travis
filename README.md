# selenium-travis
Selenium IDE, selenium-side-runner, and Travis CI.

Just one of the things I'm learning. <https://github.com/hchiam/learning>

This is an example repo that is has Travis CI set up to run selenium-side-runner, which runs a Selenium IDE .side file, which was recorded with a GUI (chrome extension).

[![Build Status](https://travis-ci.com/hchiam/selenium-travis.svg?branch=master)](https://travis-ci.com/hchiam/selenium-travis)

## Some of the resources I learned from

* [Chrome](https://www.google.com/chrome) extension [Selenium IDE](https://chrome.google.com/webstore/detail/selenium-ide/mooikfkahbdckldjjndioackbalphokd). You can see the [example .side file here](https://github.com/hchiam/selenium-travis/blob/master/test.side).
* [Commands](https://selenium.dev/selenium-ide/docs/en/api/commands) used in that Chrome Extension.
* [Overview video, starting at CLI steps](https://youtu.be/uO8_Dfe4pd4?t=477) (I skimmed this video).
* [`selenium-side-runner`](https://selenium.dev/selenium-ide/docs/en/introduction/command-line-runner) CLI command.
* [Example GitHub repo](https://github.com/hchiam/travistest)  that makes basic use of Travis CI.
* [Example .travis.yml file](https://github.com/RustyNail/SeleniumIDEDemo/blob/master/.travis.yml) by [RustyNail](https://github.com/RustyNail) that uses `selenium-side-runner`.
* [First build for this repo that worked](https://travis-ci.com/hchiam/selenium-travis/builds/143188803) and [how the .travis.yml file looked at the time](https://github.com/hchiam/selenium-travis/blob/ac8d4abfa0dc3c799d24d8e5bf845d8dc26790b8/.travis.yml)

## Aside

To skip running Travis CI upon commit, the commit message should contain `[skip ci]`, or `[ci skip]`, or `[skip travis]`, etc. (ci, travis, travis ci, travis-ci, or travisci).
