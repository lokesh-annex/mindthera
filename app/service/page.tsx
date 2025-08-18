import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
const service = [
  {
    image: "/images/events/session.png", // hier dein Bild einfügen
    title: "Einzelsession – Raum für Stille & Präsenz",
    content: (
      <>
        <p>
          Eine Einzelsession für Menschen, die nicht mehr reden wollen – sondern erinnern.
        </p>
        <p>
          Du musst nichts erklären. Du darfst einfach da sein.
        </p>
        <p>
          Wir arbeiten nicht „an deinem Thema“, sondern begegnen deiner Essenz.
        </p>
        <p>
          Stille, Frequenz, Präsenz – das ist der Raum, in dem du dir selbst wieder begegnest.
        </p>
        <p><strong>Dauer:</strong> 45 Minuten</p>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li>💎 Einzel-Session: 120.- CHF</li>
          <li>💎 5er-Paket: 555.- CHF</li>
          <li>💎 7er-Paket: 700.- CHF</li>
        </ul>
      </>
    ),
  },
];

export default function SessionPage() {
  return (
    <>
       <Breadcrumbs
                title="Service"
                items={[{ label: "Home", href: "/" }, { label: "Service" }]}
              />
    <section className="bg-light py-5">
      <div className="container">
        {service.map((event, idx) => (
          <div
            key={idx}
            className="row align-items-center bg-white rounded-4 shadow-sm py-5 px-5 justify-content-center mb-5"
          >
            <div
              className={`col-lg-12 d-flex ${
                idx % 2 === 1 ? "flex-row-reverse" : ""
              } flex-wrap gap-0`}
            >
              <div className="col-md-5 d-flex align-items-stretch mb-4 mb-md-0">
                <div
                  className="event-img-wrap d-flex align-items-center justify-content-center"
                  style={{ minHeight: 320, maxWidth: 420 }}
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={520}
                    height={520}
                    style={{ objectFit: "cover", width: "100%" }}
                  />
                </div>
              </div>
              <div className="col-md-7 d-flex align-items-stretch">
                <div
                  className="event-card p-4 w-100 h-100 d-flex flex-column justify-content-center"
                  style={{ minHeight: 320 }}
                >
                  <h3
                    className="fw-bold mb-3 text-primary"
                    style={{ fontSize: "1.5rem", lineHeight: 1.2 }}
                  >
                    {event.title}
                  </h3>
                  <div
                    className="event-content"
                    style={{ fontSize: "1.08rem", color: "#333" }}
                  >
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
