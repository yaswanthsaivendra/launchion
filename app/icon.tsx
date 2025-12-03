import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Rocket Body */}
          <path d="M50 10 L60 40 L60 70 L50 80 L40 70 L40 40 Z" fill="white" />

          {/* Rocket Nose Cone */}
          <path d="M50 10 L40 40 L60 40 Z" fill="white" opacity="0.9" />

          {/* Rocket Window */}
          <circle cx="50" cy="50" r="8" fill="#6366F1" opacity="0.3" />

          {/* Left Fin */}
          <path d="M40 60 L30 75 L40 70 Z" fill="white" opacity="0.8" />

          {/* Right Fin */}
          <path d="M60 60 L70 75 L60 70 Z" fill="white" opacity="0.8" />

          {/* Flame/Exhaust */}
          <path
            d="M45 80 L50 90 L55 80 L52 85 L50 88 L48 85 Z"
            fill="#FCD34D"
            opacity="0.9"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
