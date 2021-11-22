import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import Header from '../../components/header';
import SubTitleText from '../../components/subtitleText';
import {Container, TextContent} from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import BigCard from '../../components/cardBigger';

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

const ListaAulas = ({data, navigation}) => {
  const [dataNascimento, setDataNascimento] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

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
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          nestedScrollEnabled={true}
          contentContainerStyle={{flex: 1}}>
          <Container>
            <Header />
            <SubTitleText
              bold
              style={{fontWeight: '600', marginTop: 24}}
              sizeText={16}>
              {' '}
              Filtrar por:
            </SubTitleText>

            <SubTitleText
              bold={false}
              sizeText={14}
              style={{color: '#424242', marginBottom: 4, marginTop: 24}}>
              Aluno
            </SubTitleText>

            <View style={{zIndex: 2, marginBottom:20}}>
              <DropDownPicker
                style={{
                  borderWidth: 0,
                  borderColor: '#EAEAEB',
                  borderRadius: 9,
                }}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Selecione Aluno(a, u, e, i)"
                listMode="SCROLLVIEW"
                dropDownDirection="BOTTOM"
                bottomOffset={100}
                dropDownContainerStyle={{
                  borderWidth: 0,
                }}
                itemSeparator={true}
                itemSeparatorStyle={{
                  backgroundColor: '#EAEAEB',
                }}
                customItemLabelStyle={{
                  fontFamily: 'Inter',
                }}
              />
            </View>

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
    </>
  );
};

export default ListaAulas;
