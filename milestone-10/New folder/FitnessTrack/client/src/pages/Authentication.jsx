import React, { useState } from 'react'
import styled from "styled-components";
import LogoImage from './../utils/images/logo.png'
import AuthImage from './../utils/images/authImage.jpg'

const Container = styled.div`
flex:1;
height:100%;
display:flex;
background:${({theme})=>theme.bg};
@media (max-width:700px){
    flex-direction:column;
}
`;
const Left = styled.div`
  flex: 1;
  background: blue;
  position:relative;
  @media (max-width: 700px) {
   display:none;
  }
`;
const Logo = styled.img`
  position:absolute;
  width:70px;
  top:40px;
  left:60px;
  z-index:10;
  }
`;
const Image= styled.img`
  positive:relative;
  height:100%;
  width:100%;
  object-fit:cover;
`;
const Right = styled.div`
  flex: 1;
  background: red;
`;

const Authentication = () => {

    const [login,setLogin] = useState(false);

  return (
    <Container>
      <Left>
        <Logo src={LogoImage} />
        <Image src={AuthImage} />
      </Left>
      <Right>
        {login ? (
          <>
            <Text>Don&apos;t have an account? SignUp</Text>
          </>
        ) : (
          <></>
        )}
      </Right>
    </Container>
  );
}

export default Authentication