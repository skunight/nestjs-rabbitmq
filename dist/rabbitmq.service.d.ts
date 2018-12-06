import * as amqp from 'amqp-connection-manager';
export declare class RabbitMqService {
    private readonly client;
    constructor(client: amqp.AmqpConnectionManager);
    getClient(): amqp.AmqpConnectionManager;
}
