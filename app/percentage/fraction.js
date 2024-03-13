import { useEffect, useState } from "react"
import { ScrollView, Text, TextInput } from "react-native"

export default function PercentageFraction() {
    const [numerator, setNumerator] = useState("")
    const [denominator, setDenominator] = useState("")
    const [percentage, setPercentage] = useState("")

    useEffect(() => {
        const _numerator = parseFloat(numerator)
        const _denominator = parseFloat(denominator)

        if(isNaN(_numerator) || isNaN(_denominator)) {
            return setPercentage("")
        }

        const percentage = (_numerator / _denominator) * 100;

        setPercentage(percentage.toString().includes(".") ? percentage.toFixed(2) : percentage)
    }, [numerator, denominator])

    return (
        <ScrollView className="p-5">
            <Text className="text-base mb-1 font-poppins">Numerator</Text>
            <TextInput inputMode="numeric" className="border border-gray-300 rounded p-3 text-base font-poppins mb-6" value={numerator} onChangeText={setNumerator} />

            <Text className="text-base mb-1 font-poppins">Denominator</Text>
            <TextInput inputMode="numeric" className="border border-gray-300 rounded p-3 text-base font-poppins mb-6" value={denominator} onChangeText={setDenominator} />

            <Text className="text-base mb-1 font-poppins">Percentage</Text>
            <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins text-gray-900" value={percentage.toString()} editable={false} />
        </ScrollView>
    )
}
