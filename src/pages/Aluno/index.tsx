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

const Aluno: React.FC = (...props) => {
  return (
    <>
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
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Aluno;
