import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Dashboard = ({ navigation, route }) => {
    const { user } = route.params;

    return (
        <View style={styles.container}>
            <Text>Welcome, {user.name}</Text>
            <Button title="Perform Calculation" onPress={() => navigation.navigate('Calculation')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
});

export default Dashboard;
