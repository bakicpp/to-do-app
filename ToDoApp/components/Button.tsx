import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const CustomButton = ({ title, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity
      style={[defaultButtonStyle, buttonStyle]}
      onPress={onPress}
    >
      <Text style={[defaultTextStyle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const defaultButtonStyle = {
  backgroundColor: '#3498db',
  borderRadius: 8,
  paddingVertical: 12,
  paddingHorizontal: 16,
  alignItems: 'center',
  marginright: 16,
};

const defaultTextStyle = {
  color: '#fff',
  fontSize: 16,
};

export default CustomButton;