import Eighth from "../eighth";
import Tenth from "../tenth";
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the fullPage.js library
//  const FullPage = dynamic(() => import('fu.js'), { ssr: false });


const ScrollPage = () => {
  const containerRef = useRef(null);
  const fullPageInstanceRef = useRef(null);

  // useEffect(() => {
  //   fullPageInstanceRef.current = new FullPage(containerRef.current, {
  //     // Configure fullPage.js options here
  //     // Refer to the fullPage.js documentation for available options
  //   });

  //   return () => {
  //     if (fullPageInstanceRef.current) {
  //       fullPageInstanceRef.current.destroy('all');
  //     }
  //   };
  // }, []);

  return (
    <div ref={containerRef} className="sroll">
      <div className="section">
        <Eighth />
      </div>
      <div className="section">
        <Tenth />
      </div>
    </div>
  );
};

export default ScrollPage;
