"use client";
import Image from "next/image";

const BuildSpacesSection = () => {
  return (
    <section
      className="build-spaces"
      style={{ background: "#7a566b", padding: "64px 0" }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div
              className="text-uppercase fw-bold mb-3"
              style={{ color: "#fff", letterSpacing: 1 }}
            >
              Als Bewusstseins-Architektin baue
              <br />
              ich auch keine Häuser.
            </div>
            <h2
              className="fw-bold mb-4"
              style={{ color: "#fff", fontSize: "2.8rem", lineHeight: 1.1 }}
            >
              Ich baue Räume
              <br />– in dir.
            </h2>

            <div className="build-portrait">
              <Image
                src="/images/image-15.jpg"
                width={580}
                height={250}
                alt="Kerstin R. Stoll Portrait"
                className="img-fluid build-portrait-img"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              style={{ color: "#e2dbe2", fontSize: "1.15rem", maxWidth: 600 }}
            >
              <p className="mb-3">
                Räume, in denen du endlich atmen kannst.
                <br />
                In denen du deine Wahrheit nicht erklären musst.
                <br />
                In denen du nicht funktionieren musst, um wertvoll zu sein.
                <br />
                Ich begleite Menschen, die innerlich längst wissen:
                <br />
                <span className="fw-semibold" style={{ color: "#fff" }}>
                  &ldquo;Ich bin mehr als das hier.&rdquo;
                </span>
                <br />
                Aber noch nicht wissen, wie sie dahin kommen.
              </p>
              <p className="mb-3">
                Als Bewusstseins-Architektin arbeite ich mit Struktur und
                Frequenz.
                <br />
                Ich sehe, wo du dich klein gemacht hast – und zeige dir, wie
                du dich neu bauen kannst:
                <br />
                ehrlich, stabil, spirituell angebunden.
                <br />
              </p>
              <p className="mb-3">
                Meine Werkzeuge sind energetische Trauma-Arbeit, intuitive
                Klarheit und ein unbestechlicher Blick auf das, was du
                wirklich bist – unter all den Rollen.
                <br />
                Ich bin nicht hier, um dich zu coachen.
                <br />
              </p>
              <p className="mb-3">
                Ich bin hier, um dir deine inneren Räume zurückzugeben.
                <br />
                Damit du dich nicht mehr verbiegen musst – sondern dich selbst
                wieder bewohnen kannst.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 mb-3 text-center">
          <div
            style={{
              background: "rgb(113, 77, 98)",
              color: "#fff",
              borderRadius: "12px",
              padding: "24px 16px",
            }}
          >
            <strong style={{ fontSize: "1.15rem", letterSpacing: 1 }}>
              Ich verbinde Wissenschaft &amp; Weisheit, Körper &amp; Frequenz
            </strong>
            <br />
            <span style={{ fontWeight: 500, fontSize: "1.08rem" }}>
              Kerstin R. Stoll
            </span>
            <br />
            <span style={{ fontWeight: 400, fontSize: "1.08rem" }}>
              Bewusstseins-Architektin &amp; Harmonyum Trauma Release®
              Practitioner
            </span>
            <br />
            <span style={{ fontSize: "1.2rem" }}>
              ✨ Visionärin der inneren Räume für neue Realitäten
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildSpacesSection;
