import api from '../api';

interface MemberData {
  email: string;
  first_name?: string;
  last_name?: string;
}

async function createMember(teamId: number, postData: MemberData): Promise<void> {
  try {
    const response = await api.post(`/api/${teamId}/member`, postData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of creating an employee
const memberData: MemberData = {
  email: "exampleEmployee@mosaicapp.com",
  first_name: "Example",
  last_name: "Employee"
};

createMember(12345, memberData);
