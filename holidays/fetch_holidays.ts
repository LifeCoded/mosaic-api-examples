import * as qs from 'qs';
import api from '../api';

interface HolidayQueryParams {
    start_date?: string;
    end_date?: string;
}

async function fetchHolidays(teamId: number, queryParams: HolidayQueryParams): Promise<void> {
  try {
    const queryStinrg = qs.stringify(queryParams, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/holidays${queryStinrg}`);
    const holidays = response.data.holidays;
    const totalCount = holidays?.length ?? 0;
    console.log(holidays);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all holidays for 2023
fetchHolidays(12345, { start_date: "01/01/2023", end_date: "12/31/2023" });
