import api from '../api';

// Define the interface for the client
interface Client {
  client_name: string;
  created_at: string; // ISO date string
  description: string;
  is_archived: boolean;
  mosaic_id: number;
  mosaic_team_id: number;
  updated_at: string; // ISO date string
}

async function fetchAllClients(teamId: number): Promise<void> {
  try {
    const response = await api.get(`/api/${teamId}/client`);
    const clients = (response.data as { client: Client[] }).client;
    const totalCount = clients ? clients.length : 0;
    console.log(clients);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all cost rates under a team
fetchAllClients(12345);
