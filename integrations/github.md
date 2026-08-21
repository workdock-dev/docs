# GitHub

[GitHub](https://github.com) is the largest development platform in the world and the home of modern software collaboration. It hosts Git repositories and provides everything teams need to review code, manage changes, and automate delivery through CI/CD.

## How it works with WorkDock

WorkDock integrates with GitHub as the **Git hosting provider** — the place where your repositories, branches, commits, and pull requests live. When an agent session starts, WorkDock prepares the repository inside an isolated sandbox using the credentials configured through the GitHub App.

### Repository and Code Operations

The **coding harness** is responsible for interacting with GitHub from within the sandbox. It handles the actual Git operations, including creating branches, committing changes, pushing code, and opening pull requests.

WorkDock stays focused on **orchestration**: managing the agent session, providing the necessary context, and coordinating the work while the harness performs the Git operations against the repository.

### Authentication for All Repositories

WorkDock requires GitHub App authentication for **all repositories**, including public ones. This ensures that the agent has the necessary access to perform Git operations such as pushing branches, creating pull requests, and responding to review comments.

When an issue references a repository that does not yet have a GitHub connection, WorkDock requests the user to authorize the GitHub App for that repository. The user can grant access to one or more repositories during the authorization flow, and WorkDock will store all granted connections.

If you expect the agent to modify GitHub Actions workflows, make sure the **Workflow** permission is enabled in the GitHub App's repository permissions. Without this permission, the agent will not be able to push changes to workflow files.

### Pull Request Feedback

WorkDock also integrates with GitHub's pull request workflow through **webhooks for review comments**.

When a reviewer leaves a comment on a pull request, WorkDock can re-trigger the agent session that originally produced the changes. The previous session context is restored, allowing the agent to understand what it was working on and respond directly to the review feedback.

The agent can then make the requested changes, commit them, and update the pull request — keeping the entire development and review loop inside the workflow your team already uses.

This creates a continuous cycle:

**Agent → Code → Pull Request → Review → Agent → Updated Code**
