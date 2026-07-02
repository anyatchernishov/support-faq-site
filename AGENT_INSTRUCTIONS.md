# Agent Instructions — FAQ Site Updater

When assigned to an item on the [Pulse CRM FAQ board](https://monday.monday.com/boards/18420395662), do the following:

---

## 1. Read the board item

From the assigned item, get:
- **Question** — the item name
- **Answer** — the `Answer` column (long text)
- **Ticket** — the `Source ticket` column (for the branch name)

---

## 2. Add the FAQ to the site

Clone / open the repo: `https://github.com/anyatchernishov/support-faq-site`

Create a branch:
```
git checkout -b faq/<ticket-id>-<short-slug>
# e.g. faq/TICKET-1102-merge-duplicate-contacts
```

In `index.html`, add a new entry **before** the closing `</section>` tag inside `<section class="faq" id="faq-list">`:
```html
<article class="faq-item">
  <h2>{Question}</h2>
  <p>{Answer}</p>
</article>
```

Commit:
```
git add index.html
git commit -m "Add FAQ: {Question} ({ticket-id})"
git push origin <branch>
```

---

## 3. Open and merge the PR

```bash
gh pr create \
  --title "Add FAQ: {Question}" \
  --body "Closes {ticket-id}. Adds answer to: {Question}"

gh pr merge --squash --delete-branch
```

No approvals required. Merging to `main` triggers an automatic Netlify deploy via GitHub Actions (~30s).

---

## 4. Comment on the monday item

Once merged, post an update on the board item:

> ✅ Published to the FAQ site.
> **PR:** https://github.com/anyatchernishov/support-faq-site/pull/{n}
> **Live site:** https://pulse-crm-faq.netlify.app

Then set the item's **Status** column to `Published`.

---

## Reference

| Resource | URL |
|---|---|
| GitHub repo | https://github.com/anyatchernishov/support-faq-site |
| Live site | https://pulse-crm-faq.netlify.app |
| monday board | https://monday.monday.com/boards/18420395662 |
