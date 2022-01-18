import React from "react";
import { GlobalStyle, Container } from "./Styles/Global";
import {Routing } from "./Routes/index"

export function App() {
  return (
    <Container>
    <GlobalStyle />
    <Routing />
    </Container>
  )
}

