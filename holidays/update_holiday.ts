import api from '../api';

interface HolidayUpdateData {
    start_date?: string;
    end_date?: string;
    name?: string;
    daily_hours?: number;
    all_day?: boolean;
}

async function updateHoliday(teamId: number, holidayId: number, updateData: HolidayUpdateData): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/holidays/${holidayId}`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating a holiday
const holidayData: HolidayUpdateData = {
    start_date: "2023-11-11",
    end_date: "2023-11-11",
    name: "Updated Holiday Title",
    daily_hours: 8,
    all_day: false
};

updateHoliday(12345, 67890, holidayData);
