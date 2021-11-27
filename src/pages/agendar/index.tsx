import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
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
import Input from '../../components/input';
import {formatarSaidaDat} from '../../utils/textMaskFormat';
import Button from '../../components/button';
import {agendarAula, listarAlunos, returnEnumMaterias} from './Api';
import {enumFormater} from '../../utils/enumFormater';

const Agendar: React.FC = (...props) => {
  const navigation = useNavigation();
  const [openStatus, setStatusOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [materiaOpen, setMateriaOpen] = useState(false);

  const [materias, setMaterias] = useState([]);
  const [alunos, setAlunos] = useState([]);

  const [dataInicio, setDataInicio] = useState('');
  const [status, setStatus] = useState('');
  const [alunoId, setAlunoId] = useState('');
  const [materiaId, setMateriaId] = useState('');

  const [itemsStatus, setItemsStatus] = useState([
    {label: 'Pago', value: 'Pago'},
    {label: 'Pendente', value: 'Pendente'},
  ]);

  const getMaterias = async () => {
    const materiasList = await returnEnumMaterias();
    setMaterias(enumFormater(materiasList));
  };

  const getAlunos = async () => {
    const {data: listaAlunos} = await listarAlunos();
    setAlunos(enumFormater(listaAlunos));
  };

  useEffect(() => {
    getMaterias();
    getAlunos();
  }, []);

  const agendamento = async () => {
    try {
      const {data} = await agendarAula({
        dataInicio,
        dataFinal: dataInicio,
        status,
        remarque: false,
        professorId: 1,
        alunoId,
        materiaId,
      });
      navigation.navigate('DashBoard');
    } catch (error) {
      Alert.alert('Não foi possível agendar a aula')
    }
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
              Informacoes da aula
            </SubTitleText>

            <SubTitleText
              bold={false}
              sizeText={14}
              style={{color: '#424242', marginBottom: 4, marginTop: 24}}>
              Aluno
            </SubTitleText>

            <View style={{zIndex: 2}}>
              <DropDownPicker
                style={{
                  borderWidth: 0,
                  borderColor: '#EAEAEB',
                  borderRadius: 9,
                }}
                open={open}
                value={alunoId}
                items={alunos}
                setOpen={setOpen}
                setValue={setAlunoId}
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

            <Input
              style={{width: '60%'}}
              labelText="Data do Inicio"
              autoCapitalize="none"
              placeholder="00/00/000"
              returnKeyType="next"
              value={dataInicio}
              icon="calendar"
              onChange={text =>
                setDataInicio(formatarSaidaDat(text.nativeEvent.text))
              }
            />

            <SubTitleText
              style={{color: '#75848F', marginBottom: 1}}
              bold
              sizeText={16}>
              Pagamento
            </SubTitleText>
            <Input
              style={{width: '60%'}}
              labelText="Valor"
              autoCapitalize="none"
              placeholder="00,00"
              returnKeyType="next"
              icon="clock"
              onChange={text => null}
            />

            <SubTitleText
              bold={false}
              sizeText={14}
              style={{color: '#424242', marginBottom: 4, marginTop: 24}}>
              Status
            </SubTitleText>
            <View style={{zIndex: 2}}>
              <DropDownPicker
                style={{
                  borderWidth: 0,
                  borderColor: '#EAEAEB',
                  borderRadius: 9,
                }}
                open={openStatus}
                value={status}
                items={itemsStatus}
                setOpen={setStatusOpen}
                setValue={setStatus}
                setItems={setItemsStatus}
                placeholder="Status"
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

            <SubTitleText
              bold={false}
              sizeText={14}
              style={{color: '#424242', marginBottom: 4, marginTop: 24}}>
              Matéria
            </SubTitleText>
            <View style={{zIndex: 2}}>
              <DropDownPicker
                style={{
                  borderWidth: 0,
                  borderColor: '#EAEAEB',
                  borderRadius: 9,
                }}
                open={materiaOpen}
                value={materiaId}
                items={materias}
                setOpen={setMateriaOpen}
                setValue={setMateriaId}
                setItems={setMaterias}
                placeholder="Selecione a Matéria"
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
            <Button
              icon=""
              onPress={() => agendamento()}
              style={{marginTop: 32, marginBottom: 50, width: '100%'}}>
              Agendar Aula
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Agendar;
