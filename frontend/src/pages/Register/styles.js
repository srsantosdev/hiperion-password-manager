import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  width: 50%;
  height: 100vh;
  padding: 0 96px;
`;

export const ContainerIllustration = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #363062;
  width: 50%;
  height: 100vh;
`;

export const Illustration = styled.img``;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 70px;
`;

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
`;

export const LinkLogin = styled.button`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  border: none;
  background-color: transparent;
  color: #000;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.7;
  }
`;

export const Logo = styled.img``;

export const LabelRegister = styled.button`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  border: none;
  background-color: transparent;
  color: #363062;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-weight: normal;
  font-size: 32px;
  line-height: 37px;
  color: #19171b;
  text-align: end;
`;

export const Description = styled.p`
  font-family: Roboto;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  margin-top: 10px;
  color: #9c9a9a;
  text-align: end;
  letter-spacing: 0.03rem;
`;

export const Form = styled.form``;

export const ButtonSubmit = styled.button`
  width: 100%;
  height: 56px;
  background: #363062;
  font-family: Roboto;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: 60px;
  margin-bottom: 30px;
  transition: filter 0.3s;
  &:hover {
    filter: brightness(90%);
  }
`;
