# Society Garage - Atelier Tuning Auto Premium

Site-ul oficial al Society Garage, atelier premium de tuning auto, car wrap, paint protection film și detailing profesional în București.

## 🚗 Despre Proiect

Society Garage este un site modern și responsiv construit cu Next.js 14, care prezintă serviciile premium de modificări auto oferite de atelier. Site-ul include:

- **5 pagini principale**: Acasă, Servicii, Galerie, Despre, Contact
- **Design premium**: Paletă de culori industrial-luxury cu accent pe #f2c244
- **Optimizare SEO maximă**: Meta tags, schema JSON-LD, sitemap.xml
- **Responsive design**: Mobile-first cu optimizări pentru toate dispozitivele
- **Performanță înaltă**: Lazy loading, optimizări CSS, imagini optimizate
- **Accesibilitate**: Semantic HTML, aria labels, navigare cu tastatura

## 🛠️ Tehnologii Folosite

- **Framework**: Next.js 14 (App Router)
- **Limbaj**: TypeScript
- **Styling**: Tailwind CSS
- **Animații**: Framer Motion
- **Icoane**: Lucide React
- **Formulare**: React Hook Form
- **Deployment**: Static Export (Vercel/Netlify ready)

## 📦 Instalare și Rulare

### Cerințe de Sistem
- Node.js 18+ 
- npm sau yarn
- Git

### Pași de Instalare

1. **Clonează repository-ul**
```bash
git clone <repository-url>
cd society-garage
```

2. **Instalează dependințele**
```bash
npm install
# sau
yarn install
```

3. **Rulează în modul development**
```bash
npm run dev
# sau
yarn dev
```

4. **Deschide browser-ul**
Accesează [http://localhost:3000](http://localhost:3000) pentru a vedea site-ul.

### Comenzi Disponibile

```bash
# Development
npm run dev          # Rulează serverul de development (http://localhost:3000)
npm run build        # Creează build-ul de producție
npm run start        # Rulează serverul de producție
npm run lint         # Rulează ESLint pentru verificarea codului

# Export static (pentru hosting static)
npm run export       # Creează build-ul static în folderul 'out'
```

## 🚀 Deploy

### Vercel (Recomandat)
1. Conectează repository-ul la Vercel
2. Setează build command: `npm run build`
3. Setează output directory: `out`
4. Deploy automat la fiecare push

### Netlify
1. Conectează repository-ul la Netlify
2. Setează build command: `npm run build && npm run export`
3. Setează publish directory: `out`
4. Deploy automat

### Hosting Static
1. Rulează `npm run export`
2. Uploadează conținutul din folderul `out` pe serverul tău
3. Configurează serverul pentru a servi fișierele statice

## 📁 Structura Proiectului

```
society-garage/
├── app/                    # App Router (Next.js 14)
│   ├── globals.css        # Stiluri globale și Tailwind
│   ├── layout.tsx         # Layout principal cu metadata SEO
│   ├── page.tsx           # Pagina Acasă
│   ├── servicii/          # Pagina Servicii
│   ├── galerie/           # Pagina Galerie
│   ├── despre/            # Pagina Despre
│   └── contact/           # Pagina Contact
├── components/            # Componente React
│   ├── Header.tsx         # Header cu navigare
│   ├── Footer.tsx         # Footer cu informații
│   ├── StickyContact.tsx  # Bară contact mobil
│   └── sections/          # Secțiuni pentru pagini
├── public/               # Fișiere statice
│   ├── robots.txt        # Configurare robots
│   ├── sitemap.xml       # Sitemap pentru SEO
│   ├── manifest.json     # PWA manifest
│   └── schema.jsonld     # Schema.org JSON-LD
├── package.json          # Dependințe și scripturi
├── tailwind.config.js    # Configurare Tailwind
├── next.config.js        # Configurare Next.js
└── tsconfig.json         # Configurare TypeScript
```

## 🎨 Design System

### Culori
- **Primary**: #f2c244 (auriu cald)
- **Primary Light**: #f8e7b3 (nuanță pală a aurului)
- **Dark Background**: #0f1720 (negru-gri profund)
- **Dark Accent**: #1f2933 (gri metalic)
- **Soft Background**: #0b0d0f (fundal subtil)

### Tipografie
- **Font Principal**: Poppins (Google Fonts)
- **Font Heading**: Montserrat (Google Fonts)

### Componente
- **Butoane**: `.btn-primary`, `.btn-secondary`
- **Input-uri**: `.form-input`, `.form-textarea`
- **Carduri**: `.card-hover` pentru efecte hover
- **Utilitare**: `.text-gradient`, `.glow-effect`

## 📱 Optimizări Mobile

- **Mobile-first design**: Toate componentele sunt optimizate pentru mobile
- **Touch-friendly**: Butoane și linkuri cu dimensiuni adecvate
- **Performance**: Lazy loading pentru imagini și componente
- **Responsive images**: Srcset și WebP support
- **Sticky contact bar**: Acces rapid la contact pe mobile

## 🔍 SEO și Performanță

### SEO Implementat
- ✅ Meta tags complete pentru toate paginile
- ✅ Open Graph și Twitter Cards
- ✅ Schema.org JSON-LD (LocalBusiness)
- ✅ Sitemap.xml cu imagini
- ✅ Robots.txt optimizat
- ✅ Canonical URLs
- ✅ Structured data pentru servicii

### Performanță
- ✅ Lazy loading pentru imagini
- ✅ Preconnect pentru fonturi externe
- ✅ Optimizări CSS cu Tailwind
- ✅ Static export pentru hosting rapid
- ✅ Imagini optimizate (WebP support)

### Lighthouse Score Target
- **Performance**: ≥ 90
- **Accessibility**: ≥ 90
- **Best Practices**: ≥ 90
- **SEO**: ≥ 90

## 🖼️ Imagini și Assets

### Imagini Necesare
Site-ul folosește placeholder-uri pentru imagini. Înlocuiește următoarele:

#### Imagini Hero
- `/hero-bg.jpg` - Imaginea de fundal pentru hero section
- `/og-image.jpg` - Imaginea pentru social media (1200x630px)

#### Imagini Servicii
- `/services/tuning-1.jpg` - Tuning Auto
- `/services/car-wrap-1.jpg` - Car Wrap
- `/services/ppf-1.jpg` - Paint Protection Film
- `/services/detailing-exterior-1.jpg` - Detailing Exterior
- `/services/detailing-interior-1.jpg` - Detailing Interior
- `/services/ceramic-coating-1.jpg` - Ceramic Coating

#### Imagini Galerie
- `/gallery/featured-1.jpg` - BMW M3 Competition
- `/gallery/featured-2.jpg` - Audi A4 Matte Black
- `/gallery/featured-3.jpg` - Porsche 911 Ceramic
- `/gallery/tuning-*.jpg` - Proiecte tuning
- `/gallery/car-wrap-*.jpg` - Proiecte car wrap
- `/gallery/ppf-*.jpg` - Proiecte PPF
- `/gallery/detailing-*.jpg` - Proiecte detailing
- `/gallery/ceramic-*.jpg` - Proiecte ceramic

#### Imagini Before/After
- `/before-after/bmw-m3-before.jpg` - BMW M3 înainte
- `/before-after/bmw-m3-after.jpg` - BMW M3 după
- `/before-after/audi-a4-before.jpg` - Audi A4 înainte
- `/before-after/audi-a4-after.jpg` - Audi A4 după
- `/before-after/porsche-911-before.jpg` - Porsche 911 înainte
- `/before-after/porsche-911-after.jpg` - Porsche 911 după
- `/before-after/mercedes-c-before.jpg` - Mercedes C înainte
- `/before-after/mercedes-c-after.jpg` - Mercedes C după

#### Imagini Echipă
- `/team/alexandru-popescu.jpg` - Fondator & Șef Atelier
- `/team/maria-ionescu.jpg` - Specialist Car Wrap
- `/team/cristian-radu.jpg` - Specialist PPF & Detailing
- `/team/andreea-stan.jpg` - Specialist Detailing Interior
- `/team/mihai-constantinescu.jpg` - Specialist Ceramic Coating
- `/team/elena-dumitrescu.jpg` - Manager Calitate

#### Imagini Testimoniale
- `/testimonials/alexandru-popescu.jpg` - Client testimonial
- `/testimonials/maria-ionescu.jpg` - Client testimonial
- `/testimonials/cristian-radu.jpg` - Client testimonial
- `/testimonials/andreea-stan.jpg` - Client testimonial
- `/testimonials/mihai-constantinescu.jpg` - Client testimonial
- `/testimonials/elena-dumitrescu.jpg` - Client testimonial

#### Icoane și Logo
- `/favicon.ico` - Favicon
- `/apple-touch-icon.png` - Apple touch icon (180x180px)
- `/icon-192x192.png` - PWA icon (192x192px)
- `/icon-512x512.png` - PWA icon (512x512px)
- `/logo.png` - Logo principal

### Recomandări pentru Imagini
- **Format**: WebP cu fallback JPG
- **Dimensiuni**: Optimizate pentru fiecare breakpoint
- **Calitate**: Înaltă calitate pentru aspectul premium
- **Optimizare**: Comprimate pentru web fără pierdere de calitate vizibilă

## 🔧 Configurare și Personalizare

### Informații de Contact
Toate informațiile de contact sunt integrate direct în cod:
- **Telefon**: 0720637273
- **Email**: contact@societygarage.ro  
- **Adresă**: Strada Petru Vodă 23, București 052034
- **Instagram**: https://www.instagram.com/societygarage.ro/

### Personalizare Culori
Modifică culorile în `tailwind.config.js`:

```javascript
colors: {
  primary: '#f2c244',        // Culoarea principală
  'primary-light': '#f8e7b3', // Nuanța pală
  'dark-bg': '#0f1720',      // Fundalul întunecat
  'dark-accent': '#1f2933',  // Accentul întunecat
}
```

### Personalizare Conținut
- **Informații firme**: Modifică în `app/layout.tsx` (schema JSON-LD și metadata)
- **Servicii**: Actualizează în `components/sections/ServicesList.tsx`
- **Echipă**: Modifică în `components/sections/AboutTeam.tsx`
- **Contact**: Actualizează în `components/sections/ContactInfo.tsx`
- **Informații de contact**: Modifică direct în componentele respective

## 🧪 Testare

### Testare Locală
```bash
# Rulează testele de linting
npm run lint

# Verifică build-ul
npm run build

# Testează exportul static
npm run export
```

### Testare SEO
- Folosește Google Search Console
- Verifică cu Google PageSpeed Insights
- Testează cu Lighthouse
- Validează schema.org cu Google's Rich Results Test

### Testare Accesibilitate
- Navighează cu tastatura
- Testează cu screen reader
- Verifică contrastul culorilor
- Validează cu axe-core

## 📞 Suport și Contact

Pentru întrebări despre implementare sau personalizare:

- **Email**: contact@societygarage.ro
- **Telefon**: 0720637273
- **Website**: https://societygarage.ro

## 📄 Licență

Acest proiect este proprietatea Society Garage. Toate drepturile rezervate.

---

**Society Garage** - Transformăm mașinile tale în opere de artă pe roți! 🚗✨
