import { Global, Module, DynamicModule } from '@nestjs/common'
import { RabbitMqModuleOptions, RabbitMqModuleAsyncOptions } from './rabbitmq.interface';
import { RABBITMQ_MODULE_OPTIONS } from './rabbitmq.constants';
import { RabbitMqService } from './rabbitmq.service';
import { createClient,createAsyncClientOptions } from './rabbitmq-client.provider';
@Global()
@Module({
  providers:[RabbitMqService],
  exports: [RabbitMqService]
})
export class RabbitMqModule {
  static forRoot(options:RabbitMqModuleOptions) : DynamicModule {
    return {
      module: RabbitMqModule,
      providers: [
        createClient(),
        {
          provide: RABBITMQ_MODULE_OPTIONS, 
          useValue: options
        }
      ],
      exports: [RabbitMqService]
    }
  }

  static forRootSync(options: RabbitMqModuleAsyncOptions) : DynamicModule {
    return {
      module: RabbitMqModule,
      providers: [
        createClient(),
        createAsyncClientOptions(options),
      ],
      exports: [RabbitMqService]
    }
  }
}