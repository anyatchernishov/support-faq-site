// Q&A content for the "Q&A" section of the help center.
//
// To publish a new answer, append ONE object to this array — nothing else to edit.
// The site renders these automatically. `answer` may contain simple HTML
// (<strong>, <a>, <code>) for formatting.
//
//   { question: "…", answer: "…" }

window.FAQ_ITEMS = [
  {
    question: "How many boards can I have per workspace?",
    answer: "Free plans support up to 3 boards per workspace. Standard plans are unlimited. You can view your current board count in <strong>Settings → Usage</strong>. Archived boards do not count against your limit."
  },
  {
    question: "Can I switch between Kanban, Gantt, and Calendar views?",
    answer: "Yes. Open any board and click the <strong>Views</strong> button in the top toolbar to add a Kanban, Gantt, Calendar, or Timeline view. Each view is saved per-board, and team members can switch between them without affecting each other's view."
  },
  {
    question: "How do I filter board items by assignee or status?",
    answer: "Click <strong>Filter</strong> in the board toolbar and select the column to filter by (e.g., Person or Status). You can stack multiple filters and save them as a named view for quick access later. Filters apply only to your session and don't affect other users."
  },
  {
    question: "What is the maximum number of items per board?",
    answer: "FlowDeck supports up to 10,000 items per board on all paid plans. Free plans are limited to 200 items per board. If you're approaching the limit, use <strong>Archive</strong> on completed items to free up space without deleting data."
  },
  {
    question: "How do I duplicate a board including its items?",
    answer: "Click the <strong>⋯ menu</strong> next to the board name in the sidebar and select <strong>Duplicate Board</strong>. You can choose to include items, automations, and integrations in the copy. The duplicate is created in the same workspace and can be moved to another workspace afterward."
  }
];
