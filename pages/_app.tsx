import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
// import '../components/Carousel/Carousel.scss';
import  '../styles/Carousel.scss';
import  '../styles/InfoBlock.scss';
import '../styles/CarouselThird.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const componentRef = useRef(null);
  console.log('%cDisplay size 3280*1587', 
    'color: #e46f25; font-size: 18px; border: 2px solid #e46f25; padding: 5px;');
  return (
    <TransitionGroup>
      <CSSTransition
        key={Component.toString()}
        classNames="fade-from-top"
        timeout={300}
        unmountOnExit
      >
         <div ref={componentRef}>
          <Component {...pageProps} />
         </div>
      </CSSTransition>
    </TransitionGroup>
  )
}
