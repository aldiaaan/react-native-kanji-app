export type KanjiQuizOption = {
  value: string;
  label: string;
};

export type KanjiQuestionKunyomiReadingData = {
  correctValue: KanjiQuizOption;
  label: string;
  kanji: string;
  options: KanjiQuizOption[];
};
