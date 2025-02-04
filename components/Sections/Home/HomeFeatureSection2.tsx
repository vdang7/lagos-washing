import { RoundedButtonWithIcon } from '@/components/Buttons/RoundedButtonWithIcon'
import { MyImage } from '@/components/MyImage'
import { SectionContainer } from '@/components/SectionContainer'
import { Section } from '@/components/Sections/Section'
import { getPageById } from '@/functions/getPageById'
import image424 from '@/public/images/minified/pages/home/feature/after.webp'
import image423 from '@/public/images/minified/pages/home/feature/before.webp'

export function HomeFeatureSection2() {
    return (
        <>
            <Section>
                <SectionContainer className="flex flex-col items-center">
                    <div className="grid gap-8 sm:grid-cols-2">
                        <div className="relative">
                            <MyImage
                                src={image424}
                                alt="App screenshot"
                                className="rounded-2xl shadow-2xl ring-1 ring-gray-900/10"
                                sizes="
                                    (min-width: 640px) 50vw,
                                    100vw"
                            />

                            <span className="absolute bottom-0 mb-3 ml-3 rounded-full bg-white px-3 py-0.5 text-sm font-medium text-gray-900">
                                Before
                            </span>
                        </div>
                        <div className="relative">
                            <MyImage
                                src={image423}
                                alt="App screenshot"
                                className="rounded-2xl shadow-2xl ring-1 ring-gray-900/10"
                                sizes="
                                    (min-width: 640px) 50vw,
                                    100vw"
                            />
                            <span className="absolute bottom-0 mb-3 ml-3 rounded-full bg-[#6be036] px-3 py-0.5 text-sm font-medium text-gray-900 sm:right-0 sm:mr-3">
                                After
                            </span>
                        </div>
                    </div>

                    <div className="mt-14">
                        <RoundedButtonWithIcon href={getPageById(4).href}>
                            Get my free estimate
                        </RoundedButtonWithIcon>

                        <p className="mt-4 text-center text-xs text-gray-900">
                            New customers get 15% off
                        </p>
                    </div>
                </SectionContainer>
            </Section>
        </>
    )
}
