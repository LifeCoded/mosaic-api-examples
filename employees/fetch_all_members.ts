import * as qs from 'qs';
import api from '../api';

async function fetchAllMembers(teamId: number, includeArchived: boolean = false): Promise<void> {
  try {
    const queryString = includeArchived ? qs.stringify({ include_discarded: true }, { addQueryPrefix: true }) : '';
    const response = await api.get(`/api/${teamId}/member/index${queryString}`);
    const members = response.data.member;
    console.log(members)
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all members under a team
fetchAllMembers(12345);

// Example usage for fetching all members including the archived ones
fetchAllMembers(12345, true);
