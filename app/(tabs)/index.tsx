import { StyleSheet, View, Text, Modal, Dimensions, Pressable } from 'react-native';

import Chip from '@/components/atoms/Chip';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useState } from 'react';
import { router } from 'expo-router';
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import Sticker from '@/components/atoms/Sticker';
import {
  useQuery,

} from '@tanstack/react-query'
import { uuid } from 'uuidv4';
import { getProfiles } from '@/api/profiles/profiles.api';
import { THEME } from '@/utils/configurations/Theme';

export default function HomeScreen() {

  const { data: profiles, status} = useQuery({ queryKey: ['profiles'], queryFn: getProfiles });
  const windowHeight = Dimensions.get('window').height;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMicActive, setIsMicActive ] = useState(false);
  const categories = ['All', 'Rap', 'Rock'];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredProfiles= profiles?.filter((profile: any) => profile?.categories?.includes('selectedCategory'))
  return (
    <View style={{height: '100%'}}>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: THEME.spacing_medium, paddingHorizontal: THEME.spacing_super_large }}>
          <View style={{flexDirection: 'row'}}>        
            <Text style={{ color: THEME.inverse, fontSize: 20 }}>Voice</Text>
            <Text style={{ color: THEME.inverse, fontSize: 20, fontWeight: 'bold'}}>Morph</Text>
          </View>
          <Chip title="Get Pro" icon={<FontAwesome name="star" size={20} color={THEME.background} />} onPress={() => router.push('/subscription')} />
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center', height: "80%", gap: THEME.spacing_extra_large }}>
          <Pressable onPress={() => { setIsMicActive(!isMicActive)}} style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: `${isMicActive ? 'green' : THEME.secondary_color}`,
             width: 180,
              height: 180,
               borderRadius: '50%'
               }}>
              <View style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                 backgroundColor: THEME.background,
              width: 170,
              height: 170,
               borderRadius: '50%'}}>
            <View style={{ 
              alignItems:'center',
              justifyContent: 'center',
              backgroundColor: `${isMicActive ? '#142614': THEME.second_layer}`,
              width: 150,
              height: 150,
               borderRadius: '50%'}}>
                <Feather name={`${isMicActive ? 'mic' : 'mic-off'}`} size={32} color={THEME.inverse} />
               </View>
               </View>
          </Pressable>
            <Text style={{color:  THEME.fourth_layer }}>Tap to turn {isMicActive ? 'OFF': 'ON'} microphone</Text>
          <TouchableWithoutFeedback style={{ 
            width: 180,
            backgroundColor:  THEME.second_layer,
             flexDirection: 'row',
             justifyContent: 'space-between',
             paddingVertical: THEME.spacing_large,
             paddingHorizontal: THEME.spacing_extra_large,
             borderRadius: 50,
              borderWidth: THEME.border_slim,
               borderColor: THEME.third_layer }}
               onPress={() => setIsModalVisible(!isModalVisible) }
               >
                <View style={{justifyContent: 'center'}}>
                  <Text style={{color: THEME.inverse }}>Autotune</Text>
                </View>
            <Ionicons name="chevron-down" size={24} color={THEME.inverse} />
          </TouchableWithoutFeedback>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            setIsModalVisible(!isModalVisible);
          }}
        >
          <ScrollView style={{  
            height: windowHeight * 0.5,
             backgroundColor: THEME.second_layer,
              position: 'relative',
               top: 450,
                borderTopLeftRadius: 20,
                 borderTopRightRadius: 20,
                 paddingVertical: THEME.spacing_medium,

                  }}>
                    <View style={{alignItems:'center' }}>
                      <Pressable style={{height: 8, width: 32, backgroundColor: THEME.third_layer, borderRadius: 50}} onPress={() => setIsModalVisible(!isModalVisible)}></Pressable>
                    </View>
                    <View style={{flexDirection:'row', gap: THEME.spacing_extra_large, marginHorizontal: THEME.spacing_super_large, justifyContent: 'space-around'}}>
                      {categories.map((category: string) => <Pressable key={uuid()} style={{marginVertical: THEME.spacing_extra_large }} onPress={() => setSelectedCategory(category)}><Text style={{color: `${selectedCategory === category ? THEME.inverse : THEME.fourth_layer}` }}>{category}</Text></Pressable>)}
                    </View>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: THEME.spacing_large, paddingHorizontal: THEME.spacing_extra_large, justifyContent: 'center'}}>
                      <Sticker text="No Effect" favorite={true} />
                      {selectedCategory !== "All" && profiles ? filteredProfiles.map((profile : any) => <Sticker key={uuid()} text={profile.name} favorite={profile?.favorite} />) : null}
                      {selectedCategory === "All" && profiles ? profiles.map((profile : any) => <Sticker key={uuid()} text={profile.name} favorite={profile?.favorite} />) : null}
                    </View>
          </ScrollView>
          </Modal>
        </View>
    </View>
  );
}

