import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  let buttonStyle = 'text-blue-700 font-bold bg-green-500';

  if (variant === 'secondary') {
    buttonStyle = 'text-black from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 active:from-gray-500 active:to-gray-600';
  }

  const classes = `transition-all inline-block py-2 px-4 text-center  rounded-md ${buttonStyle}`;

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export default Button;
