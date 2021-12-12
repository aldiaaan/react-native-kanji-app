export const QUESTIONS = [
  {
    id: '1',
    type: 'kanji-meaning',
    correctOption: {
      value: 'mountain',
      label: 'Mountain',
    },
    label: 'Whats the meaning of this kanji?',
    kanji: '死',
    options: [
      {
        value: 'mountain',
        label: 'Mountain',
      },
      {
        value: 'light',
        label: 'Light',
      },
      {
        value: 'death',
        label: 'Death',
      },
      {
        value: 'happiness',
        label: 'Happiness',
      },
    ],
  },
  {
    id: '0',
    type: 'kunyomi-reading',
    correctOption: {value: 'yama', label: 'やま'},
    label: 'Kunyomi reading of this kanji?',
    kanji: '山',
    options: [
      {
        value: 'yama',
        label: 'やま',
      },
      {
        value: 'sasu',
        label: 'さす',
      },
      {
        value: 'mukuro',
        label: 'むくろ',
      },
      {
        value: 'yorokobi',
        label: 'よろこ.び',
      },
    ],
  },
];
