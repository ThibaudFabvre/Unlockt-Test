import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';


import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import RadioButton from '@/components/atoms/RadioButton';
import { router } from 'expo-router';
import { THEME } from '@/utils/configurations/Theme';

export default function TabTwoScreen() {

  const [activeRadio, setActiveRadio ] = useState(0);
  return (
    <View style={{height: '100vh', padding: 40}}>
      <TouchableHighlight onPress={() => router.back()} style={{ backgroundColor: THEME.third_layer, borderRadius: '50%', width: 32, height: 32, alignItems:'center', justifyContent: 'center'}}>
          <Entypo name="cross" size={20} color={THEME.inverse} />
      </TouchableHighlight>
      <View style={{flex: 2 }}>
        <Image />
      </View>
      <View style={{ flex: 3, alignItems:'center', justifyContent: 'space-around'}}>
        <View style={{ maxWidth: 400, alignItems:'center' }}>
          <View style={{flexDirection: 'row', marginBottom: THEME.spacing_super_large }}>
            <Text style={{textAlign: 'center', alignItems:'center', fontSize: 34, lineHeight: 41}}>
              <Text  style={{color: THEME.inverse, fontWeight: THEME.boldness_thick }}>Try </Text>
              <Text style={{color: THEME.inverse, fontWeight: THEME.boldness_standard}}>Voice</Text>
              <Text  style={{color: THEME.inverse, fontWeight: THEME.boldness_thick}}>Morph pro</Text>
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text  style={{color: THEME.inverse, textAlign: 'center', fontSize: 17 }}>
              Sync your IPhone to any speaker via Bluetooth, enhance with effects, and command the crowd
            </Text>
          </View>
        </View>
        <View style={{justifyContent: 'space-between', height: 112, marginVertical: 40 }}>
          <RadioButton title="Weekly" extra="$5,99/week" onPress={() => setActiveRadio(0)} isActive={activeRadio === 0}/>
          <RadioButton title="Annualy" extra="$2,99/week" onPress={() => setActiveRadio(1)} isActive={activeRadio === 1}/>
        </View>
        <TouchableOpacity style={{backgroundColor: THEME.secondary_color, width: 356, borderRadius: 50 , padding: THEME.spacing_large, alignItems: 'center', marginBottom: THEME.spacing_large}}>
          <Text>Try It Free</Text>
        </TouchableOpacity>
        <Text style={{ color: THEME.fourth_layer}}>3 day free, then $39,99/year</Text>
      </View>
    </View>
  );
}
