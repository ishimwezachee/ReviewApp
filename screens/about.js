import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/glabal';

const About = () => {
	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.titleText}>This is about</Text>
		</View>
	);
};

export default About;
