import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: [
    {
      input: 'src/index',
      name: 'index',
    },
  ],
  rollup: {
    emitCJS: true,
    inlineDependencies: false,
    esbuild: {
      target: 'node18',
      minify: false,
    },
  },
  hooks: {
    'build:done': async () => {
      const { chmod, readFile, writeFile } = await import('node:fs/promises')
      const mjsPath = 'dist/index.mjs'
      const content = await readFile(mjsPath, 'utf-8')
      await writeFile(mjsPath, `#!/usr/bin/env node\n${content}`)
      await chmod(mjsPath, 0o755)
    },
  },
})
