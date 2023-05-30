import React from "react";
import { ContainerPostagem, Title, Image, Description } from "./TelaDaPostagem.styled";

    const TelaDaPostagem = ({photo, description, title}) => {
  return (
    <ContainerPostagem>
      <Title>{title}</Title>
      <Image src={photo} />
      <Description>{description}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
