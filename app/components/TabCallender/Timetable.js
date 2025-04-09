import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

const scheduleData = [
  {
    time: '9:00am',
    end: '9:50am',
    subject: 'Mathematics',
    teacher: 'ken Shakumar',
    color: '#D9C9F7',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    time: '10:00am',
    end: '10:50am',
    subject: 'Mathematics',
    teacher: 'ken Shakumar',
    color: '#FEE2B2',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    time: '10:50am',
    end: '11:05am',
    subject: 'Morning Break',
    color: '#C4E6E5',
  },
  {
    time: '11:05am',
    end: '11:55am',
    subject: 'Mathematics',
    teacher: 'ken Shakumar',
    color: '#FFF9C4',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    time: '12:00pm',
    end: '12:50pm',
    subject: 'Mathematics',
    teacher: 'ken Shakumar',
    color: '#E6D5F7',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    time: '1:00pm',
    end: '1:50pm',
    subject: 'Mathematics',
    teacher: 'ken Shakumar',
    color: '#E0E0E0',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
];

const Timetable = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.columnTime}>Time</Text>
        <Text style={styles.columnClass}>Class</Text>
      </View>

      {scheduleData.map((item, index) => (
        <View key={index} style={styles.row}>
          {/* Time & Dot Line */}
          <View style={styles.timeColumn}>
            <Text style={styles.timeText}>{item.time}</Text>
            <Text style={styles.subTime}>{item.end}</Text>
            {/* Dot */}
            <View style={styles.dot} />
            {/* Vertical line */}
            {index !== scheduleData.length - 1 && <View style={styles.line} />}
          </View>

          {/* Class Box */}
          <View style={[styles.classBox, { backgroundColor: item.color }]}>
            {item.subject !== 'Morning Break' ? (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={{ uri: item.avatar }}
                  style={styles.avatar}
                />
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.subject}>{item.subject}</Text>
                  <Text style={styles.teacher}>by {item.teacher}</Text>
                </View>
              </View>
            ) : (
              <Text style={[styles.subject, { textAlign: 'center' }]}>{item.subject}</Text>
            )}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Timetable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  columnTime: {
    width: 80,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#555',
  },
  columnClass: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#555',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  timeColumn: {
    width: 80,
    alignItems: 'center',
    position: 'relative',
  },
  timeText: {
    absolute: true,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    left: 0,
  },
  subTime: {
    fontSize: 10,
    color: '#888',
    marginBottom: 10,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: '#00A8E8',
    borderRadius: 5,
  },
  line: {
    width: 2,
    height: 60,
    backgroundColor: '#00A8E8',
    marginTop: 2,
  },
  classBox: {
    flex: 1,
    borderRadius: 12,
    padding: 12,
    justifyContent: 'center',
  },
  subject: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  teacher: {
    fontSize: 12,
    color: '#666',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ccc',
  },
});
