// Copyright (c) 2015 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
(function() {
    "use strict";

var assert = require("chai").assert;

assert.equal(add(3, 4), 7,'Expected this but got that.');

function add(a, b) {
    return a - b;
}

}());