import api from '../api';

async function fetchAllMembers(teamId: number): Promise<void> {
  try {
    const response = await api.get(`/api/${teamId}/employee/index`);
    const members = (response.data as { member: any }).member;
    console.log(members)
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all members under a team
fetchAllMembers(12345);

// Example usage for fetching all members including the archived ones
fetchAllMembers(12345);
