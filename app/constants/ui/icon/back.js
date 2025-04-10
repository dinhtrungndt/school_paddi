import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { router } from 'expo-router';

const BackIcon = ({ onPress, size = 24, color = "black", style = {} }) => {
    const handlePress = () => {
        if (onPress) {
            onPress();
        } else {
            router.back();
        }
    };

    return (
        <TouchableOpacity onPress={handlePress} style={{ padding: 16, ...style }}>
            <Ionicons name="caret-back" size={size} color={color} />
        </TouchableOpacity>
    );
};

export default BackIcon;