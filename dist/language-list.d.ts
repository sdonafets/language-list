interface Data {
    language: string;
    code: string;
}
export declare namespace ExtendedLanguageList {
    function getLanguageCode(name: string, lang?: string): string;
    function getLanguageName(code: string, lang?: string): string;
    function getLanguageNames(lang?: string): string[];
    function getLanguageCodes(lang?: string): string[];
    function getData(lang?: string): Data[];
}
export {};
//# sourceMappingURL=language-list.d.ts.map