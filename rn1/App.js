import React, { Component } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native'; //Importando o styled-components

//Criando Styled Components
const Paragraph = styled.Text`
  color:#FFF;
  font-size:30px;
  text-transform:uppercase;
  letter-spacing:8px;
  padding: 5px;
`;

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.brandi}>DXPWeb Production</Text>
      <Text style={styles.paragraph}>CRIADORES DE SITES DE CLASSE MUNDIAL</Text>
      <Paragraph>Daniel Silva</Paragraph>
    </SafeAreaView>
  );
}

//Criando estilo css para os elementos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00AC9E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
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
    fontSize: 10,
    textAlign: 'center',
    color: '#FFF'
  }
})




/*
//Componente através de constante Arrow Functions 
const TextInicial = () => {
  return (
    <Text>DXPWeb Production</Text>
  );
}
*/

/*
//Componente através de Funções
function TextInicial(){
  return (
    <Text>Funções</Text>
  )
}
*/

/*
//Componente através de Classes
class TextInicial extends Component {
  render(){
    return (
      <Text>Classes</Text>
    )
  }
}
export default TextInicial;
*/


