import React, {useState, useEffect} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import Button from '../../components/button';
import Header from '../../components/header';
import Input from '../../components/input';
import {formatarSaidaCPF, formatarSaidaDat} from '../../utils/textMaskFormat';
import {Container, TextHeader} from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
import SubTitleText from '../../components/subtitleText';
import {buscaFormacoes, cadastrarAluno} from './Api';
import {enumFormater} from '../../utils/enumFormater';

const CadastroAluno = ({navigation, screenName}) => {
  const [cpfValue, setCpfValue] = useState('');
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [open, setOpen] = useState(false);
  const [escolaridadeId, setEscolaridadeId] = useState(null);
  const [formacoes, setFormacoes] = useState([]);

  const getEscolaridades = async () => {
    try {
      const {data} = await buscaFormacoes();
      setFormacoes(enumFormater(data));
    } catch (error) {}
  };

  const cadastro = async () => {
    const cpf = cpfValue.replace(/\D+/g, '');
    const aluno = {
      senha: '123456',
      cpf,
      nome,
      idade,
      escolaridadeId,
    };
    try {
      const response = await cadastrarAluno(aluno);

      navigation.navigate('DashBoard');
    } catch (error) {}
  };

  useEffect(() => {
    getEscolaridades();
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

            <TextHeader style={{marginTop: 32}}>Dados pessoais</TextHeader>
            <Input
              labelText="Nome"
              autoCapitalize="none"
              placeholder="Pedro Rodrigues"
              returnKeyType="next"
              value={nome}
              onChange={text => setNome(text.nativeEvent.text)}
            />

            <Input
              labelText="Idade"
              autoCapitalize="none"
              placeholder="00"
              returnKeyType="next"
              value={idade}
              maxLength={3}
              onChange={text => setIdade(text.nativeEvent.text)}
            />
            <Input
              labelText="CPF"
              autoCapitalize="none"
              placeholder="000.000.000-00"
              returnKeyType="next"
              value={cpfValue}
              onChange={text =>
                setCpfValue(formatarSaidaCPF(text.nativeEvent.text))
              }
            />
            <TextHeader style={{marginTop: 32}}>Escolaridade</TextHeader>
            <SubTitleText bold={true} sizeText={15}>
              Grau de escolaridade
            </SubTitleText>
            <View style={{zIndex: 2}}>
              <DropDownPicker
                style={{
                  borderWidth: 0,
                  borderColor: '#EAEAEB',
                  borderRadius: 9,
                }}
                open={open}
                value={escolaridadeId}
                items={formacoes}
                setOpen={setOpen}
                setValue={setEscolaridadeId}
                setItems={setFormacoes}
                placeholder="Selecione o Grau de escolaridade"
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
              onPress={() => cadastro()}
              style={{marginTop: 32, marginBottom: 40}}>
              Cadastrar aluno
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default CadastroAluno;
