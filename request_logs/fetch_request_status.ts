import * as qs from 'qs';
import api from '../api';

const dataTypes = [ 
  "activity_phase", "bill_rate", "calendar_event", "check_in", "client", "cost_rate", "employee", "integration", 
  "invoice", "notification", "phase", "portfolio", "project", "scope", "task_list",  "task", "time_entry", "work_category", "work_plan" 
] as const;
type DataType = typeof dataTypes[number];

async function fetchRequestStatus(teamId: number, dataType: DataType, apiRequestId: string): Promise<void> {
  try {
    const queryStinrg = qs.stringify({ data_type: dataType, api_request_id: apiRequestId }, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/request_logs${queryStinrg}`);
    const request_logs_by_api_request_id = response.data;
    const ids = Object.keys(request_logs_by_api_request_id);
    const logs = Object.values(request_logs_by_api_request_id);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching a status of a request
fetchRequestStatus(12345, "project", "1234567890");
