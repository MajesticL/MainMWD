import { useState, useEffect } from "react";
import "../styles/SplashScreen.css";

const SplashScreen = ({ onFinish }) => {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const stayTimer = setTimeout(() => {
      setIsLeaving(true);
    }, 2500);

    const finishTimer = setTimeout(() => {
      onFinish();
    }, 3500);

    return () => {
      clearTimeout(stayTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className={`splash-container ${isLeaving ? "splash-out" : ""}`}>
      <div className="image-wrapper">
        <img
          src="/images/RGMajestiic.png"
          alt="Majestic Fantasy Character"
          className="splash-image"
        />
      </div>
    </div>
  );
};

export default SplashScreen;
