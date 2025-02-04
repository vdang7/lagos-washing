import { PageLayout } from '@/components/PageLayout'
import { SectionContainer } from '@/components/SectionContainer'
import { HomeReviewsSection } from '@/components/Sections/Home/HomeReviewsSection'
import { Section } from '@/components/Sections/Section'
import { SectionGallery } from '../before-afters/SectionGallery'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <PageLayout>
                {children}
                <Section className="bg-white py-24 sm:py-32">
                    <SectionContainer>
                        <div className="mx-auto max-w-2xl lg:text-center">
                            <h2 className="text-base/7 font-semibold">
                                <span className="text-gradient-primary-dark">
                                    Before & afters
                                </span>
                            </h2>
                            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                                See our latest projects in The Triangle
                            </p>
                            {/* <p className="mt-6 text-lg/8 text-gray-600">
                                Proudly serving Raleigh, Durham, and surround
                                areas.
                            </p> */}
                        </div>
                        <SectionGallery className="mt-16" />
                    </SectionContainer>
                </Section>
                <HomeReviewsSection className="pt-24 sm:pt-32 [&_[data-slot=section-subtitle]]:text-base/7 [&_[data-slot=section-title]]:text-4xl [&_[data-slot=section-title]]:sm:text-5xl [&_[data-slot=stack-reviews-spotlight]]:lg:flex-col" />
            </PageLayout>
        </>
    )
}
