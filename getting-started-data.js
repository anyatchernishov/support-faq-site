// Getting Started help articles for the Getting Started section of the help center.
//
// Articles are grouped by subcategory for easier browsing. `answer` may contain
// simple HTML (<strong>, <a>, <code>) for formatting.
//
//   { question: "…", answer: "…", subcategory: "workspaces-access" }

window.GETTING_STARTED_SUBCATEGORIES = {
  "workspaces-access": {
    title: "Workspaces & access",
    sub: "Create workspaces, invite teammates, and manage roles."
  },
  "boards-structure": {
    title: "Boards & structure",
    sub: "Create boards, columns, groups, templates, and folders."
  },
  "items-collaboration": {
    title: "Items & collaboration",
    sub: "Add items, assign people, set status and dates, and collaborate."
  },
  "views-navigation": {
    title: "Views & navigation",
    sub: "Board views, filters, search, and keyboard shortcuts."
  },
  "sharing-export-mobile": {
    title: "Sharing, export & mobile",
    sub: "Guest sharing, exports, and the mobile app."
  },
};

window.GETTING_STARTED_SUBCATEGORY_ORDER = [
  "workspaces-access",
  "boards-structure",
  "items-collaboration",
  "views-navigation",
  "sharing-export-mobile",
];

window.GETTING_STARTED_ITEMS = [
  {
    subcategory: "workspaces-access",
    question: "How to invite teammates to a workspace",
    answer: "Go to <strong>Settings → Team</strong> and click <strong>Invite Member</strong>. Enter your teammate's email address and select their role — Admin, Editor, or Viewer. They'll receive an invite link by email, valid for 48 hours. Admins can resend invites from the same settings page."
  },
  {
    subcategory: "workspaces-access",
    question: "Forgot username — how to recover account access",
    answer: "On the FlowDeck login page, click <strong>Forgot username?</strong> and enter the email address associated with your account. You'll receive an email with your username within a few minutes. If you no longer have access to that email address, contact <a href=\"mailto:support@flowdeck.io\">support@flowdeck.io</a> with proof of account ownership."
  },
  {
    subcategory: "workspaces-access",
    question: "How to create your first workspace",
    answer: "After signing up, click <strong>+ Create Workspace</strong> on the home screen. Enter a workspace name, choose an icon and color, then click <strong>Create</strong>. You become the workspace owner by default and can invite teammates immediately from the welcome banner."
  },
  {
    subcategory: "workspaces-access",
    question: "How to set up your profile and notification preferences",
    answer: "Click your avatar → <strong>My Profile</strong> to update your name, photo, and timezone. Open <strong>Notifications</strong> to choose email vs in-app alerts for assignments, mentions, and due dates. You can mute a specific board from that board’s notification bell."
  },
  {
    subcategory: "workspaces-access",
    question: "How to switch between workspaces",
    answer: "Click the workspace name in the top-left corner to open the workspace switcher. Select another workspace you’re a member of, or use <strong>Browse Workspaces</strong> to find ones you’ve been invited to. Your last-opened boards are remembered per workspace."
  },
  {
    subcategory: "workspaces-access",
    question: "How to invite someone with a specific role (Admin, Editor, Viewer)",
    answer: "Go to <strong>Settings → Team → Invite Member</strong>, enter their email, and choose a role before sending. <strong>Admins</strong> manage members and settings; <strong>Editors</strong> create and edit boards; <strong>Viewers</strong> can read and comment only. You can change a member’s role later from the Team page."
  },
  {
    subcategory: "boards-structure",
    question: "How to archive a completed project board",
    answer: "Open the board, click the <strong>⋯ menu</strong> in the top-right corner, and select <strong>Archive Board</strong>. Archived boards are hidden from your main view but remain fully searchable. You can restore them at any time from <strong>Settings → Archived Boards</strong>."
  },
  {
    subcategory: "boards-structure",
    question: "How to create a new board from a template",
    answer: "Click <strong>+ Add Board</strong> in the left sidebar, then select <strong>From Template</strong>. Browse categories such as Project Management, CRM, or Marketing, preview a template, and click <strong>Use Template</strong>. The board opens with sample columns and groups you can rename to fit your workflow."
  },
  {
    subcategory: "boards-structure",
    question: "How to add columns to a board",
    answer: "On any board, click the <strong>+ </strong> button at the far right of the column header row. Choose a column type (Status, Person, Date, Text, Numbers, and more), give it a name, and click <strong>Add</strong>. You can reorder columns by dragging their headers."
  },
  {
    subcategory: "boards-structure",
    question: "How to create and organize groups on a board",
    answer: "Click <strong>+ Add Group</strong> at the bottom of the board (or use the board menu). Name the group and optionally pick a color. Drag items between groups to reorganize work. Collapse a group by clicking its chevron to keep long boards scannable."
  },
  {
    subcategory: "boards-structure",
    question: "How to duplicate a board",
    answer: "Open the board, click the <strong>⋯ menu</strong>, and choose <strong>Duplicate Board</strong>. Choose whether to copy structure only or structure plus items. The duplicate appears in the same workspace with “ (copy)” appended to the name — rename it anytime from the board header."
  },
  {
    subcategory: "boards-structure",
    question: "How to move a board to another workspace",
    answer: "Open the board <strong>⋯ menu</strong> and select <strong>Move to Workspace</strong>. Pick a destination workspace where you have Admin access, then confirm. Board members who aren’t in the destination workspace lose access unless you invite them there afterward."
  },
  {
    subcategory: "boards-structure",
    question: "How to pin favorite boards to the sidebar",
    answer: "Hover a board in the left sidebar and click the <strong>star</strong> icon to pin it under <strong>Favorites</strong>. Drag favorites to reorder them. Unpin anytime by clicking the star again — the board stays in its original folder."
  },
  {
    subcategory: "boards-structure",
    question: "How to create folders to organize boards",
    answer: "In the left sidebar, click <strong>+ Add</strong> → <strong>New Folder</strong>, name it, and drag boards into it. Folders are workspace-scoped; nesting up to two levels is supported. Collapse folders you don’t use daily to keep the sidebar tidy."
  },
  {
    subcategory: "boards-structure",
    question: "How to customize status labels and colors",
    answer: "Click the Status column header → <strong>Settings</strong> → <strong>Edit labels</strong>. Rename labels, change colors, add new ones, or deactivate unused labels. Changes apply to the whole board; existing items keep their label until you update them."
  },
  {
    subcategory: "boards-structure",
    question: "How to set your default landing board",
    answer: "Open a board you use daily, click the <strong>⋯ menu</strong>, and select <strong>Set as Home Board</strong>. The next time you log in, FlowDeck opens that board instead of the workspace overview. Clear it from the same menu if you prefer the overview again."
  },
  {
    subcategory: "items-collaboration",
    question: "How to add an item (row) to a board",
    answer: "Click <strong>+ Add Item</strong> at the bottom of any group, type a name, and press <strong>Enter</strong>. You can also use <strong>Ctrl/Cmd + Enter</strong> to create another item immediately. Fill in columns afterward, or use the item card panel for a fuller edit view."
  },
  {
    subcategory: "items-collaboration",
    question: "How to create subitems under a parent item",
    answer: "Hover an item and click the <strong>subitem</strong> icon (or open the item and choose <strong>Add Subitem</strong>). Subitems inherit the parent board’s column layout and nest under the parent row. Collapse the parent to hide its subitems when you need a cleaner view."
  },
  {
    subcategory: "items-collaboration",
    question: "How to assign people to an item",
    answer: "Click a <strong>Person</strong> column cell on the item, then select one or more teammates from the list. Only workspace members appear here — invite someone first if they’re missing. Assignees receive an in-app notification and optional email, depending on their notification settings."
  },
  {
    subcategory: "items-collaboration",
    question: "How to set and change an item’s status",
    answer: "Click the <strong>Status</strong> cell on an item and pick a label (e.g. Working on it, Done, Stuck). Admins can customize labels and colors from the column settings menu. Status changes can trigger automations if any are configured on the board."
  },
  {
    subcategory: "items-collaboration",
    question: "How to set due dates and deadlines",
    answer: "Click a <strong>Date</strong> column cell, pick a date from the calendar, and optionally set a time. Overdue dates appear in red. You can also set date ranges for milestones by enabling <strong>End date</strong> in the column settings."
  },
  {
    subcategory: "items-collaboration",
    question: "How to leave updates and comments on an item",
    answer: "Open an item to open its side panel, then type in the <strong>Updates</strong> area. Use <strong>@mentions</strong> to notify teammates. Attach files with the paperclip icon. Updates stay on the item timeline so the full discussion history is searchable later."
  },
  {
    subcategory: "items-collaboration",
    question: "How to attach files to an item",
    answer: "Open the item panel and click <strong>Add file</strong>, or use a <strong>Files</strong> column on the board. Drag and drop uploads up to 100 MB per file on Pro and Enterprise plans. Supported types include images, PDFs, Office docs, and zip archives."
  },
  {
    subcategory: "items-collaboration",
    question: "How to restore a deleted item from the recycle bin",
    answer: "Go to <strong>Settings → Recycle Bin</strong> (or open the board menu → Recycle Bin). Find the item, select it, and click <strong>Restore</strong>. Items stay in the bin for 30 days on most plans; after that they are permanently removed."
  },
  {
    subcategory: "items-collaboration",
    question: "How to copy an item to another board",
    answer: "Open the item’s <strong>⋯ menu</strong> (or right-click the row) and choose <strong>Move to / Copy to Board</strong>. Select the destination board and group, then choose <strong>Copy</strong> to leave the original in place. Matching column types map automatically; unmatched fields are skipped."
  },
  {
    subcategory: "items-collaboration",
    question: "How to batch-edit multiple items at once",
    answer: "Check the boxes next to the items you want to update (or use <strong>Shift-click</strong> for a range). Use the bulk-actions bar to change status, assignee, dates, or move items to another group. Confirm the change — it applies to all selected items immediately."
  },
  {
    subcategory: "views-navigation",
    question: "How to create a custom board view (Table, Kanban, Timeline)",
    answer: "Above the board, click <strong>+ Add View</strong> and choose Table, Kanban, Timeline, Calendar, or Chart. Configure filters and visible columns, then name and save the view. Switch views anytime from the view tabs without changing the underlying data."
  },
  {
    subcategory: "views-navigation",
    question: "How to filter and sort items on a board",
    answer: "Click <strong>Filter</strong> in the board toolbar, then add conditions (e.g. Status is Done, Person is me). Use <strong>Sort</strong> to order by any column ascending or descending. Save the combination as a new view if you want to reuse it later."
  },
  {
    subcategory: "views-navigation",
    question: "How to search across boards and workspaces",
    answer: "Press <strong>Ctrl/Cmd + K</strong> or click the search bar at the top of FlowDeck. Type a keyword, item name, or update snippet. Results include boards, items, docs, and people you can access. Use the filter chips to narrow by type (boards only, items only, etc.)."
  },
  {
    subcategory: "views-navigation",
    question: "How to use keyboard shortcuts in FlowDeck",
    answer: "Press <strong>?</strong> anywhere in FlowDeck to open the shortcuts cheat sheet. Common ones: <strong>N</strong> new item, <strong>C</strong> open item card, <strong>Ctrl/Cmd + K</strong> search, <strong>Esc</strong> close panels. Shortcuts work on web; the mobile apps use long-press gestures instead."
  },
  {
    subcategory: "sharing-export-mobile",
    question: "How to share a board with guest users",
    answer: "Open <strong>Share</strong> on the board, enter the guest’s email, and choose Viewer or Commenter access. Guests only see that board (and boards you explicitly share), not the full workspace. Guest seats count toward your plan’s guest limit."
  },
  {
    subcategory: "sharing-export-mobile",
    question: "How to export a board to CSV or Excel",
    answer: "Open the board <strong>⋯ menu</strong> → <strong>Export</strong>, then choose CSV or Excel. Exports include visible columns and groups; apply filters first if you only want a subset. Large boards may email you a download link when the export finishes."
  },
  {
    subcategory: "sharing-export-mobile",
    question: "How to install and sign in on the FlowDeck mobile app",
    answer: "Download FlowDeck from the App Store or Google Play, open the app, and sign in with the same email you use on web (or SSO if your workspace requires it). Push notifications for assignments and mentions can be enabled during onboarding or later under <strong>Profile → Notifications</strong>."
  },
];
