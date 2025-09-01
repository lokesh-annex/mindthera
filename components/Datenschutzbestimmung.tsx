import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
const Datenschutzbestimmung = () => (
   <>
      <Breadcrumbs
        title="Datenschutzbestimmung"
        items={[{ label: "Home", href: "/" }, { label: "Datenschutzbestimmung" }]}
      />
  <div style={{
    background: 'none',
    minHeight: '100vh',
    position: 'relative',
    paddingTop: '40px',
  }}>
    <div className="container py-5">
      <div className="mx-auto" style={{ maxWidth: '100%' }}>
        <div className="p-4 p-md-5 d-flex flex-column">
          <div className="mb-3" style={{ fontSize: '2.5rem', color: '#7a566b' }}>
            <i className="bi bi-shield-lock"></i>
          </div>
          <h2 className="h5 mb-3" style={{ color: '#7a566b' }}>Datenschutzerklärung</h2>
          <p>
            Diese Webseite und deren Inhalt wird durch eine private Person ohne kommerzielle Interessen zur Verfügung gestellt.
          </p>
          <p>
            <strong>Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO):</strong><br />
            Kerstin R. Stoll, 0041 76 560 70 56<br />
            E-Mail: info@veraenderungen.ch<br />
            Webseite: <Link href="https://veraenderungen.ch" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(92, 55, 125)' }}>veraenderungen.ch</Link>, <Link href="https://kerstin-r-stoll.ch" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(92, 55, 125)' }}>kerstin-r-stoll.ch</Link>, <Link href="https://traumafrei.ch" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(92, 55, 125)' }}>traumafrei.ch</Link>
          </p>
          <h3 className="h6 mt-3" style={{ color: '#5c377d' }}>Welche personenbezogenen Daten wir sammeln und warum wir sie sammeln</h3>
          <p>Wenn Sie auf diese Webseite zugreifen werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen werden im Server-Logfile erfasst und beinhalten die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre IP-Adresse und ähnliches.</p>
          <ul>
            <li>Sicherstellung eines problemlosen Verbindungsaufbaus der Website</li>
            <li>Sicherstellung einer reibungslosen Nutzung unserer Website</li>
            <li>Auswertung der Systemsicherheit und -stabilität sowie zu weiteren administrativen Zwecken</li>
          </ul>
          <p>Ihre Daten werden nicht verwendet, um Rückschlüsse auf Ihre Person zu ziehen. Informationen dieser Art werden lediglich statistisch ausgewertet, um unseren Internetauftritt und die dahinterstehende Technik zu optimieren.</p>
          <h3 className="h6 mt-3" style={{ color: '#5c377d' }}>Speicherdauer</h3>
          <p>Die Daten werden gelöscht, sobald diese für den Zweck der Erhebung nicht mehr erforderlich sind. Dies ist für die Daten, die der Bereitstellung der Webseite dienen, grundsätzlich der Fall, wenn die jeweilige Sitzung beendet ist.</p>
          <h3 className="h6 mt-3" style={{ color: '#5c377d' }}>Kommentare</h3>
          <p>Wenn Besucher Kommentare auf der Website schreiben, sammeln wir die Daten, die im Kommentar-Formular angezeigt werden, ausserdem die IP-Adresse des Besuchers und den User-Agent-String (damit wird der Browser identifiziert), um die Erkennung von Spam zu unterstützen.</p>
          <p>Aus Ihrer E-Mail-Adresse kann eine anonymisierte Zeichenfolge erstellt (auch Hash genannt) und dem Gravatar-Dienst übergeben werden, um zu prüfen, ob Sie diesen benutzt. Die Datenschutzerklärung des Gravatar-Dienstes finden Sie hier: <Link href="https://automattic.com/privacy/" target="_blank" rel="noopener noreferrer">automattic.com/privacy</Link>. Nachdem Ihr Kommentar freigegeben wurde, ist Ihr Profilbild öffentlich im Kontext Ihres Kommentars sichtbar.</p>
          <h3 className="h6 mt-3" style={{ color: '#5c377d' }}>Medien</h3>
          <p>Wenn Sie ein registrierter Benutzer sind und Fotos auf diese Website laden, sollten Sie vermeiden, Fotos mit einem EXIF-GPS-Standort hoch zu laden. Besucher dieser Website könnten Fotos, die auf dieser Website gespeichert sind, downloaden und deren Standort-Informationen extrahieren.</p>
          <h3 className="h6 mt-3" style={{ color: '#5c377d' }}>Kontaktformulare</h3>
          <p>Die von Ihnen eingegebenen Daten werden zum Zweck der individuellen Kommunikation mit Ihnen gespeichert. Hierfür ist die Angabe einer validen E-Mail-Adresse sowie Ihres Namens erforderlich. Diese dient der Zuordnung der Anfrage und der anschließenden Beantwortung derselben. Die Angabe weiterer Daten ist optional.</p>
          <h3 className="h6 mt-3" style={{ color: '#5c377d' }}>Cookies</h3>
          <p>Wenn Sie einen Kommentar auf unserer Website schreiben, kann das eine Einwilligung sein, Ihren Namen, E-Mail-Adresse und Website in Cookies zu speichern. Dies ist eine Komfortfunktion, damit Sie nicht, wenn Sie einen weiteren Kommentar schreiben, all diese Daten erneut eingeben müssen. Diese Cookies werden ein Jahr lang gespeichert.</p>
          <p>Falls Sie ein Konto haben und Sie sich auf dieser Website anmelden, werden wir ein temporäres Cookie setzen, um festzustellen, ob Ihr Browser Cookies akzeptiert. Dieses Cookie enthält keine personenbezogenen Daten und wird verworfen, wenn Sie Ihren Browser schliessen.</p>
          <p>Wenn Sie sich anmelden, werden wir einige Cookies einrichten, um Ihre Anmeldeinformationen und Anzeigeoptionen zu speichern. Anmelde-Cookies verfallen nach zwei Tagen und Cookies für die Anzeigeoptionen nach einem Jahr. Falls Sie bei der Anmeldung „Angemeldet bleiben“ auswählen, wird Ihre Anmeldung zwei Wochen lang aufrechterhalten. Mit der Abmeldung aus Ihrem Konto werden die Anmelde-Cookies gelöscht.</p>
          <p>Wenn Sie einen Artikel bearbeiten oder veröffentlichen, wird ein zusätzlicher Cookie in Ihrem Browser gespeichert. Dieser Cookie enthält keine personenbezogenen Daten und verweist nur auf die Beitrags-ID des Artikels, den Sie gerade bearbeitet haben. Der Cookie verfällt nach einem Tag.</p>
          <h3 className="h6 mt-3" style={{ color: '#5c377d' }}>Verwendung von Scriptbibliotheken (Google Webfonts)</h3>
          <p>Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend darzustellen, verwenden wir auf dieser Website „Google Web Fonts“ der Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; nachfolgend „Google“) zur Darstellung von Schriften. Die Datenschutzrichtlinie des Bibliothekbetreibers Google finden Sie hier: <Link href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">google.com/policies/privacy</Link></p>
          <h3 className="h6 mt-3" style={{ color: '#5c377d' }}>Eingebettete Inhalte von anderen Websites</h3>
          <p>Beiträge auf dieser Website können eingebettete Inhalte beinhalten (z. B. Videos, Bilder, Beiträge etc.). Eingebettete Inhalte von anderen Websites verhalten sich exakt so, als ob der Besucher die andere Website besucht hätte. Diese Websites können Daten über Sie sammeln, Cookies benutzen, zusätzliche Tracking-Dienste von Dritten einbetten und Ihre Interaktion mit diesem eingebetteten Inhalt aufzeichnen, inklusive Ihrer Interaktion mit dem eingebetteten Inhalt, falls Sie ein Konto haben und auf dieser Website angemeldet sind.</p>
          <h3 className="h6 mt-3" style={{ color: '#5c377d' }}>Verwendung von Google Analytics</h3>
          <p>Diese Website benutzt Google Analytics, einen Webanalysedienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA (nachfolgend: „Google“). Google Analytics verwendet sog. „Cookies“, also Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Webseite durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Webseite werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Aufgrund der Aktivierung der IP-Anonymisierung auf diesen Webseiten, wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Webseite auszuwerten, um Reports über die Webseitenaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Webseitenbetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.</p>
          <p>Die Zwecke der Datenverarbeitung liegen in der Auswertung der Nutzung der Website und in der Zusammenstellung von Reports über Aktivitäten auf der Website. Auf Grundlage der Nutzung der Website und des Internets sollen dann weitere verbundene Dienstleistungen erbracht werden.</p>
          <h3 className="h6 mt-3" style={{ color: '#5c377d' }}>Datenschutzerklärung für die Nutzung von Google Adsense</h3>
          <p>Diese Website benutzt Google AdSense, einen Dienst zum Einbinden von Werbeanzeigen der Google Inc. („Google“). Google AdSense verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website ermöglicht. Google AdSense verwendet auch so genannte Web Beacons (unsichtbare Grafiken). Durch diese Web Beacons können Informationen wie der Besucherverkehr auf diesen Seiten ausgewertet werden.</p>
          <p>Die durch Cookies und Web Beacons erzeugten Informationen über die Benutzung dieser Website (einschließlich Ihrer IP-Adresse) und Auslieferung von Werbeformaten werden an einen Server von Google in den USA übertragen und dort gespeichert. Diese Informationen können von Google an Vertragspartner von Google weiter gegeben werden. Google wird Ihre IP-Adresse jedoch nicht mit anderen von Ihnen gespeicherten Daten zusammenführen.</p>
          <p>Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.</p>
          <h3 className="h6 mt-3" style={{ color: '#5c377d' }}>Datenschutzerklärung für die Nutzung von Google +1</h3>
          <p>Mithilfe der Google +1-Schaltfläche können Sie Informationen weltweit veröffentlichen. Über die Google +1-Schaltfläche erhalten Sie und andere Nutzer personalisierte Inhalte von Google und dessen Partnern. Google speichert sowohl die Information, dass Sie für einen Inhalt +1 gegeben haben, als auch Informationen über die Seite, die Sie beim Klicken auf +1 angesehen haben. Ihre +1 können als Hinweise zusammen mit Ihrem Profilnamen und Ihrem Foto in Google-Diensten, wie etwa in Suchergebnissen oder in Ihrem Google-Profil, oder an anderen Stellen auf Websites und Anzeigen im Internet eingeblendet werden.</p>
          <p>Google zeichnet Informationen über Ihre +1-Aktivitäten auf, um die Google-Dienste für Sie und andere zu verbessern.</p>
          <p>Um die Google +1-Schaltfläche verwenden zu können, benötigen Sie ein weltweit sichtbares, öffentliches Google-Profil, das zumindest den für das Profil gewählten Namen enthalten muss. Dieser Name wird in allen Google-Diensten verwendet. In manchen Fällen kann dieser Name auch einen anderen Namen ersetzen, den Sie beim Teilen von Inhalten über Ihr Google-Konto verwendet haben. Die Identität Ihres Google-Profils kann Nutzern angezeigt werden, die Ihre E-Mail-Adresse kennen oder über andere identifizierende Informationen von Ihnen verfügen.</p>
          <p>Neben den oben erläuterten Verwendungszwecken werden die von Ihnen bereitgestellten Informationen gemäß den geltenden Google-Datenschutzbestimmungen (<Link href="http://www.google.com/intl/de/policies/privacy/" target="_blank" rel="noopener noreferrer">google.com/intl/de/policies/privacy/</Link>) genutzt. Google veröffentlicht möglicherweise zusammengefasste Statistiken über die +1-Aktivitäten der Nutzer bzw. geben diese Statistiken an unsere Nutzer und Partner weiter, wie etwa Publisher, Inserenten oder verbundene Websites.</p>
          <h3 className="h6 mt-3" style={{ color: '#5c377d' }}>Verwendung von Google Maps</h3>
          <p>Auf dieser Webseite nutzen wir das Angebot von Google Maps. Google Maps wird von Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (nachfolgend &bdquo;Google&ldquo;) betrieben. Dadurch können wir Ihnen interaktive Karten direkt in der Webseite anzeigen und ermöglichen Ihnen die komfortable Nutzung der Karten-Funktion. Nähere Informationen über die Datenverarbeitung durch Google können Sie den Google-Datenschutzhinweisen entnehmen. Dort können Sie im Datenschutzcenter auch Ihre persönlichen Datenschutz-Einstellungen verändern.</p>
          <h3 className="h6 mt-3" style={{ color: '#5c377d' }}>Eingebettete YouTube-Videos</h3>
          <p>Auf einigen unserer Webseiten betten wir YouTube-Videos ein. Betreiber der entsprechenden Plugins ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA (nachfolgend &bdquo;YouTube&ldquo;). Wenn Sie eine Seite mit dem YouTube-Plugin besuchen, wird eine Verbindung zu Servern von YouTube hergestellt. Dabei wird YouTube mitgeteilt, welche Seiten Sie besuchen. Wenn Sie in Ihrem YouTube-Account eingeloggt sind, kann YouTube Ihr Surfverhalten Ihnen persönlich zuzuordnen. Dies verhindern Sie, indem Sie sich vorher aus Ihrem YouTube-Account ausloggen. Wird ein YouTube-Video gestartet, setzt der Anbieter Cookies ein, die Hinweise über das Nutzerverhalten sammeln.</p>
          <h3 className="h6 mt-3" style={{ color: '#5c377d' }}>Wie lange wir Ihre Daten speichern</h3>
          <p>Wenn Sie einen Kommentar schreiben, wird dieser inklusive Metadaten zeitlich unbegrenzt gespeichert. Auf diese Art können wir Folgekommentare automatisch erkennen und freigeben, anstelle sie in einer Moderations-Warteschlange festzuhalten.</p>
          <p>Für Benutzer, die sich auf unserer Website registrieren, speichern wir zusätzlich die persönlichen Informationen, die sie in ihren Benutzerprofilen angeben. Alle Benutzer können jederzeit ihre persönlichen Informationen einsehen, verändern oder löschen (der Benutzername kann nicht verändert werden). Administratoren der Website können diese Informationen ebenfalls einsehen und verändern.</p>
          <h3 className="h6 mt-3" style={{ color: '#5c377d' }}>Welche Rechte Sie an Ihren Daten haben</h3>
          <p>Wenn Sie ein Konto auf dieser Website besitzen oder Kommentare geschrieben haben, können Sie einen Export Ihrer personenbezogenen Daten bei uns anfordern, inklusive aller Daten, die Sie uns mitgeteilt haben. Darüber hinaus können Sie die Löschung aller personenbezogenen Daten, die wir von Ihnen gespeichert haben, anfordern. Dies umfasst nicht die Daten, die wir aufgrund administrativer, rechtlicher oder sicherheitsrelevanter Notwendigkeiten aufbewahren müssen.</p>
          <h3 className="h6 mt-3" style={{ color: '#5c377d' }}>Wohin wir Ihre Daten senden</h3>
          <p>Besucher-Kommentare könnten von einem automatisierten Dienst zur Spam-Erkennung untersucht werden.</p>
          <h3 className="h6 mt-3" style={{ color: '#5c377d' }}>Kontakt-Informationen</h3>
          <p>Für Datenschutz relevante Anliegen wenden Sie sich bitte an:<br />Kerstin R. Stoll, E-Mail: info@veraenderungen.ch</p>
          <h3 className="h6 mt-3" style={{ color: '#5c377d' }}>Social Plugins</h3>
          <p>Auf unseren Webseiten werden Socialmedia Plugins eingesetzt. Über diese Plugins werden unter Umständen Informationen, zu denen auch personenbezogene Daten gehören können, an den Dienstebetreiber gesendet und ggf. von diesem genutzt. Wir verhindern die unbewusste und ungewollte Erfassung und Übertragung von Daten an den Diensteanbieter durch eine 2-Klick-Lösung. Um ein gewünschtes Social Plugin zu aktivieren, muss dieses erst durch Klick auf den entsprechenden Schalter aktiviert werden. Erst durch diese Aktivierung des Plugins wird auch die Erfassung von Informationen und deren Übertragung an den Diensteanbieter ausgelöst. Wir erfassen selbst keine personenbezogenen Daten mittels der Social Plugins oder über deren Nutzung.</p>
          <p>Wir haben keinen Einfluss darauf, welche Daten ein aktiviertes Plugin erfasst und wie diese durch den Anbieter verwendet werden. Derzeit muss davon ausgegangen werden, dass eine direkte Verbindung zu den Diensten des Anbieters ausgebaut wird sowie mindestens die IP-Adresse und gerätebezogene Informationen erfasst und genutzt werden. Ebenfalls besteht die Möglichkeit, dass die Diensteanbieter versuchen, Cookies auf dem verwendeten Rechner zu speichern. Welche konkreten Daten hierbei erfasst und wie diese genutzt werden, entnehmen Sie bitte den Datenschutzhinweisen des jeweiligen Diensteanbieters. Falls Sie zeitgleich bei Facebook angemeldet sind, kann Facebook Sie als Besucher einer bestimmten Seite identifizieren.</p>
          <h3 className="h6 mt-3" style={{ color: '#5c377d' }}>Google AdWords</h3>
          <p>Unsere Webseite nutzt das Google Conversion-Tracking. Betreibergesellschaft der Dienste von Google AdWords ist die Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Sind Sie über eine von Google geschaltete Anzeige auf unsere Webseite gelangt, wird von Google Adwords ein Cookie auf Ihrem Rechner gesetzt. Das Cookie für Conversion-Tracking wird gesetzt, wenn ein Nutzer auf eine von Google geschaltete Anzeige klickt. Besucht der Nutzer bestimmte Seiten unserer Website und das Cookie ist noch nicht abgelaufen, können wir und Google erkennen, dass der Nutzer auf die Anzeige geklickt hat und zu dieser Seite weitergeleitet wurde. Jeder Google AdWords-Kunde erhält ein anderes Cookie. Cookies können somit nicht über die Websites von AdWords-Kunden nachverfolgt werden. Die mithilfe des Conversion-Cookie eingeholten Informationen dienen dazu, Conversion-Statistiken für AdWords-Kunden zu erstellen, die sich für Conversion-Tracking entschieden haben. Die Kunden erfahren die Gesamtanzahl der Nutzer, die auf ihre Anzeige geklickt haben und zu einer mit einem Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden. Sie erhalten jedoch keine Informationen, mit denen sich Nutzer persönlich identifizieren lassen.</p>
          <h3 className="h6 mt-3" style={{ color: '#5c377d' }}>Wie wir Ihre Daten schützen</h3>
          <p><strong>SSL-Verschlüsselung</strong><br />Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.</p>
          <h3 className="h6 mt-3" style={{ color: '#5c377d' }}>Änderungen</h3>
          <p>Wir können diese Datenschutzerklärung jederzeit ohne Vorankündigung anpassen. Es gilt die jeweils aktuelle, auf unserer Website publizierte Fassung.</p>
          <h3 className="h6 mt-3" style={{ color: '#5c377d' }}>Fragen an den Datenschutzbeauftragten</h3>
          <p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz zu Beginn der Datenschutzerklärung aufgeführten, verantwortlichen Person in unserer Organisation. <br />08.09.2022</p>
        </div>
      </div>
    </div>
  </div>
  </>
);

export default Datenschutzbestimmung;
