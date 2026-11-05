import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { blogs } from '../src/data/blogsData.js';
import { courses } from '../src/data/coursesData.js';
import { destinations } from '../src/data/destinationsData.js';
import { bangladeshColleges } from '../src/data/bangladeshCollegesData.js';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const configuredSiteUrl = process.env.SITE_URL || process.env.VITE_SITE_URL || 'https://retinaconsultancy.edu.np';
const siteUrl = new URL(configuredSiteUrl);

if (!['http:', 'https:'].includes(siteUrl.protocol)) {
  throw new Error('SITE_URL must use http or https.');
}

siteUrl.pathname = siteUrl.pathname.replace(/\/+$/, '');
siteUrl.search = '';
siteUrl.hash = '';
const siteOrigin = siteUrl.origin;

const appRoutes = fs.readFileSync(path.join(projectRoot, 'src', 'App.jsx'), 'utf8')
  .matchAll(/<Route\s+path="([^"]+)"/g);
const declaredRoutes = Array.from(appRoutes, (match) => match[1]);

const dynamicRouteExpansions = {
  '/courses/:slug': Object.keys(courses).map((slug) => `/courses/${slug}`),
  '/destinations/:slug': destinations.map((destination) => `/destinations/${destination.slug}`),
  '/study-mbbs-bangladesh/:slug': bangladeshColleges.map((college) => `/study-mbbs-bangladesh/${college.slug}`),
  '/blogs/:slug': blogs.map((blog) => `/blogs/${blog.slug}`),
};

const paths = [...new Set(declaredRoutes.flatMap((routePath) => {
  if (routePath === '*') return [];
  if (!routePath.includes(':')) return [routePath];

  const expandedPaths = dynamicRouteExpansions[routePath];
  if (!expandedPaths) {
    throw new Error(`Sitemap generator has no data source for dynamic route: ${routePath}`);
  }
  return expandedPaths;
}))];

if (paths.length === 0) throw new Error('No indexable routes were found in src/App.jsx.');
const xmlEscape = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...paths.map((routePath) => `  <url><loc>${xmlEscape(new URL(routePath, siteOrigin).href)}</loc></url>`),
  '</urlset>',
  '',
].join('\n');

const publicDirectory = path.join(projectRoot, 'public');
fs.mkdirSync(publicDirectory, { recursive: true });
fs.writeFileSync(path.join(publicDirectory, 'sitemap.xml'), sitemap, 'utf8');
fs.writeFileSync(
  path.join(publicDirectory, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', siteOrigin).href}\n`,
  'utf8',
);

console.log(`Generated sitemap.xml with ${paths.length} URLs for ${siteOrigin}.`);
