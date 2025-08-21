"use client";
import Breadcrumbs from "@/components/Breadcrumbs";
export default function DisclaimerPage() {
  return (
    <>
      <Breadcrumbs
        title="Disclaimer"
        items={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]}
      />
      <div style={{
        background: 'none',
        minHeight: '100vh',
        position: 'relative',
        paddingTop: '40px',
      }}>
        <div className="container py-5" >
          <div className="mx-auto" style={{ maxWidth: '100%' }}>
            <div className="p-4 p-md-5 d-flex flex-column " style={{ background: '#fff',  width: '100%' }}>
              <div className="mb-3" style={{ fontSize: '2.5rem', color: '#7a566b' }}>
                <i className="bi bi-shield-exclamation"></i>
              </div>
              <h2 className="h5 mb-3" style={{ color: '#7a566b' }}>Rechtlicher Hinweis / energetischer Rahmen</h2>
              <p>Alle Inhalte auf dieser Website sowie sämtliche Angebote im Rahmen von Harmonyum Trauma Release®, energetischer Begleitung, schamanischen Ritualen oder Gesundheits-Coaching dienen der Unterstützung der Selbstwahrnehmung, Selbstregulation und seelisch-körperlichen Harmonisierung.</p>
              <p>Sie ersetzen keine medizinische, psychotherapeutische oder psychiatrische Diagnose oder Behandlung.</p>
              <p>Ich stelle keine Diagnosen, verspreche keine Heilung und gebe keine Empfehlungen im schulmedizinischen Sinne.</p>
              <p>Meine Arbeit versteht sich als energetischer und geistiger Impuls – du bleibst während des gesamten Prozesses in deiner Eigenverantwortung.</p>
              <p>Ich weise ausdrücklich darauf hin, dass eine begonnene schulmedizinische Behandlung nicht abgebrochen oder aufgeschoben werden sollte.</p>
              <p>Wenn du unsicher bist, ob mein Angebot für dich geeignet ist, sprich mich gerne persönlich an. Ich arbeite transparent, klar und achtsam.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
