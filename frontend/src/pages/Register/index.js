import React from "react";

import {
  Page,
  Container,
  ContainerIllustration,
  Illustration,
  Header,
  ContainerLinks,
  LinkLogin,
  Logo,
  LabelRegister,
  ContainerForm,
  Title,
  Description,
  Form,
  ButtonSubmit
} from "./styles";

import Input from "./../../components/Input";

import { FiMail, FiUser, FiLock, FiPhone } from "react-icons/fi";

import logo from "./../../assets/logo.svg";
import illustration from "./../../assets/illustration-register.png";

export default function Register() {
  return (
    <Page>
      <ContainerIllustration>
        <Illustration src={illustration} />
      </ContainerIllustration>

      <Container>
        <Header>
          <Logo src={logo} />
          <ContainerLinks>
            <LinkLogin>Login</LinkLogin>
            <LabelRegister>Cadastrar</LabelRegister>
          </ContainerLinks>
        </Header>

        <ContainerForm>
          <Title>Cadastre-se</Title>
          <Description>
            Tenha todas as suas senhas criptografádas em um lugar seguro.
          </Description>

          <Form>
            <Input placeholder="Nome de usuário" icon={FiUser} />
            <Input placeholder="Senha" icon={FiLock} />
            <Input placeholder="Telefone" icon={FiPhone} />
            <Input placeholder="E-mail" icon={FiMail} />

            <ButtonSubmit>Cadastrar</ButtonSubmit>
          </Form>
        </ContainerForm>
      </Container>
    </Page>
  );
}
