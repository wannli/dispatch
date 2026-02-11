/* ══════════════════════════════════════════
   e-deleGATE Topics & Messaging — Mock Data
   ══════════════════════════════════════════ */

const DATA = {
  eventTypes: [
    { name: "agenda.version.finalized", description: "Agenda version finalized and published.", payloadFields: ["organ", "session_name", "item_title", "version", "link"] },
    { name: "agenda.item.added", description: "New agenda item added.", payloadFields: ["organ", "session_name", "item_title", "item_number", "link"] },
    { name: "document.file.uploaded", description: "File uploaded to e-Places.", payloadFields: ["organ", "session_name", "folder_name", "file_name", "uploader", "link"] },
    { name: "document.version.published", description: "Document version published.", payloadFields: ["organ", "session_name", "symbol", "title", "language", "link"] },
    { name: "proposal.submitted", description: "Proposal submitted.", payloadFields: ["organ", "session_name", "item_title", "sponsor", "symbol", "link"] },
    { name: "proposal.sponsorship.added", description: "New sponsorship recorded.", payloadFields: ["organ", "session_name", "symbol", "sponsor", "link"] },
    { name: "proposal.withdrawn", description: "Proposal withdrawn.", payloadFields: ["organ", "session_name", "symbol", "withdrawn_by", "link"] },
    { name: "speakers.inscription.created", description: "Speaker inscribed on list.", payloadFields: ["organ", "session_name", "item_title", "speaker_name", "entity"] },
    { name: "session.opened", description: "Session opened.", payloadFields: ["organ", "session_name", "date", "president"] },
  ],

  topics: [
    { id: 1, name: "Agenda Updates", description: "Agenda version changes and publishing notices.", sender: "agenda@un.org", organ: "GA Plenary", status: "Live", subscription: "Opt-out", subscribers: 312, events: ["agenda.version.finalized", "agenda.item.added"] },
    { id: 2, name: "Document Sharing", description: "File uploads and new e-Places materials.", sender: "edelegate@un.org", organ: "GA Plenary", status: "Live", subscription: "Opt-out", subscribers: 487, events: ["document.file.uploaded", "document.version.published"] },
    { id: 3, name: "Proposal Activity", description: "Proposal submissions, withdrawals, and sponsorships.", sender: "plenary@un.org", organ: "GA Plenary", status: "Draft", subscription: "Opt-in", subscribers: 0, events: ["proposal.submitted", "proposal.sponsorship.added", "proposal.withdrawn"] },
    { id: 4, name: "Speaker List Changes", description: "Inscriptions and changes to speaker lists.", sender: "speakers@un.org", organ: "GA Plenary", status: "Live", subscription: "Opt-out", subscribers: 198, events: ["speakers.inscription.created"] },
    { id: 5, name: "Session Notices", description: "Session opening and closing.", sender: "session@un.org", organ: null, status: "Live", subscription: "Mandatory", subscribers: 799, events: ["session.opened"] },
  ],

  templates: [
    { id: 1, name: "Agenda Finalized — Immediate", type: "Immediate", eventType: "agenda.version.finalized", channel: "Email", status: "Live", updated: "2026-02-09",
      subject: "Agenda updated for {{session_name}}",
      body: "Dear delegate,\n\nThe agenda for {{organ}}, {{session_name}} has been updated.\n\nItem affected: {{item_title}}\nVersion: {{version}}\n\nView agenda: {{link}}" },
    { id: 2, name: "Agenda Finalized — Digest Item", type: "Digest Item", eventType: "agenda.version.finalized", channel: "Email", status: "Live", updated: "2026-02-09",
      body: "Agenda finalized for {{session_name}} — {{item_title}} (v{{version}})" },
    { id: 3, name: "File Upload — Immediate", type: "Immediate", eventType: "document.file.uploaded", channel: "Email", status: "Live", updated: "2026-02-07",
      subject: "New file in {{folder_name}}",
      body: "A new file has been uploaded.\n\nOrgan: {{organ}}\nSession: {{session_name}}\nFolder: {{folder_name}}\nFile: {{file_name}}\nUploaded by: {{uploader}}\n\nView: {{link}}" },
    { id: 4, name: "File Upload — Digest Item", type: "Digest Item", eventType: "document.file.uploaded", channel: "Email", status: "Live", updated: "2026-02-07",
      body: "{{file_name}} uploaded to {{folder_name}} by {{uploader}}" },
    { id: 5, name: "Proposal Submitted — Immediate", type: "Immediate", eventType: "proposal.submitted", channel: "Email", status: "Draft", updated: "2026-02-10",
      subject: "New proposal: {{symbol}}",
      body: "A proposal has been submitted.\n\nOrgan: {{organ}}\nSession: {{session_name}}\nItem: {{item_title}}\nSymbol: {{symbol}}\nSponsor: {{sponsor}}\n\nView: {{link}}" },
    { id: 6, name: "Agenda Finalized — Teams", type: "Immediate", eventType: "agenda.version.finalized", channel: "Teams", status: "Live", updated: "2026-02-09",
      subject: "Agenda updated: {{session_name}}",
      body: "**Agenda updated** for {{organ}}, {{session_name}}.\nItem: {{item_title}} | [View]({{link}})" },
    { id: 7, name: "Daily Digest Wrapper", type: "Digest Wrapper", eventType: "—", channel: "Email", status: "Live", updated: "2026-02-06",
      body: "Your e-deleGATE digest — {{digest_date}}\n\n{{#each topics}}\n## {{topic_name}} (via {{sender}})\n{{#each items}}\n• {{> item}}\n{{/each}}\n{{/each}}\n\n---\nManage preferences in your e-deleGATE settings." },
    { id: 8, name: "Hourly Digest Wrapper", type: "Digest Wrapper", eventType: "—", channel: "Email", status: "Live", updated: "2026-02-06",
      body: "e-deleGATE update — {{digest_time}}\n\n{{#each topics}}\n**{{topic_name}}** ({{sender}})\n{{#each items}}\n• {{> item}}\n{{/each}}\n{{/each}}" },
  ],

  recipients: [
    { name: "J. Okafor", entity: "Nigeria", prefs: [
      { topic: "Agenda Updates", cadence: "Immediate", channels: ["Email"] },
      { topic: "Document Sharing", cadence: "Daily", channels: ["Email"] },
      { topic: "Session Notices", cadence: "Immediate", channels: ["Email", "Teams"] },
    ]},
    { name: "M. Chen", entity: "China", prefs: [
      { topic: "Agenda Updates", cadence: "Hourly", channels: ["Email"] },
      { topic: "Document Sharing", cadence: "Hourly", channels: ["Email"] },
      { topic: "Speaker List Changes", cadence: "Daily", channels: ["Teams"] },
      { topic: "Session Notices", cadence: "Immediate", channels: ["Email"] },
    ]},
    { name: "A. García", entity: "Mexico", prefs: [
      { topic: "Agenda Updates", cadence: "Daily", channels: ["Email"] },
      { topic: "Document Sharing", cadence: "Daily", channels: ["Email"] },
      { topic: "Session Notices", cadence: "Immediate", channels: ["Email", "Teams"] },
    ]},
    { name: "L. Dupont", entity: "France", prefs: [
      { topic: "Agenda Updates", cadence: "Immediate", channels: ["Email", "Teams"] },
      { topic: "Document Sharing", cadence: "Weekly", channels: ["Email"] },
      { topic: "Session Notices", cadence: "Immediate", channels: ["Teams"] },
    ]},
  ],

  messages: [
    { id: "MSG-4021", type: "Immediate", topic: "Agenda Updates", recipient: "J. Okafor", channel: "Email", sender: "agenda@un.org", status: "Delivered", sent: "2026-02-11 09:12", eventType: "agenda.version.finalized" },
    { id: "MSG-4022", type: "Immediate", topic: "Agenda Updates", recipient: "L. Dupont", channel: "Email", sender: "agenda@un.org", status: "Delivered", sent: "2026-02-11 09:12", eventType: "agenda.version.finalized" },
    { id: "MSG-4023", type: "Immediate", topic: "Agenda Updates", recipient: "L. Dupont", channel: "Teams", sender: "agenda@un.org", status: "Delivered", sent: "2026-02-11 09:12", eventType: "agenda.version.finalized" },
    { id: "MSG-4018", type: "Digest (Hourly)", topic: "Agenda Updates + Document Sharing", recipient: "M. Chen", channel: "Email", sender: "edelegate@un.org", status: "Delivered", sent: "2026-02-11 10:00", eventType: "—" },
    { id: "MSG-4019", type: "Digest (Daily)", topic: "Agenda Updates + Document Sharing", recipient: "A. García", channel: "Email", sender: "edelegate@un.org", status: "Queued", sent: "—", eventType: "—" },
    { id: "MSG-4015", type: "Immediate", topic: "Document Sharing", recipient: "K. Patel", channel: "Email", sender: "edelegate@un.org", status: "Bounced", sent: "2026-02-11 08:44", eventType: "document.file.uploaded" },
    { id: "MSG-4024", type: "Immediate", topic: "Session Notices", recipient: "J. Okafor", channel: "Teams", sender: "session@un.org", status: "Delivered", sent: "2026-02-11 11:00", eventType: "session.opened" },
    { id: "MSG-4025", type: "Immediate", topic: "Session Notices", recipient: "A. García", channel: "Teams", sender: "session@un.org", status: "Delivered", sent: "2026-02-11 11:00", eventType: "session.opened" },
  ],
};

/* ══════════════════
   Utility helpers
   ══════════════════ */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function badgeClass(val) {
  const v = val.toLowerCase();
  if (v === "immediate") return "immediate";
  if (v.includes("digest") || v === "hourly" || v === "daily" || v === "weekly") return "digest";
  if (v === "live") return "live";
  if (v === "draft") return "draft";
  if (v === "mandatory") return "mandatory";
  if (v === "opt-out") return "opt-out";
  if (v === "opt-in") return "opt-in";
  if (v === "email") return "email";
  if (v === "teams") return "teams";
  if (v === "wrapper" || v === "digest wrapper") return "wrapper";
  if (v === "digest item") return "digest";
  return "";
}

function badge(val) { return `<span class="badge ${badgeClass(val)}">${val}</span>`; }

function channelBadges(channels) {
  return channels.map(c => {
    const icon = c === "Email" ? "📧" : "💬";
    return `<span class="badge ${badgeClass(c)}">${icon} ${c}</span>`;
  }).join(" ");
}

function statusClass(s) { return `status-${s.toLowerCase()}`; }

function validatePlaceholders(body, eventType) {
  const et = DATA.eventTypes.find(e => e.name === eventType);
  if (!et) return { valid: true, message: "No event type to validate against." };
  const used = [...body.matchAll(/\{\{(\w+)\}\}/g)].map(m => m[1]);
  const structural = ["digest_date", "digest_time", "topic_name", "sender"];
  const invalid = used.filter(f => !et.payloadFields.includes(f) && !structural.includes(f));
  if (invalid.length === 0) return { valid: true, message: `✓ All ${used.length} placeholders valid` };
  return { valid: false, message: `⚠ Unknown placeholders: ${invalid.join(", ")}` };
}

/* ══════════════════
   Panel helpers
   ══════════════════ */

function openPanel() {
  $(".panel-overlay").classList.add("open");
  $(".panel").classList.add("open");
}

function closePanel() {
  $(".panel-overlay")?.classList.remove("open");
  $(".panel")?.classList.remove("open");
}

/* ══════════════════
   TOPICS PAGE
   ══════════════════ */

function initTopicsPage() {
  renderTopicsTable();
  renderRoutingTable();
  renderEventCatalog();

  $(".panel-overlay")?.addEventListener("click", closePanel);
  $(".panel-close")?.addEventListener("click", closePanel);

  $("#btn-new-topic")?.addEventListener("click", () => showTopicEditor(null));
}

function renderTopicsTable() {
  const tbody = $("#topics-table tbody");
  if (!tbody) return;
  tbody.innerHTML = DATA.topics.map(t => `
    <tr data-id="${t.id}" class="topic-row" style="cursor:pointer">
      <td><strong>${t.name}</strong>${t.organ ? `<br><span class="muted">${t.organ}</span>` : ""}</td>
      <td class="muted">${t.description}</td>
      <td>${t.sender}</td>
      <td>${badge(t.subscription)}</td>
      <td>${t.subscribers}</td>
      <td>${badge(t.status)}</td>
    </tr>`).join("");

  $$(".topic-row", tbody).forEach(row => {
    row.addEventListener("click", () => {
      const topic = DATA.topics.find(t => t.id === +row.dataset.id);
      showTopicEditor(topic);
    });
  });
}

function showTopicEditor(topic) {
  const isNew = !topic;
  const t = topic || { name: "", description: "", sender: "", organ: "", status: "Draft", subscription: "Opt-out", events: [] };

  const eventOptions = DATA.eventTypes.map(e =>
    `<option value="${e.name}" ${t.events.includes(e.name) ? "selected" : ""}>${e.name}</option>`
  ).join("");

  $(".panel").innerHTML = `
    <button class="panel-close">✕</button>
    <div class="panel-title">${isNew ? "New Topic" : "Edit Topic"}</div>
    <div class="form-group"><label>Name</label><input id="ed-name" value="${t.name}"></div>
    <div class="form-group"><label>Description</label><textarea id="ed-desc">${t.description}</textarea></div>
    <div class="form-group"><label>Sender Identity</label><input id="ed-sender" value="${t.sender}" placeholder="e.g. agenda@un.org"></div>
    <div class="form-group"><label>Organ Scope (optional)</label><input id="ed-organ" value="${t.organ || ""}" placeholder="e.g. GA Plenary"></div>
    <div class="form-group">
      <label>Subscription Model</label>
      <select id="ed-sub">
        <option value="Mandatory" ${t.subscription === "Mandatory" ? "selected" : ""}>Mandatory</option>
        <option value="Opt-out" ${t.subscription === "Opt-out" ? "selected" : ""}>Opt-out (auto-subscribed)</option>
        <option value="Opt-in" ${t.subscription === "Opt-in" ? "selected" : ""}>Opt-in</option>
      </select>
    </div>
    <div class="form-group">
      <label>Status</label>
      <select id="ed-status">
        <option value="Draft" ${t.status === "Draft" ? "selected" : ""}>Draft</option>
        <option value="Live" ${t.status === "Live" ? "selected" : ""}>Live</option>
      </select>
    </div>
    <div class="form-group">
      <label>Routed Event Types</label>
      <select id="ed-events" multiple size="5">${eventOptions}</select>
      <div class="muted" style="margin-top:4px">Hold Ctrl/Cmd to select multiple. These are external event types from the Event Logging system.</div>
    </div>
    <div class="form-actions">
      <button class="button primary" id="ed-save">${isNew ? "Create Topic" : "Save Changes"}</button>
      <button class="button" id="ed-cancel">Cancel</button>
      ${!isNew ? `<button class="button danger" id="ed-delete">Delete</button>` : ""}
    </div>`;

  $("#ed-cancel").addEventListener("click", closePanel);
  $("#ed-save").addEventListener("click", () => {
    if (!isNew) {
      topic.name = $("#ed-name").value;
      topic.description = $("#ed-desc").value;
      topic.sender = $("#ed-sender").value;
      topic.organ = $("#ed-organ").value || null;
      topic.subscription = $("#ed-sub").value;
      topic.status = $("#ed-status").value;
      topic.events = [...$$("#ed-events option:checked")].map(o => o.value);
    } else {
      DATA.topics.push({
        id: Math.max(...DATA.topics.map(t => t.id)) + 1,
        name: $("#ed-name").value,
        description: $("#ed-desc").value,
        sender: $("#ed-sender").value,
        organ: $("#ed-organ").value || null,
        status: $("#ed-status").value,
        subscription: $("#ed-sub").value,
        subscribers: 0,
        events: [...$$("#ed-events option:checked")].map(o => o.value),
      });
    }
    closePanel();
    renderTopicsTable();
    renderRoutingTable();
  });

  if (!isNew) {
    $("#ed-delete")?.addEventListener("click", () => {
      DATA.topics.splice(DATA.topics.indexOf(topic), 1);
      closePanel();
      renderTopicsTable();
      renderRoutingTable();
    });
  }

  openPanel();
}

function renderRoutingTable() {
  const tbody = $("#routing-table tbody");
  if (!tbody) return;
  const rules = [];
  DATA.topics.forEach(t => {
    t.events.forEach(ev => rules.push({ eventType: ev, topic: t.name, organ: t.organ }));
  });
  tbody.innerHTML = rules.map(r => `
    <tr>
      <td><code>${r.eventType}</code></td>
      <td>${r.topic}${r.organ ? ` <span class="muted">(${r.organ})</span>` : ""}</td>
    </tr>`).join("");
}

function renderEventCatalog() {
  const el = $("#event-catalog");
  if (!el) return;
  el.innerHTML = DATA.eventTypes.map(e => `
    <tr>
      <td><code>${e.name}</code></td>
      <td class="muted">${e.description}</td>
      <td class="muted">${e.payloadFields.join(", ")}</td>
    </tr>`).join("");
}

/* ══════════════════
   TEMPLATES PAGE
   ══════════════════ */

function initTemplatesPage() {
  renderTemplatesTable();
  setupTemplateFilters();

  $(".panel-overlay")?.addEventListener("click", closePanel);
  $(".panel-close")?.addEventListener("click", closePanel);

  $("#btn-new-template")?.addEventListener("click", () => showTemplateEditor(null));
}

function renderTemplatesTable(filterType, filterEvent) {
  const tbody = $("#template-table tbody");
  if (!tbody) return;
  let list = DATA.templates;
  if (filterType) list = list.filter(t => t.type === filterType);
  if (filterEvent) list = list.filter(t => t.eventType === filterEvent);

  tbody.innerHTML = list.map(t => `
    <tr class="tpl-row" data-id="${t.id}" style="cursor:pointer">
      <td>${t.name}</td>
      <td>${badge(t.type)}</td>
      <td>${t.eventType !== "—" ? `<code>${t.eventType}</code>` : "—"}</td>
      <td>${badge(t.channel)}</td>
      <td>${badge(t.status)}</td>
      <td>${t.updated}</td>
    </tr>`).join("");

  $$(".tpl-row", tbody).forEach(row => {
    row.addEventListener("click", () => {
      const tpl = DATA.templates.find(t => t.id === +row.dataset.id);
      showTemplateEditor(tpl);
    });
  });
}

function setupTemplateFilters() {
  const fType = $("#filter-tpl-type");
  const fEvent = $("#filter-tpl-event");
  if (!fType || !fEvent) return;
  const apply = () => renderTemplatesTable(fType.value || null, fEvent.value || null);
  fType.addEventListener("change", apply);
  fEvent.addEventListener("change", apply);
}

function showTemplateEditor(tpl) {
  const isNew = !tpl;
  const t = tpl || { name: "", type: "Immediate", eventType: "", channel: "Email", status: "Draft", subject: "", body: "" };

  const eventOptions = DATA.eventTypes.map(e =>
    `<option value="${e.name}" ${e.name === t.eventType ? "selected" : ""}>${e.name}</option>`
  ).join("");

  $(".panel").innerHTML = `
    <button class="panel-close">✕</button>
    <div class="panel-title">${isNew ? "New Template" : "Edit Template"}</div>
    <div class="form-group"><label>Name</label><input id="ed-name" value="${t.name}"></div>
    <div class="form-group">
      <label>Type</label>
      <select id="ed-type">
        <option value="Immediate" ${t.type === "Immediate" ? "selected" : ""}>Immediate</option>
        <option value="Digest Item" ${t.type === "Digest Item" ? "selected" : ""}>Digest Item</option>
        <option value="Digest Wrapper" ${t.type === "Digest Wrapper" ? "selected" : ""}>Digest Wrapper</option>
      </select>
    </div>
    <div class="form-group">
      <label>Event Type</label>
      <select id="ed-event"><option value="">— (wrapper)</option>${eventOptions}</select>
    </div>
    <div class="form-group">
      <label>Channel</label>
      <select id="ed-channel">
        <option value="Email" ${t.channel === "Email" ? "selected" : ""}>Email</option>
        <option value="Teams" ${t.channel === "Teams" ? "selected" : ""}>MS Teams</option>
      </select>
    </div>
    <div class="form-group">
      <label>Status</label>
      <select id="ed-status">
        <option value="Draft" ${t.status === "Draft" ? "selected" : ""}>Draft</option>
        <option value="Live" ${t.status === "Live" ? "selected" : ""}>Live</option>
      </select>
    </div>
    ${t.type !== "Digest Item" && t.type !== "Digest Wrapper" ? `<div class="form-group"><label>Subject Line</label><input id="ed-subject" value="${t.subject || ""}"></div>` : ""}
    <div class="form-group"><label>Body</label><textarea id="ed-body" rows="8">${t.body || ""}</textarea></div>
    <div id="ed-validation"></div>
    <div class="form-actions">
      <button class="button primary" id="ed-save">${isNew ? "Create" : "Save"}</button>
      <button class="button" id="ed-validate">Validate Placeholders</button>
      <button class="button" id="ed-cancel">Cancel</button>
    </div>`;

  $("#ed-cancel").addEventListener("click", closePanel);
  $(".panel-close").addEventListener("click", closePanel);

  $("#ed-validate").addEventListener("click", () => {
    const body = $("#ed-body").value + ($("#ed-subject")?.value || "");
    const eventType = $("#ed-event").value;
    const result = validatePlaceholders(body, eventType);
    const el = $("#ed-validation");
    el.className = result.valid ? "validation-ok" : "validation-warn";
    el.textContent = result.message;
  });

  $("#ed-save").addEventListener("click", () => {
    const updated = {
      name: $("#ed-name").value,
      type: $("#ed-type").value,
      eventType: $("#ed-event").value || "—",
      channel: $("#ed-channel").value,
      status: $("#ed-status").value,
      subject: $("#ed-subject")?.value || "",
      body: $("#ed-body").value,
      updated: new Date().toISOString().slice(0, 10),
    };
    if (!isNew) {
      Object.assign(tpl, updated);
    } else {
      updated.id = Math.max(...DATA.templates.map(t => t.id)) + 1;
      DATA.templates.push(updated);
    }
    closePanel();
    renderTemplatesTable();
  });

  openPanel();
}

/* ══════════════════
   MESSAGES PAGE
   ══════════════════ */

function initMessagesPage() {
  renderMessageTable();
  renderRecipientPrefs();
  setupMessageFilters();
  setupTabs();

  $$(".pref-cadence").forEach(sel => {
    sel.addEventListener("change", (e) => {
      const [ri, pi] = e.target.dataset.idx.split(",").map(Number);
      DATA.recipients[ri].prefs[pi].cadence = e.target.value;
      renderDigestPreview();
    });
  });
}

function renderMessageTable(filterTopic, filterType, filterStatus) {
  const tbody = $("#message-table tbody");
  if (!tbody) return;
  let list = DATA.messages;
  if (filterTopic) list = list.filter(m => m.topic.includes(filterTopic));
  if (filterType) list = list.filter(m => m.type.includes(filterType));
  if (filterStatus) list = list.filter(m => m.status === filterStatus);

  tbody.innerHTML = list.map(m => `
    <tr>
      <td class="muted">${m.id}</td>
      <td>${badge(m.type)}</td>
      <td>${m.topic}</td>
      <td>${m.recipient}</td>
      <td>${badge(m.channel)}</td>
      <td>${m.sender}</td>
      <td><span class="${statusClass(m.status)}">${m.status}</span></td>
      <td>${m.sent}</td>
    </tr>`).join("");
}

function setupMessageFilters() {
  const fTopic = $("#filter-msg-topic");
  const fType = $("#filter-msg-type");
  const fStatus = $("#filter-msg-status");
  if (!fTopic) return;
  const apply = () => renderMessageTable(fTopic.value || null, fType.value || null, fStatus.value || null);
  fTopic.addEventListener("change", apply);
  fType.addEventListener("change", apply);
  fStatus.addEventListener("change", apply);
}

function renderRecipientPrefs() {
  const tbody = $("#prefs-table tbody");
  if (!tbody) return;
  const rows = [];
  DATA.recipients.forEach((r, ri) => {
    r.prefs.forEach((p, pi) => {
      rows.push(`
        <tr>
          <td>${r.name} <span class="muted">(${r.entity})</span></td>
          <td>${p.topic}</td>
          <td>
            <select class="pref-cadence" data-idx="${ri},${pi}" style="padding:4px 8px;border-radius:6px;border:1px solid var(--border);font-size:12px">
              ${["Immediate","Hourly","Daily","Weekly"].map(c => `<option ${c === p.cadence ? "selected" : ""}>${c}</option>`).join("")}
            </select>
          </td>
          <td>${channelBadges(p.channels)}</td>
        </tr>`);
    });
  });
  tbody.innerHTML = rows.join("");

  $$(".pref-cadence", tbody).forEach(sel => {
    sel.addEventListener("change", (e) => {
      const [ri, pi] = e.target.dataset.idx.split(",").map(Number);
      DATA.recipients[ri].prefs[pi].cadence = e.target.value;
      renderDigestPreview();
    });
  });
}

function renderDigestPreview() {
  const el = $("#digest-preview-content");
  if (!el) return;

  const recipient = DATA.recipients[0]; // Preview for first recipient
  const digestPrefs = recipient.prefs.filter(p => p.cadence !== "Immediate");

  if (digestPrefs.length === 0) {
    el.innerHTML = `<p class="muted">${recipient.name} has all topics set to Immediate — no digest to preview.</p>`;
    return;
  }

  // Group by cadence
  const byCadence = {};
  digestPrefs.forEach(p => {
    if (!byCadence[p.cadence]) byCadence[p.cadence] = [];
    byCadence[p.cadence].push(p);
  });

  let html = "";
  for (const [cadence, prefs] of Object.entries(byCadence)) {
    const topic_names = prefs.map(p => p.topic);
    const topics = DATA.topics.filter(t => topic_names.includes(t.name));
    html += `<div class="section-header">${recipient.name}'s ${cadence} Digest</div>`;
    html += `<p class="muted">Sent to: ${prefs[0].channels.join(", ")}</p>`;
    topics.forEach(t => {
      html += `<div class="topic-section">`;
      html += `<div class="topic-section-title">📋 ${t.name} <span class="muted">(via ${t.sender})</span></div>`;
      // Mock some items
      t.events.slice(0, 2).forEach(ev => {
        const et = DATA.eventTypes.find(e => e.name === ev);
        html += `<div style="padding-left:14px">• ${et?.description || ev}</div>`;
      });
      html += `</div>`;
    });
    html += `<hr style="border:none;border-top:1px solid var(--border);margin:10px 0">`;
  }

  html += `<p class="muted">Manage preferences in your e-deleGATE settings.</p>`;
  el.innerHTML = html;
}

function setupTabs() {
  $$(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const group = tab.closest(".card");
      $$(".tab", group).forEach(t => t.classList.remove("active"));
      $$(".tab-content", group).forEach(c => c.classList.remove("active"));
      tab.classList.add("active");
      const target = $(tab.dataset.tab, group);
      if (target) target.classList.add("active");
    });
  });
}

/* ══════════════════
   Init
   ══════════════════ */

const page = document.body.dataset.page;
document.addEventListener("DOMContentLoaded", () => {
  if (page === "topics") initTopicsPage();
  if (page === "templates") initTemplatesPage();
  if (page === "messages") { initMessagesPage(); renderDigestPreview(); }
});
