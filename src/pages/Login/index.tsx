import React, {useContext, useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  PermissionsAndroid,
} from 'react-native';
import Button from '../../components/button';
import Input from '../../components/input';
import {useNavigation} from '@react-navigation/native';
import {formatarSaidaCPF} from '../../utils/textMaskFormat';
import {Title, Container, Cadastrese} from './styles';
import LoginContext from '../../context/TarefasContext';
import {realizarLogin} from './Api';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [cpfValue, setCpfValue] = useState('');
  const [senhaValue, setSenhaValue] = useState('');

  const {state, dispatch} = useContext(LoginContext);

  const login = async () => {
    if (cpfValue === '' || senhaValue === '') {
      Alert.alert('Dados inválidos');
      return;
    }

    const cpf = cpfValue.replace(/\D+/g, '');

    try {
      const response = await realizarLogin(cpf, {senha: senhaValue});
      if (response.status === 401) {
        Alert.alert('Login ou senha incorretos');
      } else if (response.status === 200) {
        dispatch({
          type: 'add',
          payLoad: response.data,
        });
        navigation.navigate('DashBoard');
      }
    } catch (error) {
      Alert.alert('Não foi possível efetuar o login.');
    }

    //navigation.navigate('DashBoard')
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
            <Title>Portal do {'\n'} Professor</Title>
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
              value={senhaValue}
              onChange={text => setSenhaValue(text.nativeEvent.text)}
            />
            <Button
              onPress={() => login()}
              style={{marginTop: 32, marginBottom: 40}}>
              Entrar
            </Button>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: '10%',
              }}>
              <View
                style={{
                  flex: 1,
                  borderBottomColor: 'rgba(0, 0, 0, 0.08)',
                  borderBottomWidth: 1,
                }}
              />
            </View>
            <Cadastrese
              onPress={() => {
                navigation.navigate('Cadastro');
              }}>
              Cadastre-se
            </Cadastrese>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;
