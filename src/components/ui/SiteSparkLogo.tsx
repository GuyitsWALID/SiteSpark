import React from 'react';

interface SiteSparkLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'icon' | 'full' | 'horizontal';
  className?: string;
}

export default function SiteSparkLogo({ 
  size = 'md', 
  variant = 'full',
  className = '' 
}: SiteSparkLogoProps) {
  
  const sizeConfig = {
    sm: {
      icon: 'w-6 h-6',
      container: 'w-6 h-6',
      text: 'text-sm',
      subtext: 'text-xs',
      spacing: 'space-x-2'
    },
    md: {
      icon: 'w-8 h-8',
      container: 'w-8 h-8',
      text: 'text-lg',
      subtext: 'text-xs',
      spacing: 'space-x-2'
    },
    lg: {
      icon: 'w-10 h-10',
      container: 'w-10 h-10',
      text: 'text-xl',
      subtext: 'text-xs',
      spacing: 'space-x-3'
    },
    xl: {
      icon: 'w-12 h-12',
      container: 'w-12 h-12',
      text: 'text-2xl',
      subtext: 'text-sm',
      spacing: 'space-x-4'
    }
  };

  const config = sizeConfig[size];

  // Custom SiteSpark icon SVG
  const SparkIcon = () => (
    <svg 
      className={`${config.icon} text-white`} 
      fill="none" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Lightning bolt with spark effect */}
      <path 
        d="M13 2L4.5 12H10L11 22L19.5 12H14L13 2Z" 
        fill="currentColor" 
        stroke="none"
      />
      {/* Spark dots around the lightning */}
      <circle cx="6" cy="8" r="1" fill="currentColor" opacity="0.8" />
      <circle cx="18" cy="16" r="1" fill="currentColor" opacity="0.8" />
      <circle cx="20" cy="8" r="0.8" fill="currentColor" opacity="0.6" />
      <circle cx="4" cy="16" r="0.8" fill="currentColor" opacity="0.6" />
    </svg>
  );

  if (variant === 'icon') {
    return (
      <div className={`${config.container} bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg ${className}`}>
        <SparkIcon />
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center ${config.spacing} ${className}`}>
        <div className={`${config.container} bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg`}>
          <SparkIcon />
        </div>
        <div className={`${config.text} font-bold text-gray-900`}>
          SiteSpark
        </div>
      </div>
    );
  }

  // Default 'full' variant
  return (
    <div className={`flex items-center ${config.spacing} ${className}`}>
      <div className={`${config.container} bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg`}>
        <SparkIcon />
      </div>
      <div>
        <div className={`${config.text} font-bold text-gray-900`}>SiteSpark</div>
        <div className={`${config.subtext} text-gray-500`}>Mini-Website Builder</div>
      </div>
    </div>
  );
}

// Export additional preset components for common use cases
export const SiteSparkIcon = ({ size = 'md', className = '' }: Omit<SiteSparkLogoProps, 'variant'>) => (
  <SiteSparkLogo variant="icon" size={size} className={className} />
);

export const SiteSparkHorizontal = ({ size = 'md', className = '' }: Omit<SiteSparkLogoProps, 'variant'>) => (
  <SiteSparkLogo variant="horizontal" size={size} className={className} />
);
