import styled, { createGlobalStyle } from "styled-components";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [photo, setPhoto] = useState("")
  const [description, setDescription] = useState("")
  const [title, setTitle] = useState("")

  return (
    <>
      <GlobalStyle />

      <Container>

        <FormularioPostagem
          setPhoto={setPhoto}
          setDescription={setDescription}
          setTitle={setTitle}
          title={title}
          description={description}
          photo={photo} />

        <TelaDaPostagem title={title}
          description={description}
          photo={photo}
        />

      </Container>
    </>
  );
}

export default App;
