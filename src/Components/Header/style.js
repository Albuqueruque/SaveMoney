import styled from "styled-components";

export const ContainerHeader = styled.div`
  height: 10rem;
  position: fixed;
  width: 100%;
  background: #86939e;
  box-shadow: 0 0.3rem 0.5rem #00000029;
  z-index: 99;
  opacity: 1;
  top: 0;
`;

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