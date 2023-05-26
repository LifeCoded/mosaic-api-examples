import api from '../api';

async function deletePTO(teamId: number, ptoId: number): Promise<void> {
  try {
    const response = await api.delete(`/api/${teamId}/pto/${ptoId}`);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for deleting a PTO policy using a PTO ID
deletePTO(12345, 67890);
