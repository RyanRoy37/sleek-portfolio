export default function Bert() {
  return (
    <svg viewBox="0 0 256 256">
      {/* Outer circle */}
      <circle cx="128" cy="128" r="120" fill="#4B8BBE" />

      {/* Inner neural network nodes */}
      <circle cx="88" cy="88" r="10" fill="#FFFFFF" />
      <circle cx="168" cy="88" r="10" fill="#FFFFFF" />
      <circle cx="88" cy="168" r="10" fill="#FFFFFF" />
      <circle cx="168" cy="168" r="10" fill="#FFFFFF" />
      <circle cx="128" cy="128" r="12" fill="#FFFFFF" />

      {/* Connections */}
      <line x1="88" y1="88" x2="128" y2="128" stroke="#FFFFFF" strokeWidth="4" />
      <line x1="168" y1="88" x2="128" y2="128" stroke="#FFFFFF" strokeWidth="4" />
      <line x1="88" y1="168" x2="128" y2="128" stroke="#FFFFFF" strokeWidth="4" />
      <line x1="168" y1="168" x2="128" y2="128" stroke="#FFFFFF" strokeWidth="4" />

      {/* BERT label */}
      <text
        x="128"
        y="215"
        textAnchor="middle"
        fontSize="28"
        fill="#FFFFFF"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="bold"
      >
        BERT
      </text>
    </svg>
  );
}
