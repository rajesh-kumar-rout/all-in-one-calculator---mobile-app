import Ionicons from "@expo/vector-icons/Ionicons"
import { useEffect, useState } from "react"
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"

export default function Avarage() {
    const [numbers, setNumbers] = useState([""])
    const [avg, setAvg] = useState("")

    useEffect(() => {
        let _numbers = numbers.map(number => parseFloat(number)).filter(number => !isNaN(number) && number !== 0)

        if (_numbers.length === 0) {
            return setAvg("")
        }

        const avg = _numbers.reduce((sum, number) => parseFloat(sum) + parseFloat(number)) / _numbers.length

        setAvg(avg.toString().includes(".") ? avg.toFixed(2) : avg)
    }, [numbers])

    return (
        <ScrollView className="p-5">
            <Text className="text-base mb-1 font-poppins">Numbers</Text>

            {numbers.map((number, index) => (
                <View className="flex-row items-center mb-2" key={index}>
                    <TextInput
                        className="border border-gray-300 rounded p-3 text-base font-poppins flex-1 mr-1"
                        inputMode="numeric"
                        value={number}
                        onChangeText={currentNumber => setNumbers(numbers.map((number, i) => i === index ? currentNumber : number))}
                    />
                    {index === 0 ? (
                        <TouchableOpacity className="p-1 bg-gray-200 rounded-full" onPress={() => setNumbers([...numbers, ""])}>
                            <Ionicons name="add-outline" size={22} />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity className="p-1 bg-gray-200 rounded-full" onPress={() => setNumbers(numbers.filter((_, i) => i !== index))}>
                            <Ionicons name="close-outline" size={22} />
                        </TouchableOpacity>
                    )}
                </View>
            ))}

            <Text className="text-base mb-1 font-poppins mt-4">Avarage</Text>
            <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" value={avg.toString()} editable={false} />
        </ScrollView>
    )
}