import React from "react";

import {
  Page,
  Container,
  Header,
  Logo,
  LinkBack,
  Title,
  Form,
  ButtonSubmit
} from "./styles";

import Input from "./../../components/Input";
import { FiArrowLeft } from "react-icons/fi";

import logo from "./../../assets/logo.svg";

export default function NewPassword() {
  return (
    <Page>
      <Header>
        <Logo src={logo} />
        <LinkBack>
          <FiArrowLeft style={{ marginRight: 20 }} size={20} />
          Voltar para home
        </LinkBack>
      </Header>

      <Container>
        <Title>Criar nova senha</Title>

        <Form>
          <Input placeholder="Descrição" />
          <Input placeholder="Senha" />

          <ButtonSubmit>Criar Senha</ButtonSubmit>
        </Form>
      </Container>
    </Page>
  );
}
