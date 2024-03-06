import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { scale, moderateVerticalScale, moderateScale } from 'react-native-size-matters';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import colors from '../../constants/colors';

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

const styles = StyleSheet.create({
  label: {
    fontSize: scale(14),
    marginLeft:moderateScale(2),
  },
  inputStyle: {

    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0,0,0,.08)',
    borderRadius: moderateScale(4),
    marginBottom: moderateVerticalScale(18),
  },
  inlineStyle: {
    fontSize: scale(14),
    fontWeight:'400',
    color:colors.black,
  },
  inputViewStyle: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
});
