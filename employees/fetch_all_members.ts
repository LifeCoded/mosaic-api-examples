import api from '../api';

// Define the interface for Member
interface Member {
  created_at: string; // ISO-8601 formatted date
  email: string;
  employment_type: string; // e.g., "Member"
  first_name: string;
  is_archived: boolean;
  last_name: string;
  mosaic_id: number;
  mosaic_team_id: number;
  updated_at: string; // ISO-8601 formatted date
}

async function fetchAllMembers(teamId: number): Promise<void> {
  try {
    const response = await api.get(`/api/${teamId}/employee/index`);
    const members = (response.data as { employee: Member[] }).employee;
    console.log(members)
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all members under a team
fetchAllMembers(12345);

// Example usage for fetching all members including the archived ones
fetchAllMembers(12345);
