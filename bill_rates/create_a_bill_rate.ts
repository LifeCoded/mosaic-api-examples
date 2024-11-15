import api from "../api";

interface BillRateData {
  member_id: number;
  rate_id?: number;
  rate_description?: string;
  rate_amount?: number;
  start_date?: string;
  end_date?: string;
  override?: boolean;
  api_request_metadata?: object;
}

async function createBillRate(
  teamId: number,
  postData: BillRateData
): Promise<void> {
  try {
    const response = await api.post(`/api/${teamId}/bill_rate`, postData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of creating a bill rate
const billRateData: BillRateData = {
  member_id: 23456,
  rate_description: "Example Bill Rate",
  rate_amount: 50,
  start_date: "2023-05-01",
  end_date: "2023-05-10",
};
createBillRate(12345, billRateData);

// Example usage of copying a bill rate by using rate_id
const rateIdCopyData: BillRateData = {
  member_id: 23456,
  rate_id: 34567,
};
createBillRate(12345, rateIdCopyData);

// Example usage of copying a bill rate by using rate_description
const rateDescriptionCopyData: BillRateData = {
  member_id: 23456,
  rate_description: "Example Bill Rate",
  rate_amount: 35,
};
createBillRate(12345, rateDescriptionCopyData);
