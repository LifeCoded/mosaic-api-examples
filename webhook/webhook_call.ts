import express from 'express';

/**
 * @file webhook_call.ts
 * @description Example of handling and sending webhooks in Mosaic (create, update, delete).
 * This file shows how to process and trigger a webhook.
 */

/**
 * Represents the payload structure for webhook events.
 * 
 * @interface WebhookPayload
 * @property {string} dataType - The type of data (e.g., "portfolio").
 * @property {Record<string, any>} metadata - Any additional metadata.
 * @property {ActionType} actionType - The action that triggered the webhook (e.g., `CREATE`, `UPDATE`).
 * @property {Record<string, any>} payload - The actual data for the action (e.g., portfolio details).
 */

/**
 * Example of how to send a webhook after a portfolio is created:
 * 
 * ```typescript
 * await axios.post('http://localhost:3000/webhook', {
 *   dataType: "portfolio",
 *   actionType: ActionType.CREATE,
 *   payload: postData
 * });
 * ```
 * This can be adapted to trigger webhooks for other actions like `UPDATE` or `DELETE`.
 * Refer file `create_a_portfolio.ts` for an example of creating a portfolio.
 */

/**
 *  You can expect these payloads in the webhook response: https://readme.mosaicapp.com/reference/webhook-response-payloads
 */


const router = express.Router();

export enum ActionType {
    CREATE = "create",
    UPDATE = "update",
    DELETE = "delete"
}
export interface WebhookPayload {
    dataType: string;
    metadata: Record<string, any>;
    actionType: ActionType;
    payload: Record<string, any>;
}
  

router.post('/webhook', (req: express.Request, res: express.Response) => {
    const body: WebhookPayload = req.body;

    if (!body.dataType || !body.metadata || !body.actionType || !body.payload) {
        return res.status(400).send('Invalid webhook payload');
    }

    if (!Object.values(ActionType).includes(body.actionType)) {
        return res.status(400).send('Invalid action type');
    }

    console.log('Received webhook data:', body);

    // Process the webhook payload here (e.g., log, update database)
    res.status(200).send('Webhook received');
});

export default router;