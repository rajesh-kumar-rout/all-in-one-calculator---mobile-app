import { useEffect, useState } from "react"
import { ScrollView, Text, TextInput, View } from "react-native"

export default function PercentageDecrease() {
    const [originalValue, setOriginalValue] = useState(0)
    const [decreasedBy, setDecreasedBy] = useState(0)
    const [finalValue, setFinalValue] = useState(0)

    useEffect(() => {
        const decreaseAmount = (originalValue * decreasedBy / 100).toFixed(2)
        setFinalValue(originalValue - decreaseAmount)
    }, [originalValue, decreasedBy])

    return (
        <ScrollView className="p-5">
            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Original Value</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" value={originalValue} onChangeText={setOriginalValue} />
            </View>

            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Decreased By</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" value={decreasedBy > 0 ? `${decreasedBy} %` : null} onChangeText={setDecreasedBy} />
            </View>

            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Final Value</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" editable={false} value={finalValue} />
            </View>
        </ScrollView>
    )
}
