import api from '../api';

const INTEGRATION_TYPES = [
    "csv-agent",
    "deltek-ajera-cloud",
    "deltek-ajera-hosted",
    "deltek-vantagepoint-cloud",
    "deltek-vision-cloud",
    "deltek-vision-hosted",
    "github",
    "jira-cloud",
    "office365",
    "tray-asana",
    "tray-google-calendar",
    "quickbooks-online",
    "quickbooks-desktop",
    "viewpoint-vista-hosted",
    "bst-hosted"
] as const;

type IntegrationType = typeof INTEGRATION_TYPES[number];

interface IntegrationData {
    intergation_type: IntegrationType;
}

async function endIntegration(teamId: number, postData: IntegrationData): Promise<void> {
    try {
        const response = await api.post(`/api/${teamId}/integrations/deprovision`, postData);
        console.log(response.status);
    } catch (error) {
        console.error(error);
    }
}

// Example usage of ending integration relationship
const integrationData: IntegrationData = {
    "intergation_type": "csv-agent"
}

endIntegration(12345, integrationData);