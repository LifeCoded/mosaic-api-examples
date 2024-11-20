import qs from 'qs';
import api from '../api';

const dataTypes = [ 
  "activity_phase", "bill_rate", "calendar_event", "check_in", "client", "cost_rate", "employee", "integration", 
  "invoice", "notification", "phase", "portfolio", "project", "scope", "task_list",  "task", "time_entry", "work_category", "work_plan" 
] as const;
type DataType = typeof dataTypes[number];

// Define the structure of each request log
interface RequestLog {
  action: string;
  api_request_id: number;
  created_at: string; // ISO-8601 formatted date
  data_type: string;
  error: string | null;
  origin: string;
  params: { [key: string]: any }; // Flexible parameter structure
  response: { [key: string]: any }; // Flexible response structure
  team_id: number;
  updated_at: string; // ISO-8601 formatted date
}

// Define the response type for request logs
type RequestLogsResponse = { [key: string]: RequestLog[] };

async function fetchRequestStatus(teamId: number, dataType: DataType, apiRequestId: string): Promise<void> {
  try {
    const queryString = qs.stringify({ data_type: dataType, api_request_id: apiRequestId }, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/request_logs${queryString}`);
    const request_logs_by_api_request_id = response.data as RequestLogsResponse;
    const ids = Object.keys(request_logs_by_api_request_id);
    const logs = Object.values(request_logs_by_api_request_id);
    console.log('API Request IDs:', ids);
    console.log('Request Logs:', logs);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching a status of a request
fetchRequestStatus(12345, "project", "1234567890");
