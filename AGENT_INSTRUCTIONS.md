# Agent Instructions — FAQ Site Updater

When assigned to a ticket on the [FlowDeck Support Tickets board](https://monday.monday.com/boards/18420345411), publish the suggested Q&A to the public help center.

---

## 1. Read the ticket

From the assigned ticket, get:
- **Ticket ID** — the `Ticket ID` column (e.g. `FD-1047`), used for the branch name.
- **KB Provision** — the doc in the `KB Provision` column. This doc holds the proposed Q&A content, written for human review.

Open the KB Provision doc and pull out the clean **question** and **answer**:
- **Question** — the line under `### Q:` (drop the `Q:` prefix).
- **Answer** — the answer text below it.

Ignore everything under **"Reviewer notes (do not publish)"** — that is internal and must not go on the site. If the notes flag an open question (e.g. "confirm whether exact numbers may be published"), do not invent a decision — leave a comment on the ticket and stop.

---

## 2. Add the Q&A to the site

Clone / open the repo: `https://github.com/anyatchernishov/support-faq-site`

Create a branch:
```
git checkout -b faq/<ticket-id>-<short-slug>
# e.g. faq/FD-1047-concurrent-board-users
```

Edit **only** `faq-data.js`. Append one object to the `FAQ_ITEMS` array (before the closing `];`), and add a comma after the previous entry:

```js
  {
    question: "{Question}",
    answer: "{Answer}",
    category: "{Category slug}"
  }
```

Set `category` from the ticket's **Category** column. Use one of these slugs (must match the sidebar topics):

| Category column value | Slug |
|---|---|
| Getting Started | `getting-started` |
| Automations | `automations` |
| Integrations | `integrations` |
| Security | `security` |
| Account | `account` |
| Billing | `billing` |

`answer` may contain simple HTML (`<strong>`, `<a href>`, `<code>`) for formatting. The site renders the new card under the matching category section in the **Q&A** tab automatically — no HTML or CSS changes.

Commit:
```
git add faq-data.js
git commit -m "Add Q&A: {Question} ({ticket-id})"
git push origin <branch>
```

---

## 3. Open AND merge the PR

Opening the PR is not enough — **you must merge it yourself.** Do not stop and wait for a review or approval; there are none.

```bash
gh pr create \
  --title "Add Q&A: {Question}" \
  --body "Publishes KB Provision from {ticket-id}: {Question}"

# Merge immediately — no approvals required
gh pr merge --squash --delete-branch
```

Then confirm the merge actually happened before moving on:

```bash
gh pr view --json state,mergedAt   # state must be "MERGED"
```

If it is still `OPEN`, run `gh pr merge --squash --delete-branch` again. Only continue once the PR is `MERGED`. Merging to `main` triggers an automatic Netlify deploy via GitHub Actions (~30s).

---

## 4. Comment on the ticket

Once merged, post an update on the ticket:

> ✅ Published to the FlowDeck help center.
> **PR:** https://github.com/anyatchernishov/support-faq-site/pull/{n}
> **Live site:** https://flowdeck-support.netlify.app

Then set the ticket's **Status** column to `Resolved`.

---

## Reference

| Resource | URL |
|---|---|
| GitHub repo | https://github.com/anyatchernishov/support-faq-site |
| Live site | https://flowdeck-support.netlify.app |
| monday board | https://monday.monday.com/boards/18420345411 |

**Board columns:** `Ticket ID` (branch name) · `KB Provision` (doc with proposed Q&A) · `Category` · `Status` · `Priority` · `Plan`
