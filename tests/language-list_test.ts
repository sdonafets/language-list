import {expect} from "chai";
import {ExtendedLanguageList as language} from "../dist/language-list";

const lang = require("../dist/language-list"); // test import with require

const en = require('../dist/lang/en.json');
const ar = require('../dist/lang/ar.json');

describe("Get all language names and code ::", () => {
  it("Check length of imported json of supported languages", () => {
    let actual: number = language.getData().length;
    expect(actual).is.equal(en.length);
    actual = language.getData("ar").length;
    expect(actual).is.equal(ar.length);
  });
  it("Check length of imported json of unsupported language", () => {
    const actual: number = language.getData("NOT_SUPPORTED").length;
    expect(actual).is.equal(0);
  });
  it("Check base feature", () => {
    let actual: number = language.getData(undefined).length;
    expect(actual).is.equal(en.length);
    actual = language.getData("").length;
    expect(actual).is.equal(0);
  });
});

describe("Get code from language name ::", () => {
  it("Check return of code 'it'", () =>{
    expect(language.getLanguageCode("italian")).is.equal("it");
    expect(language.getLanguageCode("Italian", "en")).is.equal("it");
    expect(language.getLanguageCode("ITALIAN")).is.equal("it");
    expect(language.getLanguageCode("ITalian")).is.equal("it");
  });

  it("Check return of incorrect language name", () =>{
    expect(language.getLanguageCode("Cross", "en")).is.undefined;
    expect(language.getLanguageCode("")).is.undefined;
  });
});

describe("Get all language codes ::", () => {
  it("Check if codes be as many as languages", () =>{
    expect(language.getLanguageCodes().length).is.equal(en.length);
  });

  it("Check if codes is case-sensitive", () =>{
    expect(language.getLanguageCodes().indexOf("IT")).is.equal(-1);
    expect(language.getLanguageCodes().indexOf("it")).is.greaterThan(-1);
  });
});

describe("Get all language names ::", () => {
  it("Check if names be as many as languages", () =>{
    expect(language.getLanguageNames().length).is.equal(en.length);
  });

  it("Check if names is case-sensitive", () =>{
    expect(language.getLanguageNames().indexOf("italian")).is.equal(-1);
    expect(language.getLanguageNames().indexOf("Italian")).is.greaterThan(-1);
  });
});


describe("Get name from code ::", () => {
  it("Check if Italian is returned", () =>{
    expect(language.getLanguageName("it")).is.equal("Italian");
    expect(language.getLanguageName("IT")).is.equal("Italian");
  });

  it("Check if not existing codes return undefined value", () =>{
    expect(language.getLanguageName("ABCD")).is.undefined;
  });
});
