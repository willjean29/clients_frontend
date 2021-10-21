import { IClient } from "interfaces/client.interface";
import moment from "moment";
export const calculateAvg = (clients: IClient[]) => {
  const arrayClientYears = clients.map((client) =>
    moment().diff(client.dateOfBirth, "years")
  );
  return arrayClientYears;
};
