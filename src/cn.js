// german <-> chinese translation @see ./translate.js
const translate = require('./utils/translation');
const mapTranslationItem = require('./utils/mapTranslationItem');

module.exports = () => query => {
  return translate(query, 'zh-CN').then(results => results.map(mapTranslationItem));
};