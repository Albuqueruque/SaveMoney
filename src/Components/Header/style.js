import styled from "styled-components";

export const ContainerHeader = styled.div`
  height: 10rem;
  position: fixed;
  width: 100%;
  background: #d2effa;
  box-shadow: 0 0.3rem 0.5rem #00000029;
  z-index: 99;
  opacity: 1;
  top: 0;
`;

export const BottomBox = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 90%;
  /* background: #ffab01; */
`

export const LogoContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: flex-end;
  margin-left: 10%;
`
export const Logo = styled.img`
  height: 100%;
`

export const ContainerButton = styled.div`
  margin-left: 50%;
  margin-top: 2%;
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
  background: ${props => props.primary ? "#d2effa" : "#387bff"};
  color: ${props => props.primary ? "#387bff" : "#d2effa"};

  font-size: 1rem;
  margin: 1rem;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 3px;
  font-family: "Poppins";
`

