import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politica de Confidențialitate - Society Garage',
  description: 'Politica de confidențialitate Society Garage. Informații despre prelucrarea datelor personale și protecția informațiilor clienților.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PoliticaConfidentialitate() {
  return (
    <div className="min-h-screen bg-dark-bg pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-heading font-bold text-white mb-8">
            Politica de Confidențialitate
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
                Society Garage (&ldquo;compania&rdquo;, &ldquo;noi&rdquo;, &ldquo;niște&rdquo;) respectă confidențialitatea și protecția datelor personale ale clienților săi. Această politică de confidențialitate descrie modul în care colectăm, folosim, stocăm și protejăm informațiile personale pe care ni le furnizați.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-white mb-4">
                2. Datele pe care le colectăm
              </h2>
              <p className="text-gray-300 mb-4">
                Colectăm următoarele tipuri de informații:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Informații de contact (nume, prenume, adresă de email, număr de telefon)</li>
                <li>Informații despre vehiculul dumneavoastră (marca, modelul, anul de fabricație)</li>
                <li>Informații despre serviciile solicitate</li>
                <li>Informații de plată (doar pentru procesarea tranzacțiilor)</li>
                <li>Comunicările cu noi (email-uri, mesaje, feedback)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-white mb-4">
                3. Cum folosim informațiile
              </h2>
              <p className="text-gray-300 mb-4">
                Folosim informațiile colectate pentru:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Furnizarea serviciilor solicitate</li>
                <li>Comunicarea cu dumneavoastră despre serviciile noastre</li>
                <li>Procesarea plăților și facturarea</li>
                <li>Îmbunătățirea serviciilor noastre</li>
                <li>Respectarea obligațiilor legale</li>
                <li>Marketing direct (doar cu consimțământul dumneavoastră)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-white mb-4">
                4. Partajarea informațiilor
              </h2>
              <p className="text-gray-300 mb-4">
                Nu vindem, nu închiriem și nu partajăm informațiile dumneavoastră personale cu terțe părți, cu excepția cazurilor în care:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Avem consimțământul dumneavoastră explicit</li>
                <li>Este necesar pentru furnizarea serviciilor solicitate</li>
                <li>Este cerut de lege</li>
                <li>Este necesar pentru protejarea drepturilor noastre sau ale altora</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-white mb-4">
                5. Securitatea datelor
              </h2>
              <p className="text-gray-300 mb-4">
                Implementăm măsuri de securitate tehnice și organizaționale adecvate pentru a proteja informațiile dumneavoastră personale împotriva accesului neautorizat, modificării, divulgării sau distrugerii.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-white mb-4">
                6. Drepturile dumneavoastră
              </h2>
              <p className="text-gray-300 mb-4">
                Conform GDPR, aveți următoarele drepturi:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                <li>Dreptul de acces la datele personale</li>
                <li>Dreptul de rectificare a datelor inexacte</li>
                <li>Dreptul de ștergere a datelor</li>
                <li>Dreptul de restricționare a prelucrării</li>
                <li>Dreptul la portabilitatea datelor</li>
                <li>Dreptul de opoziție la prelucrare</li>
                <li>Dreptul de a retrage consimțământul</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-white mb-4">
                7. Contact
              </h2>
              <p className="text-gray-300 mb-4">
                Pentru întrebări despre această politică de confidențialitate sau pentru a vă exercita drepturile, ne puteți contacta la:
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
                8. Modificări ale politicii
              </h2>
              <p className="text-gray-300 mb-4">
                Ne rezervăm dreptul de a modifica această politică de confidențialitate oricând. Modificările vor fi publicate pe această pagină și vă vom notifica despre schimbările semnificative.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
