'use strict'
const en = require("./lang/en.json");
const ar = require("./lang/ar.json");

let languageNameMap = {};
let languageCodeMap = {};

function populateMaps(data, lang) {
  let nameMap = {};
  let codeMap = {};
  data.forEach(function(e) {
    nameMap[e.language.toLowerCase()] = e.code;
    codeMap[e.code.toLowerCase()] = e.language;
  });
  languageCodeMap[lang] = codeMap;
  languageNameMap[lang] = nameMap;
}

populateMaps(en, "en");
populateMaps(ar, "ar");

module.exports = LanguageList;
function LanguageList() {
  if (!(this instanceof LanguageList)) {
    return new LanguageList();
  }
}

LanguageList.prototype.getLanguageCode = function getLanguageCode(name, lang) {
  return languageNameMap[lang] ? languageNameMap[lang][name.toLowerCase()] : undefined;
};

LanguageList.prototype.getLanguageName = function getLanguageNames(code, lang) {
  return languageCodeMap[lang] ? languageCodeMap[lang][code.toLowerCase()] : undefined;
};

LanguageList.prototype.getLanguageNames = function getLanguageNames(lang) {
  switch(lang){
    case "en":
      return en.map(function(l){return l.language});
    case "ar":
      return ar.map(function(l){return l.language});
    default:
      return []
  }
};

LanguageList.prototype.getLanguageCodes = function getLanguageCodes(lang) {
  switch(lang){
    case "en":
      return en.map(function(l){return l.code});
    case "ar":
      return ar.map(function(l){return l.code});
    default:
      return []
  }
};

LanguageList.prototype.getData = function getData(lang) {
  switch(lang){
    case "en": return en;
    case "ar": return ar;
    default: return [];
  }};