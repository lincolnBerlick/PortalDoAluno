import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {Alert, KeyboardAvoidingView, Platform, View} from 'react-native';
import BigCard from '../../components/cardBigger';
import Header from '../../components/header';
import SubTitleText from '../../components/subtitleText';
import {Container, TextContent} from './styles';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {formatarSaidaCPF} from '../../utils/textMaskFormat';
import {getAluno, listarAulas} from './Api';

const Aluno = ({navigation, data, route}) => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cpf, setCpf] = useState('');
  const [aluno, setAluno] = useState(null);
  const [listaAulas, setListaAulas] = useState([]);

  const getAlunos = async cpfAluno => {
    try {
      const {data} = await getAluno(cpfAluno);
      setItemScreen(data);
    } catch (error) {
      Alert.alert('Não foi possível carregar o aluno');
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
    getAlunos(route.params?.cpfAluno);
    getAulas();
  }, []);

  const setItemScreen = ({nome, idade, cpf}) => {
    setNome(nome);
    setIdade(idade);
    setCpf(cpf);
  };

  const Lista = ({item: data}) => {
    const {
      aluno: {nome: nomeAluno},
      materia: {nome: nomeMateria},
      dataInicio,
      status,
    } = data;
    const nomeCompleto = nomeAluno.split(' ');
    const aulaId = data?.id;

    return (
      <View style={{marginRight: 8}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Aula', {aulaId: aulaId})}>
          <BigCard
            data={dataInicio}
            materia={nomeMateria}
            aluno={nomeCompleto[0]}
            situacao={status}></BigCard>
        </TouchableOpacity>
      </View>
    );
  };

  {
  }
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
            style={{color: 'black', fontWeight: '600'}}
            sizeText={16}>
            {' '}
            Dados pessoais
          </SubTitleText>

          <SubTitleText bold={false} sizeText={12}>
            Aluno
          </SubTitleText>
          <TextContent>{nome}</TextContent>

          <SubTitleText bold={false} sizeText={12}>
            Idade
          </SubTitleText>
          <TextContent>{idade}</TextContent>
          <SubTitleText bold={false} sizeText={12}>
            CPF
          </SubTitleText>
          <TextContent>{formatarSaidaCPF(cpf)}</TextContent>
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

          <View style={{flex: 1}}>
            <FlatList
              data={listaAulas.filter(item => item.aluno.nome === nome)}
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

export default Aluno;
