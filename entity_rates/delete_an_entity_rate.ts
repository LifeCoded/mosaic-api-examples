import api from '../api';

async function deleteEntityRate(
  teamId: number,
  entityRateId: number
): Promise<void> {
  try {
    const response = await api.delete(`/api/${teamId}/entity_rate/${entityRateId}`);
    console.log('Entity Rate Deleted:', response.status);
  } catch (error) {
    console.error('Error deleting entity rate:', error);
  }
}

// Example usage
deleteEntityRate(12345, 1234);