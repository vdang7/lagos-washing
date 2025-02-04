import { TextButton } from '@/components/Buttons/TextButton'
import { MyLink } from '@/components/MyLink'
import imageLogoSecondaryDark from '@/public/images/minified/global/logos/logo-secondary-1000.svg'
// import { fontHandWriting } from '@/app/fonts'
import { RoundedButtonWithIcon } from '@/components/Buttons/RoundedButtonWithIcon'
// import { ArrowCurly } from '@/components/Graphics/ArrowCurly'
import { Divider } from '@/components/Graphics/Divider'
import { LogoFacebook } from '@/components/Graphics/Logos/LogoFacebook'
import { LogoGoogle } from '@/components/Graphics/Logos/LogoGoogle'
import { PatternHexagon } from '@/components/Graphics/PatternHexagon'
import { SparkleMedium } from '@/components/Graphics/SparkleMedium'
import { HeaderOffset } from '@/components/Header/HeaderOffset'
import { app } from '@/data/app'
import { getPageById } from '@/functions/getPageById'
// import { HexagonVideoNoAutoplay } from '@/components/Video/HexagonVideoNoAutoplay'
import { HexagonImage } from '@/components/HexagonImage'
import { InterfaceItemReview, ItemReview } from '@/components/Items/ItemReview'
import { ItemReviewsSummaryCard } from '@/components/Items/ItemReviewsSummaryCard'
import { MyImage } from '@/components/MyImage'
import { SectionColumnsTwo } from '@/components/SectionColumnsTwo'
import { SectionContainer } from '@/components/SectionContainer'
import { Section } from '@/components/Sections/Section'
import { Items } from '@/components/Stacks/Items'
import { StackReviewsSpotlight } from '@/components/Stacks/StackReviewsSpotlight'
import { SectionBodySmall } from '@/components/Typography/SectionBodySmall'
import { SectionTitleBig } from '@/components/Typography/SectionTitleBig'
// import image4232 from '@/public/images/minified/global/founder/founder-headshot-torso.webp'
import imageLogo from '@/public/images/minified/global/logos/logo.svg'
import imagefb from '@/public/images/minified/global/logos/third-party/facebook.webp'
import imagegoogle from '@/public/images/minified/global/logos/third-party/google.webp'
import imagefb9 from '@/public/images/minified/global/reviews/facebook/lamont.webp'
import imagefb6 from '@/public/images/minified/global/reviews/facebook/lisa.webp'
import imagegoog2 from '@/public/images/minified/global/reviews/google/debra.webp'
// import imageHeroMobile from '@/public/images/minified/pages/home/hero/hero-mobile.webp'
// import image428111 from '@/public/images/minified/pages/home/hero/hero-thumbnail.webp'
import image4281113 from '@/public/images/minified/pages/home/hero/hero-poster2.webp'
import { GiftIcon } from '@heroicons/react/16/solid'
// import { StarIcon } from '@heroicons/react/24/outline'

const testimonialsHeroGoogleLogo = (
    <LogoGoogle
        className="w-12 text-primary-400 transition-colors group-hover:text-white"
        useDefaultColor={false}
    />
)
const testimonialsHeroFacebookLogo = (
    <LogoFacebook
        className="w-14"
        pathClassName="text-primary-400 group-hover:text-white transition-colors"
    />
)

const testimonialsHero: InterfaceItemReview[] = [
    {
        id: 0,
        reviewHref: 'https://g.co/kgs/WabW5iW',
        title: 'Beyond impressed with the results',
        body: 'I had the pleasure of hiring Derek. I am beyond impressed with the results! The experience was top-notch. Exceeded my expectations in every way.',
        authorName: 'Debra',
        authorSubtitle: 'North Carolina',
        authorImageSrc: imagegoog2,
        authorImageAlt: 'Leslie headshot',
        platformLogo: testimonialsHeroGoogleLogo,
    },
    {
        id: 1,
        reviewHref:
            'https://www.facebook.com/lisa.macartneymcallister/posts/pfbid0xjJjocSkUgML6a6MdQdyHKpCiZmX5g8n36RXrUqYg8cpvmx6rftmX42tQjAXhmFBl',
        title: 'Siding on my house looks brand new',
        body: 'Derek was extremely professional. He was very thorough. The siding on my house looks brand new!  He was able to accommodate to my busy schedule.',
        authorName: 'Lisa McAllister',
        authorSubtitle: 'North Carolina',
        authorImageSrc: imagefb6,
        authorImageAlt: 'Leslie headshot',
        platformLogo: testimonialsHeroFacebookLogo,
    },
    {
        id: 2,
        reviewHref:
            'https://www.facebook.com/lamont.mayfield/posts/pfbid02Cqcmiy2vuvuvS43ZZcZdjUtxZSZZPYWZZusBmXdS9bwYMqviSZFUM6vgRNaCeYHMl',
        title: 'Will use them again in the future',
        body: 'The team breathed new life into my driveway. They were personable, on time, and did great work. Definitely recommend them and will use them again in the future.',
        authorName: 'Lamont Mayfield',
        authorSubtitle: 'North Carolina',
        authorImageSrc: imagefb9,
        authorImageAlt: 'Leslie headshot',
        platformLogo: testimonialsHeroFacebookLogo,
    },
]

export function HomeHeroSection() {
    return (
        <>
            <Section
                headerTheme="header-secondary-dark"
                className="pt-section relative bg-secondary-950 [clip-path:inset(0)]">
                <HeaderOffset />
                {/* <div className="lg:hidden absolute inset-0 bg-no-repeat size-full bg-fixed bg-cover opacity-60 min-[384px]:opacity-100" 
                    style={{ backgroundImage: `url(${imageHeroMobile.src})` }}></div>
                    <div className="h-52 w-full bottom-14 fixed bg-gradient-to-t from-secondary-950 via-secondary-950"></div> */}
                <div
                    // className="absolute inset-0 size-full bg-cover bg-fixed opacity-30 sm:opacity-60 lg:opacity-100"
                    className="hero-background-image absolute inset-0 size-full bg-cover bg-fixed opacity-30 [background-position:53%_0%] sm:bg-left-top sm:opacity-60 lg:opacity-100"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary-950 from-0% via-secondary-950 via-70% lg:via-50%"></div>
                {/* <svg
                    className="absolute inset-0 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true">
                    <defs>
                        <pattern
                            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse">
                            <path d="M.5 200V.5H200" fill="none" />
                        </pattern>
                    </defs>
                    <rect
                        width="100%"
                        height="100%"
                        strokeWidth={0}
                        fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
                    />
                </svg> */}
                {/* <HeroBackgroundGraphics /> */}
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] hidden -translate-y-3/4 transform-gpu overflow-hidden blur-3xl min-[522px]:block sm:top-[calc(100%-30rem)] lg:hidden">
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-secondary-500 to-secondary-800 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    />
                </div>

                {/* <div className="absolute translate-y-[-30rem] top-0 left-0 rounded-full size-[100rem] -translate-x-1/2 gradient-primary"></div> */}
                {/* <div className="hidden -translate-x-[25rem]  lg:block absolute top-0 translate-y-[30rem] left-0 rounded-full size-[100rem]  gradient-primary"></div> */}

                <SectionContainer className="relative 2xl:max-w-screen-2xl">
                    <MyImage
                        src={imageLogoSecondaryDark}
                        className="absolute -bottom-24 left-0 h-auto w-[37rem] -translate-x-1/2 lg:-bottom-96"
                        alt="Lagos Pressure Washing Logo"
                        sizes="1184px"
                        backgroundColor=""
                        placeholder="empty"
                    />
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden opacity-30 blur-3xl sm:top-[-20rem]">
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-400 to-primary-400 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                        />
                    </div>
                    <SectionColumnsTwo
                        align="lg:items-center"
                        className="gap-y-24 sm:gap-y-28 2xl:grid-cols-12">
                        <div className="lg:pr-4 lg:pt-4 2xl:col-span-5">
                            <div className="lg:max-w-lg">
                                {/* <div className="mb-6 relative inline-flex items-center rounded-full text-[0.8125rem] font-semibold">
                                    <GiftIcon
                                        className="mr-2 h-4 w-4 text-primary-400"
                                        aria-hidden="true"
                                    />{' '}
                                    <span className="text-gradient-primary">
                                        Winter special
                                    </span>
                                </div> */}
                                <MyLink
                                    prefetch={false}
                                    href={getPageById(4).href}
                                    className="group mb-6 inline-flex flex-wrap gap-x-6 gap-y-2">
                                    <span className="relative flex items-center rounded-full bg-secondary-500/10 px-3 pb-1 pt-[0.1875rem] text-[0.8125rem] font-semibold">
                                        <GiftIcon
                                            className="mr-2 h-4 w-4 text-primary-400"
                                            aria-hidden="true"
                                        />{' '}
                                        <span className="text-gradient-primary">
                                            Winter special
                                        </span>
                                        <div className="absolute inset-0 overflow-hidden rounded-full">
                                            <div className="absolute -bottom-px flex h-[1px] w-16 -translate-x-1/2 scale-x-flip">
                                                <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#07a3f0_32.29%,rgba(2,132,199,0.3)_67.19%,rgba(2,132,199,0)_100%)]"></div>
                                                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#07a3f0_32.29%,rgba(2,132,199,0.3)_67.19%,rgba(2,132,199,0)_100%)]"></div>
                                                <div className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#07a3f0_32.29%,rgba(2,132,199,0.3)_67.19%,rgba(2,132,199,0)_100%)]"></div>
                                                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#07a3f0_32.29%,rgba(2,132,199,0.3)_67.19%,rgba(2,132,199,0)_100%)]"></div>
                                            </div>
                                            <div className="absolute -top-px left-1/2 right-1/2 flex h-[1px] w-16 translate-x-1/2">
                                                <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#07a3f0_32.29%,rgba(2,132,199,0.3)_67.19%,rgba(2,132,199,0)_100%)]"></div>
                                                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#07a3f0_32.29%,rgba(2,132,199,0.3)_67.19%,rgba(2,132,199,0)_100%)]"></div>
                                                <div className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#07a3f0_32.29%,rgba(2,132,199,0.3)_67.19%,rgba(2,132,199,0)_100%)]"></div>
                                                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#07a3f0_32.29%,rgba(2,132,199,0.3)_67.19%,rgba(2,132,199,0)_100%)]"></div>
                                            </div>
                                        </div>
                                    </span>
                                    <TextButton
                                        disableLink={true}
                                        className="font-medium text-primary-300 group-hover:text-primary-400 [&_[data-slot=icon-chevron-animated]]:group-hover:stroke-primary-400">
                                        New customers get 15% off
                                    </TextButton>
                                </MyLink>

                                {/* <MyLink href="#" className="group inline-flex mb-6 items-center rounded-2xl bg-primary-500/10 pt-2 pl-3 pr-4 pb-[0.5625rem] ring-1 ring-inset ring-primary-500/20">
                                    <GiftIcon className="w-10 h-10 mr-2.5 text-primary-300" aria-hidden="true"/> 
                                    <span className="flex flex-col text-[0.8125rem] transition-colors font-semibold text-primary-400 group-hover:text-primary-300">
                                        Early Thanksgiving special
                                        <span className="flex items-center">
                                            Get 5% off all services 
                                            <IconChevronAnimated
                                                className="ml-2.5"
                                                color="stroke-primary-300 group-hover:stroke-primary-200"
                                            />
                                        </span>
                                    </span>
                                </MyLink>                                     */}

                                <SectionTitleBig
                                    tag="h1"
                                    className="mt-2 text-balance">
                                    Professional pressure washing services
                                    Raleigh NC
                                    {/* {' '} */}
                                    {/* <span className="relative whitespace-nowrap">
                                        <Underline className="absolute left-0 top-1/2 h-[0.9em] w-full fill-primary-400"/>
                                        <span className="relative">Raleigh NC</span>
                                    </span> */}
                                </SectionTitleBig>
                                <SectionBodySmall className="mt-6 text-balance">
                                    Specializing in{' '}
                                    <span className="text-bold">
                                        residential{' '}
                                    </span>{' '}
                                    and{' '}
                                    <span className="text-bold">
                                        commercial pressure washing.
                                    </span>{' '}
                                    Serving Raleigh, Cary, Wake Forest &
                                    surrounding areas.
                                </SectionBodySmall>
                                <div className="mt-10 flex flex-wrap items-center gap-4">
                                    <RoundedButtonWithIcon
                                        href={getPageById(4).href}
                                        prefetch={false}>
                                        Get my free estimate
                                    </RoundedButtonWithIcon>

                                    <p className="ml-1 text-xs text-primary-300">
                                        * New customers get 15% off
                                    </p>
                                </div>
                                <StackReviewsSpotlight className="mt-10 origin-left scale-[0.85]" />
                                <div className="mt-10 flex origin-left scale-[0.85] flex-wrap gap-4">
                                    <ItemReviewsSummaryCard
                                        className="bg-white"
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
                                        className="bg-secondary-900/40"
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

                                    {/* <ItemReviewsSummaryCard
                                        className="bg-white"
                                        id={113}
                                        platform="Google"
                                        rating={5}
                                        numberOfStars={5}
                                        numberOfReviews={13}
                                        platformHref="#"
                                        platformLogo={
                                            <LogoGoogle className="w-12" />
                                        }
                                        hideGradient
                                    />
                                    <ItemReviewsSummaryCard
                                        className="bg-secondary-900/40"
                                        id={32}
                                        platform="Facebook"
                                        rating={5}
                                        numberOfStars={5}
                                        numberOfReviews={9}
                                        platformHref="#"
                                        platformLogo={
                                            <LogoFacebook className="w-14" />
                                        }
                                    /> */}
                                </div>
                            </div>
                        </div>
                        <div className="relative flex justify-end 2xl:col-span-7">
                            {/* <PatternHexagon
                                className="absolute right-0 top-1/2 hidden size-96 translate-x-1/2 min-[522px]:block sm:translate-x-[15%] lg:left-0 lg:-translate-x-1/4 2xl:translate-x-0"
                                patternClassName="text-secondary-900"
                            /> */}
                            <PatternHexagon
                                className="absolute right-0 top-1/2 -mt-12 ml-2 hidden size-96 translate-x-1/2 min-[522px]:block sm:translate-x-[15%] lg:left-0 lg:-translate-x-[20%] 2xl:translate-x-0"
                                patternClassName="text-primary-400"
                            />

                            <div className="absolute -right-14 bottom-1/2 hidden translate-y-7 scale-[0.6] min-[595px]:block lg:right-full lg:hidden lg:translate-y-7 min-[1245px]:block 2xl:right-[89%] 2xl:-translate-y-14 2xl:scale-100">
                                <SparkleMedium className="absolute size-24 -translate-x-[6.5rem] translate-y-[9rem] text-primary-200" />

                                <SparkleMedium className="absolute size-20 -translate-x-[6rem] translate-y-[9.5rem] scale-[0.7] text-secondary-950" />
                                {/* <SparkleMedium className="absolute scale-[0.2] size-20 translate-y-[9.5rem] -translate-x-[6rem] text-primary-400"/> */}

                                <SparkleMedium className="absolute size-4 -translate-x-[2rem] translate-y-[10rem] rotate-45 text-white lg:-translate-x-[5.5rem]" />
                            </div>

                            {/* <div className="absolute left-0 right-0 top-6 w-full max-w-[30rem] -translate-y-[4rem] lg:top-0 lg:max-w-none lg:-translate-y-[4.6rem] xl:-translate-y-[4rem]">
                                <div className="relative right-[5%] xl:right-[2.5%]">
                                    <MyImage
                                        className="ml-auto w-[42vw] max-w-[200px] lg:w-[20vw] lg:max-w-none xl:w-64"
                                        src={image4232}
                                        alt=""
                                        sizes="(min-width: 1280px) 576px, (min-width: 1024px) 20vw, 42vw"
                                        backgroundColor=""
                                        placeholder="empty"
                                    />
                                    <div className="absolute -right-12 -top-4 flex scale-75 items-center justify-center lg:top-10 lg:scale-[0.8] xl:-right-10 xl:top-14">
                                        <ArrowCurly className="h-14 w-14 text-primary-200"></ArrowCurly>
                                        <span
                                            className={`ml-3 block translate-y-5 rotate-12 text-lg leading-[1.2rem] tracking-[0.1rem] text-white ${fontHandWriting.className}`}>
                                            Derek
                                            <br />
                                            Lagos
                                        </span>
                                    </div>
                                </div>
                            </div> */}
                            {/* <HexagonVideo
                                className="max-w-[30rem] lg:max-w-none"
                                imageClassName="object-cover object-bottom"
                                iconBoxClassName="absolute bottom-0 right-0 -translate-x-1/2 min-[450px]:-translate-x-full min-[450px]:-translate-y-1/2 lg:-translate-y-[150%] lg:-translate-x-[150%]"
                                thumbnailSrc={image428111}
                                thumbnailAlt="video thumbnail"
                                thumbnailSizes="
                                    (min-width: 1024px) 50vw,
                                    100vw"
                                thumbnailPriority={true}
                                videoSrc="/videos/minified/hero-video.mp4"
                                videoExtension="mp4"
                                // videoId="xsfyb1pStdw"
                            /> */}
                            <HexagonImage
                                className="mr-auto max-w-[30rem] lg:mr-0 lg:max-w-[34rem] 2xl:max-w-[37rem]"
                                imageClassName="object-cover"
                                src={image4281113}
                                alt="home"
                                sizes="
                                    (min-width: 1024px) 50vw,
                                    (min-width: 539px) 960px,
                                    100vw">
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-[70%]"></div>
                                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-xs font-bold text-white">
                                    <MyImage
                                        className="mb-2.5 h-auto w-12 sm:w-14"
                                        src={imageLogo}
                                        sizes="(min-width: 640px) 112px, 96px"
                                        alt=""
                                        backgroundColor=""
                                        placeholder="empty"></MyImage>
                                    Make memories anywhere
                                </div>
                            </HexagonImage>

                            {/* <HexagonVideoHero
                                className="mr-auto max-w-[30rem] lg:mr-0 lg:max-w-[34rem] 2xl:max-w-[37rem]"
                                iconBoxClassName="absolute bottom-0 right-0 -translate-x-1/2 min-[450px]:-translate-x-full min-[450px]:-translate-y-1/2 lg:-translate-y-[90%] lg:-translate-x-[150%] xl:-translate-y-[140%]"
                                src="/videos/minified/hero-thumbnail-video.mp4"
                                poster={image4281113}
                                extension="mp4">
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-[70%]"></div>
                                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-xs font-bold text-white">
                                    <MyImage
                                        className="mb-2.5 h-auto w-12 sm:w-14"
                                        src={imageLogo}
                                        sizes="(min-width: 640px) 112px, 96px"
                                        alt=""
                                        backgroundColor=""
                                        placeholder="empty"></MyImage>
                                    Make memories, anywhere.
                                </div>
                                <div className="absolute inset-0 bg-black/5"></div>
                            </HexagonVideoHero> */}
                            {/* <HexagonVideoNoAutoplay
                                className="mr-auto max-w-[30rem] lg:mr-0 lg:max-w-[34rem] 2xl:max-w-[37rem]"
                                imageClassName="object-cover object-bottom"
                                iconBoxClassName="absolute bottom-0 right-0 -translate-x-1/2 min-[450px]:-translate-x-full min-[450px]:-translate-y-1/2 lg:-translate-y-[90%] lg:-translate-x-[150%] xl:-translate-y-[140%]"
                                thumbnailSrc={image428111}
                                thumbnailAlt="video thumbnail"
                                thumbnailSizes="
                                    (min-width: 1024px) 50vw,
                                    100vw"
                                // thumbnailPriority={true}
                                videoId="1026369589"
                                iFrameTitle="lagos washing introduction">
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-[70%]"></div>
                                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-xs font-bold text-white">
                                    <MyImage
                                        className="mb-2.5 h-auto w-12 sm:w-14"
                                        src={imageLogo}
                                        sizes="(min-width: 640px) 112px, 96px"
                                        alt=""
                                        backgroundColor=""
                                        placeholder="empty"></MyImage>
                                    Make memories, anywhere.
                                </div>
                                <div className="absolute inset-0 bg-black/5"></div>
                            </HexagonVideoNoAutoplay> */}
                        </div>
                        {/* <div className="relative 2xl:col-span-7">
                            <IconSparkleThin className="absolute h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-secondary-500" />
                            <IconSparkle className="absolute -mt-4 ml-6 h-3 w-3 -translate-x-1/2 -translate-y-1/2 animate-pulse text-white [animation-delay:1s]" />
                            <IconSparkle className="absolute -ml-6 mt-4 h-3 w-3 -translate-x-1/2 -translate-y-1/2 animate-pulse text-secondary-200" />
                            <IconSparkleThin className="absolute bottom-0 right-0 z-10 mb-1.5 mr-1 h-12 w-12 translate-x-1/2 translate-y-1/2 rotate-45 animate-pulse text-white" />
                            <IconSparkleThin className="absolute bottom-0 right-0 z-10 mb-1.5 mr-1 h-4 w-4 translate-x-1/2 translate-y-1/2 rotate-45 text-primary-950" />
                            <VideoPlayer
                                className="aspect-h-9 aspect-w-16 overflow-hidden rounded-xl shadow-xl"
                                iconBoxClassName="absolute bottom-3 left-3 w-9 h-9 bg-[rgb(232,232,237)] text-black/60 hover:bg-gray-900/60 hover:text-white transition-colors"
                                playIconClassName="h-5 w-5"
                                pauseIconClassName="h-5 w-5"
                                thumbnailSrc={image423}
                                thumbnailAlt="video thumbnail"
                                thumbnailSizes="
                                        (min-width: 1024px) 50vw,
                                        100vw"
                                thumbnailPriority={true}
                                previewVideoSrc="/videos/starter/intro.mp4"
                                previewVideoExtension="mp4"
                                videoId="xsfyb1pStdw"
                            />
                        </div> */}
                    </SectionColumnsTwo>
                    <div className="relative mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        {/* <StarIcon strokeWidth={0.5} className="min-[522px]:hidden lg:block absolute left-0 top-0 size-[38.4rem] -translate-x-[19.2rem] -translate-y-[8.45rem] text-secondary-900/10"></StarIcon> */}
                        <div className="grid max-w-md grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-12">
                            <Items
                                items={testimonialsHero}
                                ItemComponent={ItemReview}
                            />
                        </div>
                    </div>
                </SectionContainer>
                <div className="pt-10 lg:pt-12"></div>
                <Divider className="h-14 w-full translate-y-px scale-y-flip min-[480px]:h-20 sm:h-24 md:h-auto" />
                {/* <div className="absolute bottom-0 w-full">
                        <DividerMustacheDotted className="max-h-28 2xl:max-h-32 w-full"/>
                    </div> */}
            </Section>
        </>
    )
}
