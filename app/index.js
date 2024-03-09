import { Link, Stack } from 'expo-router';
import { useState } from 'react';
import { Button, Image, Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function Home() {
  const links = [
    {
      id: 1,
      label: "Standard",
      link: "/"
    },
    {
      id: 2,
      label: "Percentage",
      link: "/percentage"
    },
    {
      id: 3,
      label: "Age",
      link: "/age"
    },
    {
      id: 4,
      label: "Date",
      link: "/date"
    },
    {
      id: 5,
      label: "Interest",
      link: "/interest"
    },
    {
      id: 6,
      label: "Geometry",
      link: "/geometry"
    },
    {
      id: 7,
      label: "Binary",
      link: "/binary"
    },
    {
      id: 8,
      label: "Exponent",
      link: "/exponenet"
    },
    {
      id: 9,
      label: "Random Number Generator",
      link: "/random"
    },
    {
      id: 10,
      label: "LCM",
      link: "/lcm"
    },
    {
      id: 11,
      label: "GCD",
      link: "/gcd"
    },
    {
      id: 12,
      label: "Prime Factorization",
      link: "/factorization"
    },
    {
      id: 13,
      label: "Square Root",
      link: "/root"
    },
    {
      id: 14,
      label: "Avarage",
      link: "/avarage"
    },
  ]

  return (
    <ScrollView className="flex-col gap-5 p-5">
      {links.map(link => (
        <Link
          key={link.id}
          href={link.link}
          className="bg-indigo-600 rounded-md text-center p-4"
        >
          <Text className="text-white text-lg font-poppins font-medium">{link.label}</Text>
        </Link>
      ))}
    </ScrollView>
  )
}
