import { useState } from "react";
import "./HeroAvatar.css";

interface HeroAvatarProps {
  profile: string;
  logo: string;
}

export default function HeroAvatar({
  profile,
  logo,
}: HeroAvatarProps) {

  const [flipped, setFlipped] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const distance = e.changedTouches[0].clientX - touchStart;

    if (distance < -40) {
      setFlipped(true);
    }

    if (distance > 40) {
      setFlipped(false);
    }
  };

  return (
    <div
      className={`hero-avatar ${flipped ? "flipped" : ""}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="hero-avatar-inner">

        <div className="hero-avatar-front">
          <img src={profile} alt="Sandesh" />
        </div>

        <div className="hero-avatar-back">
          <img src={logo} alt="Sandesh Visuals" />
        </div>

      </div>
    </div>
  );
}