import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
  url?: string;
}

export function usePageMeta({ title, description, url }: PageMetaProps) {
  const siteUrl = "https://echooroom.com";
  const previewImage = `${siteUrl}/assets/echooroom-preview.png`;
  const shareTitle = title.length > 60 ? `${title.slice(0, 57).trim()}...` : title;
  const shareDescription = description.length > 160 ? `${description.slice(0, 157).trim()}...` : description;

  useEffect(() => {
    // Update page title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", shareDescription);

    // Update og:title (optional, for social sharing)
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", shareTitle);

    // Update og:description (optional, for social sharing)
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute("content", shareDescription);

    // Update og:image and social share preview image
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement("meta");
      ogImage.setAttribute("property", "og:image");
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute("content", previewImage);

    let ogImageType = document.querySelector('meta[property="og:image:type"]');
    if (!ogImageType) {
      ogImageType = document.createElement("meta");
      ogImageType.setAttribute("property", "og:image:type");
      document.head.appendChild(ogImageType);
    }
    ogImageType.setAttribute("content", "image/png");

    let ogImageWidth = document.querySelector('meta[property="og:image:width"]');
    if (!ogImageWidth) {
      ogImageWidth = document.createElement("meta");
      ogImageWidth.setAttribute("property", "og:image:width");
      document.head.appendChild(ogImageWidth);
    }
    ogImageWidth.setAttribute("content", "1200");

    let ogImageHeight = document.querySelector('meta[property="og:image:height"]');
    if (!ogImageHeight) {
      ogImageHeight = document.createElement("meta");
      ogImageHeight.setAttribute("property", "og:image:height");
      document.head.appendChild(ogImageHeight);
    }
    ogImageHeight.setAttribute("content", "1200");

    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement("meta");
      ogType.setAttribute("property", "og:type");
      document.head.appendChild(ogType);
    }
    ogType.setAttribute("content", "website");

    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      twitterCard = document.createElement("meta");
      twitterCard.setAttribute("name", "twitter:card");
      document.head.appendChild(twitterCard);
    }
    twitterCard.setAttribute("content", "summary_large_image");

    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImage) {
      twitterImage = document.createElement("meta");
      twitterImage.setAttribute("name", "twitter:image");
      document.head.appendChild(twitterImage);
    }
    twitterImage.setAttribute("content", previewImage);

    let ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
    if (!ogImageAlt) {
      ogImageAlt = document.createElement("meta");
      ogImageAlt.setAttribute("property", "og:image:alt");
      document.head.appendChild(ogImageAlt);
    }
    ogImageAlt.setAttribute("content", shareTitle);

    // Update canonical URL (optional)
    if (url) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", url);
    }
  }, [title, description, url]);
}
