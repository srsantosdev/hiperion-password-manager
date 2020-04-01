import "react-notifications-component/dist/theme.css";
import React, { useState } from "react";
import { FiUser, FiLock } from "react-icons/fi";
import { useHistory } from "react-router-dom";
// @ts-ignore
import { store } from "react-notifications-component";

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
import api from "./../../services/api";
import logoImg from "./../../assets/logo.svg";
import illustration from "./../../assets/illustration-login.png";

const optionsNotification = {
  insert: "top",
  container: "top-right",
  animationIn: ["animated", "fadeIn"],
  animationOut: ["animated", "fadeOut"],
  dismiss: {
    duration: 2000,
    showIcon: true
  }
};

export default function Login() {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      if (!credentials.username || !credentials.password) {
        store.addNotification({
          title: "Atenção!",
          message: "É necessário informar suas credenciais.",
          type: "warning",
          ...optionsNotification
        });
      } else {
        const response = await api.post("session", credentials);
        if (response.status === 200 && response.data.token) {
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("user_id", response.data.id);
          localStorage.setItem("authorization", response.data.token);
          history.push("/profile");
        }
        if (response.status === 401) {
          store.addNotification({
            title: "Erro de autenticação",
            message: "Usuário e/ou senha invalidos!",
            type: "warning",
            ...optionsNotification
          });
        }
      }
    } catch (err) {
      store.addNotification({
        title: "Error!",
        message: "Erro ao fazer login, tente novamente mais tarde.",
        type: "danger",
        ...optionsNotification
      });
    }
  };

  return (
    <Page>
      <Container>
        <Header>
          <Logo src={logoImg} />
          <ContainerLinks>
            <LabelLogin>Login</LabelLogin>
            <LinkRegister onClick={() => history.push("/register")}>
              Cadastrar
            </LinkRegister>
          </ContainerLinks>
        </Header>

        <ContainerForm>
          <Title>Login</Title>
          <Description>
            Entre para ter acesso à todas as suas senhas.
          </Description>
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="Usuário"
              icon={FiUser}
              value={credentials.username}
              onChange={e =>
                setCredentials({ ...credentials, username: e.target.value })
              }
            />
            <Input
              placeholder="Senha"
              type="password"
              icon={FiLock}
              value={credentials.password}
              onChange={e =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
            <ButtonSubmit type="submit">Entrar</ButtonSubmit>
          </Form>
          <ForgotPassword onClick={() => history.push("/forgot-password")}>
            Esqueceu a senha?
          </ForgotPassword>
        </ContainerForm>
      </Container>
      <ContainerIllustration>
        <Illustration src={illustration} />
      </ContainerIllustration>
    </Page>
  );
}
