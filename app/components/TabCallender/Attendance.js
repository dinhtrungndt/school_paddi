import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';

const Attendance = () => {
    const [selected, setSelected] = useState('');

    // Danh sách các ngày đặc biệt
    const absentDays = ['2023-01-04', '2023-01-21'];
    const festivalDays = ['2023-01-17'];

    // Dữ liệu đánh dấu ngày
    const marked = {
        ...Object.fromEntries(
            absentDays.map(date => [
                date,
                { marked: true, dotColor: 'red', customStyles: styles.absentDay },
            ])
        ),
        ...Object.fromEntries(
            festivalDays.map(date => [
                date,
                { marked: true, dotColor: 'teal', customStyles: styles.festivalDay },
            ])
        ),
        ...(selected && {
            [selected]: {
                selected: true,
                selectedColor: '#00adf5',
                selectedTextColor: '#fff',
            },
        }),
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calendar</Text>

            <Calendar
                style={styles.calendar}
                theme={{
                    backgroundColor: '#D9D9D9',
                    calendarBackground: '#FFFFFF',
                    textSectionTitleColor: '#b6c1cd',
                    todayTextColor: '#000000',
                    dayTextColor: '#000000',
                    textDisabledColor: '#d9e1e8',
                }}
                markingType={'custom'}
                onDayPress={day => setSelected(day.dateString)}
                markedDates={marked}
            />

            {/* Today Attendance */}
            {/* <View style={styles.todayBox}>
        <View style={styles.todayBadge}>
          <Text style={styles.todayBadgeText}>P</Text>
        </View>
        <View>
          <Text style={styles.todayTitle}>Today Attendance</Text>
          <Text style={styles.todayDate}>17th Jan 2024</Text>
        </View>
      </View> */}

            {/* Attendance Pie (fake % for now) */}
            {/* <View style={styles.pie}>
        <Text style={styles.pieTextPercent}>24%</Text>
        <Text style={styles.pieTextLabel}>Absent</Text>
      </View> */}
        </View>
    );
};

export default Attendance;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 10,
    },
    calendar: {
        borderRadius: 20,
        elevation: 2,
        overflow: 'hidden',
    },
    absentDay: {
        text: {
            color: 'red',
            fontWeight: 'bold',
        },
    },
    festivalDay: {
        text: {
            color: 'teal',
            fontWeight: 'bold',
        },
    },
    todayBox: {
        flexDirection: 'row',
        backgroundColor: '#00adf5',
        borderRadius: 16,
        padding: 16,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    todayBadge: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginRight: 12,
    },
    todayBadgeText: {
        fontWeight: 'bold',
        color: '#00adf5',
        fontSize: 16,
    },
    todayTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    todayDate: {
        color: '#e0f7ff',
        fontSize: 12,
    },
    pie: {
        marginTop: 20,
        alignSelf: 'center',
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 8,
        borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pieTextPercent: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
    },
    pieTextLabel: {
        fontSize: 12,
        color: 'gray',
    },
});
