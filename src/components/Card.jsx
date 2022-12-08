import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ id, name, price }) => {
  return (
    <li key={id} className="cardItem">
      <div className="cardInfo">
        <h2>{name.toUpperCase()}</h2>
        <p className="price">Preço R$ {price}</p>
      </div>

      <Link className="btn" to={`/products/${id}`}>
        Detalhes
      </Link>
    </li>
  );
};

export default Card;
