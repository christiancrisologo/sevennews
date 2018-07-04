import React from "react";
import styled from "styled-components";
import tile from "./assets/tile.jpg";
import logo from "./assets/logo.png";

const Wrapper = styled.section`
  background: #000;
  width: 600px;
  height: 355px;
  background-image: url(${tile});
  margin: 10% auto;
`;

const TitleContainer = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: relative;
  padding: 0px 10px;
  top: 250px;
  left: 0px;
  width: 100%;
  height: 105px;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

const Title = styled.h1`
  font-size: 2.1em;
  text-align: left;
  color: #fff;
  padding-left: 10px;
`;

const IntroComponent = props => (
  <Wrapper>
    <TitleContainer>
      <Logo src={logo} alt="7 news logo" />
      <Title>Home and Away</Title>
    </TitleContainer>
  </Wrapper>
);

export default IntroComponent;
