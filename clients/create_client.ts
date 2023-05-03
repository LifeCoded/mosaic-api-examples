import api from '../api';

interface ClientData {
    client_name: string;
    description?: string;
}

async function createClient(teamId: number, postData: ClientData): Promise<void> {
    try {
        const response = await api.post(`/api/${teamId}/client`, postData);
        console.log(response.status);
    } catch (error) {
        console.error(error);
    }
}

// Example usage of creating a client
const clientData: ClientData = {
    client_name: "Example Client",
    description: "Example Description"
};

createClient(12345, clientData);
