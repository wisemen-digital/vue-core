import { relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { rm } from 'node:fs/promises'

import {
  ensureDir,
  getArtifactRoot,
  getHistoryRoot,
  getWorkspaceRoot,
  writeJsonFile,
} from '../../src/utils/fs'

const __dirname = fileURLToPath(new URL('..', import.meta.url))
const artifactRoot = getArtifactRoot()
const historyRoot = getHistoryRoot()
const componentPath = resolve(__dirname, 'fixtures/components/Button/Button.vue')

export async function seedArtifacts() {
  await rm(artifactRoot, { recursive: true, force: true })
  await ensureDir(artifactRoot)
  await ensureDir(historyRoot)

  const generatedAt = new Date().toISOString()
  const relativeComponentPath = relative(getWorkspaceRoot(), componentPath)

  const baseDetail = {
    name: 'VcTestButton',
    displayName: 'VcTestButton',
    path: relativeComponentPath,
    since: '1.0.0',
    tags: ['test'],
    description: 'Fixture component',
    props: [
      {
        name: 'label',
        type: 'string',
        required: true,
        default: 'Click me',
        description: 'Visible label',
      },
    ],
    events: [
      {
        name: 'click',
        description: 'Emits when clicked',
      },
    ],
    slots: [
      {
        name: 'default',
        description: 'Content',
      },
    ],
    emits: [
      {
        name: 'click',
        description: 'Emits when clicked',
      },
    ],
    methods: [],
    usage: [],
    imports: [
      {
        name: 'VcTestButton',
        path: '@wisemen/vue-core',
      },
    ],
  }

  await writeJsonFile(resolve(artifactRoot, 'components.json'), {
    meta: {
      generatedAt,
      hash: 'hash-components',
      components: 1,
    },
    data: {
      summaries: [
        {
          name: 'VcTestButton',
          displayName: 'VcTestButton',
          path: relativeComponentPath,
          since: '1.0.0',
          tags: ['test'],
        },
      ],
      details: {
        VcTestButton: baseDetail,
      },
      propsIndex: [
        {
          component: 'VcTestButton',
          prop: baseDetail.props[0],
        },
      ],
    },
  })

  await writeJsonFile(resolve(historyRoot, '1.0.0-components.json'), {
    meta: {
      generatedAt,
      hash: 'hash-components-old',
      components: 1,
    },
    data: {
      summaries: [
        {
          name: 'VcTestButton',
          displayName: 'VcTestButton',
          path: relativeComponentPath,
          since: '1.0.0',
          tags: ['test'],
        },
      ],
      details: {
        VcTestButton: {
          ...baseDetail,
          props: [
            {
              name: 'label',
              type: 'string',
              required: true,
              description: 'Visible label',
            },
          ],
        },
      },
      propsIndex: [
        {
          component: 'VcTestButton',
          prop: {
            name: 'label',
            type: 'string',
            required: true,
            description: 'Visible label',
          },
        },
      ],
    },
  })

  await writeJsonFile(resolve(artifactRoot, 'styles.json'), {
    meta: {
      generatedAt,
      hash: 'hash-styles',
    },
    data: {
      byComponent: {
        VcTestButton: {
          cssVars: ['--vc-test-button-bg'],
          classes: ['vc-test-button'],
          tokens: {
            '--vc-test-button-bg': 'fixture',
          },
        },
      },
      globalTokens: {
        '--vc-test-button-color': 'fixture',
      },
    },
  })

  await writeJsonFile(resolve(artifactRoot, 'stories.json'), {
    meta: {
      generatedAt,
      hash: 'hash-stories',
    },
    data: {
      stories: [
        {
          id: 'VcTestButton:story',
          title: 'Fixture story',
          component: 'VcTestButton',
          file: 'fixtures/Button.story.vue',
        },
      ],
    },
  })

  await writeJsonFile(resolve(artifactRoot, 'changelog.json'), {
    meta: {
      generatedAt,
      hash: 'hash-changelog',
    },
    data: {
      entries: [
        {
          version: '1.1.0',
          component: 'VcTestButton',
          notes: 'Add tone prop',
        },
      ],
    },
  })
}
