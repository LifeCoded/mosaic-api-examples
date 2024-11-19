import api from '../api';

interface TimeEntryUpdateData {
  billable?: boolean;
  cost_rate?: number;
  date?: string;
  description?: string;
  description_id?: number;
  hours?: number;
  member_id?: number;
  phase_id?: number;
  project_id?: number;
  rate?: number;
  status?: string;
  standard_work_category_id: number;
  time_entry_id: number;
  time_entry_ids?: number[];
}

async function updateMemberRole(teamId: number, memberRoleId: number, updateData: TimeEntryUpdateData): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/member_role/`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating a member role with new position id
const timeEntryUpdateData: TimeEntryUpdateData = {
  billable: true,
  cost_rate: 10,
  date: '2023-04-16',
  description: 'Example Time Entry',
  standard_work_category_id: 234567,
  time_entry_id: 1234567
};

updateMemberRole(12345, 1234567, timeEntryUpdateData);
