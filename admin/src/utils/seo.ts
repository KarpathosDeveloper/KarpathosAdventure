import { useEffect } from "react";

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath: string; // e.g. "/about" or "/experiences/some-slug"
  ogImage?: string;
  schema?: any;
}

export function useSEO({ title, description, canonicalPath, ogImage, schema }: SEOProps) {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper function to get or create a meta tag
    const updateMeta = (nameOrProperty: string, value: string, isProperty = false) => {
      const selector = isProperty
        ? `meta[property="${nameOrProperty}"]`
        : `meta[name="${nameOrProperty}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        if (isProperty) {
          el.setAttribute("property", nameOrProperty);
        } else {
          el.setAttribute("name", nameOrProperty);
        }
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    // 2. Update Description
    updateMeta("description", description);

    // 3. Update Canonical Link
    const domain = "https://karpathosadventures.com";
    const fullUrl = `${domain}${canonicalPath}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", fullUrl);

    // 4. Update Open Graph Meta Tags
    updateMeta("og:title", title, true);
    updateMeta("og:description", description, true);
    updateMeta("og:url", fullUrl, true);
    if (ogImage) {
      updateMeta("og:image", ogImage, true);
    } else {
      updateMeta("og:image", "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200", true);
    }

    // 5. Update Twitter Meta Tags
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);
    if (ogImage) {
      updateMeta("twitter:image", ogImage);
    } else {
      updateMeta("twitter:image", "https://images.pexels.com/photos/37037802/pexels-photo-37037802.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200");
    }

    // 6. Update JSON-LD Schema
    const schemaId = "dynamic-seo-schema";
    let scriptEl = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (schema) {
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.id = schemaId;
        scriptEl.type = "application/ld+json";
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(schema);
    } else {
      if (scriptEl) {
        scriptEl.remove();
      }
    }
  }, [title, description, canonicalPath, ogImage, schema]);
}
