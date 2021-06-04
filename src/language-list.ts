const en = require("./lang/en.json");
const ar = require("./lang/ar.json");

interface Data {
  language: string,
  code: string
}

export namespace ExtendedLanguageList {
  let languageNameMap: any = {};
  let languageCodeMap: any = {};

  populateMaps(en, "en");
  populateMaps(ar, "ar");

  function populateMaps(data: Data[], lang = "en"): void {
    let nameMap: any = {};
    let codeMap: any = {};
    data.forEach(e => {
      nameMap[e.language.toLowerCase()] = e.code;
      codeMap[e.code.toLowerCase()] = e.language;
    });
    languageCodeMap[lang] = codeMap;
    languageNameMap[lang] = nameMap;
  }

  export function getLanguageCode(name: string, lang = "en"): string {
    return languageNameMap[lang.toLowerCase()] ? languageNameMap[lang.toLowerCase()][name.toLowerCase()] : undefined;
  }

  export function getLanguageName(code: string, lang = "en"): string {
    return languageCodeMap[lang.toLowerCase()] ? languageCodeMap[lang.toLowerCase()][code.toLowerCase()] : undefined;
  }

  export function getLanguageNames(lang = "en"): string[] {
    switch (lang.toLowerCase()) {
      case "en":
        return en.map((l: Data) => l.language);
      case "ar":
        return ar.map((l: Data) => l.language);
      default:
        return []
    }
  }

  export function getLanguageCodes(lang = "en"): string[] {
    switch (lang.toLowerCase()) {
      case "en":
        return en.map((l: Data) => l.code);
      case "ar":
        return ar.map((l: Data) => l.code);
      default:
        return []
    }
  }

  export function getData(lang = "en"): Data[] {
    switch (lang.toLowerCase()) {
      case "en":
        return en;
      case "ar":
        return ar;
      default:
        return [];
    }
  }
}