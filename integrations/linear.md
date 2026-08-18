# Linear

[Linear](https://linear.com) is a purpose-built project management tool for modern software teams. It brings together issue tracking, project planning, and sprint management in an opinionated workflow designed to keep teams focused and moving work forward.

## How it works with WorkDock

WorkDock treats Linear as the **source of truth for the work to be done**. Instead of manually starting an agent and providing it with a task, you can assign an issue to WorkDock directly from Linear.

When an issue is assigned to WorkDock, it creates an agent session, provisions an isolated environment, and starts the configured coding harness with the context from the Linear issue.

### Issue to Agent Session

The Linear issue provides the starting point for the agent session. WorkDock uses the issue's context to initialize the session and connect the task to the appropriate development environment.

This means the workflow can start where your team already manages its work:

**Linear Issue → WorkDock → Agent Session → Development Environment**

### Linking a GitHub Repository

WorkDock can automatically associate a Linear issue with a GitHub repository using **labels**.

Add a label in the format `repo=owner/repo` to the Linear issue — for example, `repo=my-org/my-app` — and WorkDock will:

1. **Detect the repository** from the issue label and set it as the target for the agent session.
2. **Verify repository access** to make sure WorkDock can work with the repository on GitHub.
3. **Request authorization when needed** if access has not yet been granted, notifying you directly in Linear with a link to install the GitHub App.

