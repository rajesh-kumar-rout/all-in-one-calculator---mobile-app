import { useEffect, useState } from "react"
import { ScrollView, Text, TextInput } from "react-native"

export default function PercentageDecrease() {
    const [originalValue, setOriginalValue] = useState("")
    const [decreasedBy, setDecreasedBy] = useState("")
    const [finalValue, setFinalValue] = useState("")

    useEffect(() => {
        const _originalValue = parseFloat(originalValue)
        const _decreasedBy = parseFloat(decreasedBy)

        if(isNaN(_originalValue) || isNaN(_decreasedBy)) {
            return setFinalValue("")
        }

        const decreaseAmount = _originalValue - (_originalValue * _decreasedBy / 100)
        setFinalValue(decreaseAmount.toString().includes(".") ? decreaseAmount.toFixed(2) : decreaseAmount)
    }, [originalValue, decreasedBy])

    return (
        <ScrollView className="p-5">
            <Text className="text-base mb-1 font-poppins">Original Value</Text>
            <TextInput inputMode="numeric" className="border border-gray-300 rounded p-3 text-base font-poppins mb-6" value={originalValue} onChangeText={setOriginalValue} />

            <Text className="text-base mb-1 font-poppins">Decreased Percentage</Text>
            <TextInput inputMode="numeric" className="border border-gray-300 rounded p-3 text-base font-poppins mb-6" value={decreasedBy} onChangeText={setDecreasedBy} />

            <Text className="text-base mb-1 font-poppins">Final Value</Text>
            <TextInput inputMode="numeric" className="border border-gray-300 rounded p-3 text-base font-poppins mb-6 text-gray-900" editable={false} value={finalValue.toString()} />
        </ScrollView>
    )
}
