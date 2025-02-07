// Import all logo variants
import logoSmallJpeg from '../assets/logo-small.jpeg';
import logoMediumJpeg from '../assets/logo-medium.jpeg';
import logoLargeJpeg from '../assets/logo-large.jpeg';
import logoSmallWebp from '../assets/logo-small.webp';
import logoMediumWebp from '../assets/logo-medium.webp';
import logoLargeWebp from '../assets/logo-large.webp';

// Get the base URL for assets
const getAssetUrl = (importedPath: string): string => {
  // In development, Vite handles the imports directly
  if (!import.meta.env.PROD) {
    return importedPath;
  }

  // In production, ensure we have clean relative paths without any leading slashes
  // This matches the build output structure and works with the custom domain
  return importedPath.startsWith('/') ? importedPath.slice(1) : importedPath;
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