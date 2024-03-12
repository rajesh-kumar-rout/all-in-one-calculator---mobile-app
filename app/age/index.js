import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';

export default function Age() {
  const links = [
    {
      id: 1,
      label: "Calculate Age",
      link: "/age/calculate"
    },
    {
      id: 2,
      label: "Calculate Age Difference",
      link: "/age/difference"
    }
  ]

  return (
    <ScrollView className="flex-col gap-5 p-5">
      {links.map(link => (
        <Link
          key={link.id}
          href={link.link}
          className="bg-fuchsia-600 rounded-md text-center p-4"
        >
          <Text className="text-white text-lg font-poppins font-medium">{link.label}</Text>
        </Link>
      ))}
    </ScrollView>
  )
}
