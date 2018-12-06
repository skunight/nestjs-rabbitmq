
# Nestjs Rabbitmq
Rabbitmq component for NestJs.


### Installation

**Yarn**
```bash
yarn add nestjs-rabbitmq
```

**NPM**
```bash
npm install nestjs-rabbitmq --save
```

### Getting Started
Let's import the RabbitMqModule in `app.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { RabbitMqModule} from 'nestjs-rabbitmq'

@Module({
    imports: [
        RabbitMqModule.forRoot(options)
    ],
})
export class AppModule {}
```
With Async
```typescript
import { Module } from '@nestjs/common';
import { RabbitMqModule} from 'nestjs-rabbitmq'

@Module({
    imports: [
        RabbitMqModule.forRootAsync({
            useFactory: (configService: ConfigService) => configService.get('rabbitmq'),         // or use async method
            //useFactory: async (configService: ConfigService) => configService.get('rabbitmq'),
            inject:[ConfigService]
        }),
    ],
})
export class AppModule {}
```
Options
```typescript
interface RabbitMqModuleOptions {
  user?: string,    //Default guest
  passwd?: string,  //Default guest
  host?: string,    //Default localhost
  port?: number     //Default 5672
}
```
That's it!