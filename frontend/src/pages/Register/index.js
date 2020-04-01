import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
import api from "./../../services/api";
import { store } from "react-notifications-component";
import logo from "./../../assets/logo.svg";
import illustration from "./../../assets/illustration-register.png";

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

export default function Register() {
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
    phone: "",
    email: ""
  });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (!user.username || !user.password || !user.email || !user.phone) {
        store.addNotification({
          title: "Atenção!",
          message: "É necessário preencher todos os dados",
          type: "warning",
          ...optionsNotification
        });
      } else {
        const response = await api.post("/user/create", user);
        if (response.status === 200 && response.data.user) {
          store.addNotification({
            title: "Cadastro Concluido",
            message: "Seja bem vindo ao Hiperion!",
            type: "success",
            ...optionsNotification
          });
          history.push('/login')
        }
      }
    } catch (err) {
      store.addNotification({
        title: "Erro ao cadastrar",
        message: "Tivemos um problema no cadastro, tente novamente mais tarde.",
        type: "warning",
        ...optionsNotification
      });
    }
  };

  return (
    <Page>
      <ContainerIllustration>
        <Illustration src={illustration} />
      </ContainerIllustration>

      <Container>
        <Header>
          <Logo src={logo} />
          <ContainerLinks>
            <LinkLogin onClick={() => history.push("/login")}>Login</LinkLogin>
            <LabelRegister>Cadastrar</LabelRegister>
          </ContainerLinks>
        </Header>

        <ContainerForm>
          <Title>Cadastre-se</Title>
          <Description>
            Tenha todas as suas senhas criptografádas em um lugar seguro.
          </Description>

          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="Nome de usuário"
              icon={FiUser}
              value={user.username}
              onChange={e => {
                setUser({ ...user, username: e.target.value });
              }}
            />
            <Input
              placeholder="Senha"
              type="password"
              icon={FiLock}
              value={user.password}
              onChange={e => {
                setUser({ ...user, password: e.target.value });
              }}
            />
            <Input
              placeholder="Telefone"
              icon={FiPhone}
              value={user.phone}
              onChange={e => {
                setUser({ ...user, phone: e.target.value });
              }}
            />
            <Input
              placeholder="E-mail"
              icon={FiMail}
              value={user.email}
              onChange={e => {
                setUser({ ...user, email: e.target.value });
              }}
            />

            <ButtonSubmit type="submit">Cadastrar</ButtonSubmit>
          </Form>
        </ContainerForm>
      </Container>
    </Page>
  );
}
