import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://phillyepoxyflooring.com'

  const routes = [
  '',
  '/epoxy-flooring-philadelphia',
  '/garage-floor-coating-allentown',
  '/concrete-coatings-hoboken',
  '/privacy',
  '/terms',

  // New pages
  '/epoxy-flooring-west-chester',
  '/garage-floor-coating-king-of-prussia',
  '/epoxy-flooring-cherry-hill',
  '/epoxy-flooring-wilmington',
  '/garage-floor-coating-bethlehem-pa',
]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }))
}