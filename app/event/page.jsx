import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

const API_URL_EVENTS = "http://localhost:3001/api/pages/68c023ac106eb845adbae559?depth=2&draft=false&locale=undefined&trash=false";

// Helpers to extract and render content
const absUrl = (u) => (typeof u === 'string' && u.startsWith('http') ? u : (u ? `http://localhost:3001${u}` : ''));

const escapeHtml = (s) => String(s || '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

function extractText(node) {
  if (!node) return '';
  if (typeof node.text === 'string') return node.text;
  if (Array.isArray(node.children)) return node.children.map(extractText).join(' ');
  return '';
}

function renderTextNode(n) {
  let t = escapeHtml(n.text ?? '');
  if (!t) return '';
  const fmt = typeof n.format === 'number' ? n.format : 0;
  const isBold = n.bold || (fmt & 1) === 1;
  const isItalic = n.italic || (fmt & 2) === 2;
  const isUnderline = n.underline || (fmt & 4) === 4;
  if (isBold) t = `<strong>${t}</strong>`;
  if (isItalic) t = `<em>${t}</em>`;
  if (isUnderline) t = `<u>${t}</u>`;
  return t;
}

function renderChildren(children) {
  if (!Array.isArray(children)) return '';
  return children.map(renderNode).join('');
}

function renderNode(n) {
  if (!n) return '';
  switch (n.type) {
    case 'text':
      return renderTextNode(n);
    case 'linebreak':
      return '<br />';
    case 'paragraph':
      return `<p>${renderChildren(n.children || [])}</p>`;
    case 'heading': {
      const tag = /^(h[1-6])$/.test(n.tag) ? n.tag : 'h3';
      return `<${tag}>${renderChildren(n.children || [])}</${tag}>`;
    }
    case 'list': {
      const isOrdered = (n.listType || n.tag) === 'numbered' || n.tag === 'ol';
      const tag = isOrdered ? 'ol' : 'ul';
      return `<${tag}>${renderChildren(n.children || [])}</${tag}>`;
    }
    case 'listitem':
    case 'list-item':
      return `<li>${renderChildren(n.children || [])}</li>`;
    case 'link': {
      const href = n.url || n.fields?.url || '#';
      return `<a href="${escapeHtml(href)}">${renderChildren(n.children || [])}</a>`;
    }
    default:
      return renderChildren(n.children || []);
  }
}

function lexicalToHtml(root) {
  if (!root) return '';
  const rootNode = root?.root ? root.root : root;
  const nodes = Array.isArray(rootNode?.children) ? rootNode.children : [];
  return nodes.map(renderNode).join('');
}

function pickImage(obj) {
  const img = obj?.image || obj?.heroImage || obj?.media || obj?.hero?.image || null;
  const raw = img?.sizes?.og?.url || img?.sizes?.large?.url || img?.url || img?.sizes?.thumbnail?.url || '';
  return raw ? absUrl(raw) : '';
}

function normalizeEventsFromDoc(doc) {
  if (!doc || typeof doc !== 'object') return [];

  // First, target the specific structure: layout[] -> sectionBlock -> locales[] (prefer 'de')
  const out = [];
  const layout = Array.isArray(doc.layout) ? doc.layout : [];
  for (const block of layout) {
    if (block?.blockType !== 'sectionBlock') continue;
    const locales = Array.isArray(block?.locales) ? block.locales : [];
    const entry = locales.find((l) => l?.locale === 'de') || locales[0];
    if (!entry) continue;
    const title = entry?.title || entry?.heading || entry?.label || entry?.name || '';
    const image = pickImage(entry);
    let html = '';
    if (entry?.rawHtml && typeof entry.rawHtml === 'string') html = entry.rawHtml;
    else if (entry?.description?.root) html = lexicalToHtml(entry.description);
    else if (entry?.content?.root) html = lexicalToHtml(entry.content);
    else if (typeof entry?.description === 'string') html = `<p>${escapeHtml(entry.description)}</p>`;
    else if (typeof entry?.content === 'string') html = `<p>${escapeHtml(entry.content)}</p>`;
    if ((title && html) || (title && image)) out.push({ title, image, html });
  }
  if (out.length > 0) return out;

  // Fallback: generic deep scan of arrays for items with title + content/image
  const generic = [];
  const arrays = [];
  const visit = (o) => {
    if (!o) return;
    if (Array.isArray(o)) {
      if (o.length && typeof o[0] === 'object') arrays.push(o);
      o.forEach(visit);
      return;
    }
    if (typeof o === 'object') Object.values(o).forEach(visit);
  };
  visit(doc);
  for (const arr of arrays) {
    for (const it of arr) {
      const title = it?.title || it?.heading || it?.label || it?.name || '';
      const image = pickImage(it);
      let html = '';
      if (it?.rawHtml && typeof it.rawHtml === 'string') html = it.rawHtml;
      else if (it?.description?.root) html = lexicalToHtml(it.description);
      else if (it?.content?.root) html = lexicalToHtml(it.content);
      else if (typeof it?.description === 'string') html = `<p>${escapeHtml(it.description)}</p>`;
      else if (typeof it?.content === 'string') html = `<p>${escapeHtml(it.content)}</p>`;
      if ((title && html) || (title && image)) generic.push({ title, image, html });
    }
  }
  return generic;
}

export default async function EventPage() {
  let pageTitle = 'Events';
  let dynamicEvents = [];
  try {
    const res = await fetch(API_URL_EVENTS, { cache: 'no-store' });
    if (res.ok) {
      const json = await res.json();
      const doc = json?.doc ?? (Array.isArray(json?.docs) ? json.docs[0] : json);
      pageTitle = doc?.title || doc?.hero?.title || pageTitle;
      dynamicEvents = normalizeEventsFromDoc(doc);
    }
  } catch {}

  const eventsToRender = Array.isArray(dynamicEvents) ? dynamicEvents : [];

  return (
      <>
          <Breadcrumbs
            title={pageTitle || "Events"}
            items={[{ label: "Home", href: "/" }, { label: "Events" }]}
          />
    <section className="bg-light py-5">
      <span className="absolute top-20 start-0">
                           <Image
                             src="/images/bg-2-copyright.webp"
                             width={393}
                             height={625}
                              
                             alt="Background Copyright"
                             priority
                           />
                             </span>
        <div className="container">
          {eventsToRender.length === 0 ? (
            <div className="row justify-content-center py-5">
              <div className="col-md-8 text-center">
                <p className="mb-0" style={{ fontSize: "1.1rem" }}>Aktuell sind keine Events verfügbar.</p>
              </div>
            </div>
          ) : eventsToRender.map((event, idx) => {
            const hasImage = Boolean(event.image);
            return (
            <div
              key={idx}
              className={`row align-items-center event-page-section bg-white rounded-4 shadow-sm py-5 px-5 justify-content-center mb-5 z-100 position-relative`}
            >
              <div className={`col-lg-12 d-flex ${idx % 2 === 1 ? "flex-row-reverse" : ""} flex-wrap gap-0`}>
                {hasImage && (
                  <div className="col-md-5 d-flex align-items-stretch mb-4 mb-md-0">
                    <div className="event-img-wrap  d-flex align-items-center justify-content-center" style={{ minHeight: 320, maxWidth: 420 }}>
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={520}
                        height={520}
                        style={{ objectFit: "cover", width: "100%",  }}
                      />
                    </div>
                  </div>
                )}
                <div className={`col-md-${hasImage ? 7 : 12} d-flex align-items-stretch`}>
                  <div className="event-card  p-4 w-100 h-100 d-flex flex-column justify-content-center" style={{ minHeight: 320 }}>
                    <h3 className="fw-bold mb-3 text-primary" style={{ fontSize: "1.5rem", lineHeight: 1.2 }}>
                      {event.title}
                    </h3>
                    {event.html && (
                      <div className="event-content" style={{ fontSize: "1.08rem", color: "#333" }}
                        dangerouslySetInnerHTML={{ __html: event.html }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          );})}
        </div>
    </section>
    </>
  );
}