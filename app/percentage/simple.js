import { useEffect, useState } from "react"
import { ScrollView, Text, TextInput } from "react-native"

export default function PercentageSimple() {
    const [value, setValue] = useState("")
    const [percentage, setPercentage] = useState("")
    const [answer, setAnswer] = useState(0)

    useEffect(() => {
        const _value = parseFloat(value)
        const _percentage = parseFloat(percentage)

        if(isNaN(_value) || isNaN(_percentage)) {
            return setAnswer("")
        }

        const answer = (_percentage / 100) * _value
        
        setAnswer(answer.toString().includes(".") ? answer.toFixed(2) : answer)
    }, [value, percentage])

    return (
        <ScrollView className="p-5">
            <Text className="text-base mb-1 font-poppins">Value</Text>
            <TextInput inputMode="numeric" className="border border-gray-300 mb-6 rounded p-3 text-base font-poppins" value={value} onChangeText={setValue} />

            <Text className="text-base mb-1 font-poppins">Percentage</Text>
            <TextInput inputMode="numeric" className="border border-gray-300 mb-6 rounded p-3 text-base font-poppins" value={percentage} onChangeText={setPercentage} />

            <Text className="text-base mb-1 font-poppins">Answer</Text>
            <TextInput className="border border-gray-300 mb-6 rounded p-3 text-base font-poppins text-gray-900" value={answer.toString()} editable={false} />
        </ScrollView>
    )
}

