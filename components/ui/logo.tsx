export function LaunchionLogo({
  className = "h-8 w-8",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>

      {/* Rocket Body */}
      <path
        d="M50 10 L60 40 L60 70 L50 80 L40 70 L40 40 Z"
        fill="url(#logoGradient)"
      />

      {/* Rocket Nose Cone */}
      <path
        d="M50 10 L40 40 L60 40 Z"
        fill="url(#logoGradient)"
        opacity="0.9"
      />

      {/* Rocket Window */}
      <circle cx="50" cy="50" r="8" fill="white" opacity="0.9" />
      <circle cx="50" cy="50" r="5" fill="#6366F1" opacity="0.3" />

      {/* Left Fin */}
      <path
        d="M40 60 L30 75 L40 70 Z"
        fill="url(#logoGradient)"
        opacity="0.8"
      />

      {/* Right Fin */}
      <path
        d="M60 60 L70 75 L60 70 Z"
        fill="url(#logoGradient)"
        opacity="0.8"
      />

      {/* Flame/Exhaust */}
      <path
        d="M45 80 L50 90 L55 80 L52 85 L50 88 L48 85 Z"
        fill="#F59E0B"
        opacity="0.8"
      />
      <path d="M47 82 L50 87 L53 82 Z" fill="#FCD34D" opacity="0.9" />
    </svg>
  );
}
