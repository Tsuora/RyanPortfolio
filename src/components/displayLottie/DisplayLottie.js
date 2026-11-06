import React, {useState, useEffect} from "react";
import Lottie from "react-lottie";

export default function DisplayLottie({animationData, h}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleResize = () => setWindowWidth(window.innerWidth);
    const handleMotionChange = event => setReducedMotion(event.matches);
    window.addEventListener("resize", handleResize);
    motionQuery.addEventListener("change", handleMotionChange);
    return () => {
      window.removeEventListener("resize", handleResize);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <Lottie
      options={{loop: !reducedMotion, autoplay: !reducedMotion, animationData}}
      isPaused={reducedMotion}
      isClickToPauseDisabled
      ariaRole="img"
      ariaLabel="Decorative illustration"
      height={h || (windowWidth > 1008 ? 600 : windowWidth > 641 ? 400 : 200)}
    />
  );
}
