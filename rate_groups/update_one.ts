import api from '../api';

interface UpdateRateGroupParams {
  currency?: string;
  description?: string;
  is_default?: boolean;
  name?: string;
}

async function updateRateGroup(
  team_id: number,
  rate_group_id: number,
  bodyParams: UpdateRateGroupParams
): Promise<void> {
  try {
    const response = await api.put(`/api/${team_id}/rate_group/${rate_group_id}`, bodyParams);
    console.log('Rate group updated successfully:', response.status);
  } catch (error) {
    console.error('Error updating rate group:', error);
  }
}

// Example usage for updating a rate group
const updateRateGroupParams: UpdateRateGroupParams = {
  currency: 'USD',
  description: 'Updated description for the rate group.',
  is_default: false,
  name: 'Updated Rate Group Name',
};
updateRateGroup(12345, 67890, updateRateGroupParams);