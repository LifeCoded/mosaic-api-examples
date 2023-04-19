import api from '../api';

interface MemberRoleUpdateData {
  position_id?: number;
  start_date?: string;
  end_date?: string;
  override_member_positions?: boolean;
}

async function updateMemberRole(teamId: number, memberRoleId: number, updateData: MemberRoleUpdateData): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/member_role/`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating a member role with new position id
const memberRoleData: MemberRoleUpdateData = {
  position_id: 123456
};

updateMemberRole(12345, 1234567, memberRoleData);
