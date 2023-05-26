import api from '../api';

interface InvoiceUpdateData {
    project_id: number;
    phase_id?: number;
    billing_category_id?: number;
    invoice_number?: string;
    invoice_type?: "Fixed Fee" | "Percentage";
    is_estimate?: boolean;
    invoice_date?: string;
    period_start?: string;
    period_end?: string;
    amount?: number;
    percentage?: number;
    notes?: string;
}

async function updateInvoice(teamId: number, invoiceId: number, updateData: InvoiceUpdateData): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/invoice/${invoiceId}`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating an invoice data, amount, and notes of an invoice
const invoiceData: InvoiceUpdateData = {
  project_id: 34567,
  invoice_date: "2023-05-15",
  amount: 3000,
  notes: "Updated Invoice"
};

updateInvoice(12345, 67890, invoiceData);
