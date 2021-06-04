"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedLanguageList = void 0;
const en = require("./lang/en.json");
const ar = require("./lang/ar.json");
var ExtendedLanguageList;
(function (ExtendedLanguageList) {
    let languageNameMap = {};
    let languageCodeMap = {};
    populateMaps(en, "en");
    populateMaps(ar, "ar");
    function populateMaps(data, lang = "en") {
        let nameMap = {};
        let codeMap = {};
        data.forEach(e => {
            nameMap[e.language.toLowerCase()] = e.code;
            codeMap[e.code.toLowerCase()] = e.language;
        });
        languageCodeMap[lang] = codeMap;
        languageNameMap[lang] = nameMap;
    }
    function getLanguageCode(name, lang = "en") {
        return languageNameMap[lang.toLowerCase()] ? languageNameMap[lang.toLowerCase()][name.toLowerCase()] : undefined;
    }
    ExtendedLanguageList.getLanguageCode = getLanguageCode;
    function getLanguageName(code, lang = "en") {
        return languageCodeMap[lang.toLowerCase()] ? languageCodeMap[lang.toLowerCase()][code.toLowerCase()] : undefined;
    }
    ExtendedLanguageList.getLanguageName = getLanguageName;
    function getLanguageNames(lang = "en") {
        switch (lang.toLowerCase()) {
            case "en":
                return en.map((l) => l.language);
            case "ar":
                return ar.map((l) => l.language);
            default:
                return [];
        }
    }
    ExtendedLanguageList.getLanguageNames = getLanguageNames;
    function getLanguageCodes(lang = "en") {
        switch (lang.toLowerCase()) {
            case "en":
                return en.map((l) => l.code);
            case "ar":
                return ar.map((l) => l.code);
            default:
                return [];
        }
    }
    ExtendedLanguageList.getLanguageCodes = getLanguageCodes;
    function getData(lang = "en") {
        switch (lang.toLowerCase()) {
            case "en":
                return en;
            case "ar":
                return ar;
            default:
                return [];
        }
    }
    ExtendedLanguageList.getData = getData;
})(ExtendedLanguageList = exports.ExtendedLanguageList || (exports.ExtendedLanguageList = {}));
