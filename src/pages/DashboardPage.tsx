import ChartData from "components/ChartData";
import React from "react";
import useClient from "hooks/useClient";
import { calculateAvg } from "utils/methods";
interface DashboardPageProps {}

const DashboardPage: React.FC<DashboardPageProps> = () => {
  const { clients, isLoading, average } = useClient();
  const years = calculateAvg(clients).reverse().slice(0, 5);
  const names = clients
    .map((client) => client.name)
    .reverse()
    .slice(0, 5);
  return (
    <div className="dashboard">
      <h1>Dashboard de Clientes</h1>
      {isLoading && <h2>Error al obtener Clientes</h2>}
      {clients.length === 0 && !isLoading && (
        <h2>No hay Clientes registrados</h2>
      )}
      {years.length !== 0 && average !== 0 && (
        <div className="dashboard-content">
          <ChartData
            id={"chart-1"}
            labels={names}
            data={years}
            type="vertical"
          />
          <ChartData
            id={"chart-2"}
            labels={["Promedio"]}
            data={[average]}
            type="horizontal"
          />
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
