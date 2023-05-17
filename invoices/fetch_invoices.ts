import * as qs from 'qs';
import api from '../api';

interface InvoiceQueryParams {
    project_id: number;
    is_estimate?: boolean;
}

async function fetchInvoices(teamId: number, queryParams: InvoiceQueryParams): Promise<void> {
  try {
    const queryStinrg = qs.stringify(queryParams, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/invoice${queryStinrg}`);
    const invoices = response.data.pto_policies;
    const totalCount = invoices?.length ?? 0;
    console.log(invoices);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all invoices for a project
fetchInvoices(12345, { project_id: 23456, is_estimate: false });
