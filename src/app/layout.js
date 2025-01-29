import { Urbanist, Nunito } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--body-color-font',
});
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--heading-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'Sunrise Pipes - HDPE & MDPE Pipes Manufacturer',
    template: '%s | Sunrise Pipes',
  },
  description: 'Leading manufacturer of HDPE pipes, MDPE pipes, sprinkler systems, and pipe accessories. High-quality, durable, and reliable piping solutions for various industries.',
  keywords: 'HDPE pipes, MDPE pipes, plastic pipes, sprinkler systems, irrigation pipes, Sunrise Pipes, water supply pipes, durable pipes, industrial pipes, agriculture pipes',
  openGraph: {
    title: 'Sunrise Pipes - Quality HDPE & MDPE Pipes Manufacturer',
    description: 'Sunrise Pipes specializes in high-quality HDPE & MDPE pipes, sprinkler systems, and pipe accessories. Trusted by industries and farmers for reliable water solutions.',
    type: 'website',
    url: 'https://sunrisepipes.in',
    site_name: 'Sunrise Pipes',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sunrise Pipes - HDPE & MDPE Pipes Manufacturer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SunrisePipes',
    title: 'Sunrise Pipes - HDPE & MDPE Pipes Manufacturer',
    description: 'Premium HDPE and MDPE pipes for water supply, irrigation, and industrial applications. Durable, reliable, and sustainable piping solutions.',
    images: ['/twitter-image.jpg'],
  },
};












export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${urbanist.variable} ${nunito.variable}`}>
        {children}
      </body>
    </html>
  );
}
