import 'react-native-gesture-handler';

import React from 'react';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

import {Root} from './src/Root';

const App = () => {
  return <Root />;
};

export default gestureHandlerRootHOC(App);
