const ArrowIcon = ({ direction = "left", size = 16 }) => {
  const rotate = direction === "left" ? "180deg" : "0deg";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ transform: `rotate(${rotate})` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;