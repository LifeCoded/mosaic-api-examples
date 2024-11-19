import api from '../api';

interface UpdateEntityRateRequest {
  end_date?: string;
  is_cost_rate?: boolean;
  override_unassigned_member_rates?: boolean;
  rate_amount?: number;
  rate_group_id?: number;
  rate_id?: number;
  start_date?: string;
}

async function updateEntityRate(
  teamId: number,
  entityRateId: number,
  updateData: UpdateEntityRateRequest
): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/entity_rate/${entityRateId}`, updateData);
    console.log('Entity Rate Updated:', response.data);
  } catch (error) {
    console.error('Error updating entity rate:', error);
  }
}

// Example usage
updateEntityRate(12345, 1234, {
  start_date: '2023-01-01',
  end_date: '2023-12-31',
  is_cost_rate: true,
  rate_amount: 120,
  rate_group_id: 13282,
  rate_id: 5678,
  override_unassigned_member_rates: true,
});