import React from "react";
import { SEO } from "../components";
import { Button, Purchase } from "../styles/components";
import { Link } from "gatsby";

export default function gracias() {
  return (
    <div>
      <SEO tittle="Compra existosa" />
      <Purchase>
        <h2>Compra existosa</h2>
        <p>Espero que disfrutes tu prenda, lucela con orgullo</p>
        <p>¡ Te esperamos dl vuelta, nunca pares de aprender !</p>
        <span rol="img" aria-label="emoji">
          💚
        </span>
        <Link to="/">
          <Button>Volver al catálogo</Button>
        </Link>
      </Purchase>
    </div>
  );
}
