import { View, Text, Image, Dimensions } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';

import { icons } from '../../constants';

const { width } = Dimensions.get('window');

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: width / 5, // Distribute icons evenly across the tab bar
            paddingVertical: 10,
        }}>
            <Image
                source={icon}
                resizeMode="contain"
                style={{
                    width: focused ? 26 : 24, // Slightly enlarge icon when focused
                    height: focused ? 26 : 24,
                    tintColor: color,
                }}
            />
            <Text
                style={{
                    marginTop: 4,
                    fontSize: 12,
                    fontWeight: focused ? '600' : '400',
                    color: color,
                }}
                numberOfLines={1} // Prevent text overflow
                adjustsFontSizeToFit // Scale text down if needed
            >
                {name}
            </Text>
        </View>
    );
};

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#FFA001',
                tabBarInactiveTintColor: '#CDCDE0',
                tabBarStyle: {
                    backgroundColor: '#161622',
                    borderTopWidth: 1,
                    borderTopColor: '#232533',
                    height: 84,
                    paddingBottom: 8, // Add spacing to prevent text clipping on smaller screens
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.home}
                            color={focused ? '#FFA001' : '#CDCDE0'}
                            name="Home"
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="bookmark"
                options={{
                    title: 'Bookmark',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.bookmark}
                            color={focused ? '#FFA001' : '#CDCDE0'}
                            name="Bookmark"
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="create"
                options={{
                    title: 'Create',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.plus}
                            color={focused ? '#FFA001' : '#CDCDE0'}
                            name="Create"
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.profile}
                            color={focused ? '#FFA001' : '#CDCDE0'}
                            name="Profile"
                            focused={focused}
                        />
                    ),
                }}
            />
        </Tabs>
    );
};

export default TabsLayout;
