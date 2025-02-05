export const getImageProps = (
  src: string,
  alt: string,
  width: number,
  height: number,
  priority = false
) => {
  // Basic props that should be applied to all images
  const baseProps = {
    src,
    alt,
    width,
    height,
    loading: priority ? "eager" : "lazy",
    decoding: "async",
  };

  // If it's an external URL (like Unsplash), return basic props
  if (src.startsWith('http')) {
    return baseProps;
  }

  // For local images, add srcSet for responsive images
  return {
    ...baseProps,
    srcSet: `${src}?w=${width}&q=75 1x, ${src}?w=${width * 2}&q=75 2x`,
  };
};

export const generateBlurDataUrl = async (src: string) => {
  try {
    const response = await fetch(src);
    const buffer = await response.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    return `data:image/jpeg;base64,${base64}`;
  } catch (error) {
    console.error('Error generating blur data URL:', error);
    return undefined;
  }
};