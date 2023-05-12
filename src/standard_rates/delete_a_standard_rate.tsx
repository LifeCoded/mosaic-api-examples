import api from '../api';

async function deleteStandardRate(teamId: number, rateId: number): Promise<void> {
  try {
    const response = await api.delete(`/api/${teamId}/rate/${rateId}`);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for deleting a standard rate with ID 67890
deleteStandardRate(12345, 67890);