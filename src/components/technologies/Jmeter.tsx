import React from 'react';

interface JMeterProps {
  size?: number;
  className?: string;
}

const JMeter: React.FC<JMeterProps> = ({ size = 32, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="256" height="256" rx="32" fill="#D22128" />

      {/* Gauge arc */}
      <path
        d="M64 160a64 64 0 0 1 128 0"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* Needle */}
      <line
        x1="128"
        y1="160"
        x2="176"
        y2="112"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinecap="round"
      />

      {/* Center dot */}
      <circle cx="128" cy="160" r="8" fill="#FFFFFF" />

      {/* Text */}
      <text
        x="128"
        y="212"
        textAnchor="middle"
        fontSize="28"
        fill="#FFFFFF"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="bold"
      >
        JMETER
      </text>
    </svg>
  );
};

export default JMeter;
