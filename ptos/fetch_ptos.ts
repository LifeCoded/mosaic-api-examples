import * as qs from 'qs';
import api from '../api';

interface PTOQueryParams {
    include_archived?: boolean;
    include_default?: boolean;
    is_custom?: boolean;
}

async function fetchPTOs(teamId: number, queryParams: PTOQueryParams): Promise<void> {
  try {
    const queryStinrg = qs.stringify(queryParams, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/pto${queryStinrg}`);
    const PTOs = response.data.pto_policies;
    const totalCount = PTOs?.length ?? 0;
    console.log(PTOs);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all PTO policies including archived and default ones but excluding custom ones
fetchPTOs(12345, { include_archived: true, include_default: true, is_custom: false });
