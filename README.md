
        ____                        __       __
       / __ \__  _____  _________ _/ /______/ /_  ___  _____
      / /_/ / / / / _ \/ ___/ __ `/ __/ ___/ __ \/ _ \/ ___/
     / _, _/ /_/ /  __/ /__/ /_/ / /_/ /__/ / / /  __/ /
    /_/ |_|\__, /\___/\___/\__,_/\__/\___/_/ /_/\___/_/
          /____/


# Ryecatcher: building circles of support for students.

## Starting the dev server

_Assuming that you have already installed Meteor and Meteorite..._

`bin/server` to start a RyeCatcher instance on port 8500.

`bin/test` to run tests.

## Installation

### Dependencies

* Node
* MongoDB
* Meteor
* Meteorite (say `mrt list --using` to see all packages)
* jQuery
* jQuery UI
* jQuery plugins (see `lib/meteor/client/js/vendor`)
* Underscore
* Twitter Bootstrap

### Installation steps

    sudo npm install -g meteorite

    mrt add router
    mrt add jquery-ui
    mrt add jquery-ui-bootstrap
    mrt add email
    mrt add accounts-base
    mrt add accounts-password
    mrt add accounts-ui

## Running the tests

Run `bin/tests` and message @noahsussman on Twitter if you have
questions.

In order to get a clean test run you may need to install JSLint,
JSHint, CSSLint.

Note the RyeCatcher service will run regardless of test status. Tests
run in a completely independent process and only send their status
to the Meteor console. A test failure can never block execution or
deployment of the Meteor stack.

### Assertions

Note that this project relies heavily on `$.assert()` for
(self-)testing at the unit and integration level. Grepping the source
for `assert` is recommended to become familiar with existing assertion
test coverage.

## Starting the application

The four MongoDB collections created by `lib/collections.js` are
required to be populated in order for the application to function.
Information on how to do this, along with migration scripts to
populate the DB, will be provided soon.

In the mean time, if you read this far :) and are still interested in
running an instance of RyeCatcher, please reach out to @noahsussman on
Twitter or email `ns@ryecatcher.com`

