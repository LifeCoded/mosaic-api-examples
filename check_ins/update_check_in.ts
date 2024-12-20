import api from '../api';

interface CheckInUpdateData {
  description?: string;
  estimated_hours?: number;
}

async function updateCheckIn(teamId: number, checkInId: number, updateData: CheckInUpdateData): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/check_in/${checkInId}`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating a check-in using a check-in ID
const checkInData: CheckInUpdateData = {
  description: 'This is an updated description.',
  estimated_hours: 4
};

updateCheckIn(12345, 67890, checkInData);
