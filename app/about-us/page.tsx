// import { Gradient } from '@/components/Graphics/Gradient'
import { PageLayout } from '@/components/PageLayout'
import { AboutFounderSection } from '@/components/Sections/About/AboutFounderSection'
import { AboutMissionSection } from '@/components/Sections/About/AboutMissionSection'
import { AboutValuesSection } from '@/components/Sections/About/AboutValuesSection'
import { app } from '@/data/app'
import { buildMetadata } from '@/functions/buildMetadata'

const meta = {
    canonicalURL: `${app.siteUrl}/about-us`,
    title: 'About us',
    description: 'Lorem itsum dolar',
}

export const metadata = buildMetadata({ ...meta })

export default function Page() {
    return (
        <>
            <PageLayout sectionCallToActionBackgroundColor="bg-white">
                {/* <Gradient className="z-10 "/> */}
                <AboutMissionSection />
                <AboutFounderSection />
                <AboutValuesSection />
            </PageLayout>
        </>
    )
}
