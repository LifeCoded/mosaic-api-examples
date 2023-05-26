import api from '../api';

async function deleteCalendarEvent(teamId: number, calendarEventId: number): Promise<void> {
  try {
    const response = await api.delete(`/api/${teamId}/calendar_event/${calendarEventId}`);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for deleting a calendar event using a calendar event ID
deleteCalendarEvent(12345, 67890);
