import React from "react";
import { StyledJumbo } from "../styles/components";

export default function Jumbo({ description }) {
  return (
    <StyledJumbo>
      <h2>Consigue La mejor ropa de Platzi</h2>
      <small>{description}</small>
    </StyledJumbo>
  );
}
