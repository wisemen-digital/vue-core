import type { ClassConstructor } from 'class-transformer'
import type { ConfigService } from '@nestjs/config'
import type { NamedConnectionOptions } from './nats-connection.manager.js'

const NATS_CLIENT_KEY = Symbol('wisemen.nats-client')

export type NatsClientConfigFunction = (configService: ConfigService) => NamedConnectionOptions

export function NatsClient (options: NatsClientConfigFunction): ClassDecorator {
  return ((target: ClassConstructor<unknown>): void => {
    Reflect.defineMetadata(NATS_CLIENT_KEY, options, target)
  }) as ClassDecorator
}

export function getNatsConnectionOptions (
  client: ClassConstructor<unknown>,
  config: ConfigService
): NamedConnectionOptions {
  const options = Reflect.getMetadata(NATS_CLIENT_KEY, client) as NatsClientConfigFunction

  if (options === undefined) {
    throw new Error(
      `${client.name} is not a valid nats client\nDid you forget to add the @NatsClient({...}) decorator?`
    )
  }

  return options(config)
}
