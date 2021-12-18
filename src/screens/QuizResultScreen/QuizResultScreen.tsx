import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '../../components/ThemeProvider';
import {AppTheme} from '../../constants/theme';
import {AppStackParamList} from '../../navigators/AppNavigator';

export const QuizResultScreen = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  const {params} = useRoute<RouteProp<AppStackParamList, 'QuizResultScreen'>>();

  const {theme} = useTheme<AppTheme>();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingVertical: theme.spacing.lg,
        paddingHorizontal: theme.spacing.lg,
      }}>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontFamily: theme.font.semibold,
            color: theme.colors.textPrimary,
            fontSize: 24,
          }}>
          Result
        </Text>
        <View style={{marginTop: theme.spacing.xl}}>
          <Text
            style={{
              fontFamily: theme.font.semibold,
              color: theme.colors.green,
              fontSize: 18,
            }}>
            Correct: {params.correctCount}
          </Text>
          <Text
            style={{
              marginTop: theme.spacing.sm,
              fontFamily: theme.font.semibold,
              color: theme.colors.danger,
              fontSize: 18,
            }}>
            Wrong: {params.wrongCount}
          </Text>
        </View>
      </View>
      <View>
        <View
          style={{
            backgroundColor: theme.colors.primary,
            height: 64,
            borderRadius: theme.roundness.xl,
          }}>
          <RectButton
            onPress={() => {
              navigation.goBack();
            }}
            rippleColor={theme.colors.ripple}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 18,
                letterSpacing: -0.25,
                fontFamily: theme.font.medium,
                color: theme.colors.textPrimaryInverted,
              }}>
              Back
            </Text>
          </RectButton>
        </View>
      </View>
    </SafeAreaView>
  );
};
