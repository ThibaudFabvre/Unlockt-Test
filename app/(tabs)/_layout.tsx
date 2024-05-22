import { Tabs } from 'expo-router';
import React from 'react';

import { Icon } from '@/components/atoms/Icon';
import { THEME } from '@/utils/configurations/Theme';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={({route}) => ({

        tabBarStyle: { height: 100, display: route.name === 'subscription' ? 'none' : 'flex' },
        tabBarItemStyle: { justifyContent: 'center', paddingBottom: 24},
        tabBarLabelPosition: 'below-icon',
        tabBarActiveTintColor: THEME.inverse,
        headerShown: false,
      })}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Micro',
          tabBarIcon: ({ color, focused }) => (
            <Icon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="subscription"
        options={{
          title: 'Get pro',
          tabBarIcon: ({ color, focused }) => (
            <Icon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
