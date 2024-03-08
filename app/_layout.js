import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';

export default function Layout() {
    const [fontsLoaded, fontError] = useFonts({
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
      });

      if(!fontsLoaded){
        return <Text>Loading...</Text>
      }

  return (
    <>
    <StatusBar backgroundColor='#4338ca' headerTintColor="white" style='light'/>
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4f46e5',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 22,
          fontFamily: "Poppins-Regular"
        },
      }}
    />
    </>
  );
}
