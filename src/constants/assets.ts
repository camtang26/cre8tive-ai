// Import all logo variants
import logoSmallJpeg from '@assets/logo-small.jpeg';
import logoMediumJpeg from '@assets/logo-medium.jpeg';
import logoLargeJpeg from '@assets/logo-large.jpeg';
import logoSmallWebp from '@assets/logo-small.webp';
import logoMediumWebp from '@assets/logo-medium.webp';
import logoLargeWebp from '@assets/logo-large.webp';

// Get the base URL for assets
const getAssetUrl = (importedPath: string): string => {
  // In development, Vite handles the imports directly
  if (!import.meta.env.PROD) {
    return importedPath;
  }

  // In production, we need to ensure the path is relative to the base URL
  const baseUrl = import.meta.env.BASE_URL || '/';
  // The importedPath will already contain the correct hashed filename from Vite
  return importedPath.startsWith('/') ? importedPath : `${baseUrl}${importedPath}`;
};

// Log the asset paths in development to help with debugging
if (!import.meta.env.PROD) {
  // Asset paths logging removed
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