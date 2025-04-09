import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Timetable from '../components/TabCallender/Timetable';
import Events from '../components/TabCallender/Events';
import Attendance from '../components/TabCallender/Attendance';

const Tab = createMaterialTopTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={{
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      margin: 10,
      overflow: 'hidden',
    }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable
            key={index}
            onPress={onPress}
            style={{
              flex: 1,
              backgroundColor: isFocused ? '#008F99' : '#fff',
              paddingVertical: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{
              color: isFocused ? '#fff' : '#008F99',
              fontWeight: 'bold',
            }}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const Calender = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Attendance" component={Attendance} />
      <Tab.Screen name="Timetable" component={Timetable} />
      <Tab.Screen name="Events" component={Events} />
    </Tab.Navigator>
  );
};

export default Calender;
