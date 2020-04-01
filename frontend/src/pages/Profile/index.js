import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
// @ts-ignore
import { store } from "react-notifications-component";
import { FiPower } from "react-icons/fi";
import Card from "./../../components/Card";
import api from "./../../services/api";
import logo from "./../../assets/logo.svg";

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

export default function Profile() {
  const history = useHistory();
  const user_id = localStorage.getItem("user_id");
  const authorization = localStorage.getItem("authorization");
  const [passwords, setPasswords] = useState([]);

  useEffect(() => {
    api.get(`profile/${user_id}`, { headers: { authorization } }).then(res => {
      setPasswords(res.data);
    });
  }, [user_id, authorization]);

  const handleDelete = async id => {
    try {
      const response = await api.delete(`/password/${id}`, {
        headers: {
          Authorization: authorization,
          user_id
        }
      });
      if (response.status === 204) {
        store.addNotification({
          title: "Concluído!",
          message: "Senha deletada com sucesso.",
          type: "success",
          ...optionsNotification
        });
        setPasswords(passwords.filter(password => password.id !== id));
      }
    } catch (err) {
      store.addNotification({
        title: "Erro",
        message: "Erro ao deletar a senha, tente novamente mais tarde!",
        type: "danger",
        ...optionsNotification
      });
    }
  };

  return (
    <Page>
      <Header>
        <Logo src={logo} />
        <ContainerButtons>
          <NewPasswordButton onClick={() => history.push("/password/new")}>
            Criar nova senha
          </NewPasswordButton>
          <LogoutButton
            onClick={() => {
              localStorage.clear();
              history.push("/");
            }}
          >
            <FiPower size={18} style={{ marginRight: 5 }} />
            Sair
          </LogoutButton>
        </ContainerButtons>
      </Header>

      <Title>Senhas Cadastradas</Title>
      <ContainerPasswords>
        {passwords.map(({ id, description, password }) => (
          <Card
            key={id}
            password={password}
            id={id}
            description={description}
            handleDelete={() => handleDelete(id)}
          />
        ))}
      </ContainerPasswords>
    </Page>
  );
}
