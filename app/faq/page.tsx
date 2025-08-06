"use client";
import React, { useState } from "react";

const faqs = [
	{
		q: "Was ist HTR – und was passiert in einer Sitzung?",
		a: "HTR (Harmonyum Trauma Release) ist eine energetische Heilarbeit, die auf Zellebene wirkt – ohne Gespräch, ohne Re-Traumatisierung. Du liegst in bequemer Kleidung, dein Nervensystem wird über sanfte Impulse beruhigt und Körper, Geist und Seele erinnern sich an ihre ursprüngliche Ordnung. Oft geschieht dabei innerlich sehr viel, da Trauma gelöscht wird – auch wenn es äußerlich still bleibt.",
	},
	{
		q: "Muss ich über mein Trauma sprechen?",
		a: "Nein. Du musst nichts erzählen. HTR funktioniert ohne Worte – dein Körper erinnert sich an das, was gesehen werden will. Du darfst einfach da sein. Und empfangen.",
	},
	{
		q: "Wie viele Sessions brauche ich?",
		a: "Das ist sehr individuell. Manche Themen brauchen ein behutsames Feld über mehrere Tage oder Wochen – andere lassen sich in wenigen Terminen lösen. Meine Pakete sind so gestaltet, dass du dich gehalten fühlst, ohne dich binden zu müssen. Wir stimmen gemeinsam ab, was für dich passt.",
	},
	{
		q: "Was, wenn ich keine „krasse“ Geschichte habe – darf ich trotzdem kommen?",
		a: "Unbedingt. HTR ist nicht nur für Menschen mit dramatischen Erlebnissen. Es geht um alles, was dein System aus dem Gleichgewicht gebracht hat – egal, ob sichtbar oder subtil. Wenn du spürst: Etwas in mir ist nicht ganz verbunden – bist du hier richtig.",
	},
	{
		q: "Kann ich während der Session Emotionen zeigen? Weinen? Nichts spüren?",
		a: "Alles ist willkommen. Ob Tränen, Stille, Zittern, Frieden oder gar nichts – dein Körper zeigt, was gerade möglich ist. Es gibt kein richtig oder falsch. HTR wirkt tief – auch wenn du vielleicht äußerlich wenig „merkst“.",
	},
	{
		q: "Gibt es körperlichen Kontakt?",
		a: "Ja, ich arbeite in einer HTR-Session über leichte Berührungen mit Impulsen an Rücken, Nacken, Kopf, Schultern, Armen, Kniekehle und Füssen – respektvoll, rhythmisch und in achtsamer Präsenz.",
	},
	{
		q: "Was muss ich vor oder nach der Session beachten?",
		a: "Bitte trinke davor und danach genügend Wasser. Komme wenn möglich ungeschminkt & in bequemer Kleidung. Nach der Session empfehle ich dir etwas Ruhe oder Zeit für dich – dein System wird innerlich arbeiten. Dies können zum Beispiel auch spezielle Träume oder kurze Schmerzerinnerungen des Körpers sein. Du musst nichts „tun“. Du darfst nur sein.",
	},
	{
		q: "Kann ich eine Begleitperson mitbringen?",
		a: "Gern, wenn du dich damit sicherer fühlst. Bei Schwangerschaft, Wochenbett oder bei Behandlungen, in denen Kinder mit dabei sind, kannst du das bitte direkt bei der Buchung vermerken.",
	},
	{
		q: "Wie buche ich – und kann ich Termine verschieben?",
		a: "Buchungen sind online über das Buchungstool möglich. Solltest du einen Termin nicht wahrnehmen können, gib mir bitte mindestens 24h vorher Bescheid. Kurzfristige Absagen oder Nichterscheinen ohne Meldung muss ich dir leider in voller Höhe berechnen. (siehe AGB auf www.traumafrei.ch)",
	},
	{
		q: "Wird HTR von der Krankenkasse übernommen?",
		a: "Nein, leider noch nicht. HTR ist eine energetische Heilmethode und keine schulmedizinische Therapie. Du investierst hier in deine Frequenz, deine Ganzheit – nicht in eine klassische Leistung, wie sie bisher abgerechnet werden kann. Aber ich setze alles daran, dass sich dies ändern wird.",
	},
	{
		q: "Muss ich für Hausbesuche mehr bezahlen?",
		a: "Du zahlst den Preis der Behandlungen zuzüglich der Wegkosten. Diese werden mit 0.60 Rappen pro gefahrenen Kilometer verrechnet.",
	},
];

const Faq = () => {
	const [openIdx, setOpenIdx] = useState(0);

	const handleToggle = (idx: number) => {
		setOpenIdx(openIdx === idx ? -1 : idx);
	};

	return (
		<section className="bg-white py-5">
			<div className="container">
				<div className="row justify-content-center mb-5">
					<div className="col-lg-8 text-center">
						<span className="text-uppercase text-primary fw-semibold small mb-2 d-block letter-spacing">
							Q&amp;A – Häufig gestellte Fragen
						</span>
						<h2 className="display-5 fw-bold mb-4">
							Harmonyum Trauma Release &amp; Buchung
						</h2>
						<p className="lead text-muted">
							Die wichtigsten Antworten rund um HTR, Ablauf, Buchung und mehr.
						</p>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div className="accordion" id="faqAccordion">
							{faqs.map((item, idx) => (
								<div
									className="accordion-item mb-3 rounded-4 shadow-sm border-0"
									key={idx}
								>
									<h3 className="accordion-header" id={`heading${idx}`}>
										<button
											className={`accordion-button fw-bold px-4 py-3 ${
												openIdx === idx ? "" : "collapsed"
											}`}
											type="button"
											aria-expanded={openIdx === idx ? "true" : "false"}
											aria-controls={`collapse${idx}`}
											style={{
												fontSize: "1.15rem",
												background: "#f7f5fa",
												color: "#5c377d",
												borderRadius: "16px",
												boxShadow:
													openIdx === idx
														? "0 2px 8px rgba(92,55,125,0.08)"
														: "none",
												transition: "box-shadow 0.2s",
											}}
											onClick={() => handleToggle(idx)}
										>
											{item.q}
										</button>
									</h3>
									<div
										id={`collapse${idx}`}
										className={`accordion-collapse collapse${
											openIdx === idx ? " show" : ""
										}`}
										aria-labelledby={`heading${idx}`}
									>
										<div
											className="accordion-body px-4 py-3"
											style={{
												fontSize: "1.08rem",
												background: "#fff",
												borderRadius: "0 0 16px 16px",
											}}
										>
											{item.a}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq;