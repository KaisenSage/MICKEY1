import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { icons } from '../../constants'; // Ensure this path is correct

const SearchInput = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={handleChangeText}
          placeholder="Search for a video topic"
          placeholderTextColor="#7b7b8b"
          secureTextEntry={title === 'Password' && !showPassword}
          {...props}
        />
        <TouchableOpacity>
          <Image 
            source={icons.search}
            style={{ width: 20, height: 20 }} // Replaced "className" with "style"
            resizeMode="contain" // Fixed typo
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#FFFFFF',
    fontSize: 15,
    marginBottom: 8,
    fontWeight: '600',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#FFA500',
    borderRadius: 12,
    backgroundColor: '#1A1A1D',
    overflow: 'hidden',
    height: 50,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    borderRadius: 12,
  },
});

export default SearchInput;
