import { useEffect, useState } from "react"
import { ScrollView, Text, TextInput } from "react-native"

export default function Factorization() {
    const [number, setNumber] = useState("")
    const [factors, setFactors] = useState("")

    useEffect(() => {
        let _number = parseFloat(number)

        if(isNaN(_number)) {
            return setFactors("")
        }

        const factors = []

        while (_number % 2 === 0) {
            factors.push(2)
            _number /= 2
        }

        for (let i = 3; i <= Math.sqrt(_number); i += 2) {
            while (_number % i === 0) {
                factors.push(i)
                _number /= i
            }
        }

        if (_number > 2) {
            factors.push(_number)
        }

        setFactors(factors.join(", "))
    })

    return (
        <ScrollView className="p-5">
            <Text className="text-base font-poppins mb-1">Number</Text>
            <TextInput inputMode="numeric" className="border border-gray-300 rounded p-3 text-base font-poppins mb-6" value={number} onChangeText={setNumber} />

            <Text className="text-base font-poppins mb-1">Factors</Text>
            <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins text-gray-900" editable={false} value={factors} />
        </ScrollView>
    )
}