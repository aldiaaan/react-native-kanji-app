import {RouteProp, useRoute} from '@react-navigation/core';
import React, {useCallback, useEffect, useRef} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {WebView, WebViewNavigation} from 'react-native-webview';
import {useTheme} from '../../components/ThemeProvider';
import {AppTheme} from '../../constants/theme';
import {AppStackParamList} from '../../navigators/AppNavigator';
import {
  WebViewLoadingIndicator,
  WebViewLoadingIndicatorController,
} from './components/WebViewLoadingIndicator';

export const WebViewScreen = () => {
  const {params} = useRoute<RouteProp<AppStackParamList, 'WebViewScreen'>>();

  const {theme} = useTheme<AppTheme>();

  const progressRef = useRef<WebViewLoadingIndicatorController>(null as any);
  const webRef = useRef<WebView>(null as any);

  const handleWebViewNavigationStateChange = (
    navigationState: WebViewNavigation,
  ) => {
    const {loading, url, canGoBack, canGoForward} = navigationState;
  };

  const handleWebViewLoadProgress = useCallback(
    ({nativeEvent: {progress}}: any) => progressRef.current?.set(progress),
    [],
  );

  const handleWebViewLoadStart = useCallback(
    () => progressRef.current?.show(),
    [],
  );

  const handleWebViewLoadEnd = useCallback(
    ({nativeEvent: {progress}}: any) => progressRef.current?.hide(),
    [],
  );

  useEffect(() => {
    progressRef.current?.show();

    progressRef.current?.set(0.05);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}>
      <View
        style={{
          height: 56,
          position: 'relative',
          borderBottomWidth: 2,
          borderColor: theme.colors.shadow,
        }}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: theme.spacing.lg,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: theme.colors.textPrimary,
              fontFamily: theme.font.semibold,
            }}>
            {params.title}
          </Text>
        </View>
        <View style={{position: 'absolute', bottom: -1, left: 0, right: 0}}>
          <WebViewLoadingIndicator ref={progressRef} />
        </View>
      </View>
      <View style={{flex: 1}}>
        <WebView
          onLoadStart={handleWebViewLoadStart}
          onLoadEnd={handleWebViewLoadEnd}
          onLoadProgress={handleWebViewLoadProgress}
          onNavigationStateChange={handleWebViewNavigationStateChange}
          style={{opacity: 0.99}}
          source={{uri: params.url}}
        />
      </View>
    </SafeAreaView>
  );
};
