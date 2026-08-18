import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "workdock",
  description: "WorkDock is an open-source SDLC orchestration engine for shipping software with AI agents.",
  cleanUrls: true,
  outDir: "docs/",
  ignoreDeadLinks: [/^https?:\/\/localhost/],
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Sansation:wght@700&display=swap' }]
  ],
  themeConfig: {
    logo: '/logo-light.svg',

    nav: [
      { text: 'Getting Started', link: '/getting-started-docker' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is WorkDock?', link: '/what-is-workdock' },
          { text: 'Self-hosted with Docker', link: '/getting-started-docker' },
          { text: 'Managed', link: '/getting-started-managed' }
        ]
      },
      {
        text: 'Issue Trackers',
        items: [
          { text: 'Linear', link: '/integrations/linear' }
        ]
      },
      {
        text: 'Git Hosting',
        items: [
          { text: 'GitHub', link: '/integrations/github' }
        ]
      },
      {
        text: 'Harnesses',
        items: [
          { text: 'OpenCode', link: '/integrations/opencode' }
        ]
      },
      {
        text: 'Sandboxes',
        items: [
          { text: 'Daytona', link: '/integrations/daytona' }
        ]
      }
    ],

    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/workdock-dev/engine' }
    ],

    search: {
      provider: 'local'
    }
  }
})
