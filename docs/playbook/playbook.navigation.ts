import type { PackageDocNavigation } from '@docs/packages/navigation'

export const PLAYBOOK_NAVIGATION: PackageDocNavigation = {
  title: 'Playbook',
  link: 'index',
  path: 'playbook',
  sidebar: [
    {
      text: 'Project template',
      link: '/playbook/project-template',
    },
    {
      text: 'Tools',
      link: '/playbook/tools',
    },
    {
      text: 'Project structure',
      link: '/playbook/project-structure',
    },
    {
      text: 'Clean code',
      link: '/playbook/clean-code',
    },
    {
      text: 'Naming conventions',
      link: '/playbook/naming-conventions',
    },
    {
      text: 'ESLint config',
      link: '/playbook/eslint-config',
    },
    {
      text: 'Teamwork',
      link: '/playbook/teamwork',
    },
    {
      text: 'Libraries',
      link: '/playbook/libraries',
    },
    {
      text: 'Components',
      link: '/playbook/components',
      items: [
        {
          text: 'Naming',
          link: '/playbook/components/naming',
        },
        {
          text: 'Structure',
          link: '/playbook/components/structure',
        },
        {
          text: 'Smart vs Dumb',
          link: '/playbook/components/smart-dumb',
        },
        {
          text: 'Props',
          link: '/playbook/components/props',
        },
        {
          text: 'Emits',
          link: '/playbook/components/emits',
        },
        {
          text: 'Slots',
          link: '/playbook/components/slots',
        },
        {
          text: 'Accessibility',
          link: '/playbook/components/accessibility',
        },
      ],
    },
    {
      text: 'Reusable code',
      link: '/playbook/reusable-code',
      items: [
        {
          text: 'Composables',
          link: '/playbook/reusable-code/composables',
        },
        {
          text: 'Utils',
          link: '/playbook/reusable-code/utils',
        },
        {
          text: 'Stores',
          link: '/playbook/reusable-code/stores',
        },
        {
          text: 'Services',
          link: '/playbook/reusable-code/services',
        },
        {
          text: 'Queries',
          link: '/playbook/reusable-code/queries',
        },
        {
          text: 'Models',
          link: '/playbook/reusable-code/models',
        },
        {
          text: 'Transformers',
          link: '/playbook/reusable-code/transformers',
        },
        {
          text: 'Pagination',
          link: '/playbook/reusable-code/pagination',
        },
        {
          text: 'Mutations',
          link: '/playbook/reusable-code/mutations',
        },
        {
          text: 'Router',
          link: '/playbook/reusable-code/router',
        },
        {
          text: 'Authentication',
          link: '/playbook/reusable-code/authentication',
        },
      ],
    },
    {
      text: 'Testing',
      link: '/playbook/testing',
      items: [
        {
          text: 'Unit testing',
          link: '/playbook/testing/unit-testing',
        },
        {
          text: 'E2E testing',
          link: '/playbook/testing/e2e-testing',
        },
        {
          text: 'Integration testing',
          link: '/playbook/testing/integration-testing',
        },
      ],
    },
    {
      text: 'Design patterns',
      link: '/playbook/design-patterns',
      items: [
        {
          text: 'Solid',
          link: '/playbook/design-patterns/solid',
        },
        {
          text: 'Builder pattern',
          link: '/playbook/design-patterns/builder-pattern',
        },
      ],
    },
    {
      text: 'Packages',
      link: '/playbook/packages',
      items: [
        {
          text: 'oAuth client',
          link: '/playbook/packages/o-auth-client',
        },
      ],
    },
    {
      text: 'Accessibility',
      link: '/playbook/accessibility',
      items: [
        {
          text: 'Semantic HTML',
          link: '/playbook/accessibility/semantic-html',
        },
        {
          text: 'Visual elements',
          link: '/playbook/accessibility/visual-elements',
        },
        {
          text: 'Typography',
          link: '/playbook/accessibility/typography',
        },
        {
          text: 'Images & icons',
          link: '/playbook/accessibility/images-and-icons',
        },
        {
          text: 'Keyboard Navigation & Focus Management',
          link: '/playbook/accessibility/keyboard-navigation-and-focus-management',
        },
        {
          text: 'ARIA',
          link: '/playbook/accessibility/aria',
        },
        {
          text: 'Color & Contrast',
          link: '/playbook/accessibility/color-and-contrast',
        },
        {
          text: 'Forms & inputs',
          link: '/playbook/accessibility/forms-and-inputs',
        },
        {
          text: 'Navigation',
          link: '/playbook/accessibility/navigation',
        },
        {
          text: 'Animations',
          link: '/playbook/accessibility/animations',
        },
        {
          text: 'Responsive & mobile accessibility',
          link: '/playbook/accessibility/responsive-and-mobile',
        },
      ],
    },
  ],
}
