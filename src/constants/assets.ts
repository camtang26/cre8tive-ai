// Import all logo variants
import logoSmallJpeg from '@assets/logo-small.jpeg';
import logoMediumJpeg from '@assets/logo-medium.jpeg';
import logoLargeJpeg from '@assets/logo-large.jpeg';
import logoSmallWebp from '@assets/logo-small.webp';
import logoMediumWebp from '@assets/logo-medium.webp';
import logoLargeWebp from '@assets/logo-large.webp';

// Get the base URL for assets
const getAssetUrl = (importedPath: string): string => {
  // Remove any leading slash
  const cleanPath = importedPath.replace(/^\//, '');
  
  // In development, return the imported path as is
  if (!import.meta.env.PROD) {
    return cleanPath;
  }

  // In production, ensure we're using the correct base path
  const baseUrl = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL;
  return `${baseUrl}/${cleanPath}`;
};

// Log the asset paths in development to help with debugging
if (!import.meta.env.PROD) {
  console.log('Asset paths:', {
    smallJpeg: logoSmallJpeg,
    mediumJpeg: logoMediumJpeg,
    largeJpeg: logoLargeJpeg,
    smallWebp: logoSmallWebp,
    mediumWebp: logoMediumWebp,
    largeWebp: logoLargeWebp
  });
}

export const ASSETS = {
  logos: {
    small: {
      jpeg: getAssetUrl(logoSmallJpeg),
      webp: getAssetUrl(logoSmallWebp),
    },
    medium: {
      jpeg: getAssetUrl(logoMediumJpeg),
      webp: getAssetUrl(logoMediumWebp),
    },
    large: {
      jpeg: getAssetUrl(logoLargeJpeg),
      webp: getAssetUrl(logoLargeWebp),
    }
  }
} as const; 