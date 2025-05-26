/**
 * Configurazione icone per il progetto Pirate Landing Page
 * 
 * Questo file definisce tutte le icone utilizzate nel progetto e le loro configurazioni
 */

// Configurazione per le icone UI (inline SVG)
export const iconConfig = {
  // Dimensioni standard
  sizes: {
    small: 16,
    medium: 24,
    large: 32,
    xlarge: 48
  },
  
  // Classi CSS predefinite per diversi contesti
  classes: {
    navigation: 'nav-icon',
    social: 'social-icon',
    button: 'btn-icon',
    decorative: 'decorative-icon'
  },
  
  // Temi colore disponibili
  themes: {
    primary: 'icon--primary',
    secondary: 'icon--secondary',
    success: 'icon--success',
    warning: 'icon--warning',
    danger: 'icon--danger',
    light: 'icon--light',
    dark: 'icon--dark'
  },
  
  // Social brand specifiche
  socialBrands: {
    facebook: 'social-icon--facebook',
    twitter: 'social-icon--twitter',
    instagram: 'social-icon--instagram',
    linkedin: 'social-icon--linkedin',
    mastodon: 'social-icon--mastodon',
    twitch: 'social-icon--twitch'
  },
  
  // Mapping delle icone per contesto
  context: {
    menu: {
      dropdown: 'chevronDown',
      back: 'chevronLeft',
      close: 'close',
      hamburger: 'menu'
    },
    navigation: {
      next: 'chevronRight',
      previous: 'chevronLeft',
      up: 'chevronUp',
      down: 'chevronDown'
    },
    actions: {
      close: 'close',
      expand: 'chevronDown',
      collapse: 'chevronUp'
    }
  }
};

// Funzione helper per ottenere dimensione icona
export function getIconSize(sizeName) {
  return iconConfig.sizes[sizeName] || iconConfig.sizes.medium;
}

// Funzione helper per ottenere configurazione icona per contesto
export function getIconForContext(context, action) {
  return iconConfig.context[context]?.[action] || null;
}

// Lista delle icone social con i loro metadati
export const socialIcons = {
  mastodon: {
    name: 'Mastodon',
    color: '#6364FF',
    url: 'https://mastodon.social'
  },
  instagram: {
    name: 'Instagram', 
    color: '#E4405F',
    url: 'https://instagram.com'
  },
  twitch: {
    name: 'Twitch',
    color: '#9146FF', 
    url: 'https://twitch.tv'
  }
};
