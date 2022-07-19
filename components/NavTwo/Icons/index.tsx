type NavIconTypes = {
  onClick?: any;
};

export const NavTwoLogo = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9998 28.3334C22.3636 28.3334 28.3332 22.3638 28.3332 15C28.3332 7.63622 22.3636 1.66669 14.9998 1.66669C7.63604 1.66669 1.6665 7.63622 1.6665 15C1.6665 22.3638 7.63604 28.3334 14.9998 28.3334Z"
        stroke="#011122"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BarIconTwo = ({ onClick }: NavIconTypes) => {
  return (
    <svg
      onClick={onClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6H20"
        stroke="#011122"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12H20"
        stroke="#011122"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 18H20"
        stroke="#011122"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
