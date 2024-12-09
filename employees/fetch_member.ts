import qs from 'qs'
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

async function fetchMember(teamId: number, memberId: number): Promise<void> {
  try {
    const queryString = qs.stringify({ member_id: memberId }, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/employee${queryString}`);
    const member = (response.data as { employee: Member }).employee;
    console.log(member);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching a member by the member ID
fetchMember(12345, 123456);
