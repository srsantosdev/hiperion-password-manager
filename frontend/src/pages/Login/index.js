import React from "react";

import {
  Page,
  Container,
  Header,
  Logo,
  ContainerLinks,
  LabelLogin,
  LinkRegister,
  ContainerForm,
  Title,
  Description,
  Form,
  Input,
  ButtonSubmit,
  ForgotPassword,
  ContainerIllustration,
  Illustration
} from "./styles";

import logoImg from "./../../assets/logo.svg";
import illustration from "./../../assets/illustration-login.png";

export default function Login() {
  return (
    <Page>
      <Container>
        <Header>
          <Logo src={logoImg} />
          <ContainerLinks>
            <LabelLogin>Login</LabelLogin>
            <LinkRegister>Cadastrar</LinkRegister>
          </ContainerLinks>
        </Header>

        <ContainerForm>
          <Title>Login</Title>
          <Description>
            Entre para ter acesso à todas as suas senhas.
          </Description>
          <Form>
            <Input placeholder="Usuário" />
            <Input placeholder="Senha" />

            <ButtonSubmit>Entrar</ButtonSubmit>
          </Form>
          <ForgotPassword>Esqueceu a senha?</ForgotPassword>
        </ContainerForm>
      </Container>
      <ContainerIllustration>
        <Illustration src={illustration} />
      </ContainerIllustration>
    </Page>
  );
}
