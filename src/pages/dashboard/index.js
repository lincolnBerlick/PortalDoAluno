import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  Alert,
} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
import MiniCard from '../../components/card';
import BigCard from '../../components/cardBigger';
import SubTitleText from '../../components/subtitleText';
import TextTop from '../../components/TextTop';
import {listarAlunos, listarAulas} from './Api';
import {AlunosCardView, Container, VerAulasLink, CardAlunoText} from './styles';

const CardsAlunos = ({item: data}) => {
  const nomeCompleto = data.nome.split(' ');
  return (
    <AlunosCardView>
      <View style={{marginRight: 8}}></View>
      <Icon name="ios-person-outline" size={20} />
      <CardAlunoText>
        {nomeCompleto[0]} {'\n'} {nomeCompleto[1]}
      </CardAlunoText>
    </AlunosCardView>
  );
};

const mockItems = [
  {
    id: 1,
    nome: 'Lincoln Berlick',
    data: '10/10',
    hora: '10:15',
    situacao: 'pendente',
  },
  {id: 2, nome: 'Luana Albe', data: '10/10', hora: '10:15', situacao: 'pago'},
  {
    id: 3,
    nome: 'Will nome2',
    data: '10/10',
    hora: '10:15',
    situacao: 'pendente',
  },
  {
    id: 4,
    nome: 'Carlos nomin',
    data: '10/10',
    hora: '10:15',
    situacao: 'pendente',
  },
];
const DashBoard = ({data, navigation}) => {
  const [listaAlunos, setListaAlunos] = useState([]);
  const [listaAulas, setListaAulas] = useState([]);

  const getAlunos = async () => {
    try {
      const {data} = await listarAlunos();
      setListaAlunos(data);
    } catch (error) {
      Alert.alert('Não foi possível carregar a lista de alunos');
    }
  };

  const getAulas = async () => {
    try {
      const {data} = await listarAulas();
      setListaAulas(data);
    } catch (error) {
      Alert.alert('Não foi possível carregar a lista de aulas');
    }
  };

  useEffect(() => {
    console.log('foi');
    getAlunos();
    getAulas();
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
        <TouchableOpacity onPress={() => navigation.navigate('Aluno')}>
          <MiniCard
            data={dataInicio}
            materia={nomeMateria}
            aluno={nomeCompleto[0]}
            situacao={status}></MiniCard>
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
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <Container>
            <TextTop sizeText={'24px'}>Olá Lincoln</TextTop>
            <SubTitleText bold sizeText={'20px'}>
              Próximas Aulas
            </SubTitleText>
            <View>
              <FlatList
                data={listaAulas}
                renderItem={Lista}
                keyExtractor={item => item.id}
                horizontal={true}
              />
            </View>
            <VerAulasLink onPress={() => navigation.navigate('ListaAulas')}>
              Ver todas as aulas
            </VerAulasLink>
            <Button
              onPress={() => navigation.navigate('Agendar')}
              icon="calendar"
              style={{width: 163, marginTop: 24}}>
              {' '}
              Agendar aula
            </Button>

            <SubTitleText style={{marginTop: 62}} sizeText={'20px'}>
              {' '}
              Alunos
            </SubTitleText>

            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Aluno')}>
                <FlatList
                  data={listaAlunos}
                  renderItem={CardsAlunos}
                  keyExtractor={item => item.id}
                  horizontal={true}
                />
              </TouchableOpacity>
            </View>

            <Button
              onPress={() => navigation.navigate('CadastroAluno')}
              icon="plus"
              style={{width: 217, marginTop: 24}}>
              {' '}
              Cadastrar novo aluno
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default DashBoard;
