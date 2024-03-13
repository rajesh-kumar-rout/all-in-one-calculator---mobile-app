import { useEffect, useState } from "react"
import { ScrollView, Text, TextInput } from "react-native"

export default function Random() {
    const [min, setMin] = useState("")
    const [max, setMax] = useState("")
    const [random, setRandom] = useState("")

    useEffect(() => {
        const _min = parseFloat(min)
        const _max = parseFloat(max)

        if (isNaN(_min) || isNaN(_max)) {
            return setRandom("")
        }

        setRandom(Math.floor(Math.random() * (max - min + 1) + min))
    }, [min, max])

    return (
        <ScrollView className="p-5">
            <Text className="text-base font-poppins mb-1">Min Value</Text>
            <TextInput inputMode="numeric" className="border border-gray-300 rounded p-3 text-base font-poppins mb-6" value={min} onChangeText={setMin} />

            <Text className="text-base font-poppins mb-1">Max Value</Text>
            <TextInput inputMode="numeric" className="border border-gray-300 rounded p-3 text-base font-poppins mb-6" value={max} onChangeText={setMax} />

            <Text className="text-base font-poppins mb-1">Number</Text>
            <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins text-gray-900" editable={false} value={random.toString()} />
        </ScrollView>
    )
}