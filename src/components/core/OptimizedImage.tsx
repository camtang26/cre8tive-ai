import { useState, useEffect } from 'react';
import { useLazyLoad } from '@/hooks/useLazyLoad';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  webpSrc: string;
  jpegSrc: string;
  alt: string;
}

export const OptimizedImage = ({
  webpSrc,
  jpegSrc,
  alt,
  ...props
}: OptimizedImageProps) => {
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <source srcSet={jpegSrc} type="image/jpeg" />
      <img src={jpegSrc} alt={alt} {...props} />
    </picture>
  );
};