import { ButtonHTMLAttributes, ReactNode } from 'react';

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
}

const AnimatedButton = ({ children, variant = 'primary', className = '', href, onClick, ...props }: AnimatedButtonProps) => {
  const baseClasses = "relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg transition-all duration-200 overflow-hidden group";

  const variantClasses = variant === 'primary'
    ? "text-[#0d1117] bg-white hover:bg-gray-100"
    : "text-white bg-transparent border border-gray-700 hover:border-gray-600 hover:bg-white/5";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (href) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      style={{ fontFamily: 'Inter, sans-serif' }}
      onClick={handleClick}
      {...props}
    >
      {/* Efeito de borda animada - cobra deslizando */}
      <span className="absolute inset-0 rounded-lg overflow-hidden">
        {/* Borda animada superior */}
        <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-border-top"></span>

        {/* Borda animada direita */}
        <span className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-border-right"></span>

        {/* Borda animada inferior */}
        <span className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-transparent via-blue-500 to-transparent animate-border-bottom"></span>

        {/* Borda animada esquerda */}
        <span className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-transparent via-blue-500 to-transparent animate-border-left"></span>
      </span>

      {/* Conteúdo do botão */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default AnimatedButton;
