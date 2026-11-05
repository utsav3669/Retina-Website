import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'Retina Educational Consultancy';
const DEFAULT_DESCRIPTION =
  "Doctor-led guidance for medical admissions abroad from Retina Educational Consultancy in Kathmandu, Nepal.";
const DEFAULT_IMAGE = '/images/hero.jpg';
const DESCRIPTION_LIMIT = 160;

function toPlainText(value) {
  if (typeof value !== 'string' && typeof value !== 'number') return '';

  return String(value)
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function limitDescription(value) {
  const description = toPlainText(value) || DEFAULT_DESCRIPTION;
  if (description.length <= DESCRIPTION_LIMIT) return description;

  const shortened = description.slice(0, DESCRIPTION_LIMIT - 3);
  const lastSpace = shortened.lastIndexOf(' ');
  return `${shortened.slice(0, lastSpace > 120 ? lastSpace : shortened.length).trimEnd()}...`;
}

function absoluteUrl(value) {
  try {
    return new URL(value || DEFAULT_IMAGE, window.location.origin).href;
  } catch {
    return new URL(DEFAULT_IMAGE, window.location.origin).href;
  }
}

function currentCanonicalUrl() {
  const url = new URL(window.location.href);
  url.search = '';
  url.hash = '';
  if (url.pathname.length > 1) url.pathname = url.pathname.replace(/\/+$/, '');
  return url.href;
}

function upsertManagedMeta(key, attribute, value) {
  const selector = `meta[data-page-meta="${key}"]`;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('data-page-meta', key);
    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
  element.setAttribute('content', value);
}

/**
 * Updates the document head after React commits. Keeping these changes in an
 * effect avoids mutating the rendered tree and stays safe if the app is later
 * server-rendered and hydrated. Pages without PageHeader should call this hook
 * directly with their title, description, and any article-specific options.
 */
export default function usePageMetadata(title, description, options = {}) {
  const { pathname } = useLocation();
  const {
    type = 'website',
    image = DEFAULT_IMAGE,
    author = '',
    publishedTime = '',
    robots = 'index,follow',
  } = options;

  useEffect(() => {
    const pageTitle = toPlainText(title) || SITE_NAME;
    const brandedTitle = pageTitle.toLowerCase().includes(SITE_NAME.toLowerCase())
      ? pageTitle
      : `${pageTitle} | ${SITE_NAME}`;
    const pageDescription = limitDescription(description);
    const canonicalUrl = currentCanonicalUrl();
    const pageImage = absoluteUrl(image);
    const metadata = [
      ['description', 'name', pageDescription],
      ['robots', 'name', robots],
      ['og:title', 'property', brandedTitle],
      ['og:description', 'property', pageDescription],
      ['og:type', 'property', type],
      ['og:url', 'property', canonicalUrl],
      ['og:site_name', 'property', SITE_NAME],
      ['og:image', 'property', pageImage],
      ['twitter:card', 'name', 'summary_large_image'],
      ['twitter:title', 'name', brandedTitle],
      ['twitter:description', 'name', pageDescription],
      ['twitter:image', 'name', pageImage],
    ];

    if (author) metadata.push(['article:author', 'property', toPlainText(author)]);

    const parsedPublishedTime = publishedTime ? Date.parse(publishedTime) : NaN;
    if (Number.isFinite(parsedPublishedTime)) {
      metadata.push([
        'article:published_time',
        'property',
        new Date(parsedPublishedTime).toISOString(),
      ]);
    }

    document.title = brandedTitle;
    metadata.forEach(([key, attribute, value]) => upsertManagedMeta(key, attribute, value));

    const activeKeys = new Set(metadata.map(([key]) => key));
    document.head.querySelectorAll('meta[data-page-meta]').forEach((element) => {
      if (!activeKeys.has(element.getAttribute('data-page-meta'))) element.remove();
    });

    let canonical = document.head.querySelector('link[data-page-canonical]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.setAttribute('data-page-canonical', 'true');
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [title, description, type, image, author, publishedTime, robots, pathname]);
}
