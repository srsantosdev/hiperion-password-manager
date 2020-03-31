import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 100px;
  margin-top: 70px;
  margin-bottom: 50px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  width: 30%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img``;

export const NewPasswordButton = styled.button`
  font-family: Roboto;
  font-weight: normal;
  font-size: 16px;
  text-transform: uppercase;
  width: 240px;
  height: 50px;
  background-color: #363062;
  border: none;
  color: #ffffff;
  transition: filter 0.3s;
  &:hover {
    filter: brightness(90%);
  }
`;

export const LogoutButton = styled.button`
  font-family: Roboto;
  font-weight: normal;
  font-size: 16px;
  text-transform: uppercase;
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: 1px solid #af2222;
  color: #af2222;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.7;
  }
`;

export const Title = styled.h1`
  margin: 0 100px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 37px;
  color: #000000;
`;

export const ContainerPasswords = styled.div`
  margin: 0 100px;
  margin-top: 35px;
  grid-gap: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
