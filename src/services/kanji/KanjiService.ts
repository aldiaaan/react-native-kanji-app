import {KanjiGradeLevel, KanjiTypes} from '../../constants/kanji';
import * as KanjiRepository from '../../repositories/kanji/KanjiRepository';
import {generateRandomInt} from '../../utils/math';

const types = [KanjiTypes.KANJI_MEANING, KanjiTypes.KUNYOMI_READING];

export type FetchQuestionsByGradeLevelResult = {
  id: string;
  label: string;
  kanji: string;
  correctOption: {label: string; value: string};
  options: {label: string; value: string}[];
  type: KanjiTypes;
}[];

export const fetchKanjisByGradeLevel = async (level: KanjiGradeLevel) => {
  const kanjis = await KanjiRepository.fetchKanjiByLevel(level);
  return kanjis.map(kanji => ({
    kanji: kanji.kanji,
    meanings: kanji.meanings,
    kun: kanji.kun_readings,
  }));
};

export const fetchQuestionsByGradeLevel = async (
  level: KanjiGradeLevel,
  count?: number,
): Promise<FetchQuestionsByGradeLevelResult> => {
  const kanjis = await KanjiRepository.fetchKanjiByLevel(level);

  const questions = [];

  for (let i = 0; i < (count || 3); i++) {
    let type = types[generateRandomInt(0, types.length - 1)];
    let kanji;
    let kanjiIndex: number;

    const optionIndexes: number[] = [];

    do {
      kanjiIndex = generateRandomInt(0, kanjis.length - 1);
      if (type === KanjiTypes.KUNYOMI_READING) {
        if (kanjis[kanjiIndex].kun_readings.length > 0) {
          kanji = kanjis[kanjiIndex];
        }
      } else {
        kanji = kanjis[kanjiIndex];
      }
    } while (!kanji);

    // let kanji = kanjis[kanjiIndex];

    while (optionIndexes.length !== 3) {
      let optionIndex = generateRandomInt(0, kanjis.length - 1);

      if (
        type === 'kunyomi-reading' &&
        kanjis[optionIndex].kun_readings.length === 0
      ) {
        continue;
      }
      if (!optionIndexes.includes(optionIndex) && optionIndex !== kanjiIndex) {
        optionIndexes.push(optionIndex);
      }
      continue;
    }

    optionIndexes.splice(generateRandomInt(0, 3), 0, kanjiIndex);

    if (type === 'kanji-meaning') {
      questions.push({
        id: `${i}`,
        label: 'Whats the meaning of this kanji?',
        kanji: kanji.kanji,
        correctOption: {
          label: kanji.meanings.toString(),
          value: kanji.meanings[0],
        },
        type: KanjiTypes.KANJI_MEANING,
        options: optionIndexes.map(index => ({
          label: kanjis[index].meanings.toString(),
          value: kanjis[index].meanings[0],
        })),
      });
    } else if (type === 'kunyomi-reading') {
      questions.push({
        id: `${i}`,
        label: 'Kunyomi reading of this kanji?',
        kanji: kanji.kanji,
        type: KanjiTypes.KUNYOMI_READING,
        correctOption: {
          label: kanji.kun_readings[0],
          value: kanji.kun_readings[0],
        },
        options: optionIndexes.map(index => ({
          label: kanjis[index].kun_readings[0],
          value: kanjis[index].kun_readings[0],
        })),
      });
    }
  }

  return questions;
};
