import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  position: relative;
  border: none;
  width: 100%;
  background-color: transparent;
  border-bottom: 1px solid #999696;
  font-family: Roboto;
  font-weight: 300;
  font-size: 16px;
  color: #363062;
  margin-top: 30px;
  padding: 10px;
  transition: 0.3s;
  ::placeholder {
    color: #999696;
  }
  &:focus {
    border-bottom: 2px solid #363062;
  }
`;

export const Span = styled.span`
  position: absolute;
  margin-top: 38px;
  z-index: 5;
  margin-left: -30px;
`;
