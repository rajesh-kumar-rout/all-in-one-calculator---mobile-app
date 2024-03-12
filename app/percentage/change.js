import { useEffect, useState } from "react"
import { ScrollView, Text, TextInput, View } from "react-native"

export default function PercentageChange() {
    const [originalValue, setOriginalValue] = useState(0)
    const [newValue, setNewValue] = useState(0)
    const [percentageIncrease, setPercentageIncrease] = useState(0)

    useEffect(() => {
        if (originalValue === 0) {
            return setPercentageIncrease(0)
        }

        const increaseAmount = newValue - originalValue
        const percentageIncrease = (increaseAmount / originalValue) * 100
        setPercentageIncrease(percentageIncrease.toString().includes(".") ? percentageIncrease.toFixed(2) : percentageIncrease)
    }, [originalValue, newValue])
    
    return (
        <ScrollView className="p-5">
            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Original Value</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" value={originalValue} onChangeText={setOriginalValue} />
            </View>

            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">New Value</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" value={newValue} onChangeText={setNewValue} />
            </View>

            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Percentage Increase</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" value={percentageIncrease} editable={false}/>
            </View>
        </ScrollView>
    )
}
