import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import mapMarker from '../../images/map-marker.png'

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';
import { Alert } from 'react-native';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const OrphanagesMap: React.FC = () => {
  const navigation = useNavigation();
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useFocusEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    })
  })

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

  function handleNavigateToOrphanageDetails(id: number) {
    navigation.navigate('OrphanageDetails', { id });
  }

  function handleNavigateToCreateOrphanage() {
    navigation.navigate('SelectMapPosition');
  }

  return (
    <View style={styles.container}>
      {initialPosition[0] !== 0 && (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.mapStyle}
          initialRegion={{
            latitude: initialPosition[0],
            longitude: initialPosition[1],
            latitudeDelta: 0.008,
            longitudeDelta: 0.008
          }}
        >
          {orphanages.map(orphanage => {
            return (
              <Marker
                key={orphanage.id}
                icon={mapMarker}
                calloutAnchor={{
                  x: 2.7,
                  y: 0.8
                }}
                coordinate={{
                  latitude: orphanage.latitude,
                  longitude: orphanage.longitude,
                }}
              >
                <Callout tooltip onPress={() => handleNavigateToOrphanageDetails(orphanage.id)} >
                  <View style={styles.calloutContainer} >
                    <Text style={styles.calloutText} >{orphanage.name}</Text>
                  </View>
                </Callout>
              </Marker>
            )
          })}
        </MapView>
      )}

      <View style={styles.footer} >
          <Text style={styles.footerText} >{orphanages.length} orfanatos encontrados</Text>
          <RectButton style={styles.createOrphanageButton} onPress={handleNavigateToCreateOrphanage} >
            <Feather name="plus" size={20} color="#FFF" />
          </RectButton>
      </View>
    </View>
  );
}

export default OrphanagesMap;
