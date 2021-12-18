export const KanjiGradeLevel = Object.freeze({
  ELEMENTARY_1: 'elementary-1',
  ELEMENTARY_2: 'elementary-2',
  ELEMENTARY_3: 'elementary-3',
  ELEMENTARY_4: 'elementary-4',
  ELEMENTARY_5: 'elementary-5',
  ELEMENTARY_6: 'elementary-6',
  SECONDARY_1: 'secondary-1',
  SECONDARY_2: 'secondary-2',
  SECONDARY_3: 'secondary-3',
  SECONDARY_4: 'secondary-4',
  SECONDARY_5: 'secondary-5',
  SECONDARY_6: 'secondary-6',
} as const);

export type KanjiGradeLevel =
  typeof KanjiGradeLevel[keyof typeof KanjiGradeLevel];

export const KanjiTypes = Object.freeze({
  KUNYOMI_READING: 'kunyomi-reading',
  KANJI_MEANING: 'kanji-meaning',
} as const);

export type KanjiTypes = typeof KanjiTypes[keyof typeof KanjiTypes];
