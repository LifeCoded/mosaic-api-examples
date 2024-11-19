import * as qs from 'qs';
import api from '../api';

interface SortAttributes {
    attribute: string;
    direction: "asc" | "desc";
}

interface TimeEntryQueryParams {
    all?: boolean;
    limit?: number;
    offset?: number;
    sort_attributes?: SortAttributes[];
    time_entry_ids?: number[];
    member_ids?: number[];
    project_ids?: number[];
    phase_names?: string[];
    status_ids?: number[];
    sync_statuses?: string[];
    start_date?: string;
    end_date?: string;
    billable?: boolean;
    depth?: string;
    export?: string;
    created_by_integrations?: boolean;
    standard_work_category_ids?: number[];
    client?: string[];
}

async function fetchAllTimeEntries(teamId: number, queryParams: TimeEntryQueryParams): Promise<void> {
  try {
    const queryString = qs.stringify(queryParams, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/time_entry${queryString}`);
    let data = response.data as { time_entry: any[] };
    const timeEntries = data.time_entry;
    const totalCount = timeEntries && timeEntries.length ? timeEntries.length : 0;
    console.log(timeEntries);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all time entries
fetchAllTimeEntries(12345, { all: true});

// Example usage for fetching 5 time entries starting from the 11th entry
fetchAllTimeEntries(12345, { limit: 15, offset: 10 });

// Example usage for fetching all extended version of billable time entries from an employee
fetchAllTimeEntries(12345, { billable: true, member_ids: [11111], depth: 'extended' });

// Example usage for fetching all time entries sorted by project into ascending order
fetchAllTimeEntries(12345, { sort_attributes: [{ attribute: 'project', direction: 'asc'}] });

// Example usage for fetching all time entries with specific client names
fetchAllTimeEntries(12345, { client: ['Client A', 'Client B'] });

// Example usage for fetching all time entries with created by integrations
fetchAllTimeEntries(12345, { created_by_integrations: true });

// Example usage for fetching all time entries with export
fetchAllTimeEntries(12345, { export: 'csv' });

// Example usage for fetching all time entries with specific time entry IDs
fetchAllTimeEntries(12345, { time_entry_ids: [111111, 222222, 333333] });

// Example usage for fetching all time entries with specific project IDs
fetchAllTimeEntries(12345, { project_ids: [11111, 22222, 33333] });

// Example usage for fetching all time entries with specific phase names
fetchAllTimeEntries(12345, { phase_names: ['Phase A', 'Phase B', 'Phase C'] });

// Example usage for fetching all time entries with specific status IDs
fetchAllTimeEntries(12345, { status_ids: [11111, 22222, 33333] });

// Example usage for fetching all time entries with specific sync statuses
fetchAllTimeEntries(12345, { sync_statuses: ['Synced', 'Not Synced'] });

// Example usage for fetching all time entries with specific start and end dates
fetchAllTimeEntries(12345, { start_date: '2023-04-16', end_date: '2023-04-30' });

// Example usage for fetching all time entries with specific standard work category IDs
fetchAllTimeEntries(12345, { standard_work_category_ids: [11111, 22222, 33333] });