import { PatternHexagon } from '@/components/Graphics/PatternHexagon'
import { ItemReviewsSummaryCard } from '@/components/Items/ItemReviewsSummaryCard'
import { MyImage } from '@/components/MyImage'
import { SectionContainer } from '@/components/SectionContainer'
import { Section } from '@/components/Sections/Section'
import imagefb from '@/public/images/minified/global/logos/third-party/facebook.webp'
import imagegoogle from '@/public/images/minified/global/logos/third-party/google.webp'
// import { StackTestimonialsExpandable2 } from '@/components/Stacks/StackTestimonialsExpandable2'
import { StackReviewsExpandable } from '@/components/Stacks/StackReviewsExpandable'
import { SectionSubtitle } from '@/components/Typography/SectionSubtitle'
import { SectionTitle } from '@/components/Typography/SectionTitle'
import { app } from '@/data/app'

interface Props {
    className?: string
}

export function HomeReviewsSection({ className }: Props) {
    return (
        <>
            <Section className={`${className}`}>
                <SectionContainer>
                    <div className="relative z-10 lg:flex lg:items-end lg:justify-between lg:gap-x-8">
                        <div>
                            <SectionSubtitle tag="h2">
                                <span className="text-gradient-primary-dark">
                                    Google & Facebook reviews
                                </span>
                            </SectionSubtitle>
                            <SectionTitle
                                tag="h2"
                                className="mt-2 text-balance">
                                What homeowners & businesses in{' '}
                                {app.serviceAreasNickname} are saying…
                            </SectionTitle>
                        </div>
                        <PatternHexagon
                            className="absolute right-0 top-0 -z-10 size-[30rem] -translate-y-32 translate-x-[75%] min-[506px]:-translate-y-40 lg:-translate-y-32"
                            patternClassName="text-primary-100 lg:text-primary-400"
                        />
                        <div
                            data-slot="stack-reviews-spotlight"
                            className="mt-16 flex shrink-0 flex-wrap gap-x-6 gap-y-4 sm:mt-10 lg:mt-0">
                            <ItemReviewsSummaryCard
                                className="flex-grow border border-gray-100 bg-white sm:flex-none"
                                href={app.googleReviewPageHref}
                                rating="5.0"
                                numberOfStars={5}
                                numberOfReviews={13}
                                logo={
                                    <MyImage
                                        className="size-[1.8rem]"
                                        src={imagegoogle}
                                        alt="google logo"
                                        sizes="58px"
                                    />
                                }
                                hideGradient
                            />
                            <ItemReviewsSummaryCard
                                className="flex-grow border border-gray-100 bg-white sm:flex-none"
                                href={app.facebookReviewPageHref}
                                rating="5.0"
                                numberOfStars={5}
                                numberOfReviews={9}
                                logo={
                                    <MyImage
                                        className="size-[1.8rem]"
                                        src={imagefb}
                                        alt="facebook logo"
                                        sizes="58px"
                                    />
                                }
                                hideGradient
                            />
                            {/* <ItemReviewsSummaryCard
                                className="bg-primary-50 pb-[0.9rem] [flex-grow:1] [&>[data-slot=item-platform-review-card-border]]:min-[416px]:w-[90%] [&>[data-slot=item-platform-review-card-border]]:lg:w-[87%]"
                                id={32}
                                platform="Google"
                                rating={5}
                                numberOfStars={5}
                                numberOfReviews={13}
                                platformHref="#"
                                platformLogo={<LogoGoogle className="w-12" />}
                                buttonHref="#"
                                buttonText={`View ${app.companyName}'s Google page`}
                                invertTextButtonColor={true}
                                hideGradient={true}
                            />
                            <ItemReviewsSummaryCard
                                className="bg-primary-100 pb-[0.9rem] [flex-grow:1] [&>[data-slot=item-platform-review-card-border]]:min-[416px]:w-[90%] [&>[data-slot=item-platform-review-card-border]]:lg:w-[87%]"
                                id={312}
                                platform="Facebook"
                                rating={5}
                                numberOfStars={5}
                                numberOfReviews={9}
                                platformHref="#"
                                platformLogo={<LogoFacebook className="w-14" />}
                                buttonHref="#"
                                buttonText={`View ${app.companyName}'s Facebook page`}
                                invertTextButtonColor={true}
                                hideGradient={true}
                            /> */}
                        </div>
                    </div>
                    <StackReviewsExpandable className="mt-8 flow-root lg:mt-20" />
                </SectionContainer>
            </Section>
        </>
    )
}
