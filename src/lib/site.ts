/**
 * Single source of truth for company data used across pages, SEO tags,
 * and JSON-LD. Change here, changes everywhere.
 */
export const SITE = {
  name: 'SBS — Sarana Berkah Sejahtera',
  legalName: 'CV. Sarana Berkah Sejahtera',
  shortName: 'SBS',
  domain: 'https://bangunsarana.id',
  tagline: 'Spesialis Facade ACP & Kontraktor Bangunan',
  description:
    'CV. Sarana Berkah Sejahtera (SBS) — spesialis facade ACP dan kontraktor bangunan di Jawa Timur. Fabrikasi & instalasi ACP, konstruksi rumah dan gedung, dapur modular SPPG, maintenance & renovasi.',
  foundingYear: 2020,
  address: {
    street: 'Dsn. Padusan RT 002 RW 001, Desa Padusan, Kec. Pacet',
    locality: 'Mojokerto',
    region: 'Jawa Timur',
    postalCode: '61374',
    country: 'ID',
  },
  // TODO(navis): confirm primary WA number before launch
  phone: '+62 821-3103-2483',
  whatsapp: '6282131032483',
  email: 'saranaberkahsbs@gmail.com',
  serviceArea: ['Surabaya', 'Gresik', 'Sidoarjo', 'Mojokerto', 'Jawa Timur'],
} as const;

export function waLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const NAV = [
  { label: 'Layanan', href: '/layanan' },
  { label: 'Proyek', href: '/proyek' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Kontak', href: '/kontak' },
] as const;
