const FLAG_ICONS = {
  cn: '🇨🇳',
  tw: '🇨🇳',
  de: '🇩🇪',
  en: '🇬🇧',
  es: '🇪🇸',
  fr: '🇫🇷',
  it: '🇮🇹',
  pl: '🇵🇱',
  pt: '🇵🇹',
  ru: '🇷🇺',
  ja: '🇯🇵',
  '': '',
};

module.exports = function mapTranslationItem({ raw, result, from = '', to }, index) {
  return {
    id: `a-translation-${index}`,
    title: result,
    value: JSON.stringify({ raw, result }, null, '  '),
    subtitle: `${FLAG_ICONS[from]} ${raw}`,
    icon: `./src/assets/${to || 'x'}.svg`,
  };
};
