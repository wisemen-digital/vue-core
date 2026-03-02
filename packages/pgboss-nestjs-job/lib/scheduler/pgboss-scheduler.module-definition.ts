import { ConfigurableModuleBuilder } from '@nestjs/common'
import { DefaultPgBossSchedulerModuleOptions } from './pgboss-scheduler.module-options.js'

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
  ASYNC_OPTIONS_TYPE
} = new ConfigurableModuleBuilder<DefaultPgBossSchedulerModuleOptions>()
  .setClassMethodName('forRoot')
  .build()
