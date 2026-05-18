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
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }))
}