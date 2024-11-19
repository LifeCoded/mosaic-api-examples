import api from '../api';

interface EntityRateRequest {
  end_date?: string;
  entity_id: number;
  entity_type: "role" | "standard_work_category";
  is_cost_rate?: boolean;
  override_unassigned_member_rates?: boolean;
  rate_amount?: number;
  rate_id?: number;
  rate_group_id: number;
  start_date?: string;
  team_id: number;
}

async function createEntityRate(
  teamId: number,
  postData: EntityRateRequest
): Promise<void> {
  try {
    const response = await api.post(`/api/${teamId}/entity_rate`, postData);
    console.log('Entity Rate Created:', response.data);
  } catch (error) {
    console.error('Error creating entity rate:', error);
  }
}

// Example usage
createEntityRate(12345, {
  entity_id: 9118,
  entity_type: 'standard_work_category',
  rate_group_id: 13282,
  team_id: 12345,
  start_date: '2023-01-01',
  end_date: '2023-12-31',
  is_cost_rate: false,
  rate_amount: 100, // Required if is_cost_rate is true
});