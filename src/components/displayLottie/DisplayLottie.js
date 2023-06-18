import React, {Suspense, useState, useEffect} from "react";
import Lottie from "react-lottie";
import Loading from "../../containers/loading/Loading";

export default function DisplayLottie(props) {
  const animationData = props.animationData;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData
  };

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return props.h ? (
    <Suspense fallback={<Loading />}>
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled={true}
        height={props.h}
      />
    </Suspense>
  ) : (
    <Suspense fallback={<Loading />}>
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled={true}
        height={
          windowSize[0] > 1008 ? 600 : 
          windowSize[0] > 641 ? 400 : 200
        }
      />
      {/* <h2>Width: {windowSize[0]}</h2>

      <h2>Height: {windowSize[1]}</h2> */}
    </Suspense>
  );
}
