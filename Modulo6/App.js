/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import styled from 'styled-components/native';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

//Trabalhando com props (PROPS SÃO CONSTRANTES E NÃO PODEM SER MUDADAS)
const Brandi = (props) => {
  return (
    <Text style={styles.brandi}>{props.brandi}</Text>
  )
};

//Criando states
const Paragraph = () => {
  const [name, setName ] = useState("Mostramos o caminho pro agronegócio"); //Criando states
  return (
    <Text style={styles.paragraph}>{name}</Text>
  )
}

//Criando input de texto
const Form = () => {
  const [str, setName] = useState("");

  const [show, isShow] = useState(false); //State para exibir o box

  //Função para mudar o texto
  function changeText(str){
    setName(str);
  }

  function handleClick(){
    isShow(!show);
  }

  return (
    <View style={styles.content}>
      <TextInput style={styles.input} placeholder="Nome" onChangeText={changeText}/>
      <Button title={show ? 'Hide' : 'Show'} onPress={handleClick} color='#8B0265' />
      {show && 
        <View style={styles.box}>
          <Text>{str}</Text>
        </View>
      }
      
    </View>
  )
}



const App = () => {
  return (
      <SafeAreaView style={styles.container}>
        <Brandi brandi="VOU de agro" />
        <Paragraph />
        <Form />
      </SafeAreaView>
  );
};


/*------------
  STYLES
------------*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00AC9E',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  brandi: {
    margin: 5,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF45A'
  },
  paragraph: {
    margin: 5,
    fontSize: 12,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#FFF'
  },
  input: {
    width:350,
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#FFF45A',
    backgroundColor: '#FFF45A',
    borderStyle: 'solid'
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: '#FFF',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#8B0265'
  }

})

export default App;
