import * as qs from "qs";
import api from "../api";

async function fetchAllBillRates(
  teamId: number,
  includeArchived: boolean = false
): Promise<void> {
  try {
    const queryString = qs.stringify(
      { include_archived: includeArchived },
      { addQueryPrefix: true }
    );
    const response = await api.get(`/api/${teamId}/bill_rate${queryString}`, {
      params: {
        api_request_metadata: {
          team_id: teamId,
          include_archived: includeArchived,
        },
      },
    });
    const billRates = response.data;
    const totalCount = billRates && billRates.length ? billRates.length : 0;
    console.log(billRates);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all bill rates under a team
fetchAllBillRates(12345);

// Example usage for fetching all bill rates including archived ones
fetchAllBillRates(12345, true);
