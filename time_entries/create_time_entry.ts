import api from '../api';

interface TimeEntryData {
    member_id: number;
    project_id: number;
    phase_id: number;
    standard_work_category_id: number;
    title?: string;
    date: string;
    hours: number;
    rate?: number;
    billable?: boolean;
    cost_rate?: number;
    description_id?: number;
}

async function createTimeEntry(teamId: number, postData: TimeEntryData): Promise<void> {
    try {
        const response = await api.post(`/api/${teamId}/time_entry`, postData);
        console.log(response.status);
    } catch (error) {
        console.error(error);
    }
}

// Example usage of creating a time entry
const timeEntryData: TimeEntryData = {
    member_id: 12345,
    project_id: 123456,
    phase_id: 12345678,
    standard_work_category_id: 234567,
    title: "Example Time Entry",
    date: "2023-04-16",
    hours: 50,
    rate: 10,
    billable: true
};
createTimeEntry(11111, timeEntryData);
