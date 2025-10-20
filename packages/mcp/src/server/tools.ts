import type { Tool } from '@modelcontextprotocol/sdk/types.js'

export const tools: Tool[] = [
  {
    name: 'list_packages',
    description: 'List all available packages in the monorepo',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'get_package_documentation',
    description: 'Fetch comprehensive documentation for a package. This includes README, available docs, and package info. ALWAYS call this first when asked about a package.',
    inputSchema: {
      type: 'object',
      properties: {
        package: {
          type: 'string',
          description: 'Package name (e.g., "components-next", "auth")',
        },
      },
      required: ['package'],
    },
  },
  {
    name: 'list_component_docs',
    description: 'List all available component documentation for packages like components-next. Use this to discover what components are documented.',
    inputSchema: {
      type: 'object',
      properties: {
        package: {
          type: 'string',
          description: 'Package name (e.g., "components-next")',
        },
      },
      required: ['package'],
    },
  },
  {
    name: 'get_component_documentation',
    description: 'Fetch detailed documentation for a specific component. Includes usage examples, props, events, and API reference.',
    inputSchema: {
      type: 'object',
      properties: {
        package: {
          type: 'string',
          description: 'Package name (e.g., "components-next")',
        },
        component: {
          type: 'string',
          description: 'Component name (e.g., "autocomplete", "button")',
        },
      },
      required: ['package', 'component'],
    },
  },
  {
    name: 'get_documentation_file',
    description: 'Read a specific documentation file from a package',
    inputSchema: {
      type: 'object',
      properties: {
        package: {
          type: 'string',
          description: 'Package name',
        },
        file: {
          type: 'string',
          description: 'Documentation file path relative to docs folder',
        },
      },
      required: ['package', 'file'],
    },
  },
  {
    name: 'search_documentation',
    description: 'Search for text within documentation files of a package',
    inputSchema: {
      type: 'object',
      properties: {
        package: {
          type: 'string',
          description: 'Package name',
        },
        query: {
          type: 'string',
          description: 'Search query',
        },
      },
      required: ['package', 'query'],
    },
  },
  {
    name: 'list_files',
    description: 'List all source files in a package',
    inputSchema: {
      type: 'object',
      properties: {
        package: {
          type: 'string',
          description: 'Package name (e.g., "components", "auth")',
        },
      },
      required: ['package'],
    },
  },
  {
    name: 'read_file',
    description: 'Read a source file from a package',
    inputSchema: {
      type: 'object',
      properties: {
        package: {
          type: 'string',
          description: 'Package name',
        },
        file: {
          type: 'string',
          description: 'File path relative to package root',
        },
      },
      required: ['package', 'file'],
    },
  },
  {
    name: 'search_code',
    description: 'Search for text in source code files within a package',
    inputSchema: {
      type: 'object',
      properties: {
        package: {
          type: 'string',
          description: 'Package name',
        },
        query: {
          type: 'string',
          description: 'Search query',
        },
      },
      required: ['package', 'query'],
    },
  },
  {
    name: 'git_log',
    description: 'Get git commit history for a package',
    inputSchema: {
      type: 'object',
      properties: {
        package: {
          type: 'string',
          description: 'Package name',
        },
        max_count: {
          type: 'number',
          description: 'Maximum number of commits to retrieve (default: 10)',
        },
      },
      required: ['package'],
    },
  },
  {
    name: 'git_diff',
    description: 'Get git diff for a package',
    inputSchema: {
      type: 'object',
      properties: {
        package: {
          type: 'string',
          description: 'Package name',
        },
        ref1: {
          type: 'string',
          description: 'First git reference (commit, branch, tag)',
        },
        ref2: {
          type: 'string',
          description: 'Second git reference (optional)',
        },
      },
      required: ['package'],
    },
  },
  {
    name: 'git_status',
    description: 'Get git status for a package',
    inputSchema: {
      type: 'object',
      properties: {
        package: {
          type: 'string',
          description: 'Package name',
        },
      },
      required: ['package'],
    },
  },
]
