# What is WorkDock?

**WorkDock is an open-source SDLC orchestration engine for shipping software with AI agents.**

It connects the tools you already use — your issue tracker, Git provider, coding harness, and sandbox — and coordinates them around the development workflow your team already follows.

WorkDock came from a question I kept returning to while building with AI agents: how do we apply the engineering practices we've spent decades refining to this new way of working?

## Why WorkDock exists

I was working on a new product. The roadmap was defined, the architecture was documented, and the work had been broken down into well-defined issues. Everything was ready to start implementing.

Then I stopped and thought about what that actually meant.

The next step was still to take an issue, prepare the repository, create a worktree, set up the environment, start an AI coding session, provide the context, and then repeat the process for the next issue. I could probably manage a few sessions in parallel, but at some point I'd become the bottleneck — switching between conversations, preparing environments, keeping track of context, and making sure nothing was lost.

Having managed engineering teams before, the problem felt familiar. **I didn't want to manage AI sessions; I wanted to assign work to AI agents the same way I would assign work to a team of engineers.** Give them an issue, provide the environment and context they need, let them work, review the pull request, give feedback, and let them continue.

That idea became WorkDock.

## The problem

The more I thought about it, the more I realized the problem wasn't really about getting AI agents to write code. They were already becoming remarkably capable at that. The harder problem was everything around the code.

Software engineering has spent more than 30 years developing practices for managing this complexity: issues, repositories, branches, pull requests, reviews, CI, environments, and all the processes that allow teams to work in parallel without constantly stepping on each other.

AI agents need that same structure.

There was also another problem: **knowledge debt**.

A lot of the knowledge created during development never makes it into the issue or documentation. Decisions, tradeoffs, discoveries, and implementation details often remain inside a developer's AI chat history or terminal session. When that session disappears, the knowledge can disappear with it, leaving the next developer or agent to rediscover it.

WorkDock keeps that context close to the work, so the knowledge created during a session can remain recoverable when the work continues.

## How WorkDock works

WorkDock provides the coordination layer between the systems already involved in development.

When an issue is assigned to WorkDock, it creates an agent session, provisions an isolated sandbox, prepares the repository, and starts the configured coding harness with the context required for the work. The agent works inside that environment, and the result moves into the existing Git workflow as a pull request.

When a ticket is completed, WorkDock archives the sandbox to free resources while preserving the environment's state. If the ticket is reopened, the sandbox is unarchived and the agent session resumes from where it left off.

From there, the normal development process continues. A developer or AI agent reviews the changes, provides feedback, and that feedback can trigger another cycle of work while preserving the context of the original session.

WorkDock doesn't replace your development workflow. **It connects it.**

Your issue tracker remains your issue tracker. Git remains Git. Pull requests remain pull requests. WorkDock coordinates what happens between them so AI agents can participate in the same workflow as the engineers on your team.

## The goal

Software engineering teams have spent more than 30 years refining how software gets built — how work is planned, assigned, executed, reviewed, and shipped.

Those processes exist for a reason. They are the accumulated knowledge of teams figuring out how to build software productively and at scale.

**WorkDock's goal is to take that accumulated engineering practice and apply it to AI.**

Not to throw away the workflows teams already trust, but to let AI agents operate within them.

The issue tracker, repository, pull request, review process, feedback loop, and knowledge created along the way can remain part of the same system.

**The objective isn't to replace the process. It's to make the process faster.**

That's the idea behind WorkDock.
