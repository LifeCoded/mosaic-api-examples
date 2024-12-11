import api from '../api';

interface CreateScopeParams {
  activity_phase_id?: number;
  description?: string;
  estimated_hours?: number;
  is_request?: boolean;
  note?: string;
  parent_scope_id?: number;
  requested_to_id?: number;
  schedule_end?: string; 
  schedule_start?: string;
}

async function createProjectScope(
  teamId: number,
  postData: CreateScopeParams
): Promise<void> {
  try {
    const response = await api.post(`/api/${teamId}/scope`, postData);
    console.log('Scope Created:', response.data);
  } catch (error) {
    console.error('Error creating scope:', error);
  }
}

// Example usage:
createProjectScope(12345, {
  activity_phase_id: 6789,
  description: 'New project scope description',
  estimated_hours: 40,
  is_request: false,
  note: 'Additional notes for the scope',
  parent_scope_id: 1234,
  requested_to_id: 5678,
  schedule_start: '2023-01-01',
  schedule_end: '2023-12-31',
});