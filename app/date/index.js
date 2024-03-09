import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';

export default function Dage() {
  const links = [
    {
      id: 1,
      label: "Calculate Working Days",
      link: "/date/working"
    },
    {
      id: 2,
      label: "Add To Date",
      link: "/date/add"
    },
    {
      id: 3,
      label: "Sub From Date",
      link: "/date/sub"
    },
    {
      id: 4,
      label: "Date Information",
      link: "/date/information"
    },
    {
      id: 5,
      label: "Leap Year",
      link: "/date/leap"
    }
  ]

  return (
    <ScrollView className="flex-col gap-5 p-5">
      {links.map(link => (
        <Link
          key={link.id}
          href={link.link}
          className="bg-purple-600 rounded-md text-center p-4"
        >
          <Text className="text-white text-lg font-poppins font-medium">{link.label}</Text>
        </Link>
      ))}
    </ScrollView>
  )
}

