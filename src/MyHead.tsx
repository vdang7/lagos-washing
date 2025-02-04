import { app } from '@/data/app'
import Head from 'next/head'

interface Props {
    pathWithoutLeadingSlash: string
    disableIndex?: boolean
    disableFollow?: boolean
    type: string

    title: string
    description: string

    ogTitle: string
    ogDescription: string
    ogImageSrc?: string
}

export function MyHead({
    pathWithoutLeadingSlash,
    disableIndex = false,
    disableFollow = false,
    type,

    title,
    description,

    ogTitle,
    ogDescription,
    ogImageSrc = `${app.siteUrl}/og.png`,
}: Props) {
    const canonicalUrl = `${app.siteUrl}/${pathWithoutLeadingSlash}`
    const indexSetting = disableIndex ? 'noindex' : 'index'
    const followSetting = disableFollow ? 'nofollow' : 'follow'

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />

                {/* Canonical */}
                <link rel="canonical" href={canonicalUrl} />

                {/* Robots */}
                <meta
                    name="robots"
                    content={`${indexSetting}, ${followSetting}`}
                />
                <meta
                    name="googlebot"
                    content={`${indexSetting}, ${followSetting}, max-video-preview:-1, max-image-preview:large, max-snippet:-1`}
                />

                {/*  */}
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="author" content={app.founderFullName} />
                {/* <link rel="author" href="https://nextjs.org"/> */}
                <meta name="creator" content={app.founderFullName} />
                <meta name="keywords" content="Next.js,React,JavaScript" />

                {/* Social media display */}
                <meta property="og:url" content={canonicalUrl} />

                <meta property="og:site_name" content={app.companyName} />
                <meta property="og:type" content={type} />
                <meta property="og:locale" content={app.language} />

                <meta property="og:title" content={ogTitle} />
                <meta property="og:description" content={ogDescription} />

                <meta property="og:image:url" content={ogImageSrc} />
                <meta property="og:image:secure_url" content={ogImageSrc} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content={app.companyName} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />

                {/* Favicon */}
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#38bdf8"
                />
                <meta name="msapplication-TileColor" content="#38bdf8" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
        </>
    )
}
