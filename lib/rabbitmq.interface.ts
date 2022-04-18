import { ModuleMetadata } from "@nestjs/common/interfaces";

export interface RabbitMqModuleOptions {
  user?: string,
  passwd?: string,
  host?: string,
  port?: number,
  global?: boolean,
}

export interface RabbitMqModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  useFactory?: (...args: any[]) => RabbitMqModuleOptions | Promise<RabbitMqModuleOptions>,
  inject?: any[];
  global?: boolean,
}