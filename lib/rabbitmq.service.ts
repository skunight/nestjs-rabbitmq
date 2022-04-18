import { Inject, Injectable } from '@nestjs/common'
import { RABBITMQ_CLIENT } from './rabbitmq.constants';
import * as amqp from 'amqp-connection-manager'
@Injectable()
export class RabbitMqService {
  constructor(
    @Inject(RABBITMQ_CLIENT) private readonly client: amqp.AmqpConnectionManager
  ) {}

  getClient(): amqp.AmqpConnectionManager {
    return this.client
  }
}