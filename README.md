# ✨ OP i18n (op-i18n) ✨
Easy Node.js i18n with json locale file storage. No fancy grammar.

## ▶️ install
```
npm i op-i18n
```

## 👩‍🎓 Tutorial
### Most of Case
- en_US.json
```
{
    "name": "Victor"
}
```
- ko_KR.json
```
{
    "name": "빅터"
}
```
- index.js
```
const path = require('path');
const I18n = require('op-i18n');

// Note that '_' is used instead of '-' for key in options below.
// eg. ko-KR:{} (X), ko_KR:{} (O)
const options =
{
  locales:
  {
      ko_KR:
      {
        name: '한국어',
        iso: 'ko-KR',
        file: 'ko_KR.json'
      },
      en_US:
      {
        name: 'English',
        iso: 'en-US',
        file: 'en_US.json'
      }
  },
  directory: path.resolve(__dirname, 'locales/'),
  defaultLocale: 'en_US',
}

const i18n = new I18n(options);

// Change locale to Korean
i18n.updateDefaultLocale("ko_KR");
console.log(i18n.$t());
// output: { name: '빅터' }
console.log(i18n.$t("name"));
// output: 빅터
console.log(i18n.$t("name", "en_US"));
// output: Victor
```

### Options
Requires locales, directory, defaultLocale in options. Note that _ is used instead of - for key in options.

js key | O/X 
-------|-----
ko_KR  | O 😇
ko-KR  | X ☠️

```
const path = require('path');
const I18n = require('op-i18n');

// Note that '_' is used instead of '-' for key in options below.
// eg. ko-KR:{} (X), ko_KR:{} (O)
const options =
{
  locales:
  {
      ko_KR:
      {
        name: '한국어',
        iso: 'ko-KR',
        file: 'ko_KR.json'
      },
      en_US:
      {
        name: 'English',
        iso: 'en-US',
        file: 'en_US.json'
      }
  },
  directory: path.resolve(__dirname, 'locales/'),
  defaultLocale: 'en_US',
}

const i18n = new I18n(options);
```

### Advanced $t()

#### Regular
You can use . notation just like how you get value out of js object:
- ko_KR.json
```
{
    "name":
    {
        "first": "빅터"
        "last": "박"
    }
}
```
- en_US.json
```
{
    "name":
    {
        "first": "Victor"
        "last": "Park"
    }
}
```
- index.js
```
const path = require('path');
const I18n = require('op-i18n');

// Note that '_' is used instead of '-' for key in options below.
// eg. ko-KR:{} (X), ko_KR:{} (O)
const options =
{
  locales:
  {
      ko_KR:
      {
        name: '한국어',
        iso: 'ko-KR',
        file: 'ko_KR.json'
      },
      en_US:
      {
        name: 'English',
        iso: 'en-US',
        file: 'en_US.json'
      }
  },
  directory: path.resolve(__dirname, 'locales/'),
  defaultLocale: 'en_US',
}

const i18n = new I18n(options);

console.log(i18n.$t("name.first"));
//output: Victor
```
For getting value from specified locale:
```
console.log(i18n.$t("name.first", "ko_KR"));
//output: 빅터
```
You can get whole js object with empty key "".
```
console.log(i18n.$t(""));
//output: { name: { first: "Victor", last: "Park" } }
console.log(i18n.$t("", "ko_KR"));
//output: { name: { first: "빅터", last: "박" } }
```
#### Using Object
You can use object to get translation as well. { locale: "", key: "" }.
```
console.log(i18n.$t( { key:"name.first" } ));
//output: Victor
console.log(i18n.$t( { locale: "ko_KR", key:"name.first" } ));
//output: 빅터
```

## 📖 op-i18n Document
### .$t()
```
return default translation in js object. Uses .getDefaultTranslation()
```
### .$t(string:key)
```
return value according to key from default translation in js object
```
### .$t(object:{ key: string:key, locale: string:locale })
```
return value according to key and locale in object.
```
### .$t(string:key, string:locale key)
```
return value according to key from translation of specified locale in js object
```
### .updateDefaultLocale(string:locale key)
```
update default locale and default translation according to specified locale
```
### .updateDefaultLocaleByName(string:name)
```
update default locale and default translation according to specified name
```
### .getDefaultTranslation()
```
return default translation in js object
```
### .getNames()
```
return list of locale name
```
### .getISOs()
```
return list of locale ISO
```
### .getDefaultName()
```
return name of default locale in js object. eg) 한국어
```
### .getDefaultISO()
```
return ISO of default locale in js object. eg) ko-KR
```

## 👨‍💻 Author
[Victor Chanil Park](https://github.com/opdev1004)

## 💯 License
MIT, See [LICENSE](./LICENSE).
