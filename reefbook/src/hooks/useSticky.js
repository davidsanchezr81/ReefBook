// // import { useEffect, useState, useRef } from "react";

// // function useSticky () {
// //  const [isSticky, setSticky] = useState(false);
// // const element = useRef(null)

// //   const handleScroll = () => {
// //     // let elementContent = element.current;
// //     // let scroll = window.scrollY > elementContent;
// //     // scroll ? setSticky(true) : setSticky(false);
// //     // console.log(`Content of element: ${elementContent}`);
// //     // console.log(`The scroll is scrollY is higher ${scroll}`);
// //     // console.log(`Is sticky: ${isSticky}`);

// // //     let elementContent = element.current.getBoundingClientRect().bottom;
// // //     let scroll = window.scrollY > elementContent;
// // //     scroll ? setSticky(true) : setSticky(false);
// // //   }

// // //     // This function handle the scroll performance issue
// // //     const debounce = (func, wait = 20, immediate = true) => {
// // //       let timeOut;
// // //       return () => {
// // //         let context = this,
// // //           args = arguments;
// // //         const later = () => {
// // //           timeOut = null;
// // //           if (!immediate) func.apply(context, args);
// // //         };
// // //         const callNow = immediate && !timeOut;
// // //         clearTimeout(timeOut);
// // //         timeOut = setTimeout(later, wait);
// // //         if (callNow) func.apply(context, args);
// // //       };
// // //     };
  

// // useEffect(() => {
// //   window.addEventListener("scroll", debounce(handleScroll))
// //   return () => {
// //           window.removeEventListener("scroll", () => handleScroll);
// //         }  
// // }, [debounce, handleScroll])


// //   return { isSticky, element }
// // }

// // export default useSticky

// import React, { Fragment, useEffect, useRef, useState } from 'react';
// import Sticky from '../components/Navbar';

// export default () => {
//   const [isSticky, setSticky] = useState(false);
//   const ref = useRef(null);
//   const handleScroll = () => {
//     if (ref.current) {
//       setSticky(ref.current.getBoundingClientRect().top <= 0);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', () => handleScroll);
//     };
//   }, []);

//   return (
//     <Fragment>
//       <p>Lorem ipsum...</p>
//       <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
//         <Sticky />
//       </div>
//       <p>Lorem ipsum...</p>
//     </Fragment>
//   );
// };