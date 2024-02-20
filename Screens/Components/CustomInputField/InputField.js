// InputField.js
import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import inputStyles from './styles';

export default function InputField({
    placeholder,
    secureTextEntry,
    rightIcon,
    onChangeText = () => {},
    keyboardType,
    onPress,
    ...props
}) {
    return (
        <View style={inputStyles.inputContainer}>
            <TextInput
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                style={inputStyles.inputFieldStyle}
                onChangeText={onChangeText}
                keyboardType={keyboardType || 'default'}
                placeholderTextColor="#999999"
            />
            {!!rightIcon && (
                <TouchableOpacity onPress={onPress} style={inputStyles.rightIconContainer}>
                    <Image source={rightIcon} style={inputStyles.rightIcon} />
                </TouchableOpacity>
            )}
        </View>
    );
}
