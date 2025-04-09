import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Entypo, EvilIcons, FontAwesome6, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { TEXT_TITLE_INTER } from '../constants/ui/fonts/text'
import { CircularProgress } from 'react-native-circular-progress'

export default function HomeScreen() {
  return (
    <View>
      {/* header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
        <Entypo name="menu" size={24} color="black" />
        <Ionicons name="notifications" size={24} color="black" />
      </View>
      {/* body */}
      <View>
        {/* center */}
        <Text style={{ ...TEXT_TITLE_INTER, marginTop: 20, paddingLeft: 16, color: 'black' }}>Hi there, Welcome!</Text>
        {/* frame Elina */}
        <View style={{ padding: 16, margin: 16, marginTop: 8, borderWidth: 1, borderRadius: 8, borderColor: '#FFFFFF', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 2.5, backgroundColor: 'white' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {/* title */}
            <View>
              <Text style={{ fontSize: 24, fontFamily: 'Inter', fontWeight: '600', color: "black", paddingBottom: 4 }}>Eliana Brian</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#008F99', borderRadius: 6, fontSize: 12, fontWeight: '400', fontFamily: 'Inter', backgroundColor: '#CCE9EB', padding: 2, alignItems: 'center', paddingHorizontal: 10 }}>Cass:IX - A</Text>
                <Text style={{ color: 'black', fontSize: 12, fontWeight: '400', fontFamily: 'Inter', paddingLeft: 8 }}>Roll No: 12</Text>
              </View>
            </View>
            {/* img - eliana */}
            <Image style={{ width: 56, height: 56 }} source={require('../assets/images/Ellipse586.png')} alt='logo' />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 16 }}>
            <Text style={{ fontSize: 12, fontWeight: '400', fontFamily: 'Inter', color: 'black' }}>Attendance</Text>
            <Text style={{ fontSize: 12, fontWeight: '400', fontFamily: 'Inter', color: '#008F99' }}>53% </Text>
          </View>
          <View style={{ width: '100%', height: 8, backgroundColor: '#E5E5E5', borderRadius: 4, marginTop: 8 }}>
            <View style={{ width: '53%', height: '100%', backgroundColor: '#008F99', borderRadius: 4 }} />
          </View>
        </View>
        {/* list Academics */}
        <View>
          <Text style={{ color: 'black', fontSize: 18, fontWeight: '500', fontFamily: 'Inter', paddingLeft: 16, paddingTop: 4 }}>Academics</Text>
          <ScrollView style={{ paddingLeft: 16, paddingTop: 8 }} horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={{ backgroundColor: '#E8DBFC', borderRadius: 8, width: 89, height: 84, justifyContent: 'center', alignItems: 'center', marginRight: 12 }}>
              <Entypo name="location" size={24} color="#008F99" />
              <Text style={{ fontSize: 12, fontWeight: '500', fontFamily: 'Inter', color: 'black', paddingTop: 8 }}>Bus Tracking</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#FDE9D2', borderRadius: 8, width: 89, height: 84, justifyContent: 'center', alignItems: 'center', marginRight: 12 }}>
              <FontAwesome6 name="book-bookmark" size={24} color="#8C4AF2" />
              <Text style={{ fontSize: 12, fontWeight: '500', fontFamily: 'Inter', color: 'black', paddingTop: 8 }}>Exams</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#CCE9EB', borderRadius: 8, width: 89, height: 84, justifyContent: 'center', alignItems: 'center', marginRight: 12 }}>
              <FontAwesome6 name="money-bill-1-wave" size={24} color="#FF8904" />
              <Text style={{ fontSize: 12, fontWeight: '500', fontFamily: 'Inter', color: 'black', paddingTop: 8 }}>Fee</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#FDE9D2', borderRadius: 8, width: 89, height: 84, justifyContent: 'center', alignItems: 'center', marginRight: 12 }}>
              <Entypo name="open-book" size={24} color="#8C4AF2" />
              <Text style={{ fontSize: 12, fontWeight: '500', fontFamily: 'Inter', color: 'black', paddingTop: 8 }}>Homework</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#E8DBFC', borderRadius: 8, width: 89, height: 84, justifyContent: 'center', alignItems: 'center', marginRight: 26 }}>
              <FontAwesome6 name="book-bookmark" size={24} color="black" />
              <Text style={{ fontSize: 12, fontWeight: '500', fontFamily: 'Inter', color: 'black', paddingTop: 8 }}>Bus Tracking</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        {/* list Homeworks */}
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16}}>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: '500', fontFamily: 'Inter', paddingTop: 4 }}>Homeworks</Text>
            <TouchableOpacity>
              <Text style={{ color: '#8C4AF2B2', fontSize: 16, fontWeight: '500', fontFamily: 'Poppins', paddingTop: 4 }}>View all</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={{ backgroundColor: '#008F99', padding: 16, borderRadius: 8, width: 268}}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <MaterialIcons name="menu-book" size={30} color="#FFFFFF" />
                  <View style={{ paddingLeft: 8 }}>
                    <Text style={{ color: '#FFFFFF', fontSize: 12, fontWeight: '500' }}>Maths</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 4 }}>
                      <EvilIcons name="clock" size={16} color="#FFFFFF" />
                      <Text style={{ color: '#FFFFFF', fontSize: 10 }}>1 day left</Text>
                    </View>
                  </View>
                </View>
                <CircularProgress
                  size={45}
                  width={5.5}
                  fill={65}
                  tintColor="#CCE9EB"
                  backgroundColor="#FFFFFF"
                >
                  {(fill) => (
                    <Text style={{ fontSize: 12, fontWeight: '600', color: '#CCE9EB' }}>
                      {fill}%
                    </Text>
                  )}
                </CircularProgress>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 12, fontWeight: '500', fontFamily: 'Inter', width: 120 }}>Solve the Given problems</Text>
                <TouchableOpacity style={{ backgroundColor: '#FFFFFF', borderRadius: 4, padding: 6, paddingHorizontal: 16 }}>
                  <Text style={{ color: '#008F99', fontSize: 12, fontWeight: '500', fontFamily: 'Inter' }}>continue</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
