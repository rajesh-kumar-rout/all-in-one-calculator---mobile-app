import { useEffect, useState } from "react"
import { ScrollView, Text, TextInput } from "react-native"

export default function PercentageChange() {
    const [originalValue, setOriginalValue] = useState("")
    const [newValue, setNewValue] = useState("")
    const [percentageIncrease, setPercentageIncrease] = useState("")

    useEffect(() => {
        const _originalValue = parseFloat(originalValue)
        const _newValue = parseFloat(newValue)

        if (isNaN(_originalValue) || isNaN(_newValue)) {
            return setPercentageIncrease("")
        }

        const percentageIncrease = ((_newValue - _originalValue) / _originalValue) * 100

        setPercentageIncrease(percentageIncrease.toString().includes(".") ? percentageIncrease.toFixed(2) : percentageIncrease)
    }, [originalValue, newValue])

    return (
        <ScrollView className="p-5">
            <Text className="text-base mb-1 font-poppins">Original Value</Text>
            <TextInput inputMode="numeric" className="border border-gray-300 rounded p-3 text-base font-poppins mb-6" value={originalValue} onChangeText={setOriginalValue} />

            <Text className="text-base mb-1 font-poppins">New Value</Text>
            <TextInput inputMode="numeric" className="border border-gray-300 rounded p-3 text-base font-poppins mb-6" value={newValue} onChangeText={setNewValue} />

            <Text className="text-base mb-1 font-poppins">Percentage Increase</Text>
            <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins mb-6 text-gray-900" value={percentageIncrease.toString()} editable={false} />
        </ScrollView>
    )
}
