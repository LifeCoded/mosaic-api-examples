export { };

interface ProjectUpdate {
  portfolio_id?: number;
  project_number?: number;
  title?: string;
  description?: string;
  client?: string;
  start_date?: string;
  end_date?: string;
  total?: number;
  billable?: boolean;
  phase_orders?: number[];
}

async function updateProject(projectId: number, update: ProjectUpdate): Promise<void> {
  const url = new URL(`/api/update/${projectId}`, 'https://example.com');

  const formData = new FormData();

  Object.keys(update).forEach((key) => {
    if (update[key]) {
      if (key === 'phase_orders') {
        update[key]?.forEach((phaseOrder) => {
          formData.append(key, phaseOrder.toString());
        });
      } else {
        formData.append(key, update[key].toString());
      }
    }
  });

  const response = await fetch(url.toString(), {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Failed to update project: ${response.status} ${response.statusText}`);
  }
}

const update = {
  portfolio_id: 123,
  title: 'New Title',
  start_date: '2022-01-01',
  end_date: '2022-02-01',
  billable: true,
};

await updateProject(456, update);

const moreUpdates = {
  phase_orders: [3, 1, 2],
};

await updateProject(456, moreUpdates);
