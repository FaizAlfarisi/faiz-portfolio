"use client";

import { useEffect, useState } from "react";
import { Meteor, Star } from "../../types";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [fallingStars, setFallingStars] = useState<Meteor[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    generateStars();
    generateFallingStars();
    generateMeteors();
    
    const handleResize = () => {
      generateStars();
      generateFallingStars();
    };

    window.addEventListener("resize", handleResize)
    
    return () => window.removeEventListener("resize", generateStars)
  }, []);

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 15,
        delay: Math.random() * 20,
        animationDuration: Math.random() * 3 + 5,
      });
    }  
    setMeteors(newMeteors);
  };

  const generateFallingStars = () => {
    const numberOfStars = 6;
    const newFallingStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newFallingStars.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 10,
        delay: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 3,
      });
    }  
    setFallingStars(newFallingStars);
  };

  const generateStars = () => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }  
    setStars(newStars);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 animate-fade">
      {stars.map((star) => (
        <div 
          key={star.id} 
          className="star animate-pulse-subtle" 
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}
      
      {fallingStars.map((fallingStar) => (
        <div 
          key={fallingStar.id} 
          className="meteor animate-meteor" 
          style={{
            width: fallingStar.size + "px",
            height: fallingStar.size + "px",
            left: fallingStar.x + "%",
            top: fallingStar.y + "%",
            animationDelay: fallingStar.delay + "s",
            animationDuration: fallingStar.animationDuration + "s",
          }}
        />
      ))}
      
      {meteors.map((meteor) => (
        <div 
          key={meteor.id} 
          className="meteor animate-meteor" 
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
}

export default StarBackground;