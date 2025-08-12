import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import RecentPostList, { RecentPost } from "@/components/RecentPostList";
export default function BlogSinglePage() {
  const posts: RecentPost[] = [
    {
      image: "/images/blog/holi.jpg",
      title: "The Power of Positive Thinking",
      date: "January 15, 2023",
      link: "#",
    },
    {
      image: "/images/blog/festival.jpg",
      title: "Stress Management Techniques",
      date: "January 15, 2023",
      link: "#",
    },
    {
      image: "/images/blog/krishna1.jpg",
      title: "The Psychology of Resilience",
      date: "January 15, 2023",
      link: "#",
    },
    {
      image: "/images/blog/lamp.jpg",
      title: "The Secrets to a Fulfilling Life",
      date: "January 15, 2023",
      link: "#",
    },
  ];
  return (
    <>
      <Breadcrumbs
        title="Blog"
        items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <section>
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-8">
              <div className="blog-content space-y-6">
                <h2 className="font-bold text-3xl mb-4">
                  Ich baue Räume – keine Konzepte
                </h2>
                <p className="text-lg">
                  Du musst nichts leisten.
                  <br />
                  Du darfst einfach nur da sein – genau so, wie du bist.
                </p>
                <p>
                  Ich baue Räume, in denen sich das Nervensystem sicher fühlt –
                  <br />
                  damit das, was gehen darf, sich endlich lösen kann.
                  <br />
                  Räume, in denen nichts von dir erwartet wird.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700">
                  Die meisten von uns haben gelernt, zu funktionieren.
                  <br />
                  Still zu sein. Stark zu sein. Nett zu sein.
                  <br />
                  Wir haben uns angepasst, reguliert, zusammengerissen.
                  <br />
                  Und dabei etwas sehr Wichtiges verloren:
                  <br />
                  <span className="font-semibold">
                    Den Raum, in dem wir einfach nur SEIN dürfen.
                  </span>
                </blockquote>
                <ul className="list-disc ml-6">
                  <li>Ohne Rolle.</li>
                  <li>Ohne Aufgabe.</li>
                  <li>Ohne Ziel.</li>
                </ul>
                <p className="mt-4">
                  Die Wahrheit ist:
                  <br />
                  Die meisten Menschen funktionieren.
                  <br />
                  Aber sie leben nicht wirklich aus ihrer eigenen Frequenz
                  heraus.
                  <br />
                  Sie spüren den Ruf:{" "}
                  <span className="font-semibold">„Da ist mehr.“</span>
                  <br />
                  Aber wissen nicht, wie sie hinkommen.
                </p>
                <p>
                  Sie sind wach – aber müde.
                  <br />
                  Funktionierend – aber abgeschnitten.
                  <br />
                  Spirituell – aber energetisch überladen.
                  <br />
                  <span className="font-semibold">
                    Und genau da beginnt meine Arbeit.
                  </span>
                </p>
                <h3 className="font-bold text-2xl mt-8 mb-2">
                  Warum ich mich Bewusstseins-Architektin nenne
                </h3>
                <p>
                  Es gibt keinen Plan für Bewusstwerdung.
                  <br />
                  Kein vorgefertigtes Protokoll. Kein lineares „So geht das“.
                  <br />
                  Es gibt nur dich –<br />
                  mit deinem einzigartigen Feld, deinem Tempo, deinem inneren
                  Ruf nach mehr Wahrheit.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700">
                  Ich habe mich früher als Coach gesehen, bis ich merkte,
                  <br />
                  dass ich eine Architektin bin.
                  <br />
                  Nicht für Häuser oder Gärten –<br />
                  sondern für Räume, in denen dein ganzes Wesen sich neu
                  sortieren darf.
                  <br />
                  <span className="font-semibold">
                    Ich nenne mich Bewusstseins-Architektin.
                  </span>
                </blockquote>
                <h3 className="font-bold text-2xl mt-8 mb-2">
                  Was ich genau tue
                </h3>
                <p>
                  Ich öffne Räume.
                  <br />
                  Für Frequenzarbeit. Für Entladung. Für Erinnerung.
                  <br />
                  Ich begleite Menschen, die nicht noch eine Methode wollen –
                  <br />
                  sondern eine Rückverbindung mit dem, was in ihnen ruft.
                </p>
                <p>
                  Mit Tools wie{" "}
                  <span className="font-semibold">
                    Harmonyum Trauma Release
                  </span>{" "}
                  und spirituellem Coaching arbeite ich direkt am Nervensystem,
                  an der Zellintelligenz, am Feld.
                  <br />
                  Fein. Wahr. Still. Kraftvoll.
                  <br />
                  Nicht therapeutisch, sondern bewusstseinsführend.
                </p>
                <p>
                  Ich arbeite mit dir an der Basis deines Bewusstseins.
                  <br />
                  Nicht auf Verhaltensebene. Nicht im Denken.
                  <br />
                  Sondern dort, wo dein Nervensystem sagt:{" "}
                  <span className="font-semibold">„Ich kann nicht mehr.“</span>
                </p>
                <p>
                  Ich arbeite mit Frequenz, Körperintelligenz, Intuition und
                  einem tiefen seelischen Wissen,
                  <br />
                  das nicht gelernt – sondern erinnert wurde.
                </p>
                <p>
                  Mit sanften Methoden wie Harmonyum Trauma Release unterstütze
                  ich dein System dabei, das abzulösen,
                  <br />
                  was nicht mehr zu deinem Jetzt gehört.
                  <br />
                  Nicht weil du „defekt“ bist.
                  <br />
                  Sondern weil dein Körper einfach genug getragen hat.
                </p>
                <p className="font-semibold">
                  Es reicht, dass du da bist.
                  <br />
                  Und dein System findet in seinem eigenen Tempo den Weg zurück
                  in die heilige Ordnung.
                </p>
                <h3 className="font-bold text-2xl mt-8 mb-2">
                  Was meine Arbeit nicht ist:
                </h3>
                <ul className="list-none ml-0 space-y-2">
                  <li>🛑 Kein Mental-Coaching mit To-do-Listen.</li>
                  <li>🛑 Kein „Funktionier wieder“-System.</li>
                  <li>🛑 Kein spirituelles Bypassing.</li>
                </ul>
                <h3 className="font-bold text-2xl mt-8 mb-2">Was sie ist:</h3>
                <ul className="list-none ml-0 space-y-2">
                  <li>🕯 Ein Raum, der dich hält.</li>
                  <li>🌀 Eine Frequenz, die dein System wieder erinnert.</li>
                  <li>🌿 Eine Einladung, dich selbst neu zu bewohnen.</li>
                </ul>
                <h3 className="font-bold text-2xl mt-8 mb-2">
                  Für wen ich da bin:
                </h3>
                <ul className="list-disc ml-6">
                  <li>
                    hochsensibel, tief fühlend oder „alt in der Seele“ bist
                  </li>
                  <li>
                    keine schnellen Tools mehr willst, sondern echte Tiefe
                  </li>
                  <li>
                    bereit bist, dich nicht zu „optimieren“, sondern neu zu
                    bewohnen
                  </li>
                </ul>
                <p className="mt-4">
                  Wenn du spürst:
                  <br />
                  „Das bin ich.“
                  <br />
                  „Das klingt nach dem, was mein System wirklich braucht.“
                  <br />
                  „Ich muss mich nicht verändern.“
                  <br />
                  „Ich darf mich erinnern.“
                  <br />
                  Dann lade ich dich ein, Kontakt aufzunehmen.
                  <br />
                  Ich bin hier.
                  <br />
                  In Liebe, Kerstin
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="widget widget-post">
                <h4>Recent Posts</h4>
                <ul className="de-bloglist-type-1">
                  <li>
                    <RecentPostList posts={posts} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
