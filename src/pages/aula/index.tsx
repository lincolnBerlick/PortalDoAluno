import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import {Icon} from '../../components/button/styles';
import Header from '../../components/header';
import SubTitleText from '../../components/subtitleText';
import {Container, TextContent} from './styles';
import DropDownPicker from 'react-native-dropdown-picker';

const Aula: React.FC = (...props) => {
  const [cpfValue, setCpfValue] = useState('');
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [senha, setSenha] = useState('');

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

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
              Informacoes da aula
            </SubTitleText>

            <SubTitleText bold={false} sizeText={12}>
              Aluna
            </SubTitleText>
            <TextContent>Luana Albertoni</TextContent>

            <SubTitleText bold={false} sizeText={12}>
              <Icon style={{marginRight: 5}} name="calendar" />
              {'  '}Data
            </SubTitleText>
            <TextContent>12/11</TextContent>
            <SubTitleText bold={false} sizeText={12}>
              <Icon style={{marginRight: 5}} name="clock" />
              {'  '}Horário
            </SubTitleText>
            <TextContent>18:00</TextContent>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 40,
                marginBottom: '10%',
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
              Pagamento
            </SubTitleText>

            <SubTitleText bold={false} sizeText={12}>
              Valor
            </SubTitleText>
            <TextContent>100,00</TextContent>

            <SubTitleText bold={false} sizeText={14}>
              Status
            </SubTitleText>

            <View>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Selecione um status"
              />
            </View>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Aula;
