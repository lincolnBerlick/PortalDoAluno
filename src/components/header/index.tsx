import 'react-native-gesture-handler';

import {useNavigation} from '@react-navigation/core';
import React from 'react';

import {Container, TextLabel} from './styles';

const Header: React.FC = (...props) => {
  const navigation = useNavigation();
  const {index, routes} = navigation.getState();
  const ultimaRota = routes[0].name;
  console.log(props);
  return (
    <Container>
      <TextLabel onPress={() => navigation.goBack()}>
        {'<  '} {ultimaRota ? ultimaRota : 'Voltar'}
      </TextLabel>
    </Container>
  );
};

export default Header;
