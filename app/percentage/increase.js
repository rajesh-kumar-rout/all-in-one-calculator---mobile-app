import { useEffect, useState } from "react"
import { ScrollView, Text, TextInput } from "react-native"

export default function PercentageDecrease() {
    const [originalValue, setOriginalValue] = useState("")
    const [increasedBy, setIncreasedBy] = useState("")
    const [finalValue, setFinalValue] = useState("")

    useEffect(() => {
        const _originalValue = parseFloat(originalValue)
        const _increasedBy = parseFloat(increasedBy)

        if(isNaN(_originalValue) || isNaN(_increasedBy)) {
            return setFinalValue("")
        }

        const increaseAmount = _originalValue + (_originalValue * _increasedBy / 100)

        setFinalValue(increaseAmount.toString().includes(".") ? increaseAmount.toFixed(2) : increaseAmount)
    }, [originalValue, increasedBy])

    return (
        <ScrollView className="p-5">
            <Text className="text-base mb-1 font-poppins">Original Value</Text>
            <TextInput inputMode="numeric" className="border border-gray-300 rounded p-3 text-base font-poppins mb-6" value={originalValue} onChangeText={setOriginalValue} />

            <Text className="text-base mb-1 font-poppins">Increased Percentage</Text>
            <TextInput inputMode="numeric" className="border border-gray-300 rounded p-3 text-base font-poppins mb-6" value={increasedBy} onChangeText={setIncreasedBy} />

            <Text className="text-base mb-1 font-poppins">Final Value</Text>
            <TextInput inputMode="numeric" className="border border-gray-300 rounded p-3 text-base font-poppins mb-6 text-gray-900" editable={false} value={finalValue.toString()} />
        </ScrollView>
    )
}
