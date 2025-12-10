import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import * as Updates from 'expo-updates';
import { HomeScreenNavigationProp } from '../navigation/types';

export default function HomeScreen() {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const version = Constants.expoConfig?.version || 'Unknown';

    const checkForUpdates = async () => {
        try {
            const update = await Updates.checkForUpdateAsync();
            if (update.isAvailable) {
                await Updates.fetchUpdateAsync();
                await Updates.reloadAsync();
            } else {
                alert('No updates available');
            }
        } catch (e) {
            alert(`Error fetching updates: ${e}`);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>EAS Build & OTA Updates</Text>
            <Text style={styles.version}>Current Version: {version}</Text>

            <TouchableOpacity style={styles.button} onPress={checkForUpdates}>
                <Text style={styles.buttonText}>Check for Updates</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, styles.secondaryButton]}
                onPress={() => navigation.navigate('BuildInfo')}
            >
                <Text style={styles.buttonText}>Show Build Info</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    version: {
        fontSize: 16,
        color: '#666',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8,
        width: '100%',
        marginBottom: 15,
        alignItems: 'center',
    },
    secondaryButton: {
        backgroundColor: '#34C759',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
