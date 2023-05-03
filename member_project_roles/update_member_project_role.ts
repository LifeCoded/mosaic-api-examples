import api from '../api';

interface MemberProjectRoleUpdateData {
  role_id?: number;
  start_date?: string;
  end_date?: string;
  override_phase_member_positions?: boolean;
}

async function updateMemberProjectRole(teamId: number, memberProjectRoleId: number, updateData: MemberProjectRoleUpdateData): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/member_project_role/${memberProjectRoleId}`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating a member project role with an existing role id
const memberProjectRoleData: MemberProjectRoleUpdateData = {
  role_id: 456789,
  start_date: "01/01/2023",
  end_date: "01/31/2023"
};

updateMemberProjectRole(12345, 67890, memberProjectRoleData);
