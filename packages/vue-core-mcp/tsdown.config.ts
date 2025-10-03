import { defineConfig } from 'tsdown'

export default defineConfig({
  clean: true,
  dts: true,
  format: 'esm',
  platform: 'node',
  entry: [
    'src/index.ts',
    'src/server.ts',
    'src/indexer/index.ts',
    'src/tools/listComponents.ts',
    'src/tools/getComponent.ts',
    'src/tools/searchProps.ts',
    'src/tools/getStyles.ts',
    'src/tools/getChangelog.ts',
    'src/tools/diffComponent.ts',
    'src/utils/fs.ts',
    'src/utils/git.ts',
    'src/utils/cache.ts',
    'src/utils/logger.ts',
    'src/utils/artifacts.ts',
    'src/indexer/scanComponents.ts',
    'src/indexer/scanStories.ts',
    'src/indexer/scanStyles.ts',
    'src/indexer/scanChangelog.ts',
    'src/indexer/writeArtifacts.ts',
    'src/schemas/component.ts',
    'src/schemas/props.ts',
    'src/schemas/styles.ts',
    'src/schemas/stories.ts',
    'src/schemas/changelog.ts',
    'src/schemas/common.ts'
  ],
  external: [
    '@modelcontextprotocol/sdk',
    'commander',
    'conventional-changelog',
    'fast-glob',
    'gray-matter',
    'semver',
    'vue-docgen-api',
    'zod'
  ]
})
