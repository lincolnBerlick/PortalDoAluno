import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
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
import {getAula} from './Api';

const Aula = ({route, ...props}) => {
  const navigation = useNavigation();
  const [aluno, setAluno] = useState(null);
  const [data, setData] = useState([]);
  const [hora, setHora] = useState([]);
  const [valor, setValor] = useState([]);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  const getAulas = async aulaId => {
    try {
      const {data} = await getAula(aulaId);
      setItemScreen(data);
    } catch (error) {
      Alert.alert('Não foi possível carregar a aula');
    }
  };

  const setItemScreen = ({dataFinal, hora, valor, status, aluno: {nome}}) => {
    setData(dataFinal);
    setAluno(nome);
    setHora(hora);
    setValor(valor);
    setItems([{label: status, value: status}]);
    setValue(status);
  };

  useEffect(() => {
    getAulas(route.params?.aulaId);
  }, []);

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
            <TextContent>{aluno}</TextContent>

            <SubTitleText bold={false} sizeText={12}>
              <Icon style={{marginRight: 5}} name="calendar" />
              {'  '}Data
            </SubTitleText>
            <TextContent>{data}</TextContent>
            <SubTitleText bold={false} sizeText={12}>
              <Icon style={{marginRight: 5}} name="calendar" />
              {'  '}Hora
            </SubTitleText>
            <TextContent>{hora}</TextContent>

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
            <TextContent>{valor}</TextContent>

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
                listMode="SCROLLVIEW"
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
