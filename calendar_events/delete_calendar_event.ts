import api from '../api';

interface CalendarEventDeleteData {
  api_request_metadata?: {};
}

async function deleteCalendarEvent(teamId: number, calendarEventId: number): Promise<void> {
  try {
    const deleteData: CalendarEventDeleteData = {
      api_request_metadata: {}
    };
    const response = await api.delete(`/api/${teamId}/calendar_event/${calendarEventId}`, {
      data: deleteData
    });
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for deleting a calendar event using a calendar event ID
deleteCalendarEvent(12345, 67890);