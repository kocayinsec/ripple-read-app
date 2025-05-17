import MapView, { Marker } from 'expo-maps';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';


export default function NewsMapScreen() {
  
  const initialRegion = {
    latitude: 41.0082,
    longitude: 28.9784,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      >
        <Marker
          coordinate={{ latitude: 41.0082, longitude: 28.9784 }}
          title="İstanbul"
          description="Haberlerin Merkezi"
        />
      </MapView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
   mapTitle: {  
     position: 'absolute',
     top: Platform.OS === 'ios' ? 60 : 30,
     alignSelf: 'center',
     fontSize: 24,
     backgroundColor: 'rgba(255,255,255,0.7)', 
     padding: 10,
     borderRadius: 5,
   }
});