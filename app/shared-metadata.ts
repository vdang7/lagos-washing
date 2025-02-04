import { app } from '@/data/app'

export const openGraphImage = {
    images: [
        {
            url: `${app.siteUrl}/og.png`,
            width: 1200,
            height: 630,
            alt: app.companyName,
        },
    ],
}
