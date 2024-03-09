import { Stack, useGlobalSearchParams, usePathname, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';
import { useEffect, useState } from 'react';

export default function Layout() {
  const router = useRouter()
  const [statusBarColor, setStatusBarColor] = useState("")
  const [headerColor, setheaderColor] = useState("")
  const params = useGlobalSearchParams();
  const titles = {
    "/percentage/simple": "Simple Percentage",
    "/percentage": "Percentage"
  }

  const routes = [
    {
      title: "Simple Percentage",
      path: "/percentage/simple",
      statusBarColor: "red",
      headerColor: "blue"
    }
  ]

  const [currentRoute, setCurrentRoute] = useState(routes[0])

  const [title, setTitle] = useState("Home")

  const pathname = usePathname()
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }
  console.log(router.onStateChange);
  useEffect(() => {
    if(!pathname) return

    const route = routes.find(route => route.path === pathname)


    setCurrentRoute(route)
    console.log(pathname);
  }, [pathname, params])

  return (
    <>
      <StatusBar backgroundColor={statusBarColor} headerTintColor="white" style="light" />
      <Stack
        screenOptions={{
          // title: currentRoute.title,
          headerStyle: {
            backgroundColor: headerColor,
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 22,
            fontFamily: "Poppins-Regular"
          }
        }}
      />
    </>
  );
}
