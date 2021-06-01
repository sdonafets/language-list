'use strict';
const test = require('tap').test;
const pkg = require('../')();
const en = require('../lang/en.json');

test('get all language names', function(t) {
  t.equal(pkg.getLanguageNames("en").length, en.length, 'language names should be as many as languages');
  t.ok(pkg.getLanguageNames("en").indexOf('Bihari') > -1, 'languages names should include languages');
  t.ok(pkg.getLanguageNames("en").indexOf('bihari') === -1, 'languages names is case-sensitive, does not include bihari');
  t.type(pkg.getLanguageNames("en"), Array, 'language list is an array');
  t.end();
});
