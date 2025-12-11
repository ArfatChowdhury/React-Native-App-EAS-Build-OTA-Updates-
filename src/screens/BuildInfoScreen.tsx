import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Updates from 'expo-updates';

export default function BuildInfoScreen() {
    const appVersion = Constants.expoConfig?.version || 'Unknown';
    const runtimeVersion = Updates.runtimeVersion;
    const buildNumber = Platform.select({
        ios: Constants.expoConfig?.ios?.buildNumber,
        android: Constants.expoConfig?.android?.versionCode?.toString(),
        default: 'Unknown',
    });
    const platform = Platform.OS;
    const channel = Updates.channel || 'Development';

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Build Information</Text>

            <View style={styles.infoContainer}>
                <InfoItem label="App Version" value={appVersion} />
                <InfoItem label="Runtime Version" value={String(runtimeVersion)} />
                <InfoItem label="Build Number" value={buildNumber} />
                <InfoItem label="Platform" value={platform} />
                <InfoItem label="Update Channel" value={channel} />
            </View>
        </View>
    );
}

const InfoItem = ({ label, value }: { label: string; value: string | undefined }) => (
    <View style={styles.item}>
        <Text style={styles.label}>{label}:</Text>
        <Text style={styles.value}>{value || 'N/A'}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e1e',
        padding: 20,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 10,
        color: '#333',
    },
    infoContainer: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    label: {
        fontSize: 16,
        color: '#555',
    },
    value: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
    },
});
