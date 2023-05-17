import api from '../api';

interface TaskListData {
    project_id: number;
    name?: string;
    index?: number;
}

async function createTaskList(teamId: number, postData: TaskListData): Promise<void> {
    try {
        const response = await api.post(`/api/${teamId}/task_list`, postData);
        console.log(response.status);
    } catch (error) {
        console.error(error);
    }
}

// Example usage of creating a task list
const taskListData: TaskListData = {
    project_id: 34567,
    name: 'New Task List',
    index: 1,
};

createTaskList(12345, taskListData);