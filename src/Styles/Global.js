import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1920px) {
      font-size: 93.75% !important; //16px  
    }
    @media (max-width: 1366px) {
      font-size: 85.5% !important; //14px 
    }
  }

  body {
    background: #FFFFFF;
    -webkit-font-smoothing: antialiased; //Só funciona em MacOS
  }

  body, input, textarea, button, label, select, p, tr {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong, p, tr {
    font-weight: 600;
  }
  
  button, select {
    cursor: pointer;
    filter: brightness(1);
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9); 
    }

  }
  
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`;

export const Container = styled.div`
  width: 100%;
  margin: 15rem auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;