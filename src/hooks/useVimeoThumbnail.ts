import { useState, useEffect } from "react";

export function useVimeoThumbnail(videoId: string) {
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  useEffect(() => {
    if (!videoId) return;

    const fetchThumbnail = async () => {
      try {
        const response = await fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`);
        const data = await response.json();
        // Get a higher resolution thumbnail by replacing the dimensions in the URL
        // The default is often small (e.g. _295x166). We'll try to get the source or a larger version.
        // Vimeo usually allows removing the params or setting generic ones.
        // Let's try to just use the base URL or modify the dimensions.
        // The URL format is usually: .../video/{id}-{hash}-d_{width}x{height}
        // We can try to change it to 1280x720 for better quality.
        
        let thumbUrl = data.thumbnail_url;
        if (thumbUrl) {
            // Regex to replace dimensions (e.g. _295x166) with _1280x720
            thumbUrl = thumbUrl.replace(/_\d+x\d+/, '_1280x720');
        }
        setThumbnail(thumbUrl);
      } catch (error) {
        console.error(`Failed to fetch thumbnail for Vimeo video ${videoId}`, error);
      }
    };

    fetchThumbnail();
  }, [videoId]);

  return thumbnail;
}
