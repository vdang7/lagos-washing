import { openGraphImage } from '@/app/shared-metadata'
import { app } from '@/data/app'

interface InterfaceOpenGraphImageObject {
    images: InterfaceOpenGraphImage[]
}

interface InterfaceOpenGraphImage {
    url: string
    width: number
    height: number
    alt: string
}

interface Props {
    canonicalURL: string
    title: string
    description: string
    ogImage?: InterfaceOpenGraphImageObject
}

export function buildMetadata({
    canonicalURL,
    title,
    description,
    ogImage,
}: Props) {
    return {
        alternates: {
            canonical: canonicalURL,
        },
        title: title,
        description: description,
        openGraph: {
            ...(ogImage || openGraphImage),
            title: title,
            description: description,
            url: canonicalURL,
            siteName: app.companyName,
            type: 'website',
        },
    }
}
