
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const BackIcon = ({ onPress, size = 24, color = "black", style = {} }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ padding: 16, ...style }}>
            <Ionicons name="caret-back" size={size} color={color} />
        </TouchableOpacity>
    );
};

export default BackIcon;