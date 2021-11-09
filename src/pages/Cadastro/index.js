import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import Button from '../../components/button';
import Input from '../../components/input';
import {formatarSaidaCPF} from '../../utils/textMaskFormat';
import {Title, Container, Cadastrese, TextHeader} from './styles';

const Cadastro = () => {
  const [cpfValue, setCpfValue] = useState('');
  const [nome, setNome] = useState('');
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
            <Title>Cadastre-se</Title>
            <TextHeader style={{marginTop: 40}}>Dados pessoais</TextHeader>
            <Input
              labelText="Nome"
              autoCapitalize="none"
              placeholder="Pedro Rodrigues"
              returnKeyType="next"
              value={cpfValue}
              onChange={text => setNome(text.nativeEvent.text)}
            />

            <Input
              labelText="Data de Nascimento"
              autoCapitalize="none"
              placeholder="00/00/000"
              returnKeyType="next"
              value={cpfValue}
              onChange={text => setNome(text.nativeEvent.text)}
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
            />
            <Button
              onPress={() => Alert.alert('clicou')}
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
