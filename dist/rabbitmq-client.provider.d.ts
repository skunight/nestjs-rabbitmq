import { RabbitMqModuleOptions, RabbitMqModuleAsyncOptions } from "./rabbitmq.interface";
import * as amqp from 'amqp-connection-manager';
export declare const createClient: () => {
    provide: symbol;
    useFactory: (options: RabbitMqModuleOptions) => amqp.AmqpConnectionManager;
    inject: symbol[];
};
export declare const createAsyncClientOptions: (options: RabbitMqModuleAsyncOptions) => {
    provide: symbol;
    useFactory: (...args: any[]) => RabbitMqModuleOptions | Promise<RabbitMqModuleOptions>;
    inject: any[];
};
