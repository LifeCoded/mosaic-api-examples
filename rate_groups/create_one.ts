import api from '../api';

interface CreateRateGroupParams {
  active_entity_type: string;
  currency?: string;
  description?: string;
  is_default?: boolean;
  name: string;
  team_id: number;
}

async function createRateGroup(
  team_id: number,
  bodyParams: CreateRateGroupParams
): Promise<void> {
  try {
    const response = await api.post(`/api/${team_id}/rate_group`, bodyParams);
    console.log('Rate group created successfully:', response.status);
  } catch (error) {
    console.error('Error creating rate group:', error);
  }
}

// Example usage for creating a rate group
const createRateGroupParams: CreateRateGroupParams = {
  active_entity_type: 'role',
  currency: 'USD', // optional, default is USD
  description: 'The rate group for all team members.',
  is_default: true, // optional, default is false
  name: 'Team Rate Group',
  team_id: 12345,
};
createRateGroup(12345, createRateGroupParams);