import Ionicons from "@expo/vector-icons/Ionicons"
import { useEffect, useState } from "react"
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"

export default function Lcm() {
    const [numbers, setNumbers] = useState([""])
    const [lcm, setLcm] = useState(0)

    const getLargest = (numbers) => {
        let largest = numbers[0]

        numbers.forEach(number => number > largest && (largest = number))

        return largest
    }

    const isDivisibleByAll = (number, numbers) => {
        let count = 0

        numbers.forEach(currentNumber => number % currentNumber === 0 && ++count)

        return count === numbers.length
    }

    useEffect(() => {
        const _numbers = numbers.map(number => parseFloat(number)).filter(number => !isNaN(number) && number !== 0)

        if (_numbers.length === 0) {
            return setLcm("")
        }

        let lcm = getLargest(_numbers)

        while (true) {
            if (isDivisibleByAll(lcm, _numbers)) {
                setLcm(lcm)
                break
            }

            lcm++
        }
    }, [numbers])

    return (
        <ScrollView className="p-5">
            <Text className="text-base mb-1 font-poppins">Numbers</Text>

            {numbers.map((number, index) => (
                <View className="flex-row items-center mb-2" key={index}>
                    <TextInput
                        className="border border-gray-300 rounded p-3 text-base font-poppins flex-1 mr-2"
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

            <Text className="text-base mb-1 font-poppins mt-4">Lcm</Text>
            <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins text-gray-900" editable={false} value={lcm.toString()} />
        </ScrollView>
    )
}