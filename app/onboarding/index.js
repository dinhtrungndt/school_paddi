import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView, StatusBar } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedScrollHandler, 
  useAnimatedStyle,
  interpolate,
  Extrapolate
} from 'react-native-reanimated';
import { styles } from '../assets/styles/OnboardingScreen';
import { COLORS } from '../constants/ui/colors/colors';
import { ROUTES } from '../constants/routes';
import { router } from 'expo-router';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const onboardingData = [
  {
    id: 1,
    title: 'Bus Tracking',
    description: 'Track your children bus in real time',
    image: require('../assets/images/onboarding-bus-tracking.png'),
  },
  {
    id: 2,
    title: 'Daily Attendance',
    description: 'Stay on Top of Assignments, Daily Homework updates',
    image: require('../assets/images/onboarding-attendance.png'),
  },
  {
    id: 3,
    title: 'Exam Schedule',
    description: 'Stay updated with Exam Dates and Times',
    image: require('../assets/images/onboarding-exam-schedule.png'),
  },
];

const OnboardingScreen = () => {
  const scrollX = useSharedValue(0);
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  useEffect(() => {
    const position = Math.round(scrollX.value / screenWidth);
    setCurrentIndex(position);
  }, [scrollX.value]);

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    } else if (currentIndex === onboardingData.length - 1) {
      router.replace(ROUTES.TABHOME);
    } else {
      handleSkip();
    }
  };

  const handleSkip = () => {
    router.replace(ROUTES.TABHOME);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={[styles.slide, { width: screenWidth }]}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    );
  };

  const Indicator = () => {
    return (
      <View style={styles.indicatorContainer}>
        {onboardingData.map((_, i) => {
          const inputRange = [(i - 1) * screenWidth, i * screenWidth, (i + 1) * screenWidth];
          
          const indicatorStyle = useAnimatedStyle(() => {
            const width = interpolate(
              scrollX.value,
              inputRange,
              [8, 16, 8],
              Extrapolate.CLAMP
            );
            
            const opacity = interpolate(
              scrollX.value,
              inputRange,
              [0.5, 1, 0.5],
              Extrapolate.CLAMP
            );
            
            return {
              width,
              opacity,
              backgroundColor: i === 0 ? '#FFC0CB' : i === 1 ? '#9370DB' : COLORS.COLORS.PRIMARY,
            };
          });
          
          return (
            <Animated.View key={`indicator-${i}`} style={[styles.indicator, indicatorStyle]} />
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      
      <View style={styles.skipContainer}>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      
      <Animated.FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        keyExtractor={(item) => item.id.toString()}
      />
      
      <View style={styles.bottomContainer}>
        <Indicator />
        
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentIndex === onboardingData.length - 1 ? 'Get Started' : 'Get Started'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;