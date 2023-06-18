// import React, {Component, Suspense} from "react";
// import Lottie from "react-lottie";
// import Loading from "../../containers/loading/Loading";
// import {useEffect, useState, useWindowWidth } from "react";

// const useWindowWide = (size) => {
//   const [width, setWidth] = useState(0)
  
//   useEffect(() => {
//     function handleResize() {
//       setWidth(window.innerWidth)
//     }
    
//     window.addEventListener("resize", handleResize)
    
//     handleResize()
    
//     return () => { 
//       window.removeEventListener("resize", handleResize)
//     }
//   }, [setWidth])
  
//   return useWindowWidth > size
// }

// export default class DisplayLottie extends Component {
//   render() {
//     const animationData = this.props.animationData;
//     const defaultOptions = {
//       loop: true,
//       autoplay: true,
//       animationData: animationData
//     };



//     return (
//       this.props.h ? 
//         <Suspense fallback={<Loading />}>
//           <Lottie options={defaultOptions} 
//           isClickToPauseDisabled={true} 
//           height={this.props.h}
//           />
//         </Suspense>
//         :
//         <Suspense fallback={<Loading />}>
//           <Lottie options={defaultOptions} 
//           isClickToPauseDisabled={true} 
//           // height={100}
//           />
//         </Suspense>
//     );
//   }
// }
