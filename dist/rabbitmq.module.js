"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var RabbitMqModule_1;
const common_1 = require("@nestjs/common");
const rabbitmq_constants_1 = require("./rabbitmq.constants");
const rabbitmq_service_1 = require("./rabbitmq.service");
const rabbitmq_client_provider_1 = require("./rabbitmq-client.provider");
let RabbitMqModule = RabbitMqModule_1 = class RabbitMqModule {
    static forRoot(options) {
        return {
            module: RabbitMqModule_1,
            providers: [
                rabbitmq_client_provider_1.createClient(),
                {
                    provide: rabbitmq_constants_1.RABBITMQ_MODULE_OPTIONS,
                    useValue: options
                }
            ],
            exports: [rabbitmq_service_1.RabbitMqService]
        };
    }
    static forRootSync(options) {
        return {
            module: RabbitMqModule_1,
            providers: [
                rabbitmq_client_provider_1.createClient(),
                rabbitmq_client_provider_1.createAsyncClientOptions(options),
            ],
            exports: [rabbitmq_service_1.RabbitMqService]
        };
    }
};
RabbitMqModule = RabbitMqModule_1 = __decorate([
    common_1.Global(),
    common_1.Module({
        providers: [rabbitmq_service_1.RabbitMqService],
        exports: [rabbitmq_service_1.RabbitMqService]
    })
], RabbitMqModule);
exports.RabbitMqModule = RabbitMqModule;
