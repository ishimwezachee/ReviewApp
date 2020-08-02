import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Navigator from './routes/drawer';

const getFonts = () => {
	return Font.loadAsync({
		'nunito-regular': require('./assets/Fonts/Nunito-Regular.ttf'),
		'nunito-bold': require('./assets/Fonts/Nunito-Bold.ttf')
	});
};

export default function App() {
	const [ fontsLoaded, setFontsLoaded ] = useState(false);
	if (fontsLoaded) {
		return <Navigator />;
	} else {
		return <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />;
	}
}
