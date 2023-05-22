import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  let buttonStyle = 'text-white from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 active:from-blue-700 active:to-blue-900';

  if (variant === 'secondary') {
    buttonStyle = 'text-black from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 active:from-gray-500 active:to-gray-600';
  }

  const classes = `transition-all inline-block py-2 px-4 text-center bg-gradient-to-r rounded-md ${buttonStyle}`;

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export default Button;
