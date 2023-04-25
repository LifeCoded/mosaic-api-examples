import api from '../api';

interface BillRateUpdateData {
  member_id: number;
    rate_id?: number;
    rate_description?: string;
    rate_amount?: number;
    start_date?: string;
    end_date?: string;
    override?: boolean;
}

async function updateBillRate(teamId: number, billRateId: number, updateData: BillRateUpdateData): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/bill_rate/${billRateId}`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating a bill rate
const billRateData: BillRateUpdateData = {
    member_id: 23456,
    rate_description: "Updated Bill Rate",
    rate_amount: 40
};

updateBillRate(12345, 67890, billRateData);
