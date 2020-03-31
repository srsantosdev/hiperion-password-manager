import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Container = styled.div`
  margin: 0 450px;
  margin-top: 40px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 100px;
  margin-top: 70px;
`;

export const Logo = styled.img``;

export const LinkBack = styled.button`
  border: none;
  background-color: transparent;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #363062;
  transition: opacity .3s;
  &:hover{
    opacity: 0.7
  }
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-weight: normal;
  font-size: 32px;
  line-height: 37px;
  color: #19171b;
  text-align: center;
`;

export const Description = styled.p`
  font-family: Roboto;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  margin-top: 10px;
  color: #9c9a9a;
  letter-spacing: 0.03rem;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

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
