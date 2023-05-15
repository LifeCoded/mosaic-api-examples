import api from '../api';

interface MemberRoleData {
    member_id: number;
    position_id: number;
    start_date?: string;
    end_date?: string;
    override_member_positions?: boolean;
}

async function createMemberRole(teamId: number, postData: MemberRoleData): Promise<void> {
    try {
        const response = await api.post(`/api/${teamId}/member_role`, postData);
        console.log(response.status);
    } catch (error) {
        console.error(error);
    }
}

// Example usage of creating a Member Role
const memberRoleData: MemberRoleData = {
    member_id: 12345,
    position_id: 123456,
    start_date: "04/17/2023",
    end_date: "06/30/2024"
};
createMemberRole(11111, memberRoleData);
