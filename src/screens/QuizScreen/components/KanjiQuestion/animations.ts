import {withTiming} from 'react-native-reanimated';

export const KanjiQuestionEnteringAnimation = () => {
  'worklet';
  const animations = {
    // your animations
    transform: [
      {
        translateX: withTiming(0, {duration: 400}),
      },
    ],
    opacity: withTiming(1, {duration: 400}),
  };
  const initialValues = {
    // initial values for animations
    transform: [{translateX: 48}],
    opacity: 0,
  };
  const callback = (_finished: boolean) => {
    // optional callback that will fire when layout animation ends
  };
  return {
    initialValues,
    animations,
    callback,
  };
};

export const KanjiQuestionExitingAnimation = () => {
  'worklet';
  const animations = {
    // your animations
    transform: [
      {
        translateX: withTiming(-48, {duration: 400}),
      },
    ],
    opacity: withTiming(0, {duration: 400}),
  };
  const initialValues = {
    // initial values for animations
    transform: [{translateX: 0}],
    opacity: 1,
  };
  const callback = (_finished: boolean) => {
    // optional callback that will fire when layout animation ends
  };
  return {
    initialValues,
    animations,
    callback,
  };
};
