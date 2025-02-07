// Import all logo variants
import logoSmallJpeg from '/images/logo-small.jpeg';
import logoMediumJpeg from '/images/logo-medium.jpeg';
import logoLargeJpeg from '/images/logo-large.jpeg';
import logoSmallWebp from '/images/logo-small.webp';
import logoMediumWebp from '/images/logo-medium.webp';
import logoLargeWebp from '/images/logo-large.webp';

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