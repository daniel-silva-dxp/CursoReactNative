import React from 'react';
import styled from 'styled-components/native';


const Container = styled.SafeAreaView`
  flex:1;
  background-color: #F8F8F8;
`;

const Header = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #FFF;
  justify-content: center;
  align-items: center;
  padding: 5px;
  height: 150px;
`;

const Box = styled.View`
  width: 50px;
  height: 50px;
  background-color: ${props=>props.cor};;
`;

export default () => {
  return (
    <Container>
      <Header>
        <Box cor="#FFF45A"></Box>
        <Box cor="#00AC9E"></Box>
        <Box cor="#8B0265"></Box>
        <Box cor="#FFF45A"></Box>
        <Box cor="#00AC9E"></Box>
        <Box cor="#8B0265"></Box>
        <Box cor="#FFF45A"></Box>
        <Box cor="#00AC9E"></Box>
        <Box cor="#8B0265"></Box>
      </Header>
    </Container>
  )
}
