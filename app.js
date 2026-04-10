const els = {
  reloadBtn: document.getElementById("reloadBtn"),
  datasetList: document.getElementById("datasetList"),
  tabReport: document.getElementById("tabReport"),
  tabData: document.getElementById("tabData"),
  dataFilters: document.getElementById("dataFilters"),
  reportPanel: document.getElementById("reportPanel"),
  reportBody: document.getElementById("reportBody"),
  tablePanel: document.getElementById("tablePanel"),
  detailPanel: document.getElementById("detailPanel"),
  searchInput: document.getElementById("searchInput"),
  statusSelect: document.getElementById("statusSelect"),
  categorySelect: document.getElementById("categorySelect"),
  brandSelect: document.getElementById("brandSelect"),
  containerSelect: document.getElementById("containerSelect"),
  detectionSelect: document.getElementById("detectionSelect"),
  minConfidence: document.getElementById("minConfidence"),
  hasOCR: document.getElementById("hasOCR"),
  hasBarcode: document.getElementById("hasBarcode"),
  hasMaterial: document.getElementById("hasMaterial"),
  stats: document.getElementById("stats"),
  rows: document.getElementById("rows"),
  detailTitle: document.getElementById("detailTitle"),
  detailMeta: document.getElementById("detailMeta"),
  detailImgLink: document.getElementById("detailImgLink"),
  detailImg: document.getElementById("detailImg"),
  detailJson: document.getElementById("detailJson")
};

function normalizeString(v) {
  if (v === null || v === undefined) return "";
  return String(v);
}

function toNumber(v, fallback = NaN) {
  const n = typeof v === "number" ? v : Number(v);
  return Number.isFinite(n) ? n : fallback;
}

function uniqSorted(values) {
  return Array.from(new Set(values.filter(Boolean))).sort((a, b) => a.localeCompare(b));
}

function pickRowText(item) {
  const parts = [
    item.display_name,
    item.brand,
    item.product_name,
    item.variant,
    item.category,
    item.packaging_material,
    item.container_type,
    item.package_size_text,
    item.image_id,
    item.image_path,
    item.status
  ];
  return parts.map(normalizeString).join(" ").toLowerCase();
}

function pillForStatus(status) {
  const s = normalizeString(status).toLowerCase();
  if (!s) return `<span class="pill">unknown</span>`;
  if (s === "ok") return `<span class="pill pill--good">ok</span>`;
  if (s === "warn" || s === "warning") return `<span class="pill pill--warn">${escapeHtml(s)}</span>`;
  if (s === "error" || s === "failed") return `<span class="pill pill--bad">${escapeHtml(s)}</span>`;
  return `<span class="pill">${escapeHtml(s)}</span>`;
}

function pillForEvidence(item) {
  const parts = [];
  const ev = item.evidence || {};
  
  if (ev.ocr && ev.ocr.text && ev.ocr.text.trim()) {
    parts.push(`<span class="pill pill--blue">ocr</span>`);
  }
  
  if (ev.barcodes && ev.barcodes.length > 0) {
    const hasLookup = ev.barcodes.some(b => b.lookup_data);
    parts.push(`<span class="pill pill--green">${hasLookup ? "lookup" : "barcode"}</span>`);
  }
  
  // VLM evidence
  const vlmEv = ev.vlm_output?.evidence || [];
  if (vlmEv.includes("logo")) parts.push(`<span class="pill pill--purple">logo</span>`);
  if (vlmEv.includes("shape")) parts.push(`<span class="pill pill--orange">shape</span>`);
  
  if (item.packaging_material) parts.push(`<span class="pill pill--pink">material</span>`);
  
  return parts.join(" ");
}

function escapeHtml(s) {
  return normalizeString(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatConfidence(v) {
  const n = toNumber(v, NaN);
  if (!Number.isFinite(n)) return "";
  return n.toFixed(2);
}

let manifest = null;
let dataset = {
  meta: null,
  items: [],
  indexed: []
};

let viewMode = "data"; // "report" | "data"
let selectedDatasetId = null;

function getSelectedDatasetMeta() {
  const id = selectedDatasetId ?? manifest.datasets[0]?.id;
  return manifest.datasets.find((d) => d.id === id) ?? manifest.datasets[0];
}

function setSelectedDatasetId(id) {
  selectedDatasetId = id;
  renderDatasetList();
}

function renderDatasetList() {
  if (!els.datasetList) return;
  els.datasetList.innerHTML = "";

  const frag = document.createDocumentFragment();
  for (const d of manifest.datasets) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "datasetItem";
    btn.setAttribute("role", "listitem");
    btn.dataset.id = d.id;
    const active = d.id === selectedDatasetId;
    btn.classList.toggle("datasetItem--active", active);
    btn.innerHTML = `<div class="datasetItem__title">${escapeHtml(d.title)}</div>
      <div class="datasetItem__meta">
        <code>${escapeHtml(d.id)}</code>
      </div>`;

    btn.addEventListener("click", async () => {
      setSelectedDatasetId(d.id);
      await loadSelected(getSelectedDatasetMeta());
    });

    frag.appendChild(btn);
  }
  els.datasetList.appendChild(frag);
}

function setViewMode(nextMode) {
  viewMode = nextMode;

  const reportActive = viewMode === "report";
  els.tabReport.classList.toggle("tab--active", reportActive);
  els.tabReport.setAttribute("aria-selected", reportActive ? "true" : "false");
  els.tabData.classList.toggle("tab--active", !reportActive);
  els.tabData.setAttribute("aria-selected", !reportActive ? "true" : "false");

  els.reportPanel.hidden = !reportActive;
  els.tablePanel.hidden = reportActive;
  els.detailPanel.hidden = reportActive;
  els.dataFilters.hidden = reportActive;
}

function setSelectOptions(select, values, placeholder = "All") {
  const cur = select.value;
  select.innerHTML = "";
  const first = document.createElement("option");
  first.value = "";
  first.textContent = placeholder;
  select.appendChild(first);

  for (const v of values) {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = v;
    select.appendChild(opt);
  }

  if ([...select.options].some((o) => o.value === cur)) {
    select.value = cur;
  } else {
    select.value = "";
  }
}

function rebuildFacets() {
  const statuses = uniqSorted(dataset.items.map((x) => normalizeString(x.status)));
  const categories = uniqSorted(dataset.items.map((x) => normalizeString(x.category)));
  const brands = uniqSorted(dataset.items.map((x) => normalizeString(x.brand)));
  const containers = uniqSorted(dataset.items.map((x) => normalizeString(x.container_type)));
  const detections = uniqSorted(dataset.items.map((x) => normalizeString(x.detection_level)));

  setSelectOptions(els.statusSelect, statuses);
  setSelectOptions(els.categorySelect, categories);
  setSelectOptions(els.brandSelect, brands);
  setSelectOptions(els.containerSelect, containers);
  setSelectOptions(els.detectionSelect, detections);
}

function getFilters() {
  return {
    q: normalizeString(els.searchInput.value).trim().toLowerCase(),
    status: normalizeString(els.statusSelect.value).trim(),
    category: normalizeString(els.categorySelect.value).trim(),
    brand: normalizeString(els.brandSelect.value).trim(),
    container: normalizeString(els.containerSelect.value).trim(),
    detection: normalizeString(els.detectionSelect.value).trim(),
    minConfidence: Math.max(0, Math.min(1, toNumber(els.minConfidence.value, 0))),
    hasOCR: els.hasOCR.checked,
    hasBarcode: els.hasBarcode.checked,
    hasMaterial: els.hasMaterial?.checked || false
  };
}

function applyFilters() {
  const f = getFilters();

  const filtered = dataset.indexed.filter(({ item, text }) => {
    if (f.q && !text.includes(f.q)) return false;
    if (f.status && normalizeString(item.status) !== f.status) return false;
    if (f.category && normalizeString(item.category) !== f.category) return false;
    if (f.brand && normalizeString(item.brand) !== f.brand) return false;
    if (f.container && normalizeString(item.container_type) !== f.container) return false;
    if (f.detection && normalizeString(item.detection_level) !== f.detection) return false;

    if (f.hasOCR) {
      const ocrText = item.evidence?.ocr?.text || "";
      if (!ocrText.trim()) return false;
    }
    if (f.hasBarcode) {
      const barcodes = item.evidence?.barcodes || [];
      if (barcodes.length === 0) return false;
    }
    if (f.hasMaterial && !item.packaging_material) {
      return false;
    }

    const c = toNumber(item.confidence, NaN);
    if (Number.isFinite(c) && c < f.minConfidence) return false;
    if (!Number.isFinite(c) && f.minConfidence > 0) return false;
    return true;
  });

  renderTable(filtered.map((x) => x.item));
  renderStats(filtered.length, dataset.items.length);
}

function renderStats(filteredCount, totalCount) {
  const d = dataset.meta;
  const title = d?.title ? `${d.title}` : "Dataset";
  els.stats.textContent = `${title}: showing ${filteredCount.toLocaleString()} / ${totalCount.toLocaleString()} items`;
}

function renderTable(items) {
  els.rows.innerHTML = "";

  const frag = document.createDocumentFragment();
  for (const item of items) {
    const tr = document.createElement("tr");

    const tds = [
      escapeHtml(item.display_name ?? ""),
      escapeHtml(item.brand ?? ""),
      escapeHtml(item.category ?? ""),
      escapeHtml(item.packaging_material ?? ""),
      escapeHtml(item.container_type ?? ""),
      pillForEvidence(item),
      pillForStatus(item.status),
      escapeHtml(formatConfidence(item.confidence)),
      escapeHtml(item.image_id ?? "")
    ];

    for (let i = 0; i < tds.length; i++) {
      const td = document.createElement("td");
      td.innerHTML = tds[i];
      tr.appendChild(td);
    }

    tr.addEventListener("click", () => renderDetail(item));
    frag.appendChild(tr);
  }

  els.rows.appendChild(frag);
}

function renderDetail(item) {
  const title =
    item.display_name ??
    item.image_id ??
    `${normalizeString(item.brand)} ${normalizeString(item.product_name)}`.trim() ??
    "Selected item";

  const metaParts = [];
  if (item.status) metaParts.push(`status: ${normalizeString(item.status)}`);
  if (item.confidence !== undefined) metaParts.push(`confidence: ${formatConfidence(item.confidence) || "n/a"}`);
  if (item.category) metaParts.push(`category: ${normalizeString(item.category)}`);
  if (item.container_type) metaParts.push(`container: ${normalizeString(item.container_type)}`);

  els.detailTitle.textContent = normalizeString(title);
  els.detailMeta.textContent = metaParts.join(" • ");

  // Enhanced details section
  let detailHtml = "";
  
  // Provenance (Models)
  if (item.provenance) {
    const p = item.provenance;
    detailHtml += `<div class="detailSection">
      <div class="detailSection__title">Provenance</div>
      <div class="detailSection__grid">
        <div class="kv"><span>Pipeline</span><code>${escapeHtml(p.pipeline)}</code></div>
        <div class="kv"><span>VLM</span><code>${escapeHtml(p.vlm_model)}</code></div>
        <div class="kv"><span>OCR</span><code>${escapeHtml(p.ocr_backend)}</code></div>
        <div class="kv"><span>Resolver</span><code>${escapeHtml(p.resolver_model)}</code></div>
      </div>
    </div>`;
  }

  // Barcode Lookups
  const barcodes = item.evidence?.barcodes || [];
  if (barcodes.length > 0) {
    const lookups = barcodes.filter(b => b.lookup_data);
    detailHtml += `<div class="detailSection">
      <div class="detailSection__title">Barcodes (${barcodes.length})</div>
      <div class="detailSection__list">
        ${barcodes.map(b => `
          <div class="barcodeItem">
            <div class="barcodeValue">${escapeHtml(b.value)} <span class="dim">(${escapeHtml(b.extractor)})</span></div>
            ${b.lookup_data ? `<div class="barcodeLookup">${escapeHtml(b.lookup_data)} <span class="pill pill--xs pill--green">${escapeHtml(b.lookup_db)}</span></div>` : ""}
          </div>
        `).join("")}
      </div>
    </div>`;
  }

  // Issues
  const warnings = item.issues?.warnings || [];
  const errors = item.issues?.errors || [];
  if (warnings.length > 0 || errors.length > 0) {
    detailHtml += `<div class="detailSection">
      <div class="detailSection__title">Issues</div>
      <div class="issueList">
        ${errors.map(e => `<div class="issue issue--error">${escapeHtml(e)}</div>`).join("")}
        ${warnings.map(w => `<div class="issue issue--warn">${escapeHtml(w)}</div>`).join("")}
      </div>
    </div>`;
  }

  // Only update if we have content
  const infoGroup = document.getElementById("detailInfoGroup");
  if (infoGroup) {
    infoGroup.innerHTML = detailHtml;
  }

  els.detailJson.textContent = JSON.stringify(item, null, 2);

  const imagePath = normalizeString(item.image_path || item.image || "");
  if (imagePath) {
    const thumbSrc = `./thumbs/${imagePath}.webp`;
    els.detailImg.alt = normalizeString(item.image_id || item.display_name || "image");
    els.detailImg.src = thumbSrc;
    els.detailImgLink.href = thumbSrc;
    els.detailImgLink.hidden = false;

    els.detailImg.onerror = () => {
      els.detailImgLink.hidden = true;
      els.detailImg.removeAttribute("src");
    };
  } else {
    els.detailImgLink.hidden = true;
    els.detailImg.removeAttribute("src");
  }
}

async function loadManifest() {
  const res = await fetch("./data/manifest.json", { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load manifest: ${res.status}`);
  return await res.json();
}

function rewriteReportHtml(html, meta) {
  // The report contains image src like "detections/detections-YYYYMMDD/..."
  // In Pages, your repo root isn't available; only iCAN.github.io/ is served.
  // We prefer thumbnails (iCAN.github.io/thumbs/...) and fall back to originals.
  const container = document.createElement("div");
  container.innerHTML = html;

  const imgs = container.querySelectorAll("img");
  for (const img of imgs) {
    const src = img.getAttribute("src") || "";
    img.loading = "lazy";

    if (src) {
      const thumbSrc = `./thumbs/${src}.webp`;
      img.dataset.origSrc = src;
      img.dataset.thumbSrc = thumbSrc;
      img.src = thumbSrc;

      // Wrap in a link to the thumbnail (we may not ship originals)
      const parent = img.parentElement;
      if (parent && parent.tagName.toLowerCase() !== "a") {
        const a = document.createElement("a");
        a.href = thumbSrc;
        a.target = "_blank";
        a.rel = "noreferrer";
        parent.replaceChild(a, img);
        a.appendChild(img);
      }

      img.addEventListener("error", () => {
        // Fallback chain: thumb -> hide
        img.style.display = "none";
      });
    }
  }

  // Make <pre> blocks wrap instead of forcing horizontal scroll forever
  const pres = container.querySelectorAll("pre");
  for (const pre of pres) {
    pre.style.whiteSpace = "pre-wrap";
    pre.style.wordBreak = "break-word";
  }

  // Add a small source hint at top
  const hint = document.createElement("div");
  hint.style.marginBottom = "10px";
  hint.style.color = "var(--muted)";
  hint.style.fontSize = "12px";
  hint.innerHTML = `Source: <code>${escapeHtml(meta?.reportPath ?? "")}</code>`;
  container.prepend(hint);

  return container.innerHTML;
}

async function loadReport(meta) {
  if (!meta.reportPath) {
    els.reportBody.innerHTML = `<p><strong>No reportPath configured</strong> for this dataset in <code>data/manifest.json</code>.</p>`;
    return;
  }

  const res = await fetch(meta.reportPath, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load report: ${res.status}`);
  const md = await res.text();

  if (!window.marked) throw new Error("Markdown renderer not loaded (marked).");
  const rawHtml = window.marked.parse(md, { mangle: false, headerIds: false });
  els.reportBody.innerHTML = rewriteReportHtml(rawHtml, meta);
}

async function loadData(meta) {
  if (!meta.jsonPath) throw new Error("Dataset is missing jsonPath in manifest.json");
  const res = await fetch(meta.jsonPath, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load dataset: ${res.status}`);
  const json = await res.json();

  if (!Array.isArray(json)) throw new Error("Dataset JSON must be an array of objects.");

  dataset = {
    meta,
    items: json,
    indexed: json.map((item) => ({ item, text: pickRowText(item) }))
  };

  rebuildFacets();
  applyFilters();
  renderDetail(json[0] ?? {});
}

async function loadSelected(meta) {
  // Always load the report (fast, and matches what you want visually)
  await loadReport(meta);

  // Load the JSON only when needed (switching to Data view uses it)
  if (viewMode === "data") {
    await loadData(meta);
  } else {
    renderStats(0, 0);
  }
}

function wireEvents() {
  els.reloadBtn.addEventListener("click", () => loadSelected(getSelectedDatasetMeta()));

  els.tabReport.addEventListener("click", () => {
    setViewMode("report");
  });

  els.tabData.addEventListener("click", async () => {
    setViewMode("data");
    // Load JSON lazily (only when user asks for Data view)
    await loadData(getSelectedDatasetMeta());
  });

  const onFilter = () => applyFilters();
  els.searchInput.addEventListener("input", onFilter);
  els.statusSelect.addEventListener("change", onFilter);
  els.categorySelect.addEventListener("change", onFilter);
  els.brandSelect.addEventListener("change", onFilter);
  els.containerSelect.addEventListener("change", onFilter);
  els.detectionSelect.addEventListener("change", onFilter);
  els.minConfidence.addEventListener("input", onFilter);
  els.hasOCR.addEventListener("change", onFilter);
  els.hasBarcode.addEventListener("change", onFilter);
  if (els.hasMaterial) els.hasMaterial.addEventListener("change", onFilter);
}

async function main() {
  try {
    manifest = await loadManifest();
    if (!manifest?.datasets?.length) throw new Error("manifest.json has no datasets.");
    selectedDatasetId = manifest.datasets[0].id;
    renderDatasetList();
    wireEvents();
    setViewMode("data");
    await loadData(getSelectedDatasetMeta());
    if (dataset.items.length > 0) renderDetail(dataset.items[0]);
  } catch (err) {
    els.stats.textContent = `Error: ${err?.message ?? String(err)}`;
    els.detailTitle.textContent = "Failed to load";
    els.detailJson.textContent = String(err?.stack ?? err);
  }
}

main();

