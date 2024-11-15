import api from '../api';

interface CalendarEventData {
    title: string;
    start_datetime: string;
    end_datetime: string;
    project_id?: number;
    phase_id?: number;
    member_ids?: number[];
    api_request_metadata?: {}
    details?: {}
}

async function createCalendarEvent(teamId: number, postData: CalendarEventData): Promise<void> {
    try {
        const response = await api.post(`/api/${teamId}/calendar_event`, postData);
        console.log(response.status);
    } catch (error) {
        console.error(error);
    }
}

// Example usage of creating a calendar event and invites two members to the event
const calendarEventData: CalendarEventData = {
    title: "Double Eleven Event",
    start_datetime: "2023-11-11",
    end_datetime: "2023-11-11",
    project_id: 56789,
    phase_id: 345678,
    member_ids: [12345, 23456]
};

createCalendarEvent(12345, calendarEventData);