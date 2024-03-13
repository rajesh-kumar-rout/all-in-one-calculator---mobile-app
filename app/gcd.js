import Ionicons from "@expo/vector-icons/Ionicons"
import { useEffect, useState } from "react"
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"

export default function Gcd() {
    const [numbers, setNumbers] = useState([""])
    const [gcd, setGcd] = useState("")

    const getSmallestNumber = (numbers) => {
        let smallest = numbers[0]

        numbers.forEach(number => number < smallest && (smallest = number))

        return smallest
    }

    const isDividesAll = (number, numbers) => {
        let count = 0

        numbers.forEach(currentNumber => currentNumber % number === 0 && ++count)

        return count === numbers.length
    }

    useEffect(() => {
        const _numbers = numbers.map(number => parseFloat(number)).filter(number => !isNaN(number) && number !== 0)

        if (_numbers.length === 0) {
            return setGcd("")
        }

        const smallestNumber = getSmallestNumber(_numbers)

        let gcd = 1

        for (let index = 2; index <= smallestNumber; index++) {
            if (isDividesAll(index, _numbers)) {
                gcd = index
            }
        }

        setGcd(gcd)
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
                        <TouchableOpacity className="p-1 bg-gray-200 rounded-full" onPress={() => setNumbers([...numbers, 0])}>
                            <Ionicons name="add-outline" size={22} />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity className="p-1 bg-gray-200 rounded-full" onPress={() => setNumbers(numbers.filter((_, i) => i !== index))}>
                            <Ionicons name="close-outline" size={22} />
                        </TouchableOpacity>
                    )}
                </View>
            ))}

            <View className="mt-4">
                <Text className="text-base mb-1 font-poppins">Gcd</Text>
                <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins text-gray-900" editable={false} value={gcd.toString()} />
            </View>
        </ScrollView>
    )
}