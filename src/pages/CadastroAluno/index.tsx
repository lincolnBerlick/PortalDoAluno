import React, {useState} from 'react';
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

const CadastroAluno = ({navigation, screenName}) => {
  const [cpfValue, setCpfValue] = useState('');
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Ensino medio incompleto', value: 'Ensino medio incompleto'},
    {label: 'Ensino superior completo', value: 'Ensino superior completo'},
  ]);

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
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
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
              onPress={() => navigation.navigate('DashBoard')}
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
