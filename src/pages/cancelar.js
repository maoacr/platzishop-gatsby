import React from "react";
import { Link } from "gatsby";
import { SEO } from "../components";
import { Button, Purchase } from "../styles/components";

export default function cancelar() {
  return (
    <div>
      <SEO tittle="Lo sentimos" />
      <Purchase>
        <h2>Lo sentimos</h2>
        <p>Estará todo el tiempo disponible para tí</p>
        <p>¡ Te esperamos de vuelta, nunca pares de aprender !</p>
        <span role="img" aria-label="emoji">
          💔
        </span>
        <Link to="/">
          <Button>Volver al catálogo</Button>
        </Link>
      </Purchase>
    </div>
  );
}
