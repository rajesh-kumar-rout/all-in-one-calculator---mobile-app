import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';

export default function PercentageIncrease() {
    return (
        <ScrollView>
            <StatusBar backgroundColor='#be123c' style="light"/>
            <View style={styles.body}>
                <Stack.Screen
                    options={{
                        title: "Percentage Increase",
                        headerStyle: {
                            backgroundColor: "#e11d48"
                        }
                    }}
                />

                <View style={styles.container}>
                    <View style={styles.formGroup}>
                        <Text style={styles.formLabel}>Original Number</Text>
                        <TextInput style={styles.formControl} />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.formLabel}>Increase By</Text>
                        <TextInput style={styles.formControl} />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.formLabel}>Final Number</Text>
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
