// Centralized icon management system
import { iconConfig, socialIcons, getIconForContext, getIconSize } from '@/components/icon-config.js';

// Social icons
import mastodon from '@images/icons/mastodon.svg';
import instagram from '@images/icons/instagram.svg';
import twitch from '@images/icons/twitch.svg';

// UI icons
import arrowLeftShort from '@images/icons/arrow-left-short.svg';
import arrowRightShort from '@images/icons/arrow-right-short.svg';
import chevronDown from '@images/icons/chevron-down.svg';
import chevronLeft from '@images/icons/chevron-left.svg';
import chevronRight from '@images/icons/chevron-right.svg';
import chevronUp from '@images/icons/chevron-up.svg';
import close from '@images/icons/close.svg';
import list from '@images/icons/list.svg';

// Inline SVG icons for UI (better performance for simple icons)
export const iconSVG = {
  // Dropdown arrow
  chevronDown: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  
  // Back arrow (left chevron)
  chevronLeft: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  
  // Hamburger menu
  menu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  
  // Close icon
  close: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  
  // Right arrow (right chevron)
  chevronRight: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  
  // Full right arrow
  arrowRight: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  
  // Short left arrow for slider (horizontal arrow)
  arrowLeftShort: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  
  // Short right arrow for slider (horizontal arrow)
  arrowRightShort: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  
  // Inline social icons
  mastodon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M22.38 24.39C26.412 23.91 29.92 21.44 30.36 19.184C31.056 15.628 31 10.506 31 10.506C31 3.566 26.428 1.53 26.428 1.53C24.124 0.476 20.166 0.034 16.054 0H15.954C11.84 0.034 7.884 0.476 5.58 1.53C5.58 1.53 1.01 3.564 1.01 10.506L1.006 11.83C0.998004 13.11 0.992004 14.53 1.028 16.012C1.194 22.8 2.28 29.492 8.588 31.152C11.496 31.918 13.994 32.078 16.006 31.968C19.652 31.768 21.7 30.674 21.7 30.674L21.58 28.04C21.58 28.04 18.974 28.86 16.046 28.76C13.146 28.66 10.086 28.448 9.616 24.904C9.57346 24.575 9.55142 24.2437 9.55 23.912C9.55 23.912 12.398 24.604 16.006 24.768C18.212 24.868 20.28 24.64 22.382 24.39H22.38ZM25.606 19.45H22.26V11.29C22.26 9.572 21.532 8.7 20.078 8.7C18.47 8.7 17.664 9.734 17.664 11.782V16.248H14.336V11.78C14.336 9.732 13.53 8.698 11.922 8.698C10.468 8.698 9.74 9.57 9.74 11.29V19.448H6.394V11.044C6.394 9.32667 6.834 7.96267 7.714 6.952C8.626 5.942 9.818 5.424 11.3 5.424C13.012 5.424 14.308 6.08 15.166 7.39L16 8.78L16.834 7.39C17.692 6.08 18.988 5.424 20.702 5.424C22.182 5.424 23.374 5.942 24.284 6.952C25.1667 7.96133 25.6073 9.32533 25.606 11.044V19.45Z" fill="currentColor"/>
  </svg>`,
  
  instagram: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g clip-path="url(#clip0_5_76)">
    <path d="M16 0C11.658 0 11.112 0.02 9.406 0.096C7.7 0.176 6.538 0.444 5.52 0.84C4.45169 1.24065 3.48428 1.8708 2.686 2.686C1.8708 3.48428 1.24065 4.45169 0.84 5.52C0.444 6.536 0.174 7.7 0.096 9.4C0.02 11.11 0 11.654 0 16.002C0 20.346 0.02 20.89 0.096 22.596C0.176 24.3 0.444 25.462 0.84 26.48C1.25 27.532 1.796 28.424 2.686 29.314C3.574 30.204 4.466 30.752 5.518 31.16C6.538 31.556 7.698 31.826 9.402 31.904C11.11 31.98 11.654 32 16 32C20.346 32 20.888 31.98 22.596 31.904C24.298 31.824 25.464 31.556 26.482 31.16C27.5496 30.7591 28.5163 30.129 29.314 29.314C30.204 28.424 30.75 27.532 31.16 26.48C31.554 25.462 31.824 24.3 31.904 22.596C31.98 20.89 32 20.346 32 16C32 11.654 31.98 11.11 31.904 9.402C31.824 7.7 31.554 6.536 31.16 5.52C30.7593 4.45169 30.1292 3.48428 29.314 2.686C28.5157 1.8708 27.5483 1.24065 26.48 0.84C25.46 0.444 24.296 0.174 22.594 0.096C20.886 0.02 20.344 0 15.996 0H16ZM14.566 2.884H16.002C20.274 2.884 20.78 2.898 22.466 2.976C24.026 3.046 24.874 3.308 25.438 3.526C26.184 3.816 26.718 4.164 27.278 4.724C27.838 5.284 28.184 5.816 28.474 6.564C28.694 7.126 28.954 7.974 29.024 9.534C29.102 11.22 29.118 11.726 29.118 15.996C29.118 20.266 29.102 20.774 29.024 22.46C28.954 24.02 28.692 24.866 28.474 25.43C28.2157 26.1238 27.8065 26.7516 27.276 27.268C26.716 27.828 26.184 28.174 25.436 28.464C24.876 28.684 24.028 28.944 22.466 29.016C20.78 29.092 20.274 29.11 16.002 29.11C11.73 29.11 11.222 29.092 9.536 29.016C7.976 28.944 7.13 28.684 6.566 28.464C5.87167 28.2065 5.2432 27.798 4.726 27.268C4.19455 26.7512 3.78466 26.1227 3.526 25.428C3.308 24.866 3.046 24.018 2.976 22.458C2.9 20.772 2.884 20.266 2.884 15.992C2.884 11.718 2.9 11.216 2.976 9.53C3.048 7.97 3.308 7.122 3.528 6.558C3.818 5.812 4.166 5.278 4.726 4.718C5.286 4.158 5.818 3.812 6.566 3.522C7.13 3.302 7.976 3.042 9.536 2.97C11.012 2.902 11.584 2.882 14.566 2.88V2.884ZM24.542 5.54C24.2899 5.54 24.0402 5.58966 23.8072 5.68615C23.5743 5.78264 23.3626 5.92407 23.1844 6.10236C23.0061 6.28064 22.8646 6.4923 22.7682 6.72525C22.6717 6.95819 22.622 7.20786 22.622 7.46C22.622 7.71214 22.6717 7.96181 22.7682 8.19475C22.8646 8.4277 23.0061 8.63936 23.1844 8.81765C23.3626 8.99593 23.5743 9.13736 23.8072 9.23385C24.0402 9.33034 24.2899 9.38 24.542 9.38C25.0512 9.38 25.5396 9.17772 25.8996 8.81765C26.2597 8.45757 26.462 7.96922 26.462 7.46C26.462 6.95078 26.2597 6.46242 25.8996 6.10236C25.5396 5.74229 25.0512 5.54 24.542 5.54ZM16.002 7.784C14.9121 7.767 13.8298 7.96697 12.818 8.37228C11.8061 8.77759 10.885 9.38014 10.1083 10.1448C9.33157 10.9096 8.71473 11.8211 8.29368 12.8265C7.87264 13.8319 7.6558 14.911 7.6558 16.001C7.6558 17.091 7.87264 18.1701 8.29368 19.1755C8.71473 20.1809 9.33157 21.0924 10.1083 21.8572C10.885 22.6219 11.8061 23.2244 12.818 23.6297C13.8298 24.035 14.9121 24.235 16.002 24.218C18.1591 24.1843 20.2164 23.3038 21.73 21.7665C23.2435 20.2292 24.0918 18.1583 24.0918 16.001C24.0918 13.8437 23.2435 11.7728 21.73 10.2355C20.2164 8.69817 18.1591 7.81765 16.002 7.784ZM16.002 10.666C16.7025 10.666 17.3961 10.804 18.0432 11.072C18.6904 11.3401 19.2784 11.733 19.7737 12.2283C20.269 12.7236 20.6619 13.3116 20.93 13.9588C21.198 14.6059 21.336 15.2995 21.336 16C21.336 16.7005 21.198 17.3941 20.93 18.0412C20.6619 18.6884 20.269 19.2764 19.7737 19.7717C19.2784 20.267 18.6904 20.6599 18.0432 20.928C17.3961 21.196 16.7025 21.334 16.002 21.334C14.5873 21.334 13.2306 20.772 12.2303 19.7717C11.23 18.7714 10.668 17.4147 10.668 16C10.668 14.5853 11.23 13.2286 12.2303 12.2283C13.2306 11.228 14.5873 10.666 16.002 10.666Z" fill="currentColor"/>
    </g>
    <defs>
    <clipPath id="clip0_5_76">
    <rect width="32" height="32" fill="white"/>
    </clipPath>
    </defs>
  </svg>`,
  
  twitch: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M7.714 0L2 5.714V26.286H8.858V32L14.572 26.286H19.14L29.428 16V0H7.714ZM27.142 14.858L22.572 19.428H18L14 23.428V19.428H8.858V2.286H27.142V14.858Z" fill="currentColor"/>
    <path d="M23.714 6.28613H21.428V13.1401H23.714V6.28613ZM17.428 6.28613H15.142V13.1401H17.428V6.28613Z" fill="currentColor"/>
  </svg>`
};

// Icons as external files (for social media, logos, etc.)
export const iconFiles = {
  social: {
    mastodon,
    instagram,
    twitch
  },
  ui: {
    arrowLeftShort,
    arrowRightShort,
    chevronDown,
    chevronLeft,
    chevronRight,
    chevronUp,
    close,
    list
  }
};

// Helper function to create inline icons
export function createIcon(iconName, options = {}) {
  const {
    className = '',
    size = 'medium',
    theme = '',
    ariaLabel = '',
    context = ''
  } = options;
  
  const svg = iconSVG[iconName];
  if (!svg) {
    console.warn(`Icon '${iconName}' not found`);
    return '';
  }
  
  const iconSize = typeof size === 'string' ? getIconSize(size) : size;
  
  // Build CSS classes
  let classes = ['icon'];
  
  // Add size class
  if (typeof size === 'string') {
    classes.push(`icon--${size}`);
  }
  
  // Add context class if specified
  if (context && iconConfig.classes[context]) {
    classes.push(iconConfig.classes[context]);
  }
  
  // Add color theme if specified
  if (theme && iconConfig.themes[theme]) {
    classes.push(iconConfig.themes[theme]);
  }
  
  // Add custom classes
  if (className) {
    classes.push(className);
  }
  
  const classAttr = ` class="${classes.join(' ')}"`;
  const ariaAttr = ariaLabel ? ` aria-label="${ariaLabel}"` : ' aria-hidden="true"';
  
  return svg.replace('<svg', `<svg${classAttr}${ariaAttr}`);
}

// Function to create icons for specific context
export function createContextIcon(context, action, options = {}) {
  const iconName = getIconForContext(context, action);
  if (!iconName) {
    console.warn(`Icon for context '${context}.${action}' not found`);
    return '';
  }
  
  // Set context automatically if not specified
  if (!options.context) {
    options.context = context;
  }
  
  return createIcon(iconName, options);
}

// Function for icons with external file
export function createIconImg(category, iconName, alt = '', className = '') {
  const iconPath = iconFiles[category]?.[iconName];
  if (!iconPath) {
    console.warn(`Icon '${category}.${iconName}' not found`);
    return '';
  }
  
  const classAttr = className ? ` class="${className}"` : '';
  return `<img src="${iconPath}" alt="${alt}"${classAttr} />`;
}

// Specific function for social icons (inline SVG)
export function createSocialIcon(socialName, options = {}) {
  const {
    className = '',
    size = 'large',
    ariaLabel = ''
  } = options;
  
  // Check if social icon exists
  if (!iconSVG[socialName]) {
    console.warn(`Social icon '${socialName}' not found`);
    return '';
  }
  
  // Get brand class if available
  const brandClass = iconConfig.socialBrands[socialName] || '';
  const socialClasses = `social-icon ${brandClass} ${className}`.trim();
  
  // Use createIcon but force social context
  return createIcon(socialName, {
    className: socialClasses,
    size,
    context: 'social',
    ariaLabel
  });
}
