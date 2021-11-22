import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import Button from '../../components/button';
import Header from '../../components/header';
import Input from '../../components/input';
import {formatarSaidaCPF, formatarSaidaDat} from '../../utils/textMaskFormat';
import {Container, TextHeader} from './styles';

const Cadastro = ({navigation, screenName}) => {
  const [cpfValue, setCpfValue] = useState('');
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [senha, setSenha] = useState('');

  const cadastrar = () => {
    const professor = {
      nome: nome,
      cpf: cpfValue,
      senha: senha,
      dataNascimento: dataNascimento,
    };
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
              labelText="Data de Nascimento"
              autoCapitalize="none"
              placeholder="00/00/000"
              returnKeyType="next"
              value={dataNascimento}
              onChange={text =>
                setDataNascimento(formatarSaidaDat(text.nativeEvent.text))
              }
            />
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
              onPress={() => navigation.navigate('DashBoard')}
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
