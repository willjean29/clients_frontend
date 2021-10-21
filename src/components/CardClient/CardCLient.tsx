import React from "react";
import { IClient } from "interfaces/client.interface";
import "./CardClient.css";
interface CardClientProps {
  client: IClient;
}

const CardClient: React.FC<CardClientProps> = ({ client }) => {
  return (
    <div className="card">
      <div className="profile">
        <img
          src="https://www.centraltrials.com/wp-content/uploads/2016/11/User-Default-300x300.jpg"
          alt="Imagen de usuario"
        />
      </div>
      <div className="card-info">
        <p>
          <i className="fas fa-user"></i>
          <span> Nombre : </span>
          {client.name} {client.lastName}
        </p>
        <p>
          <i className="fas fa-calendar"></i>
          <span> Fecha de Nacimiento : </span>

          {new Date(client.dateOfBirth).toLocaleDateString("es-ES")}
        </p>
      </div>
    </div>
  );
};

export default CardClient;
