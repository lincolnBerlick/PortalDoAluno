import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import Button from '../components/button';
import Input from '../components/input';
import {formatarSaidaCPF} from '../utils/textMaskFormat';
import {Title, Container, Cadastrese} from './styles';

const Login: React.FC = () => {
  const [cpfValue, setCpfValue] = useState('');
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
            <Button style={{marginTop: 32, marginBottom: 40}}>
              Criar Conta
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
            <Cadastrese>Cadastre-se</Cadastrese>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;
