"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAsyncClientOptions = exports.createClient = void 0;
const rabbitmq_constants_1 = require("./rabbitmq.constants");
const amqp = require("amqp-connection-manager");
exports.createClient = () => ({
    provide: rabbitmq_constants_1.RABBITMQ_CLIENT,
    useFactory: (options) => {
        return amqp.connect([`amqp://${options.user || 'guest'}:${options.passwd || 'guest'}@${options.host || 'localhost'}:${options.port || 5672}`]);
    },
    inject: [rabbitmq_constants_1.RABBITMQ_MODULE_OPTIONS]
});
exports.createAsyncClientOptions = (options) => ({
    provide: rabbitmq_constants_1.RABBITMQ_MODULE_OPTIONS,
    useFactory: options.useFactory,
    inject: options.inject
});
