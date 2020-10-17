import React from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showCancel = true }) => {
  const navigation = useNavigation();

  function handleGoBackToAppHomePage() {
    navigation.navigate('OrphanagesMap')
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack} >
        <Feather name="arrow-left" color="#15B6D6" size={24} />
      </BorderlessButton>

      <Text style={styles.title} >{title}</Text>
      {showCancel ? (
        <BorderlessButton onPress={handleGoBackToAppHomePage} >
          <Feather name="x" color="#FF669D" size={24} />
        </BorderlessButton>
      ) : <View /> }
    </View>
  );
}

export default Header;
