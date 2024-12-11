import api from '../api';

interface UpdateScopeParams {
  description?: string;
  estimated_hours?: number;
  note?: string;
  parent_scope_id?: number;
  requested_to_id?: number;
  schedule_start?: string
  schedule_end?: string;
}

async function updateProjectScope(
  teamId: number,
  scopeId: number,
  updateData: UpdateScopeParams
): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/scope/${scopeId}`, updateData);
    console.log('Scope Updated:', response.data);
  } catch (error) {
    console.error('Error updating scope:', error);
  }
}

// Example usage:

// Updating multiple fields of a scope
updateProjectScope(12345, 111222, {
  description: 'Updated scope description',
  estimated_hours: 50,
  note: 'Updated notes for the scope',
  schedule_start: '2023-02-01',
  schedule_end: '2023-08-31',
});

// Updating only the description
updateProjectScope(12345, 111222, {
  description: 'New description for the scope',
});

// Updating schedule dates
updateProjectScope(12345, 111222, {
  schedule_start: '2023-03-01',
  schedule_end: '2023-09-30',
});