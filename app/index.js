import { Link, Stack } from 'expo-router';
import { Button, Image, Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
    />
  );
}

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.body}>
      <Stack.Screen
        options={{
          // https://reactnavigation.org/docs/headers#setting-the-header-title
          title: 'Home',
          // https://reactnavigation.org/docs/headers#adjusting-header-styles
          // headerStyle: { backgroundColor: '#f4511e' },
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
          // https://reactnavigation.org/docs/headers#replacing-the-title-with-a-custom-component
          // headerTitle: props => <LogoTitle {...props} />,
        }}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('HomeScreen')}
        underlayColor='#fff'>
        <Text style={styles.buttonText}>Standard Calculator</Text>
      </TouchableOpacity>

      <Link
      href="/percentage"
        style={styles.button}
        underlayColor='#fff'>
        <Text style={styles.buttonText}>Percentage Calculator</Text>
      </Link>

      <Link
        style={styles.button}
        href="/age"
        underlayColor='#fff'>
        <Text style={styles.buttonText}>Age Calculator</Text>
      </Link>

        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('HomeScreen')}
          underlayColor='#fff'>
          <Text style={styles.buttonText}>Date Calculator</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('HomeScreen')}
          underlayColor='#fff'>
          <Text style={styles.buttonText}>Interest Calculator</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('HomeScreen')}
          underlayColor='#fff'>
          <Text style={styles.buttonText}>Geometry Calculator</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('HomeScreen')}
          underlayColor='#fff'>
          <Text style={styles.buttonText}>Binary Calculator</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('HomeScreen')}
          underlayColor='#fff'>
          <Text style={styles.buttonText}>Exponent Calculator</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('HomeScreen')}
          underlayColor='#fff'>
          <Text style={styles.buttonText}>Random Number Generator</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('HomeScreen')}
          underlayColor='#fff'>
          <Text style={styles.buttonText}>LCM Calculator</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('HomeScreen')}
          underlayColor='#fff'>
          <Text style={styles.buttonText}>GCD Calculator</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('HomeScreen')}
          underlayColor='#fff'>
          <Text style={styles.buttonText}>Prime Factorization Calculator</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 20,
    flexDirection: "column",
    gap: 20
  },
  button: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#4f46e5',
    borderRadius: 6,
    width: "100%",
    textAlign: "center"
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: "Poppins-Regular",
    fontWeight: "600"
  }
})
