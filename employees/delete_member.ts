import * as qs from 'qs';
import api from '../api';

async function archiveMember(teamId: number, memberId: number): Promise<void> {
  try {
    const queryString = qs.stringify({ member_id: memberId }, { addQueryPrefix: true });
    const response = await api.delete(`/api/${teamId}/employee${queryString}`);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for deleting a member by their employee ID
archiveMember(12345, 123456);
