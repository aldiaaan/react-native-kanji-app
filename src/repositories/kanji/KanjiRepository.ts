import {KanjiGradeLevel} from '../../constants/kanji';

export const fetchKanjiByLevel = async (grade: KanjiGradeLevel) => {
  switch (grade) {
    case 'elementary-1':
      return (await import('./data/grade_1.json')).default;
    case 'elementary-2':
      return (await import('./data/grade_2.json')).default;
    case 'elementary-3':
      return (await import('./data/grade_3.json')).default;
    case 'elementary-4':
      return (await import('./data/grade_4.json')).default;
    case 'elementary-5':
      return (await import('./data/grade_5.json')).default;
    case 'elementary-6':
      return (await import('./data/grade_6.json')).default;
    case 'secondary-1':
      return (await import('./data/grade_secondary_1.json')).default;
    case 'secondary-2':
      return (await import('./data/grade_secondary_2.json')).default;
    case 'secondary-3':
      return (await import('./data/grade_secondary_3.json')).default;
    case 'secondary-4':
      return (await import('./data/grade_secondary_4.json')).default;
    case 'secondary-5':
      return (await import('./data/grade_secondary_5.json')).default;
    case 'secondary-6':
      return (await import('./data/grade_secondary_6.json')).default;
  }
};
