import React from 'react';

export const TargetIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
     <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21m-6.75-9H3m15.75 0H21m-9-6.75h.008v.008H12V5.25Zm0 13.5h.008v.008H12v-.008Zm0-6.75h.008v.008H12v-.008Zm-4.5-2.25h.008v.008H7.5V9.75Zm9 0h.008v.008H16.5V9.75Z" />
  </svg>
);
