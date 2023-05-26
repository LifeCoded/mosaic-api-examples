import api from '../api';

interface CheckInData {
    project_id: number;
    member_id: number;
    phase_id: number;
    title: string;
    date: string;
    work_category_id?: number;
    estimated_hours?: number;
}

async function createCheckIn(teamId: number, postData: CheckInData): Promise<void> {
    try {
        const response = await api.post(`/api/${teamId}/check_in`, postData);
        console.log(response.status);
    } catch (error) {
        console.error(error);
    }
}

// Example usage of creating a check-in
const checkInData: CheckInData = {
    member_id: 11111,
    project_id: 123456,
    phase_id: 345678,
    title: "Example Check-In",
    date: "2023-05-16",
    work_category_id: 13579,
    estimated_hours: 3
};

createCheckIn(12345, checkInData);