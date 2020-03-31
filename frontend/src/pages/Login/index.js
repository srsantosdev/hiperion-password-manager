import React from "react";
import { FiUser, FiLock } from "react-icons/fi";

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
  ButtonSubmit,
  ForgotPassword,
  ContainerIllustration,
  Illustration
} from "./styles";

import Input from "./../../components/Input";

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
            <Input placeholder="Usuário" icon={FiUser} />
            <Input placeholder="Senha" icon={FiLock}/>
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
