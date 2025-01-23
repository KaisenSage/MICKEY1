import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomButton = ({ title, handlePress, containerStyles = {}, textStyles = {} }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={handlePress || (() => navigation.navigate('SignIn'))} // Default action if no handlePress provided
      style={[styles.button, typeof containerStyles === 'object' ? containerStyles : {}]} // Ensure containerStyles is an object
      activeOpacity={0.7}
    >
      <Text style={[styles.text, typeof textStyles === 'object' ? textStyles : {}]}>{title || 'Click Me'}</Text> {/* Ensure textStyles is an object */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFAC07',
    borderRadius: 10,
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
