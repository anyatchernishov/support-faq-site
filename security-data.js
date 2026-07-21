// Security help articles for the Security section of the help center.
//
// Articles are grouped by subcategory for easier browsing. `answer` may contain
// simple HTML (<strong>, <a>, <code>, <img>, inline <svg>) for formatting.
//
//   { question: "…", answer: "…", subcategory: "authentication" }

window.SECURITY_SUBCATEGORIES = {
  authentication: {
    title: "Authentication & login",
    sub: "Two-factor auth, passwords, sessions, and login alerts."
  },
  "access-control": {
    title: "Access control & permissions",
    sub: "Board permissions, guests, private workspaces, and export controls."
  },
  "api-security": {
    title: "API & developer security",
    sub: "API keys, OAuth apps, webhooks, and IP restrictions."
  },
  "data-compliance": {
    title: "Data protection & compliance",
    sub: "Encryption, audit logs, GDPR, and certifications."
  },
  "enterprise-identity": {
    title: "Enterprise identity",
    sub: "SSO, SAML, SCIM provisioning, and domain verification."
  },
  "incident-response": {
    title: "Incident response & trust",
    sub: "Report incidents, penetration tests, and security questionnaires."
  }
};

window.SECURITY_SUBCATEGORY_ORDER = [
  "authentication",
  "access-control",
  "api-security",
  "data-compliance",
  "enterprise-identity",
  "incident-response"
];

window.SECURITY_ITEMS = [
  {
    subcategory: "authentication",
    question: "Enable two-factor authentication (2FA)",
    answer: "<p>Turn on 2FA from your account security settings. You'll scan a QR code with an authenticator app, confirm with a 6-digit code, then save your backup codes.</p><p><strong>Step 1 — Open Two-Factor Authentication</strong></p><svg class=\"qa-illustration\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 220\" role=\"img\" aria-label=\"Mock screenshot: Settings menu with Security and Two-Factor Authentication highlighted\"><rect width=\"640\" height=\"220\" rx=\"12\" fill=\"#f4f5f7\"/><rect x=\"24\" y=\"24\" width=\"180\" height=\"172\" rx=\"10\" fill=\"#fff\" stroke=\"#e5e7ef\" stroke-width=\"2\"/><rect x=\"24\" y=\"24\" width=\"180\" height=\"36\" rx=\"10\" fill=\"#eef0f3\"/><text x=\"40\" y=\"47\" fill=\"#323338\" font-size=\"13\" font-family=\"system-ui,sans-serif\" font-weight=\"600\">Settings</text><rect x=\"36\" y=\"72\" width=\"156\" height=\"28\" rx=\"6\" fill=\"#fff\"/><text x=\"48\" y=\"91\" fill=\"#676879\" font-size=\"12\" font-family=\"system-ui,sans-serif\">Profile</text><rect x=\"36\" y=\"104\" width=\"156\" height=\"28\" rx=\"6\" fill=\"#ede9fe\" stroke=\"#5b52e8\" stroke-width=\"1.5\"/><text x=\"48\" y=\"123\" fill=\"#5b52e8\" font-size=\"12\" font-family=\"system-ui,sans-serif\" font-weight=\"600\">Security</text><rect x=\"36\" y=\"136\" width=\"156\" height=\"28\" rx=\"6\" fill=\"#fff\"/><text x=\"48\" y=\"155\" fill=\"#676879\" font-size=\"12\" font-family=\"system-ui,sans-serif\">Notifications</text><rect x=\"220\" y=\"24\" width=\"396\" height=\"172\" rx=\"10\" fill=\"#fff\" stroke=\"#e5e7ef\" stroke-width=\"2\"/><text x=\"240\" y=\"52\" fill=\"#323338\" font-size=\"14\" font-family=\"system-ui,sans-serif\" font-weight=\"600\">Security</text><rect x=\"240\" y=\"68\" width=\"356\" height=\"44\" rx=\"8\" fill=\"#f9fafb\" stroke=\"#5b52e8\" stroke-width=\"+2\"/><circle cx=\"262\" cy=\"90\" r=\"10\" fill=\"#5b52e8\"/><text x=\"280\" y=\"95\" fill=\"#323338\" font-size=\"12\" font-family=\"system-ui,sans-serif\" font-weight=\"600\">Two-Factor Authentication</text><text x=\"280\" y=\"110\" fill=\"#676879\" font-size=\"11\" font-family=\"system-ui,sans-serif\">Add an extra layer of protection</text><rect x=\"500\" y=\"78\" width=\"72\" height=\"24\" rx=\"6\" fill=\"#5b52e8\"/><text x=\"536\" y=\"94\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"11\" font-family=\"system-ui,sans-serif\" font-weight=\"600\">Enable</text><path d=\"M204 118 L236 90\" stroke=\"#5b52e8\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#arrow)\"/><defs><marker id=\"arrow\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 Z\" fill=\"#5b52e8\"/></marker></defs></svg><p>Go to <strong>Settings → Security → Two-Factor Authentication</strong>.</p><p><strong>Step 2 — Scan the QR code</strong></p><svg class=\"qa-illustration\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 240\" role=\"img\" aria-label=\"Mock screenshot: 2FA setup dialog with QR code and authenticator app\"><rect width=\"640\" height=\"240\" rx=\"12\" fill=\"#f4f5f7\"/><rect x=\"120\" y=\"20\" width=\"400\" height=\"200\" rx=\"12\" fill=\"#fff\" stroke=\"#e5e7ef\" stroke-width=\"2\"/><text x=\"320\" y=\"52\" text-anchor=\"middle\" fill=\"#323338\" font-size=\"15\" font-family=\"system-ui,sans-serif\" font-weight=\"600\">Set up two-factor authentication</text><rect x=\"160\" y=\"68\" width=\"120\" height=\"120\" rx=\"8\" fill=\"#fff\" stroke=\"#323338\" stroke-width=\"3\"/><rect x=\"172\" y=\"80\" width=\"24\" height=\"24\" fill=\"#323338\"/><rect x=\"208\" y=\"80\" width=\"12\" height=\"12\" fill=\"#323338\"/><rect x=\"232\" y=\"80\" width=\"24\" height=\"24\" fill=\"#323338\"/><rect x=\"172\" y=\"116\" width=\"12\" height=\"12\" fill=\"#323338\"/><rect x=\"196\" y=\"116\" width=\"36\" height=\"12\" fill=\"#323338\"/><rect x=\"244\" y=\"116\" width=\"12\" height=\"12\" fill=\"#323338\"/><rect x=\"172\" y=\"152\" width=\"24\" height=\"24\" fill=\"#323338\"/><rect x=\"208\" y=\"152\" width=\"12\" height=\"12\" fill=\"#323338\"/><rect x=\"232\" y=\"152\" width=\"24\" height=\"24\" fill=\"#323338\"/><text x=\"320\" y=\"92\" text-anchor=\"middle\" fill=\"#676879\" font-size=\"11\" font-family=\"system-ui,sans-serif\">1. Open your authenticator app</text><text x=\"320\" y=\"112\" text-anchor=\"middle\" fill=\"#676879\" font-size=\"11\" font-family=\"system-ui,sans-serif\">2. Scan this QR code</text><rect x=\"300\" y=\"126\" width=\"160\" height=\"34\" rx=\"6\" fill=\"#f9fafb\" stroke=\"#e5e7ef\" stroke-width=\"1.5\"/><text x=\"312\" y=\"148\" fill=\"#9ca3af\" font-size=\"12\" font-family=\"system-ui,sans-serif\">Enter 6-digit code</text><rect x=\"300\" y=\"168\" width=\"72\" height=\"28\" rx=\"6\" fill=\"#5b52e8\"/><text x=\"336\" y=\"187\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"11\" font-family=\"system-ui,sans-serif\" font-weight=\"600\">Confirm</text><rect x=\"500\" y=\"88\" width=\"96\" height=\"140\" rx=\"14\" fill=\"#323338\"/><rect x=\"512\" y=\"100\" width=\"72\" height=\"116\" rx=\"8\" fill=\"#fff\"/><text x=\"548\" y=\"122\" text-anchor=\"middle\" fill=\"#323338\" font-size=\"10\" font-family=\"system-ui,sans-serif\" font-weight=\"600\">Authy</text><rect x=\"520\" y=\"132\" width=\"56\" height=\"56\" rx=\"4\" fill=\"#f4f5f7\" stroke=\"#323338\" stroke-width=\"2\"/><text x=\"548\" y=\"200\" text-anchor=\"middle\" fill=\"#676879\" font-size=\"9\" font-family=\"system-ui,sans-serif\">Scan QR</text></svg><p>Scan the QR code with Google Authenticator, Authy, or 1Password. Then enter the 6-digit code and click <strong>Confirm</strong>.</p><p><strong>Step 3 — Save your backup codes</strong></p><svg class=\"qa-illustration\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 200\" role=\"img\" aria-label=\"Mock screenshot: backup codes download screen\"><rect width=\"640\" height=\"200\" rx=\"12\" fill=\"#f4f5f7\"/><rect x=\"140\" y=\"24\" width=\"360\" height=\"152\" rx=\"12\" fill=\"#fff\" stroke=\"#e5e7ef\" stroke-width=\"2\"/><circle cx=\"320\" cy=\"58\" r=\"18\" fill=\"#00c875\"/><path d=\"M312 58 L318 64 L330 50\" stroke=\"#fff\" stroke-width=\"2.5\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><text x=\"320\" y=\"92\" text-anchor=\"middle\" fill=\"#323338\" font-size=\"14\" font-family=\"system-ui,sans-serif\" font-weight=\"600\">2FA is enabled</text><text x=\"320\" y=\"112\" text-anchor=\"middle\" fill=\"#676879\" font-size=\"11\" font-family=\"system-ui,sans-serif\">Download and store your backup codes in a safe place</text><rect x=\"200\" y=\"124\" width=\"240\" height=\"36\" rx=\"8\" fill=\"#f9fafb\" stroke=\"#e5e7ef\" stroke-width=\"1.5\"/><text x=\"220\" y=\"147\" fill=\"#676879\" font-size=\"11\" font-family=\"monospace\">ABCD-1234 · EFGH-5678 · IJKL-9012</text><rect x=\"248\" y=\"168\" width=\"144\" height=\"28\" rx=\"6\" fill=\"#5b52e8\"/><text x=\"320\" y=\"187\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"11\" font-family=\"system-ui,sans-serif\" font-weight=\"600\">Download backup codes</text></svg><p>Save your backup codes somewhere safe — you'll need them if you lose your authenticator device. 2FA applies to your account on all devices.</p>"
  },
  {
    subcategory: "authentication",
    question: "Reset a lost 2FA device or backup codes",
    answer: "If you lose access to your authenticator app, use one of your saved backup codes on the login screen. If you no longer have backup codes, an account Admin can reset 2FA from <strong>Settings → Team → [your name] → Reset 2FA</strong>. For Enterprise accounts with SSO enforced, contact your IdP administrator to restore access."
  },
  {
    subcategory: "authentication",
    question: "Enforce 2FA for all workspace members",
    answer: "Admins on Pro and Enterprise plans can require 2FA for every member. Go to <strong>Settings → Security → Authentication Policy</strong>, enable <strong>Require two-factor authentication</strong>, and choose a grace period (7, 14, or 30 days). Members who haven't enrolled will see a prompt at next login and cannot access boards until 2FA is enabled."
  },
  {
    subcategory: "authentication",
    question: "Password requirements and reset policy",
    answer: "FlowDeck requires passwords of at least 12 characters with a mix of letters and numbers. Passwords are checked against known breach lists at signup and reset. Users can reset a password from the login page via <strong>Forgot password?</strong> Admins cannot view member passwords but can trigger a reset email from <strong>Settings → Team</strong>."
  },
  {
    subcategory: "authentication",
    question: "Manage active sessions and sign out remotely",
    answer: "View all active sessions under <strong>Settings → Security → Active Sessions</strong>. Each entry shows device, browser, IP region, and last activity. Click <strong>Sign out</strong> next to any session to revoke it immediately. Use <strong>Sign out everywhere</strong> to end all sessions except your current one — useful if you suspect unauthorized access."
  },
  {
    subcategory: "authentication",
    question: "Configure session timeout and idle logout",
    answer: "Enterprise admins can set automatic logout after inactivity in <strong>Settings → Security → Session Policy</strong>. Options range from 15 minutes to 8 hours. When a session expires, unsaved board edits are preserved as drafts and restored on re-login. Mobile sessions follow the same policy unless <strong>Remember this device</strong> was checked at login."
  },
  {
    subcategory: "authentication",
    question: "Configure login alerts for new devices",
    answer: "Receive an email when your account is accessed from a new device or location. Enable alerts under <strong>Settings → Security → Login Notifications</strong>. Each alert includes device type, browser, approximate location, and a <strong>This wasn't me</strong> link that signs out all sessions and prompts a password reset. Alerts cannot be disabled on Enterprise accounts with enforced security policies."
  },
  {
    subcategory: "access-control",
    question: "Board-level and item-level permission controls",
    answer: "Control who can view or edit content using board permissions. Open a board, click <strong>Share</strong>, and assign roles: Owner, Editor, Commenter, or Viewer. For sensitive items, use <strong>Lock item</strong> to prevent edits without removing view access. Workspace Admins can override board permissions from <strong>Settings → Boards</strong>."
  },
  {
    subcategory: "access-control",
    question: "Private boards and hidden workspaces",
    answer: "Mark a board as <strong>Private</strong> from the board <strong>⋯ menu → Privacy</strong>. Only explicitly invited members can see it in search or sidebar. Private boards still inherit workspace-level Admin access. Enterprise accounts can create <strong>Hidden workspaces</strong> visible only to assigned members via <strong>Settings → Workspaces → Visibility</strong>."
  },
  {
    subcategory: "access-control",
    question: "Guest access and external collaborator limits",
    answer: "Invite external collaborators as <strong>Guests</strong> from <strong>Settings → Team → Invite Guest</strong>. Guests can access only boards they're invited to and cannot create boards or install integrations. Pro plans allow up to 10 guests; Enterprise allows unlimited guests with optional domain restrictions under <strong>Settings → Security → Guest Policy</strong>."
  },
  {
    subcategory: "access-control",
    question: "Disable file downloads on shared boards",
    answer: "Prevent members from downloading attachments on sensitive boards. Open the board, go to <strong>⋯ menu → Board Settings → Security</strong>, and enable <strong>Disable file downloads</strong>. Viewers can still preview files in the browser but cannot save copies. This setting applies to all attachments on the board and cannot be overridden per item."
  },
  {
    subcategory: "access-control",
    question: "Watermark exported PDFs and reports",
    answer: "Enterprise admins can add user-identifying watermarks to PDF exports. Enable this in <strong>Settings → Security → Export Policy → Watermark PDF exports</strong>. Exported files include the downloader's name, email, and timestamp in the footer. This helps trace leaked documents back to the source without blocking exports entirely."
  },
  {
    subcategory: "api-security",
    question: "Create and rotate API keys safely",
    answer: "Generate API keys in <strong>Settings → Developers → API Keys</strong>. Each key can be scoped to read-only or read-write and limited to specific workspaces. Keys are shown only once at creation — store them in a secrets manager. Rotate keys regularly using <strong>Regenerate</strong>; the old key stops working immediately after regeneration."
  },
  {
    subcategory: "api-security",
    question: "Restrict API access by IP allowlist",
    answer: "Enterprise accounts can limit API calls to approved IP ranges. Go to <strong>Settings → Security → IP Allowlist</strong>, add CIDR blocks or individual IPs, and enable <strong>Enforce for API</strong>. Web app access for human users is unaffected unless you also enable <strong>Enforce for web login</strong>. Changes take effect within 60 seconds."
  },
  {
    subcategory: "api-security",
    question: "OAuth app permissions and third-party access",
    answer: "Review connected OAuth apps under <strong>Settings → Security → Connected Apps</strong>. Each entry shows the app name, granted scopes, and date authorized. Click <strong>Revoke</strong> to disconnect an app immediately. Admins on Enterprise plans can block new OAuth connections workspace-wide from the same page."
  },
  {
    subcategory: "api-security",
    question: "Secure webhook endpoints with signing secrets",
    answer: "When configuring outbound webhooks in <strong>Settings → Developers → Webhooks</strong>, FlowDeck signs each payload with an HMAC-SHA256 secret. Verify the <code>X-FlowDeck-Signature</code> header on your server before processing events. Rotate the signing secret from the webhook settings page; the previous secret remains valid for 24 hours after rotation."
  },
  {
    subcategory: "api-security",
    question: "Recover a compromised API key",
    answer: "If an API key is exposed, revoke it immediately in <strong>Settings → Developers → API Keys → Revoke</strong>. Review the audit log for unauthorized API activity in the exposure window. Generate a new key with minimal required scopes and update your integrations. Enable IP allowlisting to reduce future exposure risk. Report confirmed misuse to <a href=\"mailto:security@flowdeck.io\">security@flowdeck.io</a>."
  },
  {
    subcategory: "data-compliance",
    question: "Data encryption at rest and in transit",
    answer: "All FlowDeck data is encrypted in transit using TLS 1.2+ and at rest using AES-256. Database backups are encrypted with separate keys rotated quarterly. Enterprise customers can request a copy of our encryption whitepaper from <a href=\"mailto:security@flowdeck.io\">security@flowdeck.io</a>. We do not offer customer-managed encryption keys (CMEK) at this time."
  },
  {
    subcategory: "data-compliance",
    question: "Export audit logs for compliance reviews",
    answer: "Enterprise admins can export audit logs from <strong>Settings → Security → Audit Log</strong>. Logs capture login events, permission changes, board exports, API key usage, and admin actions. Filter by date range and event type, then download as CSV or stream to a SIEM via our Splunk and Datadog integrations. Logs are retained for 365 days on Enterprise plans."
  },
  {
    subcategory: "data-compliance",
    question: "GDPR data subject requests (access and deletion)",
    answer: "Users in the EU can request a copy of their personal data or account deletion under GDPR. Submit a request via <strong>Settings → Privacy → Data Request</strong> or email <a href=\"mailto:privacy@flowdeck.io\">privacy@flowdeck.io</a>. Access exports are delivered within 30 days as a downloadable archive. Deletion requests permanently remove personal data within 30 days; board content you created may be anonymized rather than deleted if shared with other members."
  },
  {
    subcategory: "data-compliance",
    question: "Compliance certifications (SOC 2, ISO 27001)",
    answer: "FlowDeck maintains SOC 2 Type II and ISO 27001 certifications, renewed annually. Enterprise customers can request the latest audit reports under NDA via <a href=\"mailto:security@flowdeck.io\">security@flowdeck.io</a>. A public trust center summary is available at <strong>flowdeck.io/trust</strong>. Certifications cover our production infrastructure, change management, and access control processes."
  },
  {
    subcategory: "enterprise-identity",
    question: "SSO/SAML setup for Enterprise accounts",
    answer: "Enterprise accounts can configure SSO via <strong>Settings → Security → Single Sign-On</strong>. You'll need your Identity Provider's metadata URL or XML file. Supported IdPs include Okta, Azure AD, Google Workspace, and OneLogin. After saving the configuration, test with a non-admin account before enforcing SSO for all users."
  },
  {
    subcategory: "enterprise-identity",
    question: "Set up SCIM provisioning with your IdP",
    answer: "Enterprise accounts can automate user provisioning via SCIM 2.0. In <strong>Settings → Security → SCIM Provisioning</strong>, copy the SCIM endpoint URL and bearer token into your IdP (Okta, Azure AD, or Google Workspace). Users are created, updated, and deactivated automatically based on IdP group membership. Test with a small group before syncing your full directory."
  },
  {
    subcategory: "enterprise-identity",
    question: "Domain verification and email takeover prevention",
    answer: "Verify your company domain in <strong>Settings → Security → Domain Verification</strong> by adding a DNS TXT record. Once verified, only users with matching email domains can be invited unless an Admin explicitly allows external addresses. This prevents unauthorized signups using your company domain and enables Just-in-Time (JIT) SSO provisioning."
  },
  {
    subcategory: "enterprise-identity",
    question: "Block legacy authentication methods",
    answer: "Enterprise admins can disable password-only login when SSO is configured. In <strong>Settings → Security → Authentication Policy</strong>, enable <strong>Require SSO for all members</strong>. Members attempting password login will be redirected to your IdP. Keep at least one break-glass Admin account with password + 2FA access in case of IdP outage."
  },
  {
    subcategory: "incident-response",
    question: "Report a suspected security incident",
    answer: "If you believe your account has been compromised, immediately use <strong>Sign out everywhere</strong> under Active Sessions, reset your password, and re-enroll 2FA. Report the incident to <a href=\"mailto:security@flowdeck.io\">security@flowdeck.io</a> with your account email, approximate time of the incident, and any suspicious activity observed. Our security team responds within 4 business hours for Enterprise accounts."
  },
  {
    subcategory: "incident-response",
    question: "Penetration test and security questionnaire requests",
    answer: "Enterprise customers can request our latest penetration test summary and completed security questionnaires (SIG Lite, CAIQ). Email <a href=\"mailto:security@flowdeck.io\">security@flowdeck.io</a> from your company domain with your account ID. Standard response time is 5 business days. We do not allow customer-directed penetration testing against production without prior written approval."
  }
];
