import 'react-native-gesture-handler';

import {useNavigation} from '@react-navigation/core';
import React from 'react';

import {Container, TextLabel} from './styles';

const Header: React.FC = (...props) => {
  const navigation = useNavigation();
  const {index, routes} = navigation.getState();
  const ultimaRota = routes.slice(-1)[0].name;
  return (
    <Container>
      <TextLabel onPress={() => navigation.goBack()}>
        {'<  '} {ultimaRota ? ultimaRota : 'Voltar'}
      </TextLabel>
    </Container>
  );
};

export default Header;
