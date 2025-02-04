import { app } from '@/data/app'
import { getPageById } from '@/functions/getPageById'
import { MetadataRoute } from 'next'

interface Route {
    url: string
    lastModified: string
}

export default function sitemap(): MetadataRoute.Sitemap {
    const routes: Route[] = [
        {
            path: '',
            lastModified: getDateISOString('2023-05-12T23:50:21.817Z'),
        },
        {
            path: getPageById(1).href,
            lastModified: getDateISOString('2023-05-12T23:50:21.817Z'),
        },
        {
            path: getPageById(3).href,
            lastModified: getDateISOString('2023-05-12T23:50:21.817Z'),
        },
        {
            path: getPageById(4).href,
            lastModified: getDateISOString('2023-05-12T23:50:21.817Z'),
        },
    ].map(({ path, lastModified }) => ({
        url: `${app.siteUrl}${path}`,
        lastModified,
    }))

    return [...routes]
}

function getDateISOString(date: string) {
    return new Date(date).toISOString()
}
