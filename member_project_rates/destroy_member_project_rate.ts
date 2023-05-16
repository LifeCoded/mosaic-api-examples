import api from '../api';

async function deleteMemberProjectRate(teamId: number, memberProjectRateId: number): Promise<void> {
  try {
    const response = await api.delete(`/api/${teamId}/member_project_rate/${memberProjectRateId}`);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for deleting a member project rate by its id
deleteMemberProjectRate(12345, 67890);

