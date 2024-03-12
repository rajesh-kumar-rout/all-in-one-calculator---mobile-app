import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native"

export default function Avarage() {
    const [numbers, setNumbers] = useState([0])
    const [avg, setAvg] = useState(0)

    useEffect(()=>{
        const avg = numbers.reduce((sum, number) => sum + number) / numbers.length
        setAvg(avg.toString().includes(".") ? setAvg(avg.toFixed(2)) : avg)
    }, [numbers])

    return (
        <ScrollView className="p-5">
            <View className="mb-6">
                <Text className="text-base mb-1 font-poppins">Numbers</Text>
                <View className="gap-1">
                    {numbers.map((number, index) => (
                        <View className="flex-row items-center gap-1" key={index}>
                            <TextInput
                                className="border border-gray-300 rounded p-3 text-base font-poppins flex-1"
                                inputMode="numeric"
                                value={number}
                                onChange={currentNumber => setNumbers(numbers.map((number, i) => i === index ? currentNumber : number))}
                            />
                            {index === 0 ? (
                                <Ionicons name="add-outline" size={22} onPress={() => setNumbers([...numbers, 0])} />
                            ) : (
                                <Ionicons name="close-outline" size={22} onPress={() => setNumbers(numbers.filter((_, i) => i !== index))} />
                            )}
                        </View>
                    ))}
                </View>
            </View>

            <Text className="text-base mb-1 font-poppins">Avarage</Text>
            <TextInput className="border border-gray-300 rounded p-3 text-base font-poppins" value={avg} editable={false}/>
        </ScrollView>
    )
}