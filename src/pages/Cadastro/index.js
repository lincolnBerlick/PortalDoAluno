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
import {formatarSaidaCPF} from '../../utils/textMaskFormat';
import {cadastrarProfessor, buscaGraus} from './Api';
import {Container, TextHeader} from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
import {enumFormater} from '../../utils/enumFormater';
import SubTitleText from '../../components/subtitleText';

const Cadastro = ({navigation, screenName}) => {
  const [cpfValue, setCpfValue] = useState('');
  const [nome, setNome] = useState('');
  const [crn, setCrn] = useState('');
  const [senha, setSenha] = useState('');
  const [grau, setGrau] = useState('');

  const [graus, setGraus] = useState([]);
  const [open, setOpen] = useState(false);

  const cadastrar = async () => {
    const cpf = cpfValue.replace(/\D+/g, '');
    const professor = {
      nome,
      cpf,
      senha,
      crn,
      grauId: grau,
    };
    try {
      const response = await cadastrarProfessor(professor);

      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Não foi possível efetuar o cadastro');
    }
  };

  const getGraus = async () => {
    try {
      const {data} = await buscaGraus();
      setGraus(enumFormater(data));
    } catch (error) {}
  };

  useEffect(() => {
    getGraus();
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
              labelText="CRN"
              autoCapitalize="none"
              placeholder="0000000000000000"
              returnKeyType="next"
              value={crn}
              maxLength={16}
              onChange={text => setCrn(text.nativeEvent.text)}
            />
            <View style={{marginTop: 20, zIndex: 3}}>
              <DropDownPicker
                style={{
                  borderWidth: 0,
                  borderColor: '#EAEAEB',
                  borderRadius: 9,
                  width: 311,
                }}
                open={open}
                value={grau}
                items={graus}
                setOpen={setOpen}
                setValue={setGrau}
                setItems={setGraus}
                placeholder="Selecione seu grau de formação"
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
            <TextHeader style={{marginTop: 40}}>Dados de Login</TextHeader>
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
            <Input
              labelText="Senha"
              autoCapitalize="none"
              placeholder="**********"
              returnKeyType="next"
              icon="lock-outline"
              value={senha}
              onChange={text => setSenha(text.nativeEvent.text)}
            />
            <Button
              onPress={() => cadastrar()}
              style={{marginTop: 32, marginBottom: 40}}>
              Cadastre-se
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Cadastro;
