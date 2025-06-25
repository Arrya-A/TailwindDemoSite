import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      // e.clientX and e.clientY are the cursor's position within the viewport.
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="fixed border-4 border-emerald-600 top-2 left-2 w-6 h-6 bg-white rounded-full pointer-events-none z-[100] transition-transform duration-100 linear"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
    </>
  );
};

export default Cursor;
