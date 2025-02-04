import { TextButton } from '@/components/Buttons/TextButton'
import { MyLink } from '@/components/MyLink'
// import { fontHandWriting } from '@/app/fonts'
// import { ArrowCurly } from '@/components/Graphics/ArrowCurly'
import { HeaderOffset } from '@/components/Header/HeaderOffset'
import { app } from '@/data/app'
import { getPageById } from '@/functions/getPageById'
// import { HexagonVideoNoAutoplay } from '@/components/Video/HexagonVideoNoAutoplay'
import { ItemReviewsSummaryCard } from '@/components/Items/ItemReviewsSummaryCard'
import { MyImage } from '@/components/MyImage'
import { SectionContainer } from '@/components/SectionContainer'
import { Section } from '@/components/Sections/Section'
// import image4232 from '@/public/images/minified/global/founder/founder-headshot-torso.webp'
import { InteriorTitle } from '@/components/Typography/InteriorTitle'
import imagefb from '@/public/images/minified/global/logos/third-party/facebook.webp'
import imagegoogle from '@/public/images/minified/global/logos/third-party/google.webp'
import { GiftIcon } from '@heroicons/react/16/solid'
// import imageHeroMobile from '@/public/images/minified/pages/home/hero/hero-mobile.webp'
// import image428111 from '@/public/images/minified/pages/home/hero/hero-thumbnail.webp'
// import { StarIcon } from '@heroicons/react/24/outline'
import { PageLayout } from '@/components/PageLayout'
import { SectionGallery } from './SectionGallery'

export default function PageClient() {
    return (
        <>
            <PageLayout>
                <Section className="pt-section pb-section isolate bg-gray-50">
                    <HeaderOffset />
                    <div className="hero-background-image absolute inset-0 -z-10 size-full bg-cover bg-fixed opacity-30 [background-position:25%_0%] min-[559px]:bg-left-top sm:opacity-100"></div>
                    <div className="absolute bottom-0 -z-10 h-[150%] w-full bg-gradient-to-t from-gray-50"></div>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-gray-50 from-0% via-gray-50 via-70% lg:via-50%"></div>

                    <SectionContainer>
                        <div className="flex flex-col gap-x-12 gap-y-4 sm:gap-y-6 lg:flex-row lg:items-end lg:justify-between">
                            <div>
                                {/* <div className="mb-4 flex justify-center lg:justify-start">
                                    <MyImage
                                        className="mr-1.5 h-auto w-6 object-contain"
                                        src={imageLogo}
                                        sizes="48px"
                                        alt=""
                                        placeholder="empty"></MyImage>
                                    <InteriorSubtitle tag="h2">
                                        Lagos Pressure Washing
                                    </InteriorSubtitle>
                                    {/* <h2 className="text-sm font-medium text-primary-900">
                                        Lagos Pressure Washing
                                    </h2> 
                                </div> */}
                                <MyLink
                                    prefetch={false}
                                    href={getPageById(4).href}
                                    className="group mb-6 inline-flex w-full flex-wrap justify-center gap-x-6 gap-y-2 lg:justify-start">
                                    <span className="relative flex items-center rounded-full bg-primary-100 px-3 pb-1 pt-[0.1875rem] text-[0.8125rem] font-semibold">
                                        <GiftIcon
                                            className="mr-2 h-4 w-4 text-primary-400"
                                            aria-hidden="true"
                                        />{' '}
                                        <span className="text-primary-700">
                                            Winter special
                                        </span>
                                    </span>
                                    <TextButton
                                        disableLink={true}
                                        className="font-medium text-primary-700 group-hover:text-gray-900 [&_[data-slot=icon-chevron-animated]]:group-hover:stroke-gray-900">
                                        New customers get 15% off
                                    </TextButton>
                                </MyLink>
                                <InteriorTitle className="mx-auto max-w-2xl text-balance text-center lg:text-left">
                                    See our latest projects in The Triangle
                                </InteriorTitle>
                            </div>
                            <div className="flex scale-[0.85] flex-wrap justify-center gap-4 lg:origin-right lg:flex-col">
                                <ItemReviewsSummaryCard
                                    className="whitespace-nowrap bg-white ring-1 ring-inset ring-gray-900/10"
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
                                            backgroundColor=""
                                            placeholder="empty"
                                        />
                                    }
                                    hideGradient
                                />
                                <ItemReviewsSummaryCard
                                    className="bg-white ring-1 ring-inset ring-gray-900/10"
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
                                            backgroundColor=""
                                            placeholder="empty"
                                        />
                                    }
                                    hideGradient
                                />
                            </div>
                        </div>
                        <SectionGallery className="mt-16" />
                    </SectionContainer>
                </Section>
            </PageLayout>
        </>
    )
}
