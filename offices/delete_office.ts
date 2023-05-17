import api from '../api';

async function deleteOffice(teamId: number, officeId: number): Promise<void> {
  try {
    const response = await api.delete(`/api/${teamId}/offices/${officeId}`);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for deleting an office using an office ID
deleteOffice(12345, 67890);
