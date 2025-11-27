export function About() {
  return (
    <section className="lg:max-w-7xl mx-auto   md:pb-20  space-y-12 lg:space-y-">
      <h1 className="text-center text-3xl font-bold">Über uns</h1>

      {/* Row 1 */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:px-4">
        <div className="md:w-1/3 flex justify-center max-h-70 md:max-h-200">
          <img
            src="pic.webp"
            alt="Events"
            className=" w-full md:max-w-sm md:rounded-xl shadow-lg object-top md:object-contain object-cover  "
          />
        </div>

        <div className="md:w-2/3 px-4">
          <h2 className="text-3xl font-bold mb-4">
            Veranstaltungen und Feiern
          </h2>
          <div className="text-gray-700 text-lg leading-relaxed space-y-4">
            <p>
              Wir machen jeden Anlass zu etwas Besonderem. Von Geburtstagen über
              Beerdigungen, Jubiläen bis hin zu Familientreffen schaffen wir die
              perfekte Atmosphäre für unvergessliche Momente.
            </p>

            <p>
              Unser Team übernimmt die Menüplanung und die Abläufe vor Ort,
              damit Sie sich ganz auf den Moment konzentrieren können. Ob Sie
              eine kleine Feier im engen Kreis oder ein größeres Event
              ausrichten – wir passen jedes Detail Ihren Wünschen an.
            </p>

            <p className="hidden lg:block">
              Unsere Gäste vertrauen uns, weil wir hervorragendes Essen,
              herzliche Gastfreundschaft und einen Raum bieten, der sich jeder
              Art von Feier anpasst. Wir bieten keine Dekorationen oder
              Unterhaltungsprogramme an, aber unser flexibler Veranstaltungsraum
              und unser persönlicher Service sorgen dennoch für ein angenehmes
              und unvergessliches Erlebnis.
            </p>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col md:flex-row items-center gap-12 ">
        <div className="md:w-1/3 md:order-2 flex justify-center max-h-70 md:max-h-200 md:mr-4">
          <img
            src="owners.jpg"
            alt="Events"
            className=" w-full md:max-w-sm md:rounded-xl shadow-lg object-top md:object-contain object-cover  "
          />
        </div>

        <div className="md:w-2/3 md:order-1 px-4">
          <h2 className="text-3xl font-bold mb-4">Unsere Inhaber</h2>
          <div className="text-gray-700 text-lg leading-relaxed space-y-4">
            <p>
              {" "}
              Seit über einem Jahrzehnt investieren unsere Inhaber ihre Energie
              darin, einen Ort zu schaffen, der sich vom ersten Moment an
              vertraut anfühlt. Ihr praktischer Ansatz sorgt dafür, dass die
              Qualität niemals nachlässt – sei es durch eine freundliche
              Begrüßung, ein perfekt zubereitetes Gericht oder die beruhigende
              Atmosphäre, die unseren Raum ausmacht.{" "}
            </p>{" "}
            <p>
              {" "}
              Ihre Philosophie ist einfach: Behandle jeden Gast wie einen
              langjährigen Freund. Diese Einstellung sorgt dafür, dass Gäste
              Jahr für Jahr gerne zurückkehren.{" "}
            </p>{" "}
            <p className="hidden lg:block">
              {" "}
              Über die Gastfreundschaft hinaus suchen sie kontinuierlich nach
              Möglichkeiten, das Erlebnis zu verbessern, von Menü-Innovationen
              bis zur Optimierung der Atmosphäre. Ihr Engagement hat ihnen treue
              Kunden und einen Ruf für außergewöhnlichen Service eingebracht.{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 flex justify-center max-h-70 md:max-h-200 md:ml-4 lg:ml-0">
          <img
            src="bowlin.jpg"
            alt="Events"
            className=" w-full md:max-w-sm md:rounded-xl shadow-lg transform -scale-x-100 object-center md:object-contain object-cover  "
          />
        </div>

        <div className="md:w-2/3 px-4">
          <h2 className="text-3xl font-bold mb-4">Kegelbahn</h2>
          <div className="text-gray-700 text-lg leading-relaxed space-y-4 max-w-3xl">
            <p>
              {" "}
              Unsere Kegelbahn ist eines der Highlights unseres Hauses. Mit rund
              30 Kegelvereinen in der Umgebung möchten wir die Tradition
              bewahren. Die Bahnen, das gemütliche Licht und die komfortablen
              Sitzgelegenheiten machen sie zum perfekten Ort für gesellige
              Abende, Vereinsrunden oder freundschaftliche Familienwettkämpfe.{" "}
            </p>{" "}
            <p>
              {" "}
              Wir pflegen die Bahnen regelmäßig, um einen reibungslosen
              Spielverlauf zu gewährleisten. Kombiniert mit Ihren
              Lieblingsgetränken oder einem kompletten Menü wird der Abend zu
              einem rundum gelungenen Erlebnis.{" "}
            </p>{" "}
            <p className="hidden lg:block">
              {" "}
              Ob Sie einen Geburtstag feiern, ein zwangloses Beisammensein
              planen oder einfach etwas Neues ausprobieren möchten – unsere
              Kegelbahn bietet ein Erlebnis, das sowohl unterhaltsam als auch
              entspannend ist. Viele unserer Stammgäste sagen, dass sie bei
              jedem Besuch ihre erste Wahl ist.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
