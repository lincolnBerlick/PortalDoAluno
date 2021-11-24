import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
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

const Agendar: React.FC = (...props) => {
  const [dataAula, setDataAula] = useState('');
  const [horaAula, setHoraAula] = useState('');
  const [status, setStatus] = useState('');

  const [open, setOpen] = useState(false);
  const [openStatus, setStatusOpen] = useState(false);
  const [aluno, setAlunos] = useState('');

  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  const [itemsStatus, setItemsStatus] = useState([
    {label: 'Pago', value: 'Pago'},
    {label: 'Pendente', value: 'Pendente'},
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
                value={aluno}
                items={items}
                setOpen={setOpen}
                setValue={setAlunos}
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
              value={dataAula}
              icon="calendar"
              onChange={text =>
                setDataAula(formatarSaidaDat(text.nativeEvent.text))
              }
            />

            <Input
              style={{width: '60%'}}
              labelText="Horário"
              autoCapitalize="none"
              placeholder="00:00 - 01:00"
              returnKeyType="next"
              value={horaAula}
              icon="clock"
              onChange={text => setHoraAula(text.nativeEvent.text)}
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
                open={open}
                value={aluno}
                items={items}
                setOpen={setOpen}
                setValue={setAlunos}
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
