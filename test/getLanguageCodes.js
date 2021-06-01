'use strict';
const test = require('tap').test;
const pkg = require('../')();
const en = require('../lang/en.json');

test('get all language codes', function(t) {
  t.equal(pkg.getLanguageCodes("en").length, en.length, 'codes should be as many as languages');
  t.type(pkg.getLanguageCodes("en"), Array, 'code list is an array');
  t.ok(pkg.getLanguageCodes("en").indexOf('Bh') === -1, 'codes is case-sensitive, does not include Bh');
  t.ok(pkg.getLanguageCodes("en").indexOf('bh') > -1, 'codes should include bh');
  t.end();
});
