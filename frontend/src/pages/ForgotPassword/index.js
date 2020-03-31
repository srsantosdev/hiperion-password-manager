import React from "react";

import {
  Page,
  Container,
  Header,
  Logo,
  LinkBack,
  Title,
  Description,
  Form,
  ButtonSubmit
} from "./styles";

import Input from "./../../components/Input";
import { FiMail, FiUser, FiArrowLeft } from "react-icons/fi";

import logo from "./../../assets/logo.svg";

export default function ForgotPassword() {
  return (
    <Page>
      <Header>
        <Logo src={logo} />
        <LinkBack>
          <FiArrowLeft style={{ marginRight: 20 }} size={20} />
          Voltar ao login
        </LinkBack>
      </Header>

      <Container>
        <Title>Recuperar a Senha</Title>
        <Description>Nos informe o seu nome de usuário e email.</Description>

        <Form>
          <Input placeholder="Usuário" icon={FiUser} />
          <Input placeholder="E-mail" icon={FiMail} />

          <ButtonSubmit>Lembrar-me</ButtonSubmit>
        </Form>
      </Container>
    </Page>
  );
}
