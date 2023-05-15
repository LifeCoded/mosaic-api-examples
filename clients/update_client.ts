import api from '../api';

interface ClientUpdateData {
    client_name?: string;
    description?: string;
}

async function updateClient(teamId: number, clientId: number, updateData: ClientUpdateData): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/client/${clientId}`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating a cost rate
const clientData: ClientUpdateData = {
    client_name: "Updated Title",
    description: "Updated Description"
};

updateClient(12345, 67890, clientData);
