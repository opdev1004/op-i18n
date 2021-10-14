const path = require('path');
const I18n = require(path.resolve(__dirname, "../../src/index.js"));

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

i18n.updateDefaultLocale("ko_KR");
console.log(i18n.$t());
console.log(i18n.$t(""));
console.log(i18n.$t("name"));
console.log(i18n.$t("", "en_US"));
console.log(i18n.$t("name", "en_US"));
console.log(i18n.$t("fullname.first"));
console.log(i18n.$t("fullname.last", "en_US"));
console.log(i18n.$t({ locale: "en_US", key:"fullname.last" }));
console.log(i18n.$t({ locale: "ko_KR", key:"fullname.first" }));
console.log(i18n.$t({ key:"fullname.first" }));
console.log(i18n.$t({ locale: "ko_KR" }));