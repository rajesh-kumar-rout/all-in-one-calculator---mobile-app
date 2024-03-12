import { useEffect, useState } from "react"
import { ScrollView, Text, TextInput, View } from "react-native"

export default function Factorization() {
    const [number, setNumber] = useState(0)
    const [factors, setFactors] = useState("")

    useEffect(() => {
        let factors = []

        while (number % 2 === 0) {
            factors.push(2)
            number /= 2
        }

        for (let i = 3; i <= Math.sqrt(number); i += 2) {
            while (number % i === 0) {
                factors.push(i)
                number /= i
            }
        }

        if (number > 2) {
            factors.push(number)
        }

        setFactors(factors.join(", "))
    })

    return (
        <ScrollView className="p-5">
            <View className="mb-6 gap-1">
                <Text className="text-base font-poppins">Number</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" value={number} onChangeText={setNumber} />
            </View>

            <View className="gap-1">
                <Text className="text-base font-poppins">Factors</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" editable={false} value={factors} />
            </View>
        </ScrollView>
    )
}