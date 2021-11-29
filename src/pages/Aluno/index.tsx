import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  VirtualizedList,
} from 'react-native';
import BigCard from '../../components/cardBigger';
import Header from '../../components/header';
import SubTitleText from '../../components/subtitleText';
import {Container, TextContent} from './styles';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {getAulaAlunos} from './Api';
import {formatarSaidaCPF} from '../../utils/textMaskFormat';

const Aluno = ({data, navigation, route}) => {
  const [aulas, setAulas] = useState([]);
  const [aluno, setAluno] = useState({});
  const [nomeAluno, setNomeAluno] = useState();

  const cpfAluno = route.params?.alunoCpf;

  const getAulasAluno = async () => {
    const {data} = await getAulaAlunos(cpfAluno);
    setNomeAluno(data.nome);

    console.log(data);
    setAluno(data);

    setAulas(data.aulas);
  };

  useEffect(() => {
    getAulasAluno();
  }, []);

  const Lista = ({item: data}) => {
    const nomeCompleto = nomeAluno.split(' ');
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Aula', {aulaId: data.id})}>
        <BigCard
          data={data.dataFinal}
          materia={data.hora}
          aluno={nomeCompleto}
          situacao={data.status}></BigCard>
      </TouchableOpacity>
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
            style={{color: 'black', fontWeight: '600'}}
            sizeText={16}>
            {' '}
            Dados pessoais
          </SubTitleText>

          <SubTitleText bold={false} sizeText={12}>
            Aluna
          </SubTitleText>
          <TextContent>Luana Albertoni</TextContent>

          <SubTitleText bold={false} sizeText={12}>
            Idade
          </SubTitleText>
          <TextContent>{aluno.idade}</TextContent>
          <SubTitleText bold={false} sizeText={12}>
            CPF
          </SubTitleText>
          <TextContent>{formatarSaidaCPF(aluno.cpf)}</TextContent>

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
              data={aulas}
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
