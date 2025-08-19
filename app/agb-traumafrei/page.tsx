"use client";
import Breadcrumbs from "@/components/Breadcrumbs";
export default function AgbTraumafreiPage() {
  return (
    <>
      <Breadcrumbs
        title="AGB – traumafrei"
        items={[{ label: "Home", href: "/" }, { label: "AGB – traumafrei" }]}
      />
      <div className="container py-5">
        <h2 className="mb-4">AGB – traumafrei</h2>
        <div className="bg-light p-4 rounded shadow">
          <h2 className="h5 mb-3">Allgemeine Geschäftsbedingungen (AGB)</h2>
          <p>
            für die Praxis Kerstin R. Stoll, Traumafrei.ch,
            <br />
            Anbieterin von Harmonyum Trauma Release®
            <br />
            Stand: 25.07.2025
          </p>
          <h3 className="h6 mt-3">1. Allgemeines</h3>
          <p>
            Diese AGB gelten für alle Angebote, Buchungen und Leistungen im
            Rahmen meiner Tätigkeit als Anbieterin von HTR (Harmonyum Trauma
            Release®) sowie ergänzender energetischer Begleitungen. Mit einer
            Buchung erklärst du dich mit den folgenden Bedingungen
            einverstanden.
          </p>
          <h3 className="h6 mt-3">2. Angebot &amp; Zielsetzung</h3>
          <p>
            HTR ist eine tiefenenergetische Methode zur Harmonisierung des
            Nervensystems und zur Bearbeitung traumatischer Erfahrungen. Meine
            Arbeit ersetzt keine ärztliche, psychiatrische oder
            psychotherapeutische Behandlung. Du bist selbst verantwortlich für
            deine physische und psychische Gesundheit. Eine laufende
            medizinische Behandlung sollte nicht abgebrochen werden. Ich behalte
            mir vor, eine Begleitung abzulehnen oder zu beenden, wenn sie aus
            fachlicher oder energetischer Sicht nicht stimmig ist.
          </p>
          <h3 className="h6 mt-3">3. Terminbuchung</h3>
          <p>
            Termine werden über mein Online-Buchungssystem oder individuell per
            Mail/Telefon vereinbart. Mit deiner Buchung gilt der Termin als
            verbindlich. Die Bezahlung erfolgt je nach Format im Voraus (bei
            Paketen) oder direkt vor Ort (bei Einzelsitzungen), sofern nichts
            anderes vereinbart wurde.
          </p>
          <h3 className="h6 mt-3">4. Absagen &amp; Verspätungen</h3>
          <p>
            Termine können bis spätestens 24 Stunden vor Beginn kostenfrei
            storniert oder verschoben werden. Bei kurzfristigeren Absagen oder
            Nichterscheinen wird der volle Betrag fällig. Ausnahmen sind Unfall
            und Naturkatastrophen. Eine Behandlung dauert 45 Minuten - Bei
            Verspätungen bis 10 Minuten findet die Session statt. Längere
            Verspätungen werden in voller Höhe berechnet und müssen mit einem
            neuen Termin gebucht werden. Bitte komme daher pünktlich, damit dein
            Raum der Rückverbindung in Ruhe beginnen kann.
          </p>
          <h3 className="h6 mt-3">5. Pakete &amp; Gültigkeit</h3>
          <p>
            Pakete (z.B. 3er, 5er oder 10er) sind nicht übertragbar und
            innerhalb von 3 Monaten ab Kaufdatum einzulösen. Nicht genutzte
            Sessions verfallen nach Ablauf der Frist. Eine Rückerstattung ist
            nicht möglich.
          </p>
          <h3 className="h6 mt-3">6. Datenschutz</h3>
          <p>
            Alle persönlichen Informationen, die im Rahmen der Begleitung
            geteilt oder sichtbar werden, unterliegen der absoluten
            Vertraulichkeit. Ich speichere deine Daten ausschließlich zur
            Terminverwaltung und internen Dokumentation gemäss geltender
            Datenschutzbestimmungen.
          </p>
          <h3 className="h6 mt-3">7. Haftung</h3>
          <p>
            Die Teilnahme an einer HTR-Session erfolgt freiwillig und auf eigene
            Verantwortung. Ich übernehme keine Haftung für körperliche,
            psychische oder emotionale Reaktionen, die im Rahmen oder nach der
            Sitzung auftreten können. Meine Arbeit versteht sich als Einladung
            zur Rückverbindung – nicht als Heilversprechen.
          </p>
          <h3 className="h6 mt-3">8. Schlussbestimmungen</h3>
          <p>
            Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die
            Gültigkeit der übrigen davon unberührt. Gerichtsstand ist der Sitz
            der Praxisort.
          </p>
          <p className="mt-4">
            Danke für dein Vertrauen – und für dein bewusstes JA zu deinem
            Trauma Release.
          </p>
        </div>
      </div>
    </>
  );
}
