import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './src/store/store';
import { loadUserFromStorage } from './src/store/slices/authSlice';
import { loadTheme } from './src/store/slices/themeSlice';
import { loadFavorites } from './src/store/slices/favoritesSlice';
import { loadTrips } from './src/store/slices/tripsSlice';
import { loadReviews } from './src/store/slices/reviewsSlice';
import { loadAchievements } from './src/store/slices/achievementsSlice';
import AppNavigator from './src/navigation/AppNavigator';
import Colors from './src/constants/colors';

const AppContent = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    // Load all persisted data on app start
    dispatch(loadUserFromStorage());
    dispatch(loadTheme());
    dispatch(loadFavorites());
    dispatch(loadTrips());
    dispatch(loadReviews());
    dispatch(loadAchievements());
  }, [dispatch]);

  return (
    <>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} backgroundColor={isDarkMode ? Colors.darkBackground : Colors.white} />
      <AppNavigator />
    </>
  );
};

export default function App() {
  // Set safe default Text props to avoid truncation across platforms
  try {
    if (Text.defaultProps == null) Text.defaultProps = {};
    // Ensure text wraps and font scaling is allowed by default
    Text.defaultProps.allowFontScaling = true;
    Text.defaultProps.style = { ...(Text.defaultProps.style || {}), flexWrap: 'wrap' };
  } catch (e) {
    // defensive: ignore if environment doesn't allow modifying defaults
  }

  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
