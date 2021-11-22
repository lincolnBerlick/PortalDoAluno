import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import BigCard from '../../components/cardBigger';
import Header from '../../components/header';
import SubTitleText from '../../components/subtitleText';
import {Container, TextContent} from './styles';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const mockItems = [
  {
    id: 1,
    nome: 'Luana',
    data: '10/10',
    hora: '10:15',
    situacao: 'pendente',
  },
  {id: 2, nome: 'Luana', data: '10/10', hora: '10:15', situacao: 'pago'},
  {
    id: 3,
    nome: 'Luana',
    data: '10/10',
    hora: '10:15',
    situacao: 'pendente',
  },
  {
    id: 4,
    nome: 'Luana',
    data: '10/10',
    hora: '10:15',
    situacao: 'pendente',
  },
];

const Aluno = ({data, navigation}) => {
  const Lista = ({item: data}) => {
    const nomeCompleto = data.nome.split(' ');

    return (
      <View style={{marginRight: 8}}>
        <TouchableOpacity onPress={() => navigation.navigate('Aula')}>
          <BigCard
            data={data.data}
            hora={data.hora}
            aluna={nomeCompleto[0]}
            situacao={data.situacao}></BigCard>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
    <ScrollView>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <Container>
            <Header />
            <SubTitleText
              bold
              style={{color: 'black', fontWeight: '600'}}
              sizeText={16}>
              {' '}
              Dados pessoais
            </SubTitleText>

            <SubTitleText bold={false} sizeText={12}>
              Aluna
            </SubTitleText>
            <TextContent>Luana Albertoni</TextContent>

            <SubTitleText bold={false} sizeText={12}>Data de Nascimento</SubTitleText>
            <TextContent>12/02/1996</TextContent>
            <SubTitleText bold={false} sizeText={12}>CPF</SubTitleText>
            <TextContent>000.000.000-00</TextContent>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 40,
              }}>
              <View
                style={{
                  flex: 1,
                  borderBottomColor: 'rgba(0, 0, 0, 0.08)',
                  borderBottomWidth: 1,
                }}
              />
            </View>

            <SubTitleText style={{color: '#000000'}} bold sizeText={16}>
              Aulas
            </SubTitleText>

            <View>
              <FlatList
                data={mockItems}
                renderItem={Lista}
                keyExtractor={item => item.id}
                horizontal={false}
              />
            </View>
        
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
};

export default Aluno;
