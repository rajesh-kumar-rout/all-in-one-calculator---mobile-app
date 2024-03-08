import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';

export default function Percentage() {
  return (
    <ScrollView>
      <StatusBar backgroundColor='#a21caf' style="light"/>
      <View style={styles.body}>
        <Stack.Screen
          options={{
            title: 'Age Calculator',
            headerStyle: {
              backgroundColor: "#c026d3"
            }
          }}
        />

        <Link
          href="/age/age"
          style={styles.button}
          underlayColor='#fff'>
          <Text style={styles.buttonText}>Calculate Age</Text>
        </Link>

        <Link
          href="/age/difference"
          style={styles.button}
          underlayColor='#fff'>
          <Text style={styles.buttonText}>Calculate Age Difference</Text>
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
    backgroundColor: '#c026d3',
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
