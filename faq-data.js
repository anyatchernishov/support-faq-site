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
  },
  {
    question: "How many people can view and edit the same board at the same time?",
    answer: "<p>FlowDeck boards support real-time collaboration, so multiple teammates can view and edit a board simultaneously and see each other's changes live. There is a per-plan limit on how many people can be connected to the same board at once:</p><svg class=\"qa-illustration\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 260\" role=\"img\" aria-label=\"Multiple teammates editing the same board in real time\"><rect width=\"640\" height=\"260\" rx=\"12\" fill=\"#f4f5f7\"/><rect x=\"150\" y=\"48\" width=\"340\" height=\"164\" rx=\"10\" fill=\"#fff\" stroke=\"#e5e7ef\" stroke-width=\"2\"/><rect x=\"150\" y=\"48\" width=\"340\" height=\"36\" rx=\"10\" fill=\"#eef0f3\"/><rect x=\"150\" y=\"72\" width=\"340\" height=\"12\" fill=\"#eef0f3\"/><line x1=\"278\" y1=\"84\" x2=\"278\" y2=\"212\" stroke=\"#e5e7ef\" stroke-width=\"1.5\"/><line x1=\"406\" y1=\"84\" x2=\"406\" y2=\"212\" stroke=\"#e5e7ef\" stroke-width=\"1.5\"/><line x1=\"150\" y1=\"120\" x2=\"490\" y2=\"120\" stroke=\"#e5e7ef\" stroke-width=\"1.5\"/><line x1=\"150\" y1=\"156\" x2=\"490\" y2=\"156\" stroke=\"#e5e7ef\" stroke-width=\"1.5\"/><line x1=\"150\" y1=\"192\" x2=\"490\" y2=\"192\" stroke=\"#e5e7ef\" stroke-width=\"1.5\"/><rect x=\"166\" y=\"96\" width=\"88\" height=\"12\" rx=\"4\" fill=\"#d1d5db\"/><rect x=\"294\" y=\"96\" width=\"72\" height=\"12\" rx=\"4\" fill=\"#d1d5db\"/><rect x=\"422\" y=\"96\" width=\"52\" height=\"12\" rx=\"4\" fill=\"#d1d5db\"/><rect x=\"166\" y=\"132\" width=\"96\" height=\"10\" rx=\"3\" fill=\"#e5e7ef\"/><circle cx=\"318\" cy=\"137\" r=\"10\" fill=\"#5b52e8\"/><rect x=\"422\" y=\"132\" width=\"44\" height=\"10\" rx=\"3\" fill=\"#c7f0d0\"/><rect x=\"166\" y=\"168\" width=\"80\" height=\"10\" rx=\"3\" fill=\"#e5e7ef\"/><circle cx=\"310\" cy=\"173\" r=\"10\" fill=\"#00c875\"/><rect x=\"422\" y=\"168\" width=\"44\" height=\"10\" rx=\"3\" fill=\"#fde68a\"/><circle cx=\"72\" cy=\"92\" r=\"18\" fill=\"#5b52e8\"/><text x=\"72\" y=\"97\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"14\" font-family=\"system-ui,sans-serif\" font-weight=\"600\">A</text><circle cx=\"568\" cy=\"92\" r=\"18\" fill=\"#00c875\"/><text x=\"568\" y=\"97\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"14\" font-family=\"system-ui,sans-serif\" font-weight=\"600\">B</text><circle cx=\"72\" cy=\"168\" r=\"18\" fill=\"#ff5ac4\"/><text x=\"72\" y=\"173\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"14\" font-family=\"system-ui,sans-serif\" font-weight=\"600\">C</text><circle cx=\"568\" cy=\"168\" r=\"18\" fill=\"#fdab3d\"/><text x=\"568\" y=\"173\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"14\" font-family=\"system-ui,sans-serif\" font-weight=\"600\">D</text><path d=\"M90 92 L150 96 M550 92 L490 96 M90 168 L150 168 M550 168 L490 168\" stroke=\"#5b52e8\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\" fill=\"none\" opacity=\"0.5\"/><rect x=\"268\" y=\"20\" width=\"104\" height=\"22\" rx=\"11\" fill=\"#5b52e8\"/><circle cx=\"284\" cy=\"31\" r=\"4\" fill=\"#00c875\"/><text x=\"298\" y=\"35\" fill=\"#fff\" font-size=\"11\" font-family=\"system-ui,sans-serif\" font-weight=\"600\">Live sync</text></svg><table><thead><tr><th>Plan</th><th>Concurrent connected users per board</th><th>Workspace-wide open real-time sessions</th></tr></thead><tbody><tr><td>Free / Starter</td><td>Up to 25</td><td>50</td></tr><tr><td>Pro</td><td>Up to 100</td><td>300</td></tr><tr><td>Enterprise</td><td>Up to 500 (higher limits negotiable)</td><td>2,000</td></tr></tbody></table><p>If a board on Free or Starter exceeds its limit during a very active session (e.g., an all-hands planning meeting or live event), additional users will see a \"board is busy, retry\" message. To support larger live sessions, upgrade your plan or split the work across multiple boards.</p>"
  }
];
