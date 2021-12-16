import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import {HomeScreen} from '../screens/HomeScreen';
import {QuizScreen} from '../screens/QuizScreen';
import {QuizLoaderScreen} from '../screens/QuizLoaderScreen';
import {KanjiListLoaderScreen} from '../screens/KanjiListLoaderScreen';
import {KanjiListScreen} from '../screens/KanjiListScreen';
import {KanjiGradeLevel, KanjiTypes} from '../constants/kanji';
import {WebViewScreen} from '../screens/WebViewScreen';

export type AppStackParamList = {
  HomeScreen: undefined;
  QuizScreen: {
    questions: {
      id: string;
      label: string;
      kanji: string;
      correctOption: {label: string; value: string};
      options: {label: string; value: string}[];
      type: KanjiTypes;
    }[];
  };
  KanjiListScreen: {
    kanjis: {
      kanji: string;
      meanings: string[];
    }[];
  };
  KanjiListLoaderScreen: {
    level: KanjiGradeLevel;
  };
  WebViewScreen: {
    url: string;
  };
  QuizLoaderScreen: {
    level?: KanjiGradeLevel;
  };
};

const AppStack = createStackNavigator<AppStackParamList>();

const DEFAULT_TRANSITION_SPEC = {
  open: {
    animation: 'spring' as const,
    config: {
      stiffness: 1000,
      damping: 700,
      mass: 4,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  },
  close: {
    animation: 'spring' as const,
    config: {
      stiffness: 1000,
      damping: 700,
      mass: 4,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  },
};

export const AppNavigator = () => {
  return (
    <AppStack.Navigator initialRouteName="HomeScreen">
      <AppStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          header: () => null,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: DEFAULT_TRANSITION_SPEC,
        }}
      />
      <AppStack.Screen
        name="QuizScreen"
        component={QuizScreen}
        options={{
          header: () => null,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: DEFAULT_TRANSITION_SPEC,
        }}
      />
      <AppStack.Screen
        name="QuizLoaderScreen"
        component={QuizLoaderScreen}
        options={{
          header: () => null,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: DEFAULT_TRANSITION_SPEC,
        }}
      />
      <AppStack.Screen
        name="KanjiListLoaderScreen"
        component={KanjiListLoaderScreen}
        options={{
          header: () => null,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: DEFAULT_TRANSITION_SPEC,
        }}
      />
      <AppStack.Screen
        name="KanjiListScreen"
        component={KanjiListScreen}
        options={{
          header: () => null,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: DEFAULT_TRANSITION_SPEC,
        }}
      />
      <AppStack.Screen
        name="WebViewScreen"
        component={WebViewScreen}
        options={{
          header: () => null,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: DEFAULT_TRANSITION_SPEC,
        }}
      />
    </AppStack.Navigator>
  );
};
