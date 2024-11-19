import * as qs from 'qs';
import api from '../api';

interface WorkPlanQueryParams {
    project_ids?: number[];
    phase_ids?: number[];
    standard_work_category_ids?: number[];
    start_date?: string;
    end_date?: string;
    min_total_hours?: number;
    max_total_hours?: number;
    min_daily_hours?: number;
    max_daily_hours?: number;
    limit?: number;
    offset?: number;
    all?: boolean;
    member_ids?: number[];
}

async function fetchWorkPlans(teamId: number, queryParams: WorkPlanQueryParams): Promise<void> {
  try {
    const queryStinrg = qs.stringify(queryParams, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/work_plan/index${queryStinrg}`);
    const data = response.data as { work_plans: any[]; count: number };
    const workPlans = data.work_plans;
    const totalCount = data.count;
    console.log(workPlans);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all work plans in May related to the given projects and members
const workPlanQueryData: WorkPlanQueryParams = {
    project_ids: [56789, 67890],
    member_ids: [12345, 23456],
    start_date: "05/01/2023",
    end_date: "05/31/2023",
    all: true
}

fetchWorkPlans(12345, workPlanQueryData);
