import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 150px;
  padding: 35px;
`;

export const ContainerProperties = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
`;

export const Property = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  font-variant: small-caps;
  margin-right: 20px;
`;

export const Description = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  font-variant: small-caps;
`;

export const Password = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  font-variant: small-caps;
  margin-left: 35px;
`;

export const ContainerActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const ViewPassword = styled.button`
  border: none;
  background-color: transparent;
`;

export const Span = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
