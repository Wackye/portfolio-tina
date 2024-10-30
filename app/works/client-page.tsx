"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// interface ClientPageProps {
//   posts: any;
// }

// export default function ClientPage({ posts }: ClientPageProps) {
//   const line1Ref = useRef(null);
//   const line2Ref = useRef(null);
//   const line3Ref = useRef(null);
//   const sectionRef = useRef(null); // Section ref to observe

//   useEffect(() => {
//     const line1 = line1Ref.current;
//     const line2 = line2Ref.current;
//     const line3 = line3Ref.current;
//     const section = sectionRef.current;

//     // Intersection Observer to trigger animation on scroll
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           const introTl = gsap.timeline();
//           introTl.from([line1, line2, line3], {
//             duration: 0.6,
//             y: 50,
//             opacity: 0,
//             stagger: 0.2,
//             ease: "power3.out",
//           });
//           observer.unobserve(section); // Unobserve after the animation triggers
//         }
//       },
//       { threshold: 0.2 } // 20% of the section is visible
//     );

//     if (section) {
//       observer.observe(section);
//     }

//     return () => {
//       if (section) {
//         observer.unobserve(section);
//       }
//     };
//   }, []);

//   return (
//     <div ref={sectionRef} className="flex flex-col justify-center items-center h-screen">
//       <div className="text-center">
//         <h1 ref={line1Ref} className="text-4xl font-bold mb-2">Welcome to</h1>
//         <h1 ref={line2Ref} className="text-5xl font-bold text-blue-600 mb-2">My Awesome</h1>
//         <h1 ref={line3Ref} className="text-4xl font-bold">Next.js Site!</h1>
//       </div>
//     </div>
//   );
// }
