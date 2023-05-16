import api from "../api";

interface StandardRateParams {
  rate: number;
  multiplier_low?: number;
  multiplier_high?: number;
  description?: string;
}

async function createStandardRate(
  teamId: number,
  postData: StandardRateParams
): Promise<void> {
  try {
    const response = await api.post(`/api/${teamId}/rate`, postData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of creating a standard rate named "Manager Rate"
const StandardRateParams: StandardRateParams = {
  rate: 400,
  description: "Manager Rate",
  multiplier_high: 4,
  multiplier_low: 1,
};

createStandardRate(12345, StandardRateParams);
