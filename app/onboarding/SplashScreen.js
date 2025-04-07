import React, { useEffect } from 'react';
import { View, Image, StyleSheet, StatusBar, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  runOnJS
} from 'react-native-reanimated';
import { COLORS } from '../constants/ui/colors/colors';
import { ROUTES } from '../constants/routes/index.js';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

const SplashScreen = () => {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);

  const navigateToOnboarding = () => {
    router.replace(ROUTES.ONBOARDING);
  };

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 1000,
      easing: Easing.ease,
    });

    scale.value = withTiming(1, {
      duration: 1000,
      easing: Easing.elastic(1.2),
    });

    const timeout = setTimeout(() => {
      opacity.value = withTiming(0, {
        duration: 500,
        easing: Easing.ease,
      }, () => {
        runOnJS(navigateToOnboarding)();
      });
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.COLORS.PRIMARY} barStyle="light-content" />
      <Animated.View style={logoStyle}>
        <Image 
          source={require('../assets/images/school-paddi-logo.png')} 
          style={styles.logo} 
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.COLORS.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: width * 0.6,
    height: height * 0.3,
    resizeMode: 'contain',
  },
});

export default SplashScreen;