import api from '../api';

interface MemberRoleUpdateData {
    end_date?: string;
    override_member_positions?: boolean;
    position_id?: number;
    start_date?: string;
}

async function updateMemberRole(teamId: number, memberRoleId: number, updateData: MemberRoleUpdateData): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/member_role/${memberRoleId}`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating a member role
const memberRoleData: MemberRoleUpdateData = {
    position_id: 123456,
    start_date: "04/17/2023",
    end_date: "05/17/2023"
};

updateMemberRole(12345, 23456, memberRoleData);
