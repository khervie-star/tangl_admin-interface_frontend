type NavIconTypes = {
  onClick?: any;
};

export const Logo = () => {
  return (
    <>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 28.3333C22.3638 28.3333 28.3333 22.3638 28.3333 15C28.3333 7.63619 22.3638 1.66666 15 1.66666C7.63616 1.66666 1.66663 7.63619 1.66663 15C1.66663 22.3638 7.63616 28.3333 15 28.3333Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export const BarIcon = ({ onClick }: NavIconTypes) => {
  return (
    <div onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6H20"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 12H20"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 18H20"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const DeleteIcon = ({ onClick }: NavIconTypes) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M18 6L6 18"
        stroke="#A0AABA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke="#A0AABA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DrawerLogoIcon = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0003 28.3337C22.3641 28.3337 28.3337 22.3641 28.3337 15.0003C28.3337 7.63653 22.3641 1.66699 15.0003 1.66699C7.63653 1.66699 1.66699 7.63653 1.66699 15.0003C1.66699 22.3641 7.63653 28.3337 15.0003 28.3337Z"
        stroke="#007AFB"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
