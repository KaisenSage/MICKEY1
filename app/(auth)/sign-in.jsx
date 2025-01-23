import React, { useState } from 'react';
import { View, Text, ScrollView, Image, Dimensions, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../components/FormField';
import CustomButton from '../components/CustomButton';
import { images } from '../../constants';
import { Link, router } from 'expo-router';
import { signIn, getCurrentUser } from '../../lib/appwrite';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (form.email === '' || form.password === '') {
      Alert.alert('Error', 'Please fill in all the fields');
      return;
    }

    setIsSubmitting(true);
    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      // Assuming setUser and setIsLogged are available in your context or props
      setUser(result);
      setIsLogged(true);
      Alert.alert('Success', 'User signed in successfully');
      router.replace('/home');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const screenHeight = Dimensions.get('window').height;
  const minHeight = screenHeight * 0.83;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#161622' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            minHeight: minHeight,
            width: '100%',
            justifyContent: 'center',
            paddingHorizontal: 16,
            marginTop: 24,
          }}
        >
          <Image
            source={images.logo}
            resizeMode="contain"
            style={{ width: 80, height: 25 }}
          />

          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 24,
              marginTop: 24,
              marginBottom: 16,
              fontWeight: '600',
            }}
          >
            Log in to Aora
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            secureTextEntry
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 20,
              flexDirection: 'row',
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: '#FFFFFF',
                fontFamily: 'Poppins-Regular',
              }}
            >
              Don't have an account?{' '}
            </Text>
            <Link
              href="/sign-up"
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: '#FFA500',
              }}
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
