export { };

interface Project {
  portfolio_id: number;
  description: string;
  end_date: string;
  is_archived: boolean;
  is_billable: boolean;
  mosaic_id: number;
  mosaic_team_id: number;
  project_number: string;
  start_date: string;
  title: string;
  total: number;
}

async function fetchProjects(portfolioId: number, archivedAfterDate?: string, archivedBeforeDate?: string): Promise<Project[]> {
  const url = new URL('/api/index', 'https://example.com');

  const params = {
    portfolio_id: portfolioId,
    archived_after_date: archivedAfterDate,
    archived_before_date: archivedBeforeDate,
  };

  Object.keys(params).forEach((key) => {
    if (params[key]) {
      url.searchParams.set(key, params[key]);
    }
  });

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`Failed to fetch projects: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  if (!data.project) {
    throw new Error('Unexpected API response format');
  }

  return data.project;
}

const projects = await fetchProjects(123);
console.log(projects);

const specificProjects = await fetchProjects(123, '2022-01-01', '2022-02-01');
console.log(specificProjects);
