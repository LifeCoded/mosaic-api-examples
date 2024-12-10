import api from '../api';

interface MemberRoleUpdateData {
    end_date?: string;
    override_member_positions?: boolean;
    role_id?: number;
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
    role_id: 123456,
    start_date: "2023-04-17",
    end_date: "2023-05-17",
};

updateMemberRole(12345, 23456, memberRoleData);
