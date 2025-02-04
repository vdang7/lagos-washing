import { app } from '@/data/app'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            disallow: '/thank-you',
        },
        sitemap: `${app.siteUrl}/sitemap.xml`,
    }
}
