import { RabbitMqModuleOptions, RabbitMqModuleAsyncOptions } from "./rabbitmq.interface";
import { RABBITMQ_CLIENT, RABBITMQ_MODULE_OPTIONS } from './rabbitmq.constants';
import * as amqp from 'amqp-connection-manager'
export const createClient = () => ({
  provide: RABBITMQ_CLIENT,
  useFactory:(options: RabbitMqModuleOptions) => {
    return amqp.connect([`amqp://${options.user || 'guest'}:${options.passwd || 'guest'}@${options.host || 'localhost'}:${options.port || 5672}`])
  },
  inject:[RABBITMQ_MODULE_OPTIONS]
})

export const createAsyncClientOptions = (options: RabbitMqModuleAsyncOptions) => ({
  provide: RABBITMQ_MODULE_OPTIONS,
  useFactory: options.useFactory,
  inject: options.inject
})