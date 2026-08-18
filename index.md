---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "WorkDock"
  text: "SDLC orchestration engine"
  tagline: Connect your issue tracker, Git provider, coding harness, and sandbox to coordinate AI-driven development end to end.
  actions:
    - theme: brand
      text: Getting Started
      link: /getting-started-docker

features:
  - title: Issue-driven workflows
    details: Receive events from Linear and GitHub, persist them in PostgreSQL, and process them with concurrent workers.
  - title: Agent orchestration
    details: Provision isolated sandboxes, run coding harnesses, and publish changes as pull requests.
  - title: Observable by default
    details: Natively exports telemetry through OTLP. View dashboards, traces, and metrics in SigNoz out of the box.
---

