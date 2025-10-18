import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termeni și Condiții - Society Garage',
  description: 'Termeni și condiții Society Garage. Regulile și condițiile pentru utilizarea serviciilor noastre de tuning auto.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermeniConditii() {
  return (
    <div className="min-h-screen bg-dark-bg pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-heading font-bold text-white mb-8">
            Termeni și Condiții
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg mb-8">
              Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-white mb-4">
                1. Informații generale
              </h2>
              <p className="text-gray-300 mb-4">
                Acești termeni și condiții (&ldquo;Termenii&rdquo;) reglementează utilizarea serviciilor oferite de Society Garage (&ldquo;compania&rdquo;, &ldquo;noi&rdquo;, &ldquo;niște&rdquo;). Prin utilizarea serviciilor noastre, sunteți de acord cu acești termeni.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-white mb-4">
                2. Serviciile noastre
              </h2>
              <p className="text-gray-300 mb-4">
                Society Garage oferă următoarele servicii:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Tuning auto (chip tuning, modificări performante)</li>
                <li>Car wrap (instalare folii pentru mașini)</li>
                <li>Paint Protection Film (PPF)</li>
                <li>Detailing exterior și interior</li>
                <li>Ceramic coating</li>
                <li>Consultanță tehnică</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-white mb-4">
                3. Programarea serviciilor
              </h2>
              <p className="text-gray-300 mb-4">
                Pentru a programa un serviciu:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Contactați-ne prin telefon, email sau formularul de pe site</li>
                <li>Oferim consultanță gratuită pentru fiecare proiect</li>
                <li>Programarea se face în ordinea cererilor</li>
                <li>Ne rezervăm dreptul de a refuza servicii care nu corespund standardelor noastre</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-white mb-4">
                4. Prețuri și plăți
              </h2>
              <p className="text-gray-300 mb-4">
                Prețurile serviciilor:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Oferim devis personalizat pentru fiecare proiect</li>
                <li>Prețurile pot varia în funcție de complexitatea lucrării</li>
                <li>Plata se face conform termenilor conveniți</li>
                <li>Acceptăm plata în numerar, cu cardul sau prin transfer bancar</li>
                <li>Toate prețurile includ TVA</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-white mb-4">
                5. Garanții
              </h2>
              <p className="text-gray-300 mb-4">
                Oferim următoarele garanții:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Tuning: 2 ani garanție pentru modificări</li>
                <li>Car Wrap: 5 ani garanție pentru folii</li>
                <li>PPF: 10 ani garanție pentru filmul de protecție</li>
                <li>Detailing: 1 an garanție pentru servicii</li>
                <li>Ceramic Coating: 2-5 ani garanție în funcție de produs</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-white mb-4">
                6. Responsabilitatea clientului
              </h2>
              <p className="text-gray-300 mb-4">
                Clientul se obligă să:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Furnizeze informații corecte și complete despre vehicul</li>
                <li>Respecte programarea stabilită</li>
                <li>Plătească serviciile conform termenilor conveniți</li>
                <li>Urmeze instrucțiunile de întreținere furnizate</li>
                <li>Anunțe orice problemă în termen de 48 de ore</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-white mb-4">
                7. Limitarea responsabilității
              </h2>
              <p className="text-gray-300 mb-4">
                Society Garage nu este responsabil pentru:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Daunele cauzate de utilizarea incorectă a vehiculului</li>
                <li>Daunele cauzate de modificări ulterioare făcute de terți</li>
                <li>Daunele cauzate de accidente sau utilizare abuzivă</li>
                <li>Pierderile de timp sau profituri</li>
                <li>Daunele indirecte sau consecințiale</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-white mb-4">
                8. Proprietatea intelectuală
              </h2>
              <p className="text-gray-300 mb-4">
                Toate designurile, conceptele și soluțiile tehnice dezvoltate de Society Garage rămân proprietatea noastră intelectuală. Clientul nu poate reproduce sau distribui acestea fără consimțământul nostru scris.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-white mb-4">
                9. Rezilierea contractului
              </h2>
              <p className="text-gray-300 mb-4">
                Orice parte poate rezilia contractul în următoarele cazuri:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Încălcarea termenilor de plată</li>
                <li>Încălcarea termenilor de utilizare</li>
                <li>Imposibilitatea tehnică de executare</li>
                <li>Acordul mutual al părților</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-white mb-4">
                10. Legea aplicabilă
              </h2>
              <p className="text-gray-300 mb-4">
                Acești termeni sunt guvernați de legea română. Orice dispută va fi rezolvată prin instanțele competente din România.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-white mb-4">
                11. Contact
              </h2>
              <p className="text-gray-300 mb-4">
                Pentru întrebări despre acești termeni și condiții, ne puteți contacta la:
              </p>
              <div className="bg-dark-accent/50 rounded-lg p-6">
                <p className="text-white font-medium mb-2">Society Garage</p>
                <p className="text-gray-300">Email: contact@societygarage.ro</p>
                <p className="text-gray-300">Telefon: 0720637273</p>
                <p className="text-gray-300">Adresă: Strada Petru Vodă 23, București 052034</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-white mb-4">
                12. Modificări ale termenilor
              </h2>
              <p className="text-gray-300 mb-4">
                Ne rezervăm dreptul de a modifica acești termeni oricând. Modificările vor fi publicate pe această pagină și vă vom notifica despre schimbările semnificative.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
