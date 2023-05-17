import api from '../api';

async function deleteCheckIn(teamId: number, checkInId: number): Promise<void> {
  try {
    const response = await api.delete(`/api/${teamId}/check_in/${checkInId}`);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for deleting a check-in using a check-in ID
deleteCheckIn(12345, 67890);
