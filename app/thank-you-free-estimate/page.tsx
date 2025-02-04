import { fontCursive } from '@/app/fonts'
import { TextButton } from '@/components/Buttons/TextButton'
import { HeaderOffset } from '@/components/Header/HeaderOffset'
import { MyLink } from '@/components/MyLink'
import { PageLayout } from '@/components/PageLayout'
import { SectionContainer } from '@/components/SectionContainer'
import { Section } from '@/components/Sections/Section'
import { SectionSubtitle } from '@/components/Typography/SectionSubtitle'
import { SectionTitleBigger } from '@/components/Typography/SectionTitleBigger'
import { app } from '@/data/app'
import { location } from '@/data/location'
import { buildMetadata } from '@/functions/buildMetadata'
import { makeTelephoneHref } from '@/functions/makeTelephoneHref'

const meta = {
    canonicalURL: `${app.siteUrl}/thank-you-free-estimate`,
    title: 'Thank you',
    description: 'Lorem itsum dolar',
}

export const metadata = {
    ...buildMetadata({ ...meta }),
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
        },
    },
}

export default function Page() {
    return (
        <>
            <PageLayout hideCallToActionSection={true}>
                <Section className="pt-section pb-section bg-white">
                    <HeaderOffset />
                    <SectionContainer>
                        <div className="mx-auto max-w-2xl">
                            <SectionSubtitle>Success!</SectionSubtitle>
                            <SectionTitleBigger className="mt-2 text-balance">
                                Thank you for requesting a free estimate
                            </SectionTitleBigger>
                            <div className="mt-6 text-base/8 text-[--sectionBodyColor] sm:text-lg/8">
                                <p>
                                    We will reach out to you as soon as
                                    possible to provide your free estimate. If you have any questions, please
                                    call us at{' '}
                                    <MyLink
                                        className="whitespace-nowrap font-semibold text-primary-600 transition-colors hover:text-gray-900"
                                        href={makeTelephoneHref(
                                            location.telephone
                                        )}>
                                        {location.telephone}
                                    </MyLink>
                                    . We look forward to speaking with you soon!
                                </p>
                            </div>
                            <div className="mt-[1.6rem] text-sm text-gray-400 sm:text-base">
                                Best,
                                <div
                                    className={`${fontCursive.className} mt-6 text-6xl`}>
                                    {app.founderFullName}
                                </div>
                                <div className="mt-2">
                                    {app.founderFullName} / Founder
                                </div>
                            </div>
                            <div className="mt-10">
                                <TextButton href="/">Go back home</TextButton>
                            </div>
                        </div>
                    </SectionContainer>
                </Section>
            </PageLayout>
        </>
    )
}
