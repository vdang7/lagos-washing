import { fontDefault } from '@/app/fonts'
import { openGraphImage } from '@/app/shared-metadata'
import { BottomCTABarOffset } from '@/components/BottomCTABarOffset'
import { Footer } from '@/components/Footer/Footer'
import { app } from '@/data/app'
import '@/styles/globals.css'
import Script from 'next/script'

const GA_MEASUREMENT_ID =
    process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID

const canonicalURL = app.siteUrl
const title = `Raleigh pressure washing company near me - ${app.companyName}`
const description =
    "Raleigh's top-rated pressure washing pressure washing services for residential and commercial properties. Serving Raleigh, Cary, Wake Forest & surrounding areas. Get 15% off your first service. Call or text 919-526-0633 now for your free pressure washing estimate."

export const metadata = {
    metadataBase: new URL(app.siteUrl),
    alternates: {
        canonical: canonicalURL,
    },
    title: {
        default: title,
        template: `%s - ${app.companyName}`,
    },
    description: description,
    authors: [
        {
            name: app.founderFullName,
            // url: 'https://nextjs.org'
        },
    ],
    creator: app.founderFullName,
    openGraph: {
        ...openGraphImage,
        title: title,
        description: description,
        url: canonicalURL,
        siteName: app.companyName,
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        title: app.companyName,
        card: 'summary_large_image',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <html lang="en">
                <head>
                    <link
                        rel="icon"
                        type="image/png"
                        href="/favicon-96x96.png"
                        sizes="96x96"
                    />
                    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/apple-touch-icon.png"
                    />
                    <meta
                        name="apple-mobile-web-app-title"
                        content="Lagos Pressure Washing"
                    />
                    <link rel="manifest" href="/site.webmanifest" />
                </head>
                <body
                    className={`antialiased ${fontDefault.className} relative`}>
                    {children}
                    <Footer />
                    <BottomCTABarOffset className="lg:hidden" />
                </body>
            </html>
            {/* <!-- Google tag (gtag.js) --> */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />

            <Script id="google-analytics" strategy="afterInteractive">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
        
            gtag('config', '${GA_MEASUREMENT_ID}');
            `}
            </Script>
        </>
    )
}
