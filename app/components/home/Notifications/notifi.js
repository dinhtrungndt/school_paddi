import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackIcon from '../../../constants/ui/icon/back'
import { router } from 'expo-router'

const Notifications = () => {
    const handleGoBack = () => {
        router.back();
    }

    return (
        <SafeAreaView>
            <BackIcon onPress={handleGoBack} size={24} color="black" />
        </SafeAreaView>
    )
}

export default Notifications

const styles = StyleSheet.create({})