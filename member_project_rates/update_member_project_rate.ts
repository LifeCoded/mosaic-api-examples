import api from '../api';

interface MemberProjectRateUpdateData {
  rate_id?: number;
  rate_amount?: number;
  start_date?: string;
  end_date?: string;
}

async function updateMemberProjectRate(teamId: number, memberProjectRateId: number, updateData: MemberProjectRateUpdateData): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/member_project_rate/${memberProjectRateId}`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating a member project rate with an existing rate Id
const memberProjectRateData1: MemberProjectRateUpdateData = {
  rate_id: 456789,
  start_date: "01/01/2023",
  end_date: "01/31/2023"
};

updateMemberProjectRate(12345, 67890, memberProjectRateData1);

// Example usage of updating a member project rate with an existing rate Id
const memberProjectRateData2: MemberProjectRateUpdateData = {
  rate_amount: 35,
  start_date: "01/01/2023",
  end_date: "01/31/2023"
};

updateMemberProjectRate(12345, 67899, memberProjectRateData2);
