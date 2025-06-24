import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}

export const SEO = ({
  title = 'Cre8tive AI - AI-Powered Video Production & Content Creation',
  description = 'Transform your business with AI-powered video production, autonomous agents, and innovative content creation solutions. Cre8tive AI helps you stay ahead of the competition.',
  keywords = ['AI', 'Video Production', 'Content Creation', 'Artificial Intelligence', 'Digital Marketing'],
  image = '/og-image.png',
  url = 'https://camtang26.github.io/cre8tive-ai/',
  type = 'website'
}: SEOProps) => {
  const siteTitle = 'Cre8tive AI';
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#000000" />
      <link rel="canonical" href={url} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: siteTitle,
          description: description,
          url: url,
          logo: image,
          sameAs: [
            'https://twitter.com/cre8tiveai',
            'https://linkedin.com/company/cre8tiveai'
          ]
        })}
      </script>
    </Helmet>
  );
}; 