import qs from 'qs';
import api from '../api';

interface EntityRateParams {
  entity_type?: string;
  is_cost_rate?: boolean;
  limit?: number;
  offset?: number;
  all?: boolean;
  include_archived?: boolean;
  entity_rate_ids?: number[];
  rate_group_ids?: number[];
  entity_ids?: number[];
  rate_ids?: number[];
}

async function fetchEntityRates(
  teamId: number,
  queryParams: EntityRateParams
): Promise<void> {
  try {
    const queryString = qs.stringify(queryParams, { addQueryPrefix: true, arrayFormat: "brackets" });
    const response = await api.get(`/api/${teamId}/entity_rate${queryString}`);
    const entityRates = (response.data as { entity_rates: any }).entity_rates;
    console.log(entityRates);
  } catch (error) {
    console.error(error);
  }
}

// Example usage with optional query parameters
const entityRateQueryData: EntityRateParams = {
    entity_type: 'role',
    is_cost_rate: true,
    rate_group_ids: [1, 2, 3],
    entity_ids: [10, 20],
};

fetchEntityRates(12345, entityRateQueryData);