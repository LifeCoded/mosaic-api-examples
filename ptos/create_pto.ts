import api from '../api';

interface PTOData {
    name: string;
    hours?: number;
    is_accrued?: boolean;
    is_custom?: boolean;
}

async function createPTO(teamId: number, postData: PTOData): Promise<void> {
    try {
        const response = await api.post(`/api/${teamId}/pto`, postData);
        console.log(response.status);
    } catch (error) {
        console.error(error);
    }
}

// Example usage of creating a PTO policy with 40 hours, not accrued, and not custom
const ptoData: PTOData = {
    name: "Example PTO Policy",
    hours: 40,
    is_accrued: false,
    is_custom: false
};

createPTO(12345, ptoData);