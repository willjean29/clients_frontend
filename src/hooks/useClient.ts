import { useEffect, useState } from "react";
import {
  IClientResponse,
  IClient,
  IAverageClientsResponse,
} from "interfaces/client.interface";

const useClient = () => {
  const [clients, setClients] = useState<IClient[]>([]);
  const [average, setAverage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  const getDataClients = async () => {
    try {
      const clientsPromise = fetch(
        "https://clients-backend.herokuapp.com/api/clients"
      );
      const averagePromise = fetch(
        "https://clients-backend.herokuapp.com/api/clients/average"
      );
      const [clientsResponse, averageResponse] = await Promise.all([
        clientsPromise,
        averagePromise,
      ]);
      const clients = (await clientsResponse.json()) as IClientResponse;
      const average = (await averageResponse.json()) as IAverageClientsResponse;

      setClients(clients.clients);
      setAverage(average.averageClients);
      setIsLoading(false);
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    getDataClients();
  }, []);
  return {
    clients,
    average,
    isLoading,
  };
};

export default useClient;
