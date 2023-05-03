import api from '../api';

interface MemberProjectRoleData {
    member_id: number;
    project_id: number;
    role_id?: number;
    phase_id?: number;
    start_date?: string;
    end_date?: string;
    override_phase_member_positions?: boolean;
}

async function createMemberProjectRole(teamId: number, postData: MemberProjectRoleData): Promise<void> {
    try {
        const response = await api.post(`/api/${teamId}/member_project_role`, postData);
        console.log(response.status);
    } catch (error) {
        console.error(error);
    }
}

// Example usage of creating a member project role of a project member with a given role id
const memberProjectRoleData: MemberProjectRoleData = {
    member_id: 11123,
    project_id: 23456,
    role_id: 456789,
    phase_id: 123456,
    start_date: "01/01/2023",
    end_date: "01/31/2023"
};

createMemberProjectRole(12345, memberProjectRoleData);
