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
    work_category_ids?: number[];
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
}

async function fetchAllTimeEntries(teamId: number, queryParams: TimeEntryQueryParams): Promise<void> {
  try {
    const queryString = qs.stringify(queryParams, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/time_entry${queryString}`);
    const timeEntries = response.data?.time_entry;
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
