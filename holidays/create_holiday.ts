import api from '../api';

interface HolidayData {
    start_date: string;
    end_date: string;
    title?: string;
    daily_hours?: number;
    all_day?: boolean;
}

async function createHoliday(teamId: number, postData: HolidayData): Promise<void> {
    try {
        const response = await api.post(`/api/${teamId}/holidays`, postData);
        console.log(response.status);
    } catch (error) {
        console.error(error);
    }
}

// Example usage of creating a holiday on 11/11/2023
const holidayData: HolidayData = {
    start_date: "11/11/2023",
    end_date: "11/11/2023",
    title: "Eleven Eleven Day",
    all_day: true
};

createHoliday(12345, holidayData);