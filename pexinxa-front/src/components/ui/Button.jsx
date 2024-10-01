import PropTypes from 'prop-types';

export const Button = ({ children, onClick, variant = 'ghost', size = 'md', className = '' }) => {
  const baseStyle = 'px-4 py-2 rounded focus:outline-none';
  const variantStyles = {
    ghost: 'bg-transparent hover:bg-gray-200',
    solid: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
  };

  const sizeStyles = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const buttonClassName = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  );
};


Button.propTypes = {
  children: PropTypes.node.isRequired, 
  onClick: PropTypes.func, 
  variant: PropTypes.oneOf(['ghost', 'solid', 'outline']), 
  size: PropTypes.oneOf(['sm', 'md', 'lg']), 
  className: PropTypes.string, 
};

export default Button;
