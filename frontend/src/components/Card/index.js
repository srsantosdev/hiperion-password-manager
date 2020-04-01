import React, { useState } from "react";
import {
  Container,
  ContainerProperties,
  Property,
  Description,
  Password,
  ContainerActions,
  DeleteButton,
  ViewPassword,
  Span
} from "./styles";

import { FiTrash2, FiEye, FiEyeOff } from "react-icons/fi";
import api from "./../../services/api";

export default function Card({
  id,
  password = "",
  description = "",
  handleDelete
}) {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <ContainerProperties>
        <Span>
          <Property>Descrição: </Property>
          <Description>{description}</Description>
        </Span>
        <Span>
          <Property>Senha: </Property>
          <Password>
            {visible ? password : "**********************************"}
          </Password>
        </Span>
      </ContainerProperties>
      <ContainerActions>
        <DeleteButton onClick={handleDelete}>
          <FiTrash2 size={20} color="#AF2222" />
        </DeleteButton>
        <ViewPassword onClick={() => setVisible(!visible)}>
          {visible ? <FiEyeOff size={20} /> : <FiEye size={20} />}
        </ViewPassword>
      </ContainerActions>
    </Container>
  );
}
