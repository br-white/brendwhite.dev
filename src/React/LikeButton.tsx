import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [animateLikes, setAnimateLikes] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const storedIsLiked = localStorage.getItem("websiteIsLiked");
    if (storedIsLiked) {
      setIsLiked(storedIsLiked === "true");
    }

    // Calculate likes as 650 + number of days from Jan 1, 2026
    const calculateLikes = () => {
      const baseDate = new Date("2026-01-01T00:00:00Z");
      const today = new Date();
      const diffTime = today.getTime() - baseDate.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      return 650 + Math.max(0, diffDays);
    };

    const updateLikes = () => {
      const calculatedLikes = calculateLikes();
      setLikes(calculatedLikes);
      setAnimateLikes(true);
      setTimeout(() => setAnimateLikes(false), 300);
    };

    // Set initial likes
    updateLikes();

    // Update likes at midnight to reflect new day
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const msUntilMidnight = tomorrow.getTime() - now.getTime();

    let intervalId: NodeJS.Timeout | null = null;

    const timeoutId = setTimeout(() => {
      updateLikes();
      // Update every 24 hours
      intervalId = setInterval(updateLikes, 24 * 60 * 60 * 1000);
    }, msUntilMidnight);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  const triggerLikeAnimation = () => {
    setTriggerAnimation(true);
    setTimeout(() => {
      setTriggerAnimation(false);
    }, 300);
  };

  const handleLike = () => {
    if (isLiked) {
      triggerLikeAnimation();
      return;
    }

    // Just update local state, likes are calculated from date
    setIsLiked(true);
    localStorage.setItem("websiteIsLiked", "true");
    triggerLikeAnimation();
  };

  if (!isClient) return null;

  const borderColorClass = isLiked
    ? "border-[var(--sec)]"
    : "border-[var(--white-icon)]";

  const svgClasses = `
    w-6 h-6 transition-all duration-300 ease-in-out 
    ${isLiked ? "text-[var(--sec)] scale-110" : "text-[var(--white-icon)] group-hover:text-[var(--white)] group-hover:scale-105"}
    ${triggerAnimation ? " animate-scale" : ""}
  `;

  return (
    <div className="flex items-center">
      <button
        onClick={handleLike}
        className={`
          group relative w-40 h-10 flex items-center justify-center p-3
          rounded-full transition-all duration-300 ease-in-out transform border-2 ${borderColorClass}
          ${!isLiked ? "md:hover:border-[var(--white)]" : ""}
          ${triggerAnimation ? " animate-scale" : ""}
        `}
      >
        <Heart
          className={svgClasses}
          fill={isLiked ? "currentColor" : "none"}
          strokeWidth={2}
        />
        <span
          className={`
          text-sm pl-3 transition-all duration-300 ease-in-out ${animateLikes ? "animate-scale" : ""}
          text-[var(--white)]
        `}
        >
          {likes} Likes
        </span>
      </button>
    </div>
  );
};

export default LikeButton;
