import React from "react";
import CardClient from "components/CardClient";
import useClient from "hooks/useClient";
interface ListClientPageProps {}

const ListClientPage: React.FC<ListClientPageProps> = () => {
  const { clients, isLoading, average } = useClient();

  return (
    <div className="clients">
      <h1>Lista de Clientes</h1>
      {isLoading && <h2>Error al obtener Clientes</h2>}
      {clients.length === 0 && !isLoading && (
        <h2>No hay Clientes registrados</h2>
      )}

      {!isLoading && (
        <>
          <div className="list-clients">
            {clients.map((client, index) => (
              <CardClient client={client} key={index.toString()} />
            ))}
          </div>
          <div className="clients-footer">
            <div>
              <p>
                <i className="fas fa-users"></i>
                <span> Total de Clientes :</span> {clients.length}
              </p>
            </div>
            <div>
              <p>
                <i className="fas fa-chart-line"></i>
                <span> Promedio de las edades : </span>
                {average}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListClientPage;
