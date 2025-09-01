import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
const events = [
  {
    image: "/images/events/1.png",
    title: "Die Urform der Menschlichkeit – Trauma auf Zellebene lösen mit Harmonyum Trauma Release®",
    content: (
      <>
        <p>
          Trauma lösen – wenn der Körper bereit ist, loszulassen. Viele menschen tragen Geschichten in sich, die längst vorbei sind – aber im Körper weiterwirken.
        </p>
        <p>
          In diesem Vortrag zeige ich dir, wie unser Nervensystem Trauma speichert – und was möglich wird, wenn wir es nicht länger festhalten müssen.
        </p>
        <p>
          Ich stelle dir Harmonyum Trauma Release® vor: eine körperbasierte Methode, die ohne Worte wirkt, sanft entlädt und dich zurückbringt in dein ursprüngliches Gleichgewicht.
        </p>
        <p>
          Ein Raum für Alle, die spüren, dass reden nicht reicht – und bereit sind, sich selbst neu zu begegnen.
        </p>
        <p>
           <Link href="#" className="btn-main mb10 mb-3">Hier findest du Termine &amp; Orte</Link><br />
          Eintritt: 20.- CHF
        </p>
      </>
    ),
  },
  {
image: "/images/events/2.png",
    title: "Buche Deine einmalige Schnuppersession für den Vortragspreis von nur 97.- CHF.",
    content: (
      <>
        <p>
          <strong>Am Vortrag bekommst du das Passwort für deine Buchung.</strong>
        </p>
        <p>
          Du spürst, dass dein System oft „on“ ist – selbst, wenn du ruhst?<br />
          Du wünschst dir tiefe Entspannung, ohne reden zu müssen?
        </p>
        <p>
          Dann komme in eine Schnuppersession und erlebe, was passiert, wenn dein Nervensystem endlich ausatmen darf. HTR ist eine sanfte, körperbasierte Methode, die tief sitzende Anspannung und Traumata löst – auf Zellebene.
        </p>
        <p>
          Kein Reden. Kein Tun – nur geschehen lassen.<br />
          Du musst nichts wissen. Du darfst einfach kommen und sein.<br />
          Ich halte den Raum für deinen ersten Schritt zurück zu dir.
        </p>
        <p>

          <Link className="btn-main mb10 mb-3" href="/" >Buche hier</Link>
        </p>
      </>
    ),
  },
    {
    image: "/images/events/3.png",
    title: "STILLE HEILT – Trauma Release® Retreats",
    content: (
      <>
        <p>Ein Rückzug aus dem Außen.<br />Eine Rückverbindung mit dir.</p>
        <p>In diesen Retreats öffnet sich ein Raum,<br />in dem du nichts leisten, nichts erzählen,<br />und nichts verstehen musst.</p>
        <p>Du darfst empfangen.<br />Du darfst erinnern.<br />Du darfst dich selbst wieder hören.</p>
        <p>Wir arbeiten mit deiner Urform.</p>
        <ul style={{ marginBottom: '1rem', marginTop: '1rem', paddingLeft: '1.2em' }}>
          <li>🔸 Harmonyum Trauma Release®</li>
          <li>🔸 Körperrituale &amp; Frequenzräume</li>
          <li>🔸 Stille, Natur, tiefe Integration</li>
        </ul>
        <p>Für Menschen, die spüren:<br /><em>„Ich bin bereit, mich zu erinnern.“</em></p>
        <Link href="#" className="btn-main mb-1">Hier findest du Termine &amp; Orte</Link>
        <br />
        <Link href="images/pdfs/flyer-babys.pdf" download className="btn btn-main px-4 py-2 fw-bold mt-1" >Flyer herunterladen</Link>

      </>
    ),
  },
];

export default function EventPage() {
  return (
      <>
          <Breadcrumbs
            title="Events"
            items={[{ label: "Home", href: "/" }, { label: "Events" }]}
          />
    <section className="bg-light py-5">
        <div className="container">
          {events.map((event, idx) => (
            <div
              key={idx}
              className={`row align-items-center event-page-section bg-white rounded-4 shadow-sm py-5 px-5 justify-content-center mb-5`}
            >
              <div className={`col-lg-12 d-flex ${idx % 2 === 1 ? "flex-row-reverse" : ""} flex-wrap gap-0`}>
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
                <div className="col-md-7 d-flex align-items-stretch">
                  <div className="event-card  p-4 w-100 h-100 d-flex flex-column justify-content-center" style={{ minHeight: 320 }}>
                    <h3 className="fw-bold mb-3 text-primary" style={{ fontSize: "1.5rem", lineHeight: 1.2 }}>
                      {event.title}
                    </h3>
                    <div className="event-content" style={{ fontSize: "1.08rem", color: "#333" }}>
                      {event.content}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
    </>
  );
}