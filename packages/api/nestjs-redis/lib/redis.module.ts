import { type DynamicModule, Module } from '@nestjs/common'
import { RedisClient } from './redis.client.js'
import {
  ConfigurableModuleClass,
  OPTIONS_TYPE,
  ASYNC_OPTIONS_TYPE
} from './redis.module-definitions.js'

@Module({
  providers: [RedisClient],
  exports: [RedisClient]
})
export class RedisModule extends ConfigurableModuleClass {
  static override forRoot (options: typeof OPTIONS_TYPE): DynamicModule {
    const module = super.forRoot(options)

    return module
  }

  static override forRootAsync (options: typeof ASYNC_OPTIONS_TYPE): DynamicModule {
    const module = super.forRootAsync(options)

    return module
  }
}
