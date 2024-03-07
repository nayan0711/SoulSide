import React, { useState } from 'react';
import {Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {styles} from './Styles'
export default function TextInputWithLabel({ 
  label,
  placeholder, 
  secureTextEntry, 
  rightIcon,
  onPress,
  inputStyle,
  onChangeText=()=>{},
  isdate,
  ...props }) {
  
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };
  
  return (
    <View style={styles.inputStyle} {...inputStyle}>
      <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputViewStyle}>
        {isdate ? (
          <>
            <TouchableOpacity onPress={showDatePicker}>
              <TextInput
                placeholder={placeholder}
                style={styles.inlineStyle}
                value={selectedDate ? selectedDate.toDateString() : ''}
                editable={false}
              />
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </>
        ) : (
          <TextInput
            placeholder={placeholder}
            style={styles.inlineStyle}
            keyboardType={props.keyboardType || 'default'}
            secureTextEntry={secureTextEntry}
            onChangeText={onChangeText}
            {...props}
          />
        )}

        {!!rightIcon && (
          <TouchableOpacity onPress={onPress}>
            <Image source={rightIcon} />
          </TouchableOpacity>
        )}
      </View>
      </View>
    </View>
  );
}

