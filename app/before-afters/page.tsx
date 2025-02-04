import { app } from '@/data/app'
import { buildMetadata } from '@/functions/buildMetadata'
import PageClient from './pageClient'

const meta = {
    canonicalURL: `${app.siteUrl}/before-afters`,
    title: 'Before & Afters',
    description: 'Lorem itsum dolar',
}

export const metadata = buildMetadata({ ...meta })

export default function Page() {
    return <PageClient />
}
