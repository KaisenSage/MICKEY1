import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants'; // Adjust relative path to match actual structure

import SearchInput from '../components/SearchInput'; // Adjust the path to where SearchInput is located
import Trending from '../components/Trending'
import EmptyState from '../components/EmptyState';
const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1E1E2C' }}>
      {/* Header Section */}
      <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
        {/* Row container for text and logo */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View>
            <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: '400' }}>
              Welcome Back
            </Text>
            <Text style={{ color: '#FFFFFF', fontSize: 28, fontWeight: '700' }}>
              Abdallah
            </Text>
          </View>
          {/* Logo on the right */}
          <Image
            source={images.logoSmall}
            style={{ width: 36, height: 40 }}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Search Input Section */}
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <SearchInput
          title=""
          placeholder="Search for something..."
          handleChangeText={(text) => console.log('Search text:', text)}
        />

        <View className="w-full flex-1 pt-5 pb-8">
          <Text style={{ color: '#B3B3B3', fontSize: 16, fontWeight: '400', marginBottom: 40, marginTop: 25 }}>
            Latest Videos
          </Text>
        </View>
      </View>

      <Trending posts={[{ id:1},{ id:2}, { id:3},] ?? []} 
      />

      {/* List Section */}
      <FlatList
        data={[{ id: '1' }, { id: '2' }, { id: '3' }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 16,
              marginVertical: 10,
              paddingHorizontal: 20,
              
              
              
            }}
            horizontal
          >
            {item.id}
          </Text>
        )}
        ListFooterComponent={() => (
          <View style={{ flex: 1, backgroundColor: '#FFFFFF', marginTop: 20 }}>
            <View style={{ height: 800 }} />
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No videos Found"
            subtitle="Be the first one to upload a video"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
