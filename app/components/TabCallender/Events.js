import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Modal, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const EVENTS = [
  {
    id: '1',
    title: 'Sports day',
    date: 'July 10, 2024',
    image: require('../../assets/images/Logomark.png'),
  },
  {
    id: '2',
    title: 'Quiz day',
    date: 'July 10, 2024',
    image: require('../../assets/images/Logomark.png'),
  },
];

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Events = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const renderEventItem = ({ item }) => (
    <View style={styles.eventCard}>
      <Image source={item.image} style={styles.eventImage} />
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.eventTitle}>{item.title}</Text>
        <Text style={styles.eventDate}>{item.date}</Text>
      </View>
    </View>
  );

  const renderDayItem = ({ item }) => (
    <TouchableOpacity
      style={styles.dropdownItem}
      onPress={() => {
        setSelectedDay(item);
        setModalVisible(false);
      }}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  const renderModal = () => (
    <Modal visible={modalVisible} transparent animationType="fade">
      <Pressable
        style={{ flex: 1, backgroundColor: '#00000088' }}
        onPress={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Pressable onPress={() => { }} style={styles.dropdownList}>
            <FlatList
              data={DAYS}
              renderItem={renderDayItem}
              keyExtractor={(item) => item}
            />
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ color: selectedDay ? '#000' : '#888' }}>
          {selectedDay || 'Select Day'}
        </Text>
        <Ionicons name={modalVisible ? 'chevron-up' : 'chevron-down'} size={20} />
      </TouchableOpacity>

      {renderModal()}

      <FlatList
        data={EVENTS}
        renderItem={renderEventItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  dropdownList: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    marginHorizontal: 16,
  },
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  eventCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },
  eventImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  eventTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  eventDate: {
    color: '#666',
    marginTop: 4,
  },
});
