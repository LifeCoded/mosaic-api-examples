import api from '../api';

async function deleteHoliday(teamId: number, holidayId: number): Promise<void> {
  try {
    const response = await api.delete(`/api/${teamId}/holidays/${holidayId}`);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for deleting a holiday using a holiday ID
deleteHoliday(12345, 67890);
