'use strict';
const test = require('tap').test;
const pkg = require('../')();

test('get code from language name', function(t) {
  t.equal(pkg.getLanguageCode('Bihari', "en"), 'bh', 'name "Bihari" should return bh');
  t.equal(pkg.getLanguageCode('bihari', "en"), 'bh', 'name "bihari" should return bh');
  t.equal(pkg.getLanguageCode('BIHARI', "en"), 'bh', 'name "BIHARI" should return bh');
  t.type(pkg.getLanguageCode('Bihari', "en"), 'string', 'type of name "Bihari" is string');
  t.type(pkg.getLanguageCode('bh', "en"), 'undefined', 'type of name "bh" is undefined');
  t.type(pkg.getLanguageCode('FarFarAwayLand', "en"), 'undefined', 'name "FarFarAwayLand" should return undefined');
  t.type(pkg.getLanguageCode('', "en"), 'undefined', 'empty name should return undefined');
  t.end();
});
