import { useEffect, useState } from "react"
import { ScrollView, Text, TextInput, View } from "react-native"

export default function PercentageSimple() {
    const [value, setValue] = useState(0)
    const [percentage, setPercentage] = useState(0)
    const [answer, setAnswer] = useState(0)

    useEffect(() => {
        const percentage = value * percentage / 100
        setAnswer(percentage.toString().includes(".") ? percentage.toFixed(2) : percentage)
    }, [value, percentage])

    return (
        <ScrollView className="p-5">
            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Number</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" value={value} onChangeText={setValue} />
            </View>

            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Percentage</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" value={percentage} onChangeText={setPercentage} />
            </View>

            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Answer</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" value={answer} editable={false} />
            </View>
        </ScrollView>
    )
}

