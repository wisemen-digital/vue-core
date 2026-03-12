import { Inject, Injectable, type OnModuleDestroy, type OnModuleInit } from '@nestjs/common'
import { PgBoss } from 'pg-boss'
import { MODULE_OPTIONS_TOKEN } from './pgboss-client.module-definition.js'
import { PgBossClientModuleOptions } from './pgboss-client.module-options.js'

@Injectable()
export class PgBossClient extends PgBoss implements OnModuleInit, OnModuleDestroy {
  constructor (
    @Inject(MODULE_OPTIONS_TOKEN) private options: PgBossClientModuleOptions
  ) {
    super(options.pgBossOptions)
  }

  async onModuleInit (): Promise<void> {
    await this.start()
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    this.on('error', this.options.onClientError ?? ((_error: Error) => process.exit(1)))
  }

  async onModuleDestroy (): Promise<void> {
    await this.stop()
  }
}
