import {KanjiGradeLevel} from '../../constants/kanji';

export const fetchKanjiByLevel = async (grade: KanjiGradeLevel) => {
  switch (grade) {
    case 'elementary-1':
      return await (
        await import('./data/grade_1.json')
      ).default;
    case 'elementary-2':
      return await (
        await import('./data/grade_2.json')
      ).default;
    case 'elementary-3':
      return await (
        await import('./data/grade_3.json')
      ).default;
    case 'elementary-4':
      return await (
        await import('./data/grade_4.json')
      ).default;
    case 'elementary-5':
      return await (
        await import('./data/grade_5.json')
      ).default;
    case 'elementary-6':
      return await (
        await import('./data/grade_6.json')
      ).default;
  }
};
