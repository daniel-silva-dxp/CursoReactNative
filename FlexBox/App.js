import React from 'react';
import styled from 'styled-components/native';


const Container = styled.SafeAreaView`
flex:1;
  background-color:#00AC9E;
  align-items:center;
  justify-content:center;
  padding: 8px;
`;

const Content = styled.View`
  flex:1;
  flex-direction:row;
  background-color:#00AC9E;
  align-items:center;
  justify-content:center;
  padding: 8px;
`;

const Box = styled.View`
  width:50px;
  height:50px;
  background-color:${props=>props.cor};;
`;

const Brandi = styled.Text`
  margin:5px;
  font-size:30px;
  font-weight:bold;
  text-align:center;
  color:#FFF45A
`;

const Paragraph = styled.Text`
  margin: 5px;
  font-size: 10px;
  text-align: center;
  color:#FFF;
`;

export default () => {
  return (

    <Container>
      <Brandi>DXPWeb Production</Brandi>
      <Paragraph>CRIADORES DE SITES DE CLASSE MUNDIAL</Paragraph>
      <Content>
        <Box cor="#FFF45A"></Box>
        <Box cor="#FFFF"></Box>
        <Box cor="#8B0265"></Box>
      </Content>      
    </Container>
  )
}
