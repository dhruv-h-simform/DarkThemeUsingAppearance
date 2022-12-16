/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useCallback, useEffect } from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { HomeScreen } from './app/modules';
import { get, save } from './app/modules/Storage';

const App = () => {
  const appearance = useColorScheme();
  const setAppTheme = useCallback(async () => {
    const IS_FIRST = await get('IS_FIRST');
    console.log(IS_FIRST);
    if (IS_FIRST === null) {
      save('Theme', appearance);
      save('IsDefault', true);
      save('IS_FIRST', true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setAppTheme();
  }, [setAppTheme]);

  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
