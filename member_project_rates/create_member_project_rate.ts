import api from '../api';

interface MemberProjectRateData {
    member_id: number;
    project_id: number;
    phase_id?: number;
    rate_id?: number;
    rate_amount?: number;
    is_cost_rate?: boolean;
    start_date?: string;
    end_date?: string;
}

async function createMemberProjectRate(teamId: number, postData: MemberProjectRateData): Promise<void> {
    try {
        const response = await api.post(`/api/${teamId}/member_project_rate`, postData);
        console.log(response.status);
    } catch (error) {
        console.error(error);
    }
}

// Example usage of creating a member project rate with an existing Rate ID
const memberProjectRateData1: MemberProjectRateData = {
    member_id: 11123,
    project_id: 23456,
    phase_id: 123456,
    rate_id: 456789,
    start_date: "2023-01-01",
    end_date: "2023-01-31"
};

createMemberProjectRate(12345, memberProjectRateData1);

// Example usage of creating a member project rate by adding a new cost rate
const memberProjectRateData2: MemberProjectRateData = {
    member_id: 11123,
    project_id: 23456,
    phase_id: 123456,
    is_cost_rate: true,
    rate_amount: 35,
    start_date: "2023-01-01",
    end_date: "2023-01-31"
};

createMemberProjectRate(12345, memberProjectRateData2);
