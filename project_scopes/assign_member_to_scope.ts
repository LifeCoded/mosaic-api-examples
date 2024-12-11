import api from '../api';

interface AssignMemberParams {
  end_date?: string;
  member_id?: number;
//members?: string[];
  percent_complete?: number;
  start_date?: string;
  unassign?: boolean;
}

async function assignMemberToScope(
  teamId: number,
  scopeId: number,
  postData: AssignMemberParams
): Promise<void> {
  try {
    const response = await api.post(`/api/${teamId}/scope/${scopeId}/assign`, postData);
    console.log('Member assignment response:', response.data);
  } catch (error) {
    console.error('Error assigning member to scope:', error);
  }
}

// Example usage:

// Assign a single member to a scope
assignMemberToScope(12345, 111222, {
  member_id: 3333444,
  start_date: '2023-01-01',
  end_date: '2023-06-30',
  percent_complete: 50,
});

// Unassign a member from a scope
assignMemberToScope(12345, 111222, {
  member_id: 3333444,
  unassign: true,
});