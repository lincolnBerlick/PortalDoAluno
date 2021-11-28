import {useNavigation} from '@react-navigation/core';
import React, {useState, useEffect} from 'react';
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
import {listarAlunos, listarAulas} from './Api';
import {enumFormater} from '../../utils/enumFormater';

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
  const [open, setOpen] = useState(false);
  const [aluno, setAluno] = useState(null);
  const [listaAulas, setListaAulas] = useState([]);
  const [alunos, setAlunos] = useState([]);

  const getAulas = async () => {
    try {
      const {data} = await listarAulas();
      setListaAulas(data);
    } catch (error) {
      Alert.alert('Não foi possível carregar a lista de aulas');
    }
  };

  const getAlunos = async () => {
    const {data: listaAlunos} = await listarAlunos();
    setAlunos(enumFormater(listaAlunos));
  };

  useEffect(() => {
    getAulas();
    getAlunos();
  }, []);

  const Lista = ({item: data}) => {
    const {
      aluno: {nome: nomeAluno},
      materia: {nome: nomeMateria},
      dataInicio,
      status,
    } = data;
    const nomeCompleto = nomeAluno.split(' ');

    return (
      <View style={{marginRight: 8}}>
        <TouchableOpacity onPress={() => navigation.navigate('Aula')}>
          <BigCard
            data={dataInicio}
            materia={nomeMateria}
            aluno={nomeCompleto[0]}
            situacao={status}></BigCard>
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

          <View style={{zIndex: 2, marginBottom: 20}}>
            <DropDownPicker
              style={{
                borderWidth: 0,
                borderColor: '#EAEAEB',
                borderRadius: 9,
              }}
              open={open}
              value={aluno}
              items={alunos}
              setOpen={setOpen}
              setValue={setAluno}
              setItems={setAlunos}
              placeholder="Selecione Aluno"
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
              data={aluno ? listaAulas.filter(item => item.aluno.id === aluno) : listaAulas}
              renderItem={Lista}
              keyExtractor={item => item.id}
              horizontal={false}
            />
          </View>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
};

export default ListaAulas;
