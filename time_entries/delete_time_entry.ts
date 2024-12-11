import api from '../api';

interface TimeEntryIds {
    time_entry_ids: number[];
}

async function deleteTimeEntries(teamId: number): Promise<void> {
  try {
    // const response = await api.delete(`/api/${teamId}/time_entry`, { data: timeEntryIds });
    const response = await api.request({
      method: 'DELETE',
      url: `/api/${teamId}/time_entry`,
      data: timeEntryIds
    });
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for deleting time entries by their time entry IDs
const timeEntryIds : TimeEntryIds = { time_entry_ids: [111111, 222222, 333333] };
deleteTimeEntries(12345);
