import { ScrollToTopArrow } from '@/components/ScrollToTop/ScrollToTopArrow';
import { Carousel } from '@/components/ImageCarousel/Carousel';
import { Navbar } from '@/components/NavigationBar/Navbar';
import { Footer } from '@/components/Footer/Footer';

import '../stylesheets/global.scss';

export const metadata = {
  title: 'Casa da Criança e do Adolescente',
  description:
    'A Casa da Criança e do Adolescente é uma organização da Sociedade Civil (OSC), fundada em 16/07/1996, de direito privado sem fins lucrativos, com Certificação de Entidade Beneficente de Assistência Social.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-BR'>
      <body>
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
