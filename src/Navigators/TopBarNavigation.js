import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Home from '../screens/Home'
import About from '../screens/About'
import Skills from '../screens/Skills'
import Projects from '../screens/Projects'
import Contact from '../screens/Contact'

const Tab = createMaterialTopTabNavigator();

export default function TopBarNavigation() {
    const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
    initialRouteName="Skills"
    screenOptions= {{
        swipeEnabled: false,
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: '#cbd5e1',
        tabBarPressColor: '#e91e63',
        tabBarStyle: { backgroundColor: '#0f172a' },
        tabBarIndicatorStyle: { backgroundColor: '#ea580c' },
        }}
        >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Skills" component={Skills} />
        <Tab.Screen name="Projects" component={Projects} />
        <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
}
