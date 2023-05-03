import api from '../api';

async function fetchAllClients(teamId: number): Promise<void> {
  try {
    const response = await api.get(`/api/${teamId}/client`);
    const clients = response.client;
    const totalCount = clients ? clients.length : 0;
    console.log(clients);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all cost rates under a team
fetchAllClients(12345);
