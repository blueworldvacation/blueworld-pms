import './globals.css';
export const metadata = { title: 'Blue World PMS', description: 'Vacation homes management system' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ar"><body>{children}</body></html>;
}
