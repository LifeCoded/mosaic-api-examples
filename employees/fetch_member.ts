import * as qs from 'qs'
import api from '../api';

async function fetchMember(teamId: number, memberId: number): Promise<void> {
  try {
    const queryString = qs.stringify({ member_id: memberId }, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/member${queryString}`);
    const member = response.data.member;
    console.log(member);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching a member by the member ID
fetchMember(12345, 123456);
