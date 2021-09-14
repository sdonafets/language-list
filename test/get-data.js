'use strict';

const test = require('tap').test;
const pkg = require('../')();
const en = require('../lang/en.json');
const ar = require('../lang/ar.json');
const hi = require("../lang/hi.json");
const ml = require("../lang/ml.json");
const tl = require("../lang/tl.json");
const ur = require("../lang/ur.json");

test('get all language names and code', function(t) {
  t.equal(pkg.getData("en").length, en.length, 'data list should be the same length as json');
  t.equal(pkg.getData("ar").length, ar.length, 'data list should be the same length as json');
  t.equal(pkg.getData("hi").length, hi.length, 'data list should be the same length as json');
  t.equal(pkg.getData("ml").length, ml.length, 'data list should be the same length as json');
  t.equal(pkg.getData("tl").length, tl.length, 'data list should be the same length as json');
  t.equal(pkg.getData("ur").length, ur.length, 'data list should be the same length as json');
  t.equal(pkg.getData("xy").length, 0, 'data list should be 0');
  t.type(pkg.getData("en"), Array, 'data list is an array');
  t.type(pkg.getData("en")[0], Object, 'first item in list should be object');
  t.end();
});
