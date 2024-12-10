import api from '../api';

interface CalendarEventUpdateData {
  title: string;
  start_datetime: string;
  end_datetime: string;
  project_id?: number;
  phase_id?: number;
  member_ids?: number[];
}

async function updateCalendarEvent(teamId: number, calendarEventId: number, updateData: CalendarEventUpdateData): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/calendar_event/${calendarEventId}`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating a calendar event using a calendar event ID
const calendarEventData: CalendarEventUpdateData = {
  title: "Updated Event",
  start_datetime: "2023-05-17",
  end_datetime: "2023-05-31",
  project_id: 56789,
  phase_id: 345678,
  member_ids: [12345, 23456]
};

updateCalendarEvent(12345, 67890, calendarEventData);