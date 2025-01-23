import React, { useState } from 'react';
import { View, Text, ScrollView, Image, Dimensions, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, Link } from 'expo-router';
import FormField from '../components/FormField';
import CustomButton from '../components/CustomButton';
import { images } from '../../constants';
import { createUser } from '../../lib/appwrite';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const submit = async () => {
    if (!form.username === ""|| !form.email === "" || !form.password === "") {
      Alert.alert('Error', 'Please fill in all the fields');
      
    }

    setIsSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);
      setUser(result);
      setIsLogged(true)
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
          {/* Adjusted logo size */}
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
            Sign Up to Aora
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          {/* "Have an account already?" section with link */}
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
                fontFamily: 'Poppins-Regular', // Replace with your preferred font
              }}
            >
              Have an account already?{' '}
            </Text>
            <Link
              href="/sign-in"
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: '#FFA500', // Replace with your theme's secondary color
              }}
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
