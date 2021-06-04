####_Project forked from "language-list" @pandeysoni_

ts-extended-language-list
============

Map Stores ISO 639-1 language codes to language names and vice versa. Made in Typescript.

[![npm package](https://img.shields.io/badge/npm%20i-ts--extended--language--list-brightgreen)](https://www.npmjs.com/package/ts-extended-language-list)
[![version number](https://img.shields.io/badge/version-0.0.2-green)](https://github.com/sdonafets/language-list/blob/master/CHANGELOG.md)
[![License](https://img.shields.io/badge/license-BSD-blue)](https://github.com/sdonafets/language-list/blob/master/LICENSE)

Supported languages:
``` js
en
ar
```

# Example of use

``` js
const languages = require('ts-extended-language-list');

console.log(languages.getLanguageName('it', 'ar')); // إيطالي
console.log(languages.getLanguageCode('Italian', 'en')); // it
```

#How to import

``` js
const languages = require('ts-extended-language-list');
```

or

``` js
import {ExtendedLanguageList} from 'ts-extended-language-list';
```

# Methods
####All input is case-insensitive.


## getLanguageName(languageCode, requiredLanguage)

Expects a language code, and the desired language.
Returns the language name for that language code in the desired language.
If not found, it returns `undefined`.

## getLanguageCode(languageName, requiredLanguage)

Expects the language name, and the desired language.
Returns the language code for that language in the desired language.
If not found, it returns `undefined`.

## getLanguageNames(requiredLanguage)

Returns an array of all language names in the desired language.

## getLanguageCodes(requiredLanguage)

Returns an array of all language codes in the desired language.

## getData(requiredLanguage)

Returns an array of all language information in the desired language, in the same format as it gets imported.

---
<p align="center">
<a href="https://github.com/" title="Github"><img src="https://github.com/tomchen/stack-icons/raw/master/logos/github-icon.svg" alt="Github" width="21px" height="21px"></a> <a href="https://www.npmjs.com/" title="npm"><img src="https://github.com/tomchen/stack-icons/raw/master/logos/npm.svg" alt="npm" width="21px" height="21px"></a> <a href="https://www.typescriptlang.org/" title="Typescript"><img src="https://github.com/tomchen/stack-icons/raw/master/logos/typescript-icon.svg" alt="Typescript" width="21px" height="21px"></a> 
</p>