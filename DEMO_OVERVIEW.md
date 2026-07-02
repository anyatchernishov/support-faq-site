# FlowDeck Help Center — Agent Demo

A demo where a Cursor agent turns a support ticket into a published help-center answer, end to end, with no human touching code.

## The flow

1. Agent is assigned a ticket on the **[FlowDeck Support Tickets board](https://monday.monday.com/boards/18420345411)**.
2. It reads the ticket's **KB Provision doc** (proposed Q&A, written for review) and extracts the clean question + answer.
3. It appends one entry to `faq-data.js` in the repo, opens a PR, and squash-merges it (no approval required).
4. The merge triggers a **GitHub Action → Netlify** deploy (~1 min).
5. The agent comments the PR + live link on the ticket and sets **Status → Resolved**.

## What we built

- **Live site:** https://flowdeck-support.netlify.app — a monday-style help center (sidebar topics, tabbed panels, search). Clicking a topic swaps the content; no scrolling.
- **Content as data:** all Q&A lives in `faq-data.js`. The agent only appends `{ question, answer }` — no HTML/CSS edits, so changes are tiny and low-risk.
- **Auto-deploy:** every merge to `main` deploys to Netlify via GitHub Actions.
- **Agent instructions:** `AGENT_INSTRUCTIONS.md` in the repo is the single source of truth. The agent is told to read that file rather than carry a copy.

## Demo moment (FD-1047)

The ticket *"How many people can view and edit the same board at once?"* is intentionally **not** pre-loaded. During the demo the agent publishes it live. Its KB Provision doc includes a "do not publish" reviewer note about internal concurrency limits — a nice showcase of the agent respecting review gates.

## Links

| | |
|---|---|
| Live site | https://flowdeck-support.netlify.app |
| GitHub repo | https://github.com/anyatchernishov/support-faq-site |
| monday board | https://monday.monday.com/boards/18420345411 |
| Agent instructions | `AGENT_INSTRUCTIONS.md` (repo root) |
