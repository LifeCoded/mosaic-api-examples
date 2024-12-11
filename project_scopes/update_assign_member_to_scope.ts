import qs from 'qs';
import api from '../api';

interface UpdateAssignmentParams {
  end_date?: string;
  percent_complete?: number;
  start_date?: string;
}

async function updateScopeAssignment(
  team_id: number,
  scope_id: number,
  member_id: number,
  queryParams: UpdateAssignmentParams
): Promise<void> {
  const queryString = qs.stringify(queryParams, { addQueryPrefix: true });

  try {
    const response = await api.put(`/api/${team_id}/scope/${scope_id}/update_assignment/${member_id}${queryString}`);
    console.log('Scope assignment updated successfully:', response.data);
  } catch (error) {
    console.error('Error updating scope assignment:', error);
  }
}

// Example usage for updating a scope assignment
const updateAssignmentParams: UpdateAssignmentParams = {
  end_date: '2024-11-30',
  percent_complete: 75,
  start_date: '2024-11-01',
};
updateScopeAssignment(12345, 67890, 112233, updateAssignmentParams);