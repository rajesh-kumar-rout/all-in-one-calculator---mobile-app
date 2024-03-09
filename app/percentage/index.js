import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';

export default function Percentage() {
  const links = [
    {
      id: 1,
      label: "Simple Percentage",
      link: "/percentage/simple"
    },
    {
      id: 2,
      label: "Percentage Increase",
      link: "/percentage/increase"
    },
    {
      id: 3,
      label: "Percentage Decrease",
      link: "/percentage/decrease"
    },
    {
      id: 4,
      label: "Percentage Change",
      link: "/percentage/change"
    },
    {
      id: 5,
      label: "Fraction To Percentage",
      link: "/percentage/fraction"
    }
  ]

  return (
    <ScrollView className="flex-col gap-5 p-5">
      {links.map(link => (
        <Link
          key={link.id}
          href={link.link}
          className="bg-rose-600 rounded-md text-center p-4"
        >
          <Text className="text-white text-lg font-poppins font-medium">{link.label}</Text>
        </Link>
      ))}
    </ScrollView>
  )
}

