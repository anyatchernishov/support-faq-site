// Integrations help articles for the Integrations section of the help center.
//
// Articles are grouped by subcategory for easier browsing. `answer` may contain
// simple HTML (<strong>, <a>, <code>) for formatting.
//
//   { question: "…", answer: "…", subcategory: "import-export" }

window.INTEGRATIONS_SUBCATEGORIES = {
  "import-export": {
    title: "Data import & export",
    sub: "CSV, spreadsheet, and project-tool migrations into FlowDeck."
  },
  messaging: {
    title: "Messaging & notifications",
    sub: "Slack, Microsoft Teams, and email delivery for board updates."
  },
  "dev-tools": {
    title: "Developer & issue tracking",
    sub: "GitHub, Jira, GitLab, and embedded docs from Notion."
  },
  "cloud-storage": {
    title: "Cloud storage",
    sub: "Attach and sync files from Drive, Dropbox, and OneDrive."
  },
  calendar: {
    title: "Calendar & meetings",
    sub: "Sync deadlines with Google Calendar, Outlook, and Zoom."
  },
  "automation-platforms": {
    title: "Automation platforms",
    sub: "Zapier, Make, webhooks, and billing event triggers."
  },
  "crm-sales": {
    title: "CRM & custom API",
    sub: "Salesforce, HubSpot, and REST API connections."
  }
};

window.INTEGRATIONS_SUBCATEGORY_ORDER = [
  "import-export",
  "messaging",
  "dev-tools",
  "cloud-storage",
  "calendar",
  "automation-platforms",
  "crm-sales"
];

window.INTEGRATIONS_ITEMS = [
  {
    subcategory: "import-export",
    question: "CSV import mis-mapping date columns (DD/MM vs MM/DD)",
    answer: "During import, FlowDeck defaults to MM/DD/YYYY. If your CSV uses DD/MM/YYYY, select <strong>Custom date format</strong> on the column-mapping screen and enter <code>DD/MM/YYYY</code>. You can also pre-convert your dates in Excel or Google Sheets before uploading to avoid the issue."
  },
  {
    subcategory: "import-export",
    question: "Trello board import stalling at 80% progress",
    answer: "Large Trello boards (500+ cards) can time out during import. The workaround is to export your Trello board in smaller batches — archive completed cards first, export, then import the active cards. Full large-board import support is on our roadmap for Q3 2025."
  },
  {
    subcategory: "import-export",
    question: "Sync a Google Sheets tab with a FlowDeck board",
    answer: "Install the Google Sheets integration from <strong>Integrations → Google Sheets</strong>, authorize your Google account, and select a spreadsheet tab to link. New rows in the sheet create items on the board; status changes in FlowDeck write back to a designated column. Sync runs every 5 minutes on Pro plans and every 60 seconds on Enterprise."
  },
  {
    subcategory: "import-export",
    question: "Import an Airtable base into FlowDeck",
    answer: "Use <strong>Integrations → Airtable → Import Base</strong> and paste your Airtable share link or API key. FlowDeck maps Airtable field types to board columns automatically — single-select becomes Status, attachments become File columns, and linked records become Connect columns. Run a test import on 50 records before syncing the full base."
  },
  {
    subcategory: "import-export",
    question: "Migrate an Asana project to a FlowDeck board",
    answer: "Go to <strong>Integrations → Asana → Import Project</strong>, sign in with your Asana account, and pick the project to migrate. Sections become groups, tasks become items, and assignees map to People columns. Subtasks import as subitems. Completed tasks can be included or skipped during import."
  },
  {
    subcategory: "import-export",
    question: "Export a board to Excel with column formatting preserved",
    answer: "Open the board, click <strong>⋯ menu → Export → Excel</strong>. FlowDeck preserves column types — dates stay as dates, status labels keep their colors in a legend sheet, and file attachments export as hyperlinks. Large boards (10,000+ items) export asynchronously; you'll receive an email with the download link when ready."
  },
  {
    subcategory: "messaging",
    question: "Connect a Slack workspace to FlowDeck",
    answer: "Install FlowDeck from the Slack App Directory or go to <strong>Integrations → Slack → Connect</strong>. Authorize the workspace and choose a default notification channel. Once connected, board-level Slack settings appear under each board's <strong>Integrations</strong> tab. Only workspace Admins can install the app on Free and Starter plans."
  },
  {
    subcategory: "messaging",
    question: "Map board updates to specific Slack channels",
    answer: "Open a board, go to <strong>Integrations → Slack → Channel Mapping</strong>, and assign each group or status column to a channel. For example, route \"Blocked\" status changes to <code>#blockers</code> and \"Done\" items to <code>#wins</code>. Unmapped updates go to the default channel set during workspace connection."
  },
  {
    subcategory: "messaging",
    question: "Set up the Microsoft Teams integration",
    answer: "From the Teams admin center, install the FlowDeck app and sign in with your FlowDeck account. In FlowDeck, open <strong>Integrations → Microsoft Teams</strong> to link workspaces. Notifications post as adaptive cards with item name, status, and a deep link back to the board. Personal notifications to DMs require enabling <strong>Allow personal notifications</strong> in Teams app permissions."
  },
  {
    subcategory: "messaging",
    question: "Configure email notifications for board activity",
    answer: "Enable email delivery under <strong>Integrations → Email Notifications</strong>. Choose which events trigger emails — status changes, mentions, due-date reminders, or weekly digests. Members can override workspace defaults in <strong>Settings → Notifications</strong>. Emails send from <code>notifications@flowdeck.io</code>; add this address to your allowlist to prevent spam filtering."
  },
  {
    subcategory: "dev-tools",
    question: "Sync GitHub pull requests to a FlowDeck board",
    answer: "Connect GitHub from <strong>Integrations → GitHub</strong>, select repositories, and map PR events to a target board. Open PRs create items; merged PRs move items to Done. Link PRs to existing items using the <code>FD-</code> prefix in the PR title (e.g. <code>FD-1047: Fix login</code>). Requires GitHub org admin approval for organization-wide installs."
  },
  {
    subcategory: "dev-tools",
    question: "Enable two-way sync with Jira",
    answer: "Install the Jira Cloud integration from <strong>Integrations → Jira</strong>, authenticate with Atlassian, and map Jira projects to FlowDeck boards. Issue types map to groups, fields map to columns, and comments sync bidirectionally. Avoid editing the same field in both tools within 60 seconds — the most recent change wins during sync."
  },
  {
    subcategory: "dev-tools",
    question: "Connect GitLab merge requests to sprint boards",
    answer: "Go to <strong>Integrations → GitLab</strong>, enter your GitLab instance URL (cloud or self-hosted), and authorize with a personal access token scoped to <code>api</code>. Map merge request labels to FlowDeck status columns. When an MR merges, the linked item moves to the mapped \"Done\" status automatically."
  },
  {
    subcategory: "dev-tools",
    question: "Embed a Notion page inside a board item",
    answer: "Install Notion from <strong>Integrations → Notion</strong> and share the target page with the FlowDeck integration. On any item, open the <strong>Updates</strong> tab, click <strong>+ Link Notion page</strong>, and paste the page URL. The page renders inline with live preview. Edits in Notion appear in FlowDeck within 2 minutes."
  },
  {
    subcategory: "cloud-storage",
    question: "Attach Google Drive files to board items",
    answer: "Connect Google Drive under <strong>Integrations → Google Drive</strong>. On any item, click the <strong>+</strong> in the Files column and choose <strong>From Google Drive</strong>. Files stay in Drive — FlowDeck stores a reference link, not a copy. Permissions follow Drive sharing rules; users without Drive access see a permission-denied message on the item."
  },
  {
    subcategory: "cloud-storage",
    question: "Sync Dropbox folders with a board Files column",
    answer: "Enable Dropbox from <strong>Integrations → Dropbox</strong>, pick a folder, and link it to a board's Files column. New uploads to the Dropbox folder appear as attachments on new items; files added to items upload back to the linked folder. Sync is one-way by default — enable <strong>Two-way sync</strong> in integration settings for bidirectional updates."
  },
  {
    subcategory: "cloud-storage",
    question: "Use OneDrive for Business with Enterprise accounts",
    answer: "Enterprise admins enable OneDrive from <strong>Settings → Integrations → OneDrive for Business</strong> using Azure AD app credentials. Once enabled, members attach files from OneDrive the same way as Google Drive. Tenant-level admin consent is required before individual users can connect their accounts."
  },
  {
    subcategory: "calendar",
    question: "Two-way sync with Google Calendar",
    answer: "Connect Google Calendar from <strong>Integrations → Google Calendar</strong>. Date columns on your board create calendar events; editing event dates in Google Calendar updates the item's date column. All-day and timed events are supported. Sync respects the timezone set in <strong>Settings → Profile → Timezone</strong>."
  },
  {
    subcategory: "calendar",
    question: "Sync due dates with Outlook Calendar",
    answer: "Install the Outlook integration from <strong>Integrations → Microsoft Outlook</strong> and sign in with your Microsoft 365 account. Items with a Date column value appear as Outlook events with a link back to the board. Deleted items remove the corresponding calendar event within 5 minutes."
  },
  {
    subcategory: "calendar",
    question: "Auto-generate Zoom meeting links for scheduled items",
    answer: "Connect Zoom from <strong>Integrations → Zoom</strong>, then add a <strong>Zoom Link</strong> column to your board. When a Date column is set, FlowDeck creates a Zoom meeting and populates the link column automatically. Meetings delete when the item is archived. Requires a licensed Zoom account with meeting scheduling enabled."
  },
  {
    subcategory: "automation-platforms",
    question: "Trigger FlowDeck actions from Zapier",
    answer: "Search for FlowDeck in the Zapier app directory and connect your account with an API key from <strong>Settings → Developers</strong>. Available triggers include \"New item created\", \"Status changed\", and \"Date arrives\". Actions include \"Create item\", \"Update column\", and \"Post update\". Test each Zap with a single item before enabling for production boards."
  },
  {
    subcategory: "automation-platforms",
    question: "Build Make (Integromat) scenarios with FlowDeck",
    answer: "Add the FlowDeck module in Make and authenticate with your API key. Common patterns: create items from form submissions, sync CRM records hourly, and post Slack messages when high-priority items are created. Make scenarios count against your FlowDeck API rate limit — Enterprise plans allow 10,000 calls/hour."
  },
  {
    subcategory: "automation-platforms",
    question: "Receive inbound webhooks from external tools",
    answer: "Generate a webhook URL from <strong>Integrations → Inbound Webhooks → Create</strong>. POST JSON payloads to create or update items — map payload fields to columns in the webhook config. Each webhook has a unique signing secret; verify the <code>X-FlowDeck-Signature</code> header on your server. Webhook logs are available for 7 days under the integration settings page."
  },
  {
    subcategory: "automation-platforms",
    question: "Connect Stripe billing events to a board",
    answer: "Install Stripe from <strong>Integrations → Stripe</strong> and paste your Stripe webhook signing secret. Map events like <code>invoice.paid</code>, <code>customer.subscription.deleted</code>, and <code>charge.failed</code> to board actions — create items, update status, or notify a channel. Test with Stripe's webhook CLI before going live."
  },
  {
    subcategory: "crm-sales",
    question: "Sync Salesforce opportunities with a sales board",
    answer: "Connect Salesforce from <strong>Integrations → Salesforce</strong> using OAuth. Map Opportunity stages to Status column labels and fields like Amount, Close Date, and Owner to board columns. Sync runs every 15 minutes. FlowDeck creates items for new opportunities and updates existing items when Salesforce records change."
  },
  {
    subcategory: "crm-sales",
    question: "Link HubSpot deals to a FlowDeck pipeline board",
    answer: "Install the HubSpot integration from <strong>Integrations → HubSpot</strong>, authorize your portal, and select a deal pipeline to sync. Deal stages map to board groups. When a deal moves stages in HubSpot, the item moves to the matching group in FlowDeck. Contact and company fields sync to Connect and Text columns."
  },
  {
    subcategory: "crm-sales",
    question: "Build a custom integration using the FlowDeck REST API",
    answer: "Generate an API key from <strong>Settings → Developers → API Keys</strong> and refer to the API docs at <strong>developers.flowdeck.io</strong>. Common endpoints: <code>POST /boards/{id}/items</code> to create items, <code>PATCH /items/{id}</code> to update columns, and <code>GET /boards/{id}/items</code> to read data. Use webhooks for real-time outbound events instead of polling."
  }
];
