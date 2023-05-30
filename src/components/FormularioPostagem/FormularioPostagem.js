import { FormContainer, Form, Input, StyledLabel } from "./FormularioPostagem.styled";
import { useState } from "react";

export const FormularioCadastro = ({photo, description, title, setTitle, setPhoto, setDescription}) => {
  //Passo 1 - Estado
    

  //Passo 2 - Funções
    const handlePhoto=(event)=>{
      setPhoto(event.target.value)
    }
    const handleDescription=(event)=>{
      setDescription(event.target.value)
    }
    const handleTitle=(event)=>{
      setTitle(event.target.value)
    }

  //Passo 3 - Onchange


  //Passo 4 - Value

  return (
    <FormContainer>
      <h1>Insira sua postagem abaixo: </h1>

      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" onChange={handleTitle} value={title}/>
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" onChange={handlePhoto} value={photo}/>
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" onChange={handleDescription} value={description}/>
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
