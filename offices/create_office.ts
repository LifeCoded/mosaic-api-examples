import api from '../api';

interface OfficeData {
    address_1?: string;
    address_2?: string;
    address_3?: string;
    city?: string;
    country?: string;
    name?: string;
    state?: string;
    zip?: string;
}

async function createOffice(teamId: number, postData: OfficeData): Promise<void> {
    try {
        const response = await api.post(`/api/${teamId}/offices`, postData);
        console.log(response.status);
    } catch (error) {
        console.error(error);
    }
}

// Example usage of creating an office
const officeData: OfficeData = {
    address_1: "123 Main St",
    address_2: "Suite 111",
    city: "Vancouver",
    country: "Canada",
    name: "Vancouver Office",
    state: "BC",
    zip: "D9A 9A9"
};

createOffice(12345, officeData);