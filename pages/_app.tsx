import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
// import '../components/Carousel/Carousel.scss';
import  '../styles/Carousel.scss';
import '../styles/CarouselThird.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
