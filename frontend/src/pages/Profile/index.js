import React from "react";

import {
  Page,
  Header,
  ContainerButtons,
  Logo,
  NewPasswordButton,
  LogoutButton,
  Title,
  ContainerPasswords
} from "./styles";

import { FiPower } from "react-icons/fi";
import Card from "./../../components/Card";

import logo from "./../../assets/logo.svg";

export default function Profile() {
  return (
    <Page>
      <Header>
        <Logo src={logo} />
        <ContainerButtons>
          <NewPasswordButton>Criar nova senha</NewPasswordButton>
          <LogoutButton>
            <FiPower size={18} style={{ marginRight: 5 }} />
            Sair
          </LogoutButton>
        </ContainerButtons>
      </Header>

      <Title>Senhas Cadastradas</Title>
      <ContainerPasswords>
        <Card password="123456789" id="" description="Teste" />
        <Card password="123456789" id="" description="Teste" />
      </ContainerPasswords>
    </Page>
  );
}
