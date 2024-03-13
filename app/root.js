import { useEffect, useState } from "react"
import { ScrollView, Text, TextInput } from "react-native"

export default function Root() {
    const [number, setNumber] = useState("")
    const [root, setRoot] = useState("")

    useEffect(() => {
        const sqrt = Math.sqrt(number)
        setRoot(sqrt.toString().includes(".") ? sqrt.toFixed(2) : sqrt)
    }, [number])

    return (
        <ScrollView className="p-5">
            <Text className="text-base font-poppins mb-1">Number</Text>
            <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins mb-6" value={number} onChangeText={setNumber} />

            <Text className="text-base font-poppins mb-1">Root</Text>
            <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins text-gray-900" editable={false} value={root.toString()} />
        </ScrollView>
    )
}