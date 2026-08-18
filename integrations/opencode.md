# OpenCode

[OpenCode](https://opencode.ai) is an open-source coding harness that provides an AI-powered development environment. It connects agents to language models and development tools, allowing them to read, write, and execute code within a controlled session.

## How it works with WorkDock

WorkDock uses OpenCode as the **coding harness** — the component responsible for carrying out the actual implementation work. WorkDock handles the orchestration around the session, while OpenCode operates the development environment where the code is changed.

### Starting an Agent Session

When an agent session starts, WorkDock provisions an **isolated sandbox**, prepares the target repository, and launches OpenCode with the context and instructions associated with the issue.

OpenCode then starts with the information it needs to understand the task and work directly against the repository.

### Implementing the Changes

Inside the sandbox, OpenCode has access to the repository and the secrets required by the task. It can inspect the existing codebase, modify files, run commands, and use its configured tools to implement the requested changes.

The resulting changes remain within the isolated environment while the agent works, keeping the execution environment separated from the rest of the system.

### From Code to Pull Request

OpenCode is responsible for the Git operations performed during the session, including creating commits and pull requests. However, these actions are **not automatic**. The harness creates a commit or pull request only when the issue requirements instruct the agent to do so.

When the agent session ends, WorkDock checks the result of the session to determine whether a pull request was created. If a PR exists, WorkDock associates it with the corresponding agent session, keeping the implementation work and its resulting review workflow connected.

The overall flow looks like:

**Issue → WorkDock → Sandbox → OpenCode → Code Changes → Commit / Pull Request**

This separation keeps **WorkDock responsible for orchestration and session lifecycle**, while **OpenCode is responsible for carrying out the development work and Git operations according to the instructions it receives**.
