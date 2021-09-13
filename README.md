@forked from pandeysoni

extended-language-list
============

Map Stores ISO 639-1 language codes to language names and vice versa.

Supported languages:
``` js
en
ar
ml
hi
tl
ur
```
# example 

``` js
var languages = require('extended-language-list')();

console.log(languages.getLanguageName('bh', 'en')); // Bihari
console.log(languages.getLanguageCode('Bihari', 'en')); // bh
```

# methods

Usage:

```
var languages = require('extended-language-list')();
```
All input is case-insensitive.

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

# install

``` cli
npm install extended-language-list
```

# license

BSD
