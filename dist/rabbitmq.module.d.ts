import { DynamicModule } from '@nestjs/common';
import { RabbitMqModuleOptions, RabbitMqModuleAsyncOptions } from './rabbitmq.interface';
export declare class RabbitMqModule {
    static forRoot(options: RabbitMqModuleOptions): DynamicModule;
    static forRootSync(options: RabbitMqModuleAsyncOptions): DynamicModule;
}
