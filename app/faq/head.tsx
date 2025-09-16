export default async function Head() {
  const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/pages/68c01158106eb845adbadfa2?depth=2&draft=false&locale=undefined&trash=false`;

  let title = "";
  let description = "";
  let faqItems: { q: string; a: string }[] = [];

  try {
    const res = await fetch(API_URL, { cache: "no-store" });
    if (res.ok) {
      const json = await res.json();
      const doc = json?.doc ?? (Array.isArray(json?.docs) ? json.docs[0] : json);
      const t = doc?.meta?.title || doc?.title || doc?.hero?.title;
      const d = doc?.meta?.description || doc?.description || doc?.subtitle || doc?.hero?.subtitle;
      if (t && typeof t === "string") title = t;
      if (d && typeof d === "string") description = d;

      // Try to find FAQs from the document for JSON-LD
      const arrays: any[] = [];
      const visit = (o: any) => {
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
        const mapped = (arr as any[])
          .map((it) => {
            const q = it?.q || it?.question || it?.frage || it?.title || it?.label || '';
            const a = it?.a || it?.answer || it?.antwort || it?.content || it?.description || '';
            if (typeof q === 'string' && typeof a === 'string' && q.trim() && a.trim()) return { q: q.trim(), a: a.trim() };
            return null;
          })
          .filter(Boolean) as { q: string; a: string }[];
        if (mapped.length >= 2) { faqItems = mapped; break; }
      }
    }
  } catch {}

  const jsonLd = faqItems.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  } : null;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
    </>
  );
}
