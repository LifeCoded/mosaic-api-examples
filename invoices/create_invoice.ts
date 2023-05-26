import api from '../api';

interface InvoiceData {
    project_id: number;
    phase_id: number;
    billing_category_id?: number;
    invoice_number?: string;
    invoice_type: "Fixed Fee" | "Percentage";
    is_estimate?: boolean;
    invoice_date?: string;
    period_start?: string;
    period_end?: string;
    amount?: number;
    percentage?: number;
    notes?: string;
}

async function createInvoice(teamId: number, postData: InvoiceData): Promise<void> {
    try {
        const response = await api.post(`/api/${teamId}/invoice`, postData);
        console.log(response.status);
    } catch (error) {
        console.error(error);
    }
}

// Example usage of creating an invoice of type Fixed Fee with 2,000 amounts
const invoiceData: InvoiceData = {
    project_id: 34567,
    phase_id: 345678,
    is_estimate: false,
    invoice_type: "Fixed Fee",
    period_start: "2023-05-01",
    period_end: "2023-05-10",
    invoice_date: "2023-05-11",
    notes: "Hello World",
    amount: 2000
};

createInvoice(12345, invoiceData);