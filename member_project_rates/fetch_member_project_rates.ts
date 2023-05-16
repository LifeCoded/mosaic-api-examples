import * as qs from 'qs';
import api from '../api';

interface MemberProjectRateQueryParams {
    member_id: number;
    project_id: number;
}

async function fetchMemberProjectRates(teamId: number, queryParams: MemberProjectRateQueryParams): Promise<void> {
  try {
    const queryStinrg = qs.stringify(queryParams, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/member_project_rate${queryStinrg}`);
    const memberProjectRates = response.data.member_project_rates;
    const totalCount = memberProjectRates?.length ?? 0;
    console.log(memberProjectRates);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all member project rates for a member under a project
fetchMemberProjectRates(12345, { member_id: 11234, project_id: 67890 });
