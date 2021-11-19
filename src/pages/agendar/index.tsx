import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import {Icon} from '../../components/button/styles';
import Header from '../../components/header';
import SubTitleText from '../../components/subtitleText';
import {Container, TextContent} from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
import Input from '../../components/input';
import {formatarSaidaDat} from '../../utils/textMaskFormat';
import Button from '../../components/button';

const Agendar: React.FC = (...props) => {
  const [dataNascimento, setDataNascimento] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

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
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Selecione Aluno(a, u, e, i)"
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
              labelText="Data"
              autoCapitalize="none"
              placeholder="00/00/000"
              returnKeyType="next"
              value={dataNascimento}
              icon="calendar"
              onChange={text =>
                setDataNascimento(formatarSaidaDat(text.nativeEvent.text))
              }
            />

            <Input
              style={{width: '60%'}}
              labelText="Horário"
              autoCapitalize="none"
              placeholder="00:00 - 01:00"
              returnKeyType="next"
              value={dataNascimento}
              icon="clock"
              onChange={text =>
                setDataNascimento(formatarSaidaDat(text.nativeEvent.text))
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
              placeholder="00:00 - 01:00"
              returnKeyType="next"
              value={dataNascimento}
              icon="clock"
              onChange={text =>
                setDataNascimento(formatarSaidaDat(text.nativeEvent.text))
              }
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
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Selecione Aluno(a, u, e, i)"
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
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Selecione Aluno(a, u, e, i)"
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
