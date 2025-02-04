import { fontCursive } from '@/app/fonts'
import { TextButton } from '@/components/Buttons/TextButton'
import { HeaderOffset } from '@/components/Header/HeaderOffset'
import { MyLink } from '@/components/MyLink'
import { PageLayout } from '@/components/PageLayout'
import { SectionColumnsTwo } from '@/components/SectionColumnsTwo'
import { SectionContainer } from '@/components/SectionContainer'
import { SectionImage } from '@/components/SectionImage'
import { Section } from '@/components/Sections/Section'
import { SectionBody } from '@/components/Typography/SectionBody'
import { SectionTitle } from '@/components/Typography/SectionTitle'
import { app } from '@/data/app'
import { location } from '@/data/location'
import { makeTelephoneHref } from '@/functions/makeTelephoneHref'
import image423 from '@/public/images/minified/pages/error/error.webp'

export default function NotFound() {
    return (
        <>
            <PageLayout>
                <Section className="pt-section pb-section">
                    <HeaderOffset />
                    <SectionContainer>
                        <SectionColumnsTwo>
                            <div className="lg:pr-4 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    {/* <SectionSubtitle>
                                        Deploy faster
                                    </SectionSubtitle> */}
                                    <SectionTitle className="text-balance">
                                        We&apos;re sorry. The page you&apos;re
                                        looking for can&apos;t be found.
                                    </SectionTitle>
                                    <SectionBody className="mt-6 text-balance">
                                        Please call us at{' '}
                                        <MyLink
                                            className="whitespace-nowrap font-semibold text-primary-700 transition-colors hover:text-gray-900"
                                            href={makeTelephoneHref(
                                                location.telephone
                                            )}>
                                            {location.telephone}
                                        </MyLink>
                                        . We&apos;re here to help with your
                                        search.
                                    </SectionBody>
                                    <div className="mt-[1.6rem] text-base">
                                        Best,
                                        <div
                                            className={`${fontCursive.className} mt-6 text-6xl text-gray-500/80`}>
                                            {app.founderFullName}
                                        </div>
                                        <div className="mt-2 text-gray-500">
                                            {app.founderFullName} / Founder
                                        </div>
                                    </div>
                                    <div className="mt-10">
                                        <TextButton href="/">
                                            Go back home
                                        </TextButton>
                                    </div>
                                </div>
                            </div>
                            <SectionImage
                                src={image423}
                                alt="Two dogs racing down a dirt road, capturing a moment of excitement and the bond of friendship between them."
                                sizes="
                                        (min-width: 1024px) 50vw,
                                        100vw"
                                priority={true}
                            />
                        </SectionColumnsTwo>
                    </SectionContainer>
                </Section>
            </PageLayout>
        </>
    )
}
