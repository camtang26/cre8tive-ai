import { Link as RouterLink, LinkProps } from 'react-router-dom';

export const Link = ({ to, children, ...props }: LinkProps) => {
  const handleClick = () => {
    if (typeof to === 'string' && !to.includes('#')) {
      window.history.scrollRestoration = 'manual';
    }
  };

  return (
    <RouterLink 
      to={to}
      onClick={handleClick}
      {...props}
    >
      {children}
    </RouterLink>
  );
};