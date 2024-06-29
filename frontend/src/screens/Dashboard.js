import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const Calculation = () => {
    const [speed, setSpeed] = useState('');
    const [weight, setWeight] = useState('');
    const [result, setResult] = useState(null);

    const handleCalculate = async () => {
        try {
            const response = await axios.post('http://localhost:5000/calculate', {
                speed: parseFloat(speed),
                weight: parseFloat(weight)
            });
            setResult(response.data.result);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Boat Speed (knots)"
                value={speed}
                onChangeText={setSpeed}
                style={styles.input}
                keyboardType="numeric"
            />
            <TextInput
                placeholder="Boat Weight (tons)"
                value={weight}
                onChangeText={setWeight}
                style={styles.input}
                keyboardType="numeric"
            />
            <Button title="Calculate" onPress={handleCalculate} />
            {result && <Text>Result: {result}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        padding: 8,
    },
});

export default Calculation;
