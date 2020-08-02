import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Header from '../shared/header';
import Home from '../screens/home';
import ReviewDetails from '../screens/ReviewDetails';

const screens = {
	Home: {
		screen: Home,
		navigationOptions: ({ navigation }) => {
			return {
				headerTitle: () => <Header navigation={navigation} title="GameZone" />
			};
		}
	},
	ReviewDetails: {
		screen: ReviewDetails,
		navigationOptions: {
			title: 'Review Details'
			// headerStyle: { backgroundColor: 'grey' }
		}
	}
};

const HomeStack = createStackNavigator(
	screens,
	{
		// defaultNavigationOptions: {
		// 	headerTinColor: '#444',
		// 	headerStyle: { backgroundColor: 'grey', height: 60 }
		// }
	}
);

export default HomeStack;
