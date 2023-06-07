import api from '../api';

type EntityType = "phase" | "work_plan" | "task" | "scope";
type DependencyType = "start_date_to_start_date" | "end_date_to_end_date" | "start_date_to_end_date" | "end_date_to_start_date";

interface DependencyInfo {
    follower_type: EntityType;
    follower_id: number;
    leader_type: EntityType;
    leader_id: number;
    dependency_type: DependencyType;
}

interface DependencyData {
    dependency_params: DependencyInfo[];
}

async function deleteDependency(teamId: number, postData: DependencyData): Promise<void> {
    try {
        const response = await api.delete(`/api/${teamId}/dependencies`, postData);
        console.log(response.status);
    } catch (error) {
        console.error(error);
    }
}

// Example usage of deleting a dependency between two work plans
const dependencyData: DependencyData = {
    "dependency_params": [
        {
            "follower_type": "work_plan",
            "follower_id": 11111,
            "leader_type": "work_plan",
            "leader_id": 22222,
            "dependency_type": "start_date_to_end_date"
        }
    ]
}

deleteDependency(12345, dependencyData);