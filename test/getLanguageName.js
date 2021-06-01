'use strict';
const test = require('tap').test;
const pkg = require('../')();

test('get name from measure code', function(t) {
  t.equal(pkg.getLanguageName('BH',"en"), 'Bihari', 'code "BH" should return Pound');
  t.equal(pkg.getLanguageName('bh',"en"), 'Bihari', 'code "bh" should return Pound');
  t.type(pkg.getLanguageName('BH',"en"), 'string', 'type of code "BH" is string');
  t.type(pkg.getLanguageName('Bihari',"en"), 'undefined', 'code "Bihari" should return undefined');
  t.type(pkg.getLanguageName('XX',"en"), 'undefined', 'code "XX" should return undefined');
  t.type(pkg.getLanguageName('',"en"), 'undefined', 'empty code should return undefined');
  t.end();
});
