import { Divider } from '@/components/Graphics/Divider'
import { IconCheckInRibbon } from '@/components/Graphics/Icons/NounProject/IconCheckInRibbon'
import { HeaderOffset } from '@/components/Header/HeaderOffset'
import { ItemReviewsSummaryCard } from '@/components/Items/ItemReviewsSummaryCard'
import { MyImage } from '@/components/MyImage'
import { MyLink } from '@/components/MyLink'
import { PageLayout } from '@/components/PageLayout'
import { SectionContainer } from '@/components/SectionContainer'
import { Section } from '@/components/Sections/Section'
import { SectionTitleBigger } from '@/components/Typography/SectionTitleBigger'
import { app } from '@/data/app'
import image4232 from '@/public/images/minified/global/founder/founder-headshot-torso-featured.webp'
import imagefb from '@/public/images/minified/global/logos/third-party/facebook.webp'
import imagegoogle from '@/public/images/minified/global/logos/third-party/google.webp'
import imageHeadshot from '@/public/images/minified/global/reviews/google/debra.webp'
import { SectionGallery } from './SectionGallery'

export default function PageClient() {
    return (
        <PageLayout>
            <Section
                headerTheme="header-secondary-dark"
                className="relative overflow-hidden bg-secondary-950 pt-10 lg:pt-24">
                <HeaderOffset />
                <div className="hero-overlay-background-image absolute inset-0 size-full bg-cover bg-fixed bg-center opacity-30 min-[544px]:bg-left-top"></div>
                <div className="absolute inset-0 bg-secondary-600 mix-blend-multiply"></div>
                {/* <div
                        aria-hidden="true"
                        className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-secondary-500 to-secondary-800 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        />
                    </div> */}
                {/* <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-[calc(100%-13rem)] transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-secondary-500 to-secondary-800 opacity-60 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        />
                    </div> */}
                <SectionContainer className="relative text-center">
                    <p className="mb-2 text-xs font-semibold text-[--sectionSubtitleColor]">
                        Lagos Pressure Washing
                    </p>
                    <SectionTitleBigger>Before and afters</SectionTitleBigger>
                    <div className="mt-8 flex origin-top scale-75 flex-wrap justify-center gap-x-6 gap-y-4 min-[330px]:flex-nowrap">
                        <ItemReviewsSummaryCard
                            className="flex-shrink-0 rounded-full bg-secondary-900/40 px-5 py-3"
                            href={app.googleReviewPageHref}
                            rating={app.googleRating}
                            numberOfStars={app.numberOfGoogleStars}
                            numberOfReviews={app.numberOfGoogleReviews}
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
                            className="flex-shrink-0 rounded-full bg-secondary-900/40 px-5 py-3"
                            href={app.facebookReviewPageHref}
                            rating={app.facebookRating}
                            numberOfStars={app.numberOfFacebookStars}
                            numberOfReviews={app.numberOfFacebookReviews}
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
                </SectionContainer>
                <div className="pt-8 min-[480px]:pt-6"></div>
                <Divider className="h-14 w-full translate-y-px scale-x-flip scale-y-flip min-[480px]:h-20 md:h-auto 2xl:max-h-36" />
            </Section>
            <Section className="pt-14">
                <SectionContainer>
                    <div className="mx-auto flex max-w-[31rem]">
                        <MyImage
                            className="mr-4 size-12 rounded-full"
                            src={imageHeadshot}
                            alt=""
                            sizes="96px"
                        />
                        <div className="text-pretty text-sm/6 sm:!text-balance">
                            <MyLink
                                href=""
                                className="group relative inline-flex cursor-pointer items-center">
                                <div className="font-medium">Debra</div>
                                <div className="relative ml-1.5 mr-2">
                                    <IconCheckInRibbon className="h-4 w-4 text-primary-200" />

                                    <span className="absolute right-0 top-0 -translate-y-6 translate-x-1/2 overflow-hidden whitespace-nowrap rounded-full bg-gray-900 px-2.5 py-0.5 text-xs text-white opacity-0 ring-1 ring-inset ring-gray-500/20 duration-300 [transition-property:opacity,transform] group-hover:-translate-y-[1.7rem] group-hover:opacity-100">
                                        Verified customer
                                        <div className="absolute -top-px left-1/2 flex h-[2px] w-32 -translate-x-1/2 scale-x-flip">
                                            <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#cbd5e1_32.29%,rgba(0,130,205,0.3)_67.19%,rgba(0,130,205,0)_100%)]"></div>
                                            <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#cbd5e1_32.29%,rgba(0,130,205,0.3)_67.19%,rgba(0,130,205,0)_100%)]"></div>
                                        </div>
                                    </span>
                                </div>
                            </MyLink>
                            “I had the pleasure of hiring{' '}
                            <span className="relative inline-block">
                                Derek
                                <div className="absolute -top-[1.8rem] hidden min-[409px]:block min-[512px]:-top-9 min-[512px]:scale-[1.4] md:-top-11 md:scale-[1.8] lg:-top-12 lg:scale-[2]">
                                    <MyImage
                                        className="h-auto w-8"
                                        src={image4232}
                                        sizes="64px"
                                        alt=""></MyImage>
                                    <div className="absolute bottom-0 h-3 w-full translate-y-1/2 bg-gradient-to-t from-gray-50 via-gray-50"></div>
                                </div>
                            </span>{' '}
                            to power wash our driveway. I am beyond impressed
                            with the results! I highly recommend them. Next
                            year, he&apos;ll do the whole house!”
                        </div>
                    </div>
                </SectionContainer>
            </Section>
            <SectionGallery />
        </PageLayout>
    )
}
