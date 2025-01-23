import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { images } from '../../constants';
import CustomButton from '../components/CustomButton'; // Ensure the path is correct

const EmptyState = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Image source={images.empty} style={styles.image} resizeMode='contain' />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <CustomButton
        title="Create video"
        handlePress={() => router.push('/create')}
        containerStyles={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16, // px-4 equivalent in pixels
  },
  image: {
    width: 270,
    height: 215,
  },
  title: {
    fontSize: 20, // text-xl equivalent
    textAlign: 'center',
    fontWeight: '600', // font-psemibold equivalent
    color: '#FFFFFF',
    marginTop: 8, // mt-2 equivalent
  },
  subtitle: {
    fontSize: 14, // text-sm equivalent
    fontWeight: '500', // font-pmedium equivalent
    color: '#CDCDE0', // text-gray-100 equivalent
  },
  button: {
    width: '100%',
    marginVertical: 20, // my-5 equivalent
  },
});

export default EmptyState;