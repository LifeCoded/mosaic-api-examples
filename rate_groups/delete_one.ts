import api from '../api';

async function deleteRateGroup(
  team_id: number,
  rate_group_id: number
): Promise<void> {
  try {
    const response = await api.delete(`/api/${team_id}/rate_group/${rate_group_id}`);
    console.log('Rate group deleted successfully:', response.status);
  } catch (error) {
    console.error('Error deleting rate group:', error);
  }
}

// Example usage for deleting a rate group
deleteRateGroup(12345, 67890);