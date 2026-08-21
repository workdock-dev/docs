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

### Archive on Ticket Completion

When a ticket is marked as done in the issue tracker, WorkDock automatically archives the sandbox associated with that ticket. Archiving reduces resource usage while preserving the sandbox's state in case the ticket is reopened later.

If a ticket is reopened and the agent session resumes, WorkDock checks whether the sandbox has been archived and unarchives it before starting a new session, restoring the previous environment without requiring a full reprovision.

This creates a lifecycle that aligns with the work itself:

**Ticket Open → Sandbox Active → Ticket Done → Sandbox Archived → Ticket Reopened → Sandbox Unarchived & Active**

### Auto-Stop Interval

WorkDock configures each sandbox with a **5-minute auto-stop interval**. When a sandbox is idle — meaning no active agent session is running — it will automatically stop after 5 minutes to conserve resources.

The sandbox is restarted automatically when a new agent session begins or when a previous session resumes, so the auto-stop interval does not affect the agent's ability to continue working.

For more information, see the [Daytona auto-stop interval documentation](https://www.daytona.io/docs/en/sandboxes/#auto-stop-interval).

### Sandbox Lifecycle

The sandbox lifecycle is intentionally tied to the lifecycle of the agent session:

**Create → Start → Agent Session → Stop → Resume → Archive → Unarchive**

Stopping the sandbox rather than deleting it allows WorkDock to preserve the development environment and resume the session later with its existing state intact. When the associated ticket is completed, the sandbox is archived to free resources, and it can be unarchived if the ticket is reopened.
