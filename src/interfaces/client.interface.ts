// Generated by https://quicktype.io

export interface IClientResponse {
  success: boolean;
  clients: IClient[];
}

export interface IClient {
  id: number;
  name: string;
  lastName: string;
  dateOfBirth: string;
  createdAt: string;
  updatedAt: string;
}

// Generated by https://quicktype.io

export interface IAverageClientsResponse {
  success: boolean;
  averageClients: number;
}