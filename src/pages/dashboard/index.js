import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
import MiniCard from '../../components/card';
import SubTitleText from '../../components/subtitleText';
import TextTop from '../../components/TextTop';
import {AlunosCardView, Container, VerAulasLink, CardAlunoText} from './styles';

const Lista = ({item: data}) => {
  console.log(data);
  const nomeCompleto = data.nome.split(' ');
  return (
    <View style={{marginRight: 8}}>
      <MiniCard
        data={data.data}
        hora={data.hora}
        aluna={nomeCompleto[0]}
        situacao={data.situacao}></MiniCard>
    </View>
  );
};

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
  {id: 2, nome: 'Luana sobre', data: '10/10', hora: '10:15', situacao: 'pago'},
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
const DashBoard = data => {
  const [cpfValue, setCpfValue] = useState('');
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [senha, setSenha] = useState('');

  const navigation = useNavigation();

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
            <SubTitleText sizeText={'20px'}> Próximas Aulas</SubTitleText>
            <View>
              <FlatList
                data={mockItems}
                renderItem={Lista}
                keyExtractor={item => item.id}
                horizontal={true}
              />
            </View>
            <VerAulasLink>Ver todas as aulas</VerAulasLink>
            <Button icon="calendar" style={{width: 163, marginTop: 24}}>
              {' '}
              Agendar aula
            </Button>

            <SubTitleText style={{marginTop: 62}} sizeText={'20px'}>
              {' '}
              Alunos
            </SubTitleText>

            <View>
              <FlatList
                data={mockItems}
                renderItem={CardsAlunos}
                keyExtractor={item => item.id}
                horizontal={true}
              />
            </View>
            <Button icon="plus" style={{width: 217, marginTop: 24}}>
              Cadastrar novo aluno
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default DashBoard;
