import { Divider } from '@/components/Graphics/Divider'
import { IconCheckInRibbon } from '@/components/Graphics/Icons/NounProject/IconCheckInRibbon'
import { MyImage } from '@/components/MyImage'
import { MyLink } from '@/components/MyLink'
import { SectionContainer } from '@/components/SectionContainer'
import { InteriorSubtitle } from '@/components/Typography/InteriorSubtitle'
import { InteriorTitle } from '@/components/Typography/InteriorTitle'
import { location } from '@/data/location'
import imageDebra from '@/public/images/minified/global/reviews/google/debra.webp'
// import { fontHandWriting } from '@/app/fonts'
// import { ArrowCurly } from '@/components/Graphics/ArrowCurly'
import { HeaderOffset } from '@/components/Header/HeaderOffset'
import { app } from '@/data/app'
import { getPageById } from '@/functions/getPageById'
// import { HexagonVideoNoAutoplay } from '@/components/Video/HexagonVideoNoAutoplay'
import { ItemReviewsSummaryCard } from '@/components/Items/ItemReviewsSummaryCard'
import { SectionColumnsTwo } from '@/components/SectionColumnsTwo'
import { Section } from '@/components/Sections/Section'
import { SectionBodySmall } from '@/components/Typography/SectionBodySmall'
// import image4232 from '@/public/images/minified/global/founder/founder-headshot-torso.webp'
import imageLogo from '@/public/images/minified/global/logos/logo.svg'
import imagefb from '@/public/images/minified/global/logos/third-party/facebook.webp'
import imagegoogle from '@/public/images/minified/global/logos/third-party/google.webp'
// import imageHeroMobile from '@/public/images/minified/pages/home/hero/hero-mobile.webp'
// import image428111 from '@/public/images/minified/pages/home/hero/hero-thumbnail.webp'
import { GiftIcon } from '@heroicons/react/16/solid'
// import { StarIcon } from '@heroicons/react/24/outline'
// import { Confetti } from '@/components/Graphics/Confetti'
import { FormFreeEstimate } from '@/components/Forms/FormFreeEstimate'
import { PageLayout } from '@/components/PageLayout'
import { StackAvatars } from '@/components/Stacks/StackAvatars'
import { buildMetadata } from '@/functions/buildMetadata'
import { hasDuplicateId } from '@/functions/hasDuplicateId'
import imageConfetti from '@/public/images/minified/global/confetti.svg'
import '@/styles/patterns/pattern-calendly.css'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

const meta = {
    canonicalURL: `${app.siteUrl}${getPageById(4).href}`,
    title: 'Get your free estimate',
    description: `Raleigh, Cary, Wake Forest pressure washing services. Free estimates & 15% off for new customers. Call/text us at ${location.telephone} or email us at ${location.email}. We look forward to serving you.`,
}

export const metadata = buildMetadata({ ...meta })

interface InterfaceItemFeature {
    id: number
    title: string
}

const features: InterfaceItemFeature[] = [
    {
        id: 1,
        title: '5-star rated',
    },
    {
        id: 2,
        title: '100% satisfaction guaranteed',
    },
    {
        id: 3,
        title: 'Save time & money',
    },
    {
        id: 4,
        title: 'Licensed & insured',
    },
]

hasDuplicateId(features)

function StackFeatures({ className }: { className: string }) {
    return (
        <ul
            role="list"
            className={`${className} gap-y-3 text-sm/7`}>
            {features.map((item) => (
                // <li key={item.id} className="flex gap-x-3 whitespace-nowrap">
                //     <CheckCircleIcon
                //         aria-hidden="true"
                //         className="h-7 w-5 flex-none text-primary-600"
                //     />
                //     <span className="text-gray-900">
                //     {item.title}</span>
                // </li>
                 <li
                    key={item.id}
                    className="flex gap-x-3">
                    <div className="relative isolate flex flex-col items-center justify-center">
                        <CheckCircleIcon
                            aria-hidden="true"
                            className="h-7 w-5 flex-none text-[#dcfce7]"
                        />
                        <div className="absolute -z-10 size-2.5 rounded-full bg-[#15803d]"></div>
                    </div>
                    {item.title}
                </li>
            ))}
        </ul>
    )
}

function Card({ className }: { className: string }) {
    return (
        <>
            <div
                className={`${className} bg-secondary-950 relative isolate flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-secondary-900 bg-secondary-500/10 pb-8 pt-10`}>
                {/* <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 flex h-[2px] w-32">
                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(14,165,233,0.3)_67.19%,rgba(14,165,233,0)_100%)]"></div>
                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(14,165,233,0.3)_67.19%,rgba(14,165,233,0)_100%)]"></div>
                    <div className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(14,165,233,0.3)_67.19%,rgba(14,165,233,0)_100%)]"></div>
                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(14,165,233,0.3)_67.19%,rgba(14,165,233,0)_100%)]"></div>
                </div> */}
                {/* <div className="absolute top-0 -z-10 h-32 w-32 -translate-y-1/2 rounded-full bg-primary-400 blur-2xl"></div> */}
                {/* <div className="absolute left-0 top-0 -z-10 h-32 w-32 -translate-y-1/2 rounded-full bg-primary-400 blur-2xl"></div> */}
                {/* <div className="absolute right-0 top-0 -z-10 h-32 w-32 -translate-y-1/2 rounded-full bg-primary-400 blur-2xl"></div> */}
                {/* <div className="absolute bottom-0 -z-10 h-32 w-32 translate-y-1/2 rounded-full bg-primary-400 blur-2xl"></div> */}
                {/* <div className="absolute top-0 -z-10 h-12 w-24 translate-y-1/2 rounded-full bg-secondary-600 blur-2xl"></div> */}
                {/* <div className="absolute bottom-0 -z-10 h-12 w-24 translate-y-1/2 rounded-full bg-secondary-600 blur-2xl"></div> */}
                <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl -z-10"
              >
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                  className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-primary-500 to-secondary-500 opacity-40"
                />
              </div>
                <MyImage
                    src={imageLogo}
                    className="absolute right-4 top-4 hidden h-auto w-6 min-[500px]:block"
                    sizes="48px"
                    alt={`${app.companyName} logo`}
                    placeholder="empty"
                    backgroundColor=""></MyImage>
                {/* <div className="absolute bottom-0 left-0 -z-10 h-32 w-32 translate-y-1/2 rounded-full bg-primary-400 blur-2xl"></div> */}
                {/* <div className="absolute bottom-0 right-0 -z-10 h-32 w-32 translate-y-1/2 rounded-full bg-primary-400 blur-2xl"></div> */}
                {/* <div className="absolute inset-0 -z-10 [background-image:radial-gradient(circle,rgba(79,70,229,0.3)0%,transparent_70%)]"></div> */}
                {/* <Confetti className="absolute inset-0 -z-10 scale-125"/> */}
                <MyImage
                    className="absolute inset-0 -z-10 size-full scale-[1.45] object-cover opacity-50"
                    src={imageConfetti}
                    alt="confetti"
                    sizes="
                    (min-width: 1024px) 1152px,
                    (min-width: 640px) 1056px,
                    100vw"
                    backgroundColor=""
                    placeholder="empty"
                />
                <StackAvatars />
                <p className="mt-7 mb-4 text-balance text-center text-sm font-semibold text-white max-w-96">
                    Neighbors in the Triangle who gave our service a <span className="text-gradient-primary">5-star rating.</span>
                </p>
                <div className="flex flex-wrap gap-4 scale-[0.85] justify-center">
                    <ItemReviewsSummaryCard
                        className="bg-transparent-secondary-950 border border-primary-400/10"
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
                        className="bg-transparent-secondary-950 border border-primary-400/10"
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
        </>
    )
}

const reviewHref = "https://g.co/kgs/WabW5iW"

export default function Page() {
    return (
        <>
            <PageLayout hideCallToActionSection={true}>
                <Section
                    // headerTheme="header-secondary-dark"
                    className="pt-section bg-gray-50 relative">
                    <HeaderOffset />
                    <div
                        className="absolute inset-0 size-full bg-cover bg-fixed [background-position:10%_0%] min-[420px]:bg-left-top hero-background-image opacity-30 min-[1006px]:opacity-100"
                        // style={{
                        //     backgroundImage: `url(${imageHero.src})`,
                        // }}
                        ></div>
                    <div className="absolute h-40 bottom-0 w-full bg-gradient-to-t from-white"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-white from-0% via-white via-60% lg:via-40%"></div>
                    <div className="absolute bottom-0 w-full h-60 lg:h-[32rem] ">
                        <Divider className="scale-x-flip scale-y-flip h-14 w-full min-[480px]:h-20 sm:h-24 md:h-auto" pathOneClassName="text-secondary-950" pathThreeClassName='text-primary-400' pathFourClassName='stroke-primary-100'/>
                        <div className="size-full bg-secondary-950 "></div>
                    </div>
                    <SectionContainer className="relative">
                        <SectionColumnsTwo align="lg:items-stretch">
                            <div className="lg:pr-4 lg:pt-4 lg:flex lg:flex-col">
                                <div className="lg:max-w-lg">
                                    <InteriorSubtitle className="relative inline-flex items-center rounded-full mb-4">
                                        <GiftIcon
                                            className="mr-2 size-5 text-primary-400"
                                            aria-hidden="true"
                                        />{' '}
                                        <span className="text-primary-700">
                                            Winter special
                                        </span>
                                    </InteriorSubtitle>
                                    <InteriorTitle>
                                        Get your{' '}
                                        <br className="hidden lg:block" /> free
                                        estimate
                                    </InteriorTitle>
                                    <SectionBodySmall className="mt-6 text-balance">
                                        Plus get 15% off your first service.
                                    </SectionBodySmall>
                                    <StackFeatures className="mt-6 hidden grid-cols-2 lg:grid" />
                                </div>
                                <div className="w-full mt-10 flex-grow hidden lg:block">
                                    <div
                                        className="relative h-full flex flex-col justify-center overflow-hidden rounded-3xl bg-secondary-950 px-6  shadow-2xl sm:px-12 lg:px-8  xl:px-10 border border-secondary-900 pb-4 pt-6"
                                    >
                                        <div
                                            aria-hidden="true"
                                            className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                                        >
                                            <div style={{
                                                clipPath:
                                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                            }} className="aspect-[1097/845]
                                            w-[68.5625rem] bg-gradient-to-tr from-primary-500 to-secondary-500
                                            opacity-40" />
                                        </div>
                                        <figure className="relative isolate">
                                            <svg
                                                fill="none"
                                                viewBox="0 0 162 128"
                                                aria-hidden="true"
                                                className="absolute -left-2 -top-4 -z-10 h-32 stroke-secondary-500/20"
                                            >
                                                <path
                                                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                                                    id="0ef284b8-28c2-426e-9442-8655d393522e"
                                                />
                                                <use x="{86}" href="#0ef284b8-28c2-426e-9442-8655d393522e" />
                                            </svg>
                                            <blockquote
                                                className="text-sm/6 xl:text-base/6 font-semibold text-white"
                                            >
                                                <p>
                                                    I recently hired Derek to power wash our filthy driveway. I
                                                    am beyond impressed with the results! From the moment I
                                                    contacted Lagos Pressure Washing, his team displayed utmost
                                                    professionalism. I highly recommend them for any power
                                                    washing needs. Next year, he&apos;ll do the whole house!
                                                </p>
                                            </blockquote>
                                            <div className="flex mt-6 items-center">
                                                <MyLink
                                                    href={reviewHref}
                                                    className="absolute -right-5 bottom-0 hover:brightness-150"
                                                >
                                                    <MyImage className="size-4" src={imagegoogle} alt="Google logo" sizes="32px" backgroundColor=''/>
                                                </MyLink>
                                                <MyImage
                                                    className="size-9 mr-3"
                                                    src={imageDebra}
                                                    alt="Headshot of Debra"
                                                    sizes="80px"
                                                    backgroundColor=""
                                                />
                                                <figcaption>
                                                    <MyLink
                                                        href={reviewHref}
                                                        className="group relative flex cursor-pointer items-center text-sm/5"
                                                    >
                                                        <span className="font-medium text-white">Debra</span>
                                                        <div className="relative ml-2">
                                                            <IconCheckInRibbon
                                                                className="h-4 w-4 text-primary-200"
                                                            />

                                                            <span
                                                                className="absolute right-0 top-0 -translate-y-6 translate-x-1/2 overflow-hidden whitespace-nowrap rounded-full bg-gray-900 px-2.5 py-0.5 text-xs text-white opacity-0 ring-1 ring-inset ring-gray-500/20 duration-300 [transition-property:opacity,transform] group-hover:-translate-y-[1.7rem] group-hover:opacity-100"
                                                            >
                                                                Verified customer
                                                                <div
                                                                    className="absolute -top-px left-1/2 flex h-[2px] w-32 -translate-x-1/2 scale-x-flip"
                                                                >
                                                                    <div
                                                                        className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#cbd5e1_32.29%,rgba(0,130,205,0.3)_67.19%,rgba(0,130,205,0)_100%)]"
                                                                    ></div>
                                                                    <div
                                                                        className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#cbd5e1_32.29%,rgba(0,130,205,0.3)_67.19%,rgba(0,130,205,0)_100%)]"
                                                                    ></div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </MyLink>
                                                    <div className="text-primary-300 mt-0.5 text-xs">
                                                        North Carolina
                                                    </div>
                                                </figcaption>
                                            </div>
                                        </figure>
                                    </div>
                                </div>

                                <Card className="hidden mt-4 lg:flex" />
                            </div>
                            <div>
                                {/* <FormCalendly
                                    className="pattern-calendly lg:pattern-calendly overflow-hidden rounded-2xl bg-primary-50 [background-size:3rem] min-[698px]:-ml-4 min-[698px]:-mt-[66px] min-[698px]:bg-transparent min-[698px]:bg-none lg:bg-primary-50"
                                    dataUrl="https://calendly.com/jriowjeijroiw/30min"
                                /> */}
                                {/* border -> https://tailwindui.com/components/marketing/sections/bento-grids -> Three column bento grid */}
                                <FormFreeEstimate className="lg:sticky lg:top-0 -mx-[1.49rem] bg-white ring-1 ring-black/5 ring-inset px-6 pb-8 pt-8 sm:mx-0 sm:rounded-2xl sm:px-8"></FormFreeEstimate>
                                <StackFeatures className="mx-auto mt-10 flex max-w-[26.25rem] flex-wrap justify-center gap-x-8 lg:hidden" />
                                <Card className="mx-auto max-w-[33rem] lg:hidden mt-10" />
                                
                            </div>
                        </SectionColumnsTwo>
                    </SectionContainer>
                </Section>
            </PageLayout>
        </>
    )
}
