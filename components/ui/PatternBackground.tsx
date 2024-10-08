import React from "react";

export function PatternBackground({
  styles,
  gridType,
}: {
  styles: string;
  gridType: string;
}) {
  return (
    <div className={`${gridType} ${styles} z-0`}>
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}
