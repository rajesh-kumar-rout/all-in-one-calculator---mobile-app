import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';

export default function Percentage() {
  return (
    <ScrollView>
      <StatusBar backgroundColor='#be123c' style="light"/>
      <View style={styles.body}>
        <Stack.Screen
          options={{
            title: 'Percentage Calculator',
            headerStyle: {
              backgroundColor: "#e11d48"
            }
          }}
        />

        <Link
          href="/percentage/simple"
          style={styles.button}
          underlayColor='#fff'>
          <Text style={styles.buttonText}>Simple Percentage</Text>
        </Link>

        <Link
          href="/percentage/increase"
          style={styles.button}
          underlayColor='#fff'>
          <Text style={styles.buttonText}>Percentage Increase</Text>
        </Link>

        <Link
          href="/percentage/decrease"
          style={styles.button}
          underlayColor='#fff'>
          <Text style={styles.buttonText}>Percentage Decrease</Text>
        </Link>

        <Link
          href="/percentage/change"
          style={styles.button}
          underlayColor='#fff'>
          <Text style={styles.buttonText}>Percentage Change</Text>
        </Link>

        <Link
          href="/percentage/fraction"
          style={styles.button}
          underlayColor='#fff'>
          <Text style={styles.buttonText}>Fraction To Percentage</Text>
        </Link>
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
    backgroundColor: '#e11d48',
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
