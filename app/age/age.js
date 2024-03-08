import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import DatePicker from 'react-native-date-picker'
import { useState } from 'react';
export default function AgeAge() {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    return (
        <ScrollView>
            <StatusBar backgroundColor='#a21caf' style="light"/>
            <View style={styles.body}>
                <Stack.Screen
                    options={{
                        title: "Calculate Age",
                        headerStyle: {
                            backgroundColor: "#c026d3"
                          }
                    }}
                />
<DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
                <View style={styles.container}>
                    <View style={styles.formGroup}>
                        <Text style={styles.formLabel}>Current Date</Text>
                        <TextInput style={styles.formControl} onPressIn={async()=>{
                            try {
                                const {action, year, month, day} = await DatePickerAndroid.open(
                                  {
                                    // Use `new Date()` for current date.
                                    // May 25 2020. Month 0 is January.
                                    date: new Date(2020, 4, 25),
                                  },
                                );
                                if (action !== DatePickerAndroid.dismissedAction) {
                                  // Selected year, month (0-11), day
                                }
                              } catch ({code, message}) {
                                console.warn('Cannot open date picker', message);
                              }
                        }}/>
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.formLabel}>Date of birth</Text>
                        <TextInput style={styles.formControl} />
                    </View>
                </View>
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
    container: {
        flexDirection: "column",
        gap: 24,
    },
    formGroup: {
        flexDirection: "column",
        gap: 4,
    },
    formControl: {
        borderWidth: 1,
        borderStyle: "solid",
        flex: 1,
        borderColor: "#ccc",
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 12,
        fontFamily: "Poppins-Regular",
        fontSize: 16
    },
    formLabel: {
        fontFamily: "Poppins-Regular",
        fontSize: 16
    }
})
