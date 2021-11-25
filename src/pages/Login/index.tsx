import React, {useState} from 'react';
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
import axios from 'axios';

const request = async () => {
  return await axios
    .get('http://10.0.2.2:5000/professor', {})
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
};

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [cpfValue, setCpfValue] = useState('');
  request();
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
            />
            <Button
              onPress={() => Alert.alert('clicou')}
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
            <Cadastrese onPress={() => navigation.navigate('Cadastro')}>
              Cadastre-se
            </Cadastrese>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;
