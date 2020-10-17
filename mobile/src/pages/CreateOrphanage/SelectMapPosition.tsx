import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text, Alert } from 'react-native';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { MapEvent, Marker } from 'react-native-maps';

import mapMarkerImg from '../../images/map-marker.png';
import { useEffect } from 'react';

export default function SelectMapPosition() {
  const navigation = useNavigation();
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  function handleNextStep() {
    navigation.navigate('OrphanageData', { position });
  }

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync()

      if (status !== 'granted') {
        Alert.alert('Oooooops...', 'Precisamos da sua permissão para obter a localização ');
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      setInitialPosition([
        latitude,
        longitude
      ])
    };

    loadPosition()
  }, []);

  function handleSelectMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate);
  }

  return (
    <View style={styles.container}>
      {initialPosition[0] !== 0 && (
        <MapView 
          initialRegion={{
            latitude: initialPosition[0],
            longitude: initialPosition[1],
            latitudeDelta: 0.014,
            longitudeDelta: 0.014
          }}
          style={styles.mapStyle}
          onPress={handleSelectMapPosition}
        >
          {position.latitude !== 0 && (
            <Marker 
              icon={mapMarkerImg}
              coordinate={{ latitude: position.latitude, longitude: position.longitude }}
            />
          )}
        </MapView>
      )}

      <RectButton  style={position.latitude !== 0 ? styles.nextButton : styles.nextButtonDisable} onPress={position.latitude !== 0 ? handleNextStep : () => {}}>
        <Text style={styles.nextButtonText}>Próximo</Text>
      </RectButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },

  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,

    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 40,
  },

  nextButtonDisable: {
    backgroundColor: '#15c3d6',
    opacity: 0.6,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,

    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 40,
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  }
})