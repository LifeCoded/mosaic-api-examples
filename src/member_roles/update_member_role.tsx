import api from '../api';

interface TimeEntryUpdateData {
    time_entry_id: number;
    time_entry_ids?: number[];
    employee_id?: number;
    project_id?: number;
    phase_id?: number;
    description_id?: number;
    date?: string;
    hours?: number;
    rate?: number;
    status?: string;
    billable?: boolean;
}

async function updateTimeEntry(teamId: number, updateData: TimeEntryUpdateData): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/time_entry/`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating a time entry and approving it
const timeEntryData: TimeEntryUpdateData = {
    time_entry_id: 111222333,
    employee_id: 12345,
    project_id: 123456,
    phase_id: 12345678,
    description_id: 345678,
    date: "04/17/2023",
    hours: 100,
    rate: 20,
    status: "approved",
    billable: true
};

updateTimeEntry(12345, timeEntryData);
