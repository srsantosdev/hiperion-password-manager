import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
import api from "./../../services/api";
import logo from "./../../assets/logo.svg";
import { store } from "react-notifications-component";

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

export default function NewPassword() {
  const history = useHistory();
  const user_id = localStorage.getItem("user_id");
  const authorization = localStorage.getItem("authorization");
  const [password, setPassword] = useState({
    description: "",
    password: ""
  });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (!password.description || !password.password) {
        store.addNotification({
          title: "Atenção!",
          message: "Todos os dados são obrigatórios.",
          type: "warning",
          ...optionsNotification
        });
      } else {
        const response = await api.post(
          "password/create",
          {
            ...password,
            user_id
          },
          {
            headers: {
              authorization
            }
          }
        );

        if (response.status === 200 && response.data.password) {
          store.addNotification({
            title: "Concluido!",
            message: "Senha criada com sucesso.",
            type: "success",
            ...optionsNotification
          });
          history.push("/profile");
        }
      }
    } catch (err) {
      console.log(err)
      store.addNotification({
        title: "Erro",
        message: "Erro ao cadastrar a senha.",
        type: "danger",
        ...optionsNotification
      });
    }
  };

  return (
    <Page>
      <Header>
        <Logo src={logo} />
        <LinkBack onClick={() => history.push("/profile")}>
          <FiArrowLeft style={{ marginRight: 20 }} size={20} />
          Voltar para home
        </LinkBack>
      </Header>

      <Container>
        <Title>Criar nova senha</Title>

        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Descrição"
            value={password.description}
            onChange={e => {
              setPassword({ ...password, description: e.target.value });
            }}
          />
          <Input
            placeholder="Senha"
            value={password.password}
            onChange={e => {
              setPassword({ ...password, password: e.target.value });
            }}
          />

          <ButtonSubmit type="submit">Criar Senha</ButtonSubmit>
        </Form>
      </Container>
    </Page>
  );
}
