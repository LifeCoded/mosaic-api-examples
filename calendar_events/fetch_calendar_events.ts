import * as qs from 'qs';
import api from '../api';

interface CalendarEventQueryParams {
  title?: string;
  start_datetime?: string;
  end_datetime?: string;
  project_ids?: number[];
  phase_ids?: number[];
  member_ids?: number[];
}

async function fetchCalendarEvents(teamId: number, queryParams: CalendarEventQueryParams): Promise<void> {
  try {
    const queryString = qs.stringify(queryParams, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/calendar_event${queryString}`);
    const calendarEvents = (response.data as { calendar_events: any[] }).calendar_events;
    const totalCount = calendarEvents?.length ?? 0;
    console.log(calendarEvents);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all calendar events that match the query params for year 2023
const calendarEventQueryData: CalendarEventQueryParams = {
  title: "Event",
  start_datetime: "2023-01-01",
  end_datetime: "2023-12-31",
  project_ids: [56789, 67890],
  phase_ids: [345678, 456789],
  member_ids: [12345, 23456]
}

fetchCalendarEvents(12345, calendarEventQueryData);