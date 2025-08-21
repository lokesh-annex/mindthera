"use client";
import Breadcrumbs from "@/components/Breadcrumbs";
export default function AgbImpressumPage() {
  return (
    <>
      <Breadcrumbs
        title="AGB & Impressum"
        items={[{ label: "Home", href: "/" }, { label: "AGB & Impressum" }]}
      />
      <div style={{
        background: 'none',
        minHeight: '100vh',
        position: 'relative',
        paddingTop: '40px',
      }}>
        {/* Decorative top shape */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '80px',
          background: 'url(/images/bg-2-copyright.png) repeat-x',
          opacity: 0.12,
          zIndex: 1,
        }} />
        <div className="container py-5" >
          <div className="mx-auto" style={{ maxWidth: '100%' }}>
            <div className="p-4 p-md-5 d-flex flex-column " style={{ background: '#fff', width: '100%' }}>
              <div className="mb-3" style={{ fontSize: '2.5rem', color: '#7a566b' }}>
                <i className="bi bi-file-earmark-text"></i>
              </div>
              <h2 className="h4 mb-3 d-flex  gap-2" style={{ color: '#7a566b' }}>
                <i className="bi bi-person-vcard"></i> Impressum
              </h2>
              <p>
                <strong>Kerstin R. Stoll</strong>
                <br />
                <i className="bi bi-telephone"></i> Telefon: +41765607056
                <br />
                <i className="bi bi-envelope"></i> E-Mail: info@veraenderungen.ch
              </p>
              <h2 className="h5 mt-4 mb-3 d-flex  gap-2" style={{ color: '#7a566b' }}>
                <i className="bi bi-shield-check"></i> Disclaimer – rechtliche Hinweise
              </h2>
              <h3 className="h6 mt-3 d-flex  gap-2" style={{ color: '#5c377d' }}>
                <i className="bi bi-exclamation-circle"></i> § 1 Warnhinweis zu Inhalten
              </h3>
              <p>
                Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden
                mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite
                übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der
                bereitgestellten kostenlosen und frei zugänglichen journalistischen
                Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben
                die Meinung des jeweiligen Autors und nicht immer die Meinung des
                Anbieters wieder. Allein durch den Aufruf der kostenlosen und frei
                zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem
                Nutzer und dem Anbieter zustande, insoweit fehlt es am
                Rechtsbindungswillen des Anbieters.
              </p>
              <h3 className="h6 mt-3 d-flex  gap-2" style={{ color: '#5c377d' }}>
                <i className="bi bi-link-45deg"></i> § 2 Externe Links
              </h3>
              <p>
                Diese Website enthält Verknüpfungen zu Websites Dritter
                ("externe Links"). Diese Websites unterliegen der Haftung
                der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen
                Verknüpfung der externen Links die fremden Inhalte daraufhin
                überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt
                waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei
                Einfluss auf die aktuelle und zukünftige Gestaltung und auf die
                Inhalte der verknüpften Seiten. Das Setzen von externen Links
                bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder
                Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der
                externen Links ist für den Anbieter ohne konkrete Hinweise auf
                Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen
                werden jedoch derartige externe Links unverzüglich gelöscht.
              </p>
              <h3 className="h6 mt-3 d-flex  gap-2" style={{ color: '#5c377d' }}>
                <i className="bi bi-c-circle"></i> § 3 Urheber- und Leistungsschutzrechte
              </h3>
              <p>
                Die auf dieser Website veröffentlichten Inhalte unterliegen dem
                deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen
                Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung
                bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder
                jeweiligen Rechteinhabers. Dies gilt insbesondere für
                Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung,
                Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder
                anderen elektronischen Medien und Systemen. Inhalte und Rechte
                Dritter sind dabei als solche gekennzeichnet. Die unerlaubte
                Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter
                Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung
                von Kopien und Downloads für den persönlichen, privaten und nicht
                kommerziellen Gebrauch ist erlaubt. Die Darstellung dieser Website
                in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.
              </p>
              <h3 className="h6 mt-3 d-flex  gap-2" style={{ color: '#5c377d' }}>
                <i className="bi bi-file-earmark-text"></i> § 4 Besondere Nutzungsbedingungen
              </h3>
              <p>
                Soweit besondere Bedingungen für einzelne Nutzungen dieser Website
                von den vorgenannten Paragraphen abweichen, wird an entsprechender
                Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im
                jeweiligen Einzelfall die besonderen Nutzungsbedingungen.
              </p>
              <p className="mt-4 text-end">
                <small style={{ color: '#7a566b' }}>Quelle: Impressum Generator von JuraForum.de</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
