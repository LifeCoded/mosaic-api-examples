import api from '../api';

interface NotificationData {
    message: string;
    member_ids: number [];
}

async function createNotification(teamId: number, postData: NotificationData): Promise<void> {
    try {
        const response = await api.post(`/api/${teamId}/notifications`, postData);
        console.log(response.status);
    } catch (error) {
        console.error(error);
    }
}

// Example usage of creating a notification
const notificationData: NotificationData = {
    message: 'Hello World',
    member_ids: [12345, 23456, 34567]
};

createNotification(12345, notificationData);