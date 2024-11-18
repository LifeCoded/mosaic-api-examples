import qs from 'qs';
import api from '../api';

interface CheckInQueryParams {
    date: string;
    member_ids: number [];
}

async function fetchCheckIns(teamId: number, queryParams: CheckInQueryParams): Promise<void> {
  try {
    const queryStinrg = qs.stringify(queryParams, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/check_in${queryStinrg}`);
    const checkIns = (response.data as { check_ins: any[] }).check_ins;
    const totalCount = checkIns?.length ?? 0;
    console.log(checkIns);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all check-ins for a given date
fetchCheckIns(12345, { date: "2023-05-16", member_ids: [12345, 23456, 34567] });
