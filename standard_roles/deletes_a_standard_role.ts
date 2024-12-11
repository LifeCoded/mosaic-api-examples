import api from '../api';

async function deleteStandardRole(teamId: number, roleId: number): Promise<void> {
  try {
    const response = await api.delete(`/api/${teamId}/role/${roleId}`);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for deleting a standard role with ID 67890
deleteStandardRole(12345, 67890);