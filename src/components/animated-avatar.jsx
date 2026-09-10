"use client";

import { useEffect, useState } from "react";

export default function AnimatedAvatar() {
  const [pupil, setPupil] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function handlePointerMove(e) {
      const eyeCenterX = window.innerWidth / 2;
      const eyeCenterY = window.innerHeight / 4;

      const dx = e.clientX - eyeCenterX;
      const dy = e.clientY - eyeCenterY;

      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance === 0) {
        setPupil({ x: 0, y: 0 });
        return;
      }

      // حداکثر میزان حرکت مردمک
      const maxMove = 8;

      const move = Math.min(distance / 15, maxMove);

      const x = (dx / distance) * move;
      const y = (dy / distance) * move;

      setPupil({
        x,
        y,
      });
    }

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div className="character">
      {/* =========================
                LAYER 1
                سفیدی چشم
            ========================= */}
      <img src="/images/character/eyes-white.png" className="eyes" alt="" />

      {/* =========================
                LAYER 2
                مردمک
            ========================= */}
      <img
        src="/images/character/pupils.png"
        className="pupils"
        alt=""
        style={{
          transform: `
                        translate(${pupil.x}px, ${pupil.y}px)
                    `,
        }}
      />

      {/* =========================
                LAYER 3
                پوسته کاراکتر
            ========================= */}
      <img
        src="/images/character/character.png"
        className="character-image"
        alt=""
      />
    </div>
  );
}
