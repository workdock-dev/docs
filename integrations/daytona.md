# Daytona

[Daytona](https://daytona.io) is a sandbox infrastructure platform that provides secure, isolated development environments on demand. Each environment comes with its own compute, storage, and networking, making it possible to run multiple agent sessions in parallel without interfering with one another.

## How it works with WorkDock

WorkDock uses Daytona as the **sandbox infrastructure** — the isolated environment where each agent session runs. For every piece of work, WorkDock provisions a Daytona sandbox, prepares the repository inside it, and starts the configured coding harness.

### Persistent Agent Sessions

When an agent session ends, WorkDock **stops the Daytona sandbox instead of deleting it**. This allows the environment, including the files and state produced during the session, to remain available.

If the session needs to be resumed later, WorkDock can start the existing sandbox again and continue from the state in which the previous session ended. This preserves the agent's working context across sessions without requiring the environment to be recreated from scratch.

### Secrets Management

WorkDock integrates with Daytona's secrets feature so that secrets required by the repository and the AI agent — such as API tokens and access credentials — are not written directly into the sandbox environment or codebase.

Instead, secrets are configured as [Daytona Secrets](https://www.daytona.io/docs/en/secrets/) and associated with the **specific host** where they are required. Daytona makes those secrets available to the sandbox at runtime, keeping them separate from the repository and its files.

This ensures sensitive credentials remain isolated from the codebase and are not accidentally committed to version control.

### Sandbox Lifecycle

The sandbox lifecycle is intentionally tied to the lifecycle of the agent session:

**Create → Start → Agent Session → Stop → Resume**

Stopping the sandbox rather than deleting it allows WorkDock to preserve the development environment and resume the session later with its existing state intact.
