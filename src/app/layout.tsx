import { ScrollToTopArrow } from '@/components/ScrollToTop/ScrollToTopArrow';
import { Carousel } from '@/components/ImageCarousel/Carousel';
import { Navbar } from '@/components/NavigationBar/Navbar';
import { Footer } from '@/components/Footer/Footer';
import { Poppins } from 'next/font/google';

import '../stylesheets/global.scss';

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Casa da Criança e do Adolescente',
  description:
    'A Casa da Criança e do Adolescente é uma organização da Sociedade Civil (OSC), fundada em 16/07/1996, de direito privado sem fins lucrativos, com Certificação de Entidade Beneficente de Assistência Social.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-BR'>
      <body className={poppins.className}>
        <div id='root'>
          <Navbar />
          <Carousel />
          <main>
            {children}
            <ScrollToTopArrow />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
