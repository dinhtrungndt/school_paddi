import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BackIcon from '../../../constants/ui/icon/back'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { dataNotifi } from '../../../stores/data/home'

const Notifications = () => {
    const handleGoBack = () => {
        router.back();
    }

    const getGroupedNotifications = () => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        const groupedData = {
            today: [],
            yesterday: []
        };

        dataNotifi.forEach(notification => {
            const notifDate = new Date(notification.timestamp);
            notifDate.setHours(0, 0, 0, 0);

            if (notifDate.getTime() === today.getTime()) {
                groupedData.today.push(notification);
            } else if (notifDate.getTime() === yesterday.getTime()) {
                groupedData.yesterday.push(notification);
            } else {
                groupedData.yesterday.push(notification);
            }
        });

        return groupedData;
    };

    const notificationData = getGroupedNotifications();

    const formatTimeDisplay = (timestamp) => {
        const now = new Date();
        const notifTime = new Date(timestamp);
        const diffMs = now - notifTime;
        const diffMins = Math.round(diffMs / 60000);

        if (notifTime.getDate() === now.getDate() &&
            notifTime.getMonth() === now.getMonth() &&
            notifTime.getFullYear() === now.getFullYear()) {

            if (diffMins < 60) {
                return `${diffMins} Min`;
            } else {
                const hours = Math.floor(diffMins / 60);
                return `${hours} hr ago`;
            }
        }
        else {
            return `${notifTime.getDate().toString().padStart(2, '0')}/${(notifTime.getMonth() + 1).toString().padStart(2, '0')}`;
        }
    };

    const renderNotificationItem = ({ item }) => (
        <TouchableOpacity style={styles.notificationItem}>
            <Image source={item.image} style={styles.avatar} />
            <View style={styles.messageContainer}>
                <Text style={styles.teacherName}>{item.name}</Text>
                <Text style={styles.message}>{item.message}</Text>
            </View>
            <Text style={styles.timeStamp}>{formatTimeDisplay(item.timestamp)}</Text>
        </TouchableOpacity>
    );

    const sections = [];
    if (notificationData.today.length > 0) {
        sections.push({ title: 'Today', data: notificationData.today });
    }
    if (notificationData.yesterday.length > 0) {
        sections.push({ title: 'Old', data: notificationData.yesterday });
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <BackIcon onPress={handleGoBack} size={24} color="black" />
                <Text style={styles.headerTitle}>Notification</Text>
                <Ionicons name="caret-back" size={24} color="white" />
            </View>

            {/* Body */}
            <View style={styles.body}>
                <FlatList
                    data={sections}
                    keyExtractor={(item, index) => `section-${index}`}
                    renderItem={({ item }) => (
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>{item.title}</Text>
                            {item.data.map((notification) => (
                                <View key={notification.id}>
                                    {renderNotificationItem({ item: notification })}
                                </View>
                            ))}
                        </View>
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}

export default Notifications

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        padding: 12
    },
    headerTitle: {
        color: '#000',
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'Inter'
    },
    body: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        paddingBottom: 20
    },
    section: {
        marginBottom: 10
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Inter',
        padding: 12
    },
    notificationItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 20
    },
    messageContainer: {
        paddingLeft: 10,
        width: '75%'
    },
    teacherName: {
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'Inter'
    },
    message: {
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'Inter'
    },
    timeStamp: {
        fontSize: 12,
        fontWeight: '500',
        fontFamily: 'Inter',
        color: '#000'
    }
})