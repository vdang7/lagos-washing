import { RoundedButtonWithIcon } from '@/components/Buttons/RoundedButtonWithIcon'
import { Ribbon } from '@/components/Graphics/Ribbon'
import { MyLink } from '@/components/MyLink'
import { app } from '@/data/app'
import { getPageById } from '@/functions/getPageById'
import imageLogoDark from '@/public/images/minified/global/logos/logo-dark.svg'
// import { Confetti } from '@/components/Graphics/Confetti'
import { Divider } from '@/components/Graphics/Divider'
// import { HeroBackgroundGraphics } from '@/components/Graphics/HeroBackgroundGraphics'
import { MyImage } from '@/components/MyImage'
import { SectionContainer } from '@/components/SectionContainer'
import { Section } from '@/components/Sections/Section'
import { StackAvatars } from '@/components/Stacks/StackAvatars'
import {
    InterfaceItemPicture,
    StackPictureRow,
} from '@/components/Stacks/StackPictureRow'
// import imageConfetti from '@/public/images/minified/global/confetti-light.svg'
import imagefb from '@/public/images/minified/global/logos/third-party/facebook.webp'
import imagegoogle from '@/public/images/minified/global/logos/third-party/google.webp'
import imagestack2 from '@/public/images/minified/pages/home/why-us/before-after-stack/driveway.webp'
import imagestack1 from '@/public/images/minified/pages/home/why-us/before-after/concrete.webp'
import imagestack5 from '@/public/images/minified/pages/home/why-us/before-after/concrete3.webp'
import imagestack4 from '@/public/images/minified/pages/home/why-us/before-after/driveway2.webp'
import imagestack3 from '@/public/images/minified/pages/home/why-us/before-after/home3.webp'
// import image2932 from '@/public/images/minified/home/hero/hero.webp'
import image4281 from '@/public/images/minified/global/founder/founder-headshot.webp'
import imageLogo from '@/public/images/minified/global/logos/logo-white.svg'
import imageHand from '@/public/images/minified/pages/home/why-us/reviews-on-phone.webp'
import { HeartIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { ShieldCheckIcon as ShieldCheckIconSolid } from '@heroicons/react/24/solid'

const stackPicturesChildren = (
    <>
        <div className="absolute inset-0 flex items-center justify-center">
            <MyImage
                className="h-auto w-14 opacity-50 sm:w-[4.5rem]"
                src={imageLogo}
                sizes="160px"
                alt=""
                backgroundColor=""
                placeholder="empty"></MyImage>
        </div>
    </>
)

const stackPictures: InterfaceItemPicture[] = [
    {
        id: 13,
        imageSrc: imagestack5,
        imageAlt: 'enter img alt',
        // imagePriority: false
        children: stackPicturesChildren,
    },
    {
        id: 1532,
        imageSrc: imagestack1,
        imageAlt: 'enter img alt',
        // imagePriority: false
        children: stackPicturesChildren,
    },
    {
        id: 15323,
        imageSrc: imagestack3,
        imageAlt: 'enter img alt',
        // imagePriority: false
        children: stackPicturesChildren,
    },
    {
        id: 1153,
        imageSrc: imagestack2,
        imageAlt: 'enter img alt',
        // imagePriority: false
        children: stackPicturesChildren,
    },
    {
        id: 153213,
        imageSrc: imagestack4,
        imageAlt: 'enter img alt',
        // imagePriority: false
        children: stackPicturesChildren,
    },
]

function SatisfactionCard() {
    return (
        <>
            <div className="overflow-hidden rounded-3xl border border-primary-500/10 pt-8 lg:flex lg:h-full lg:flex-col lg:justify-between lg:pt-12">
                <span className="block text-center text-lg/5 font-semibold tracking-tighter min-[480px]:text-xl/5 min-[735px]:text-2xl/5 lg:text-3xl/6">
                    <span className="text-white">
                        100<span className="-ml-0.5">%</span> satisfaction
                    </span>
                    <br />
                    <span className="text-gradient-primary lg:text-5xl">
                        guaranteed.
                    </span>
                </span>
                <div className="w-full translate-x-[21%]">
                    <MyImage
                        className="mt-16 w-[25rem] shrink-0 scale-110"
                        src={imageHand}
                        alt=""
                        sizes="880px"
                        backgroundColor=""
                        placeholder="empty"
                    />
                </div>
            </div>
        </>
    )
}

function ProfessionalCard() {
    return (
        <>
            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-primary-100 bg-primary-200 px-7 py-10 text-center lg:border-primary-500/5 lg:bg-secondary-500/10">
                <ShieldCheckIcon
                    className="absolute bottom-0 left-0 w-32 -translate-x-1/2 translate-y-[63%] text-primary-100 lg:text-primary-500/20"
                    strokeWidth={0.3}
                />
                <ShieldCheckIcon
                    className="absolute bottom-0 right-0 w-32 translate-x-1/2 translate-y-[63%] text-primary-100 lg:text-primary-500/20"
                    strokeWidth={0.3}
                />
                <div className="relative">
                    <MyImage
                        className="relative h-20 w-20 rounded-full object-cover"
                        src={image4281}
                        alt=""
                        sizes="160px"
                    />
                    <span className="absolute left-0.5 top-1.5 block size-4 rounded-full bg-[#16a34a] ring-[3.5px] ring-secondary-950" />
                    <div className="absolute bottom-0 right-0 flex h-7 w-7 justify-center rounded-full bg-primary-200 lg:bg-secondary-950">
                        <ShieldCheckIconSolid
                            strokeWidth={2}
                            className="w-5 text-primary-700 lg:text-primary-200"
                        />
                    </div>
                </div>
                <span className="mt-4 block text-sm font-medium text-primary-700 lg:text-primary-400">
                    Professionals
                </span>
                <p className="mt-1 block text-lg/6 font-semibold tracking-tighter text-gray-900 lg:text-white">
                    <span className="block">Licensed and insured</span>
                </p>
            </div>
        </>
    )
}

function CoreValuesCard({ className }: { className?: string }) {
    return (
        <>
            <div
                className={`${className} flex-col items-center rounded-3xl bg-secondary-500/10 p-8 text-center min-[600px]:border min-[600px]:border-primary-200 min-[600px]:bg-primary-400 min-[600px]:[background-image:--buttonPrimaryGradient]`}>
                <span className="text-gradient-primary text-sm font-medium min-[600px]:text-primary-950">
                    Our core values
                </span>

                <div className="relative mt-2 flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg font-semibold text-white min-[600px]:text-primary-950">
                    <div className="flex items-center">
                        {/* <HeartIcon
                            className="absolute h-5 w-5 text-primary-400"
                            aria-hidden="true"
                        /> */}
                        <svg
                            aria-hidden="true"
                            className="absolute h-5 w-5 text-primary-400 min-[600px]:text-primary-950"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path
                                fill="currentColor"
                                d="M466.5 83.71l-192-80c-5.875-2.5-12.16-3.703-18.44-3.703S243.5 1.203 237.6 3.703L45.61 83.71C27.73 91.08 16 108.6 16 127.1C16 385.4 205.4 512 255.9 512C305.2 512 496 387.3 496 127.1C496 108.6 484.3 91.08 466.5 83.71zM463.9 128.3c0 225.3-166.2 351.7-207.8 351.7C213.3 479.1 48 352.2 48 128c0-6.5 3.875-12.25 9.75-14.75l192-80c1.973-.8275 4.109-1.266 6.258-1.266c2.071 0 4.154 .4072 6.117 1.266l192 80C463.3 117.1 463.9 125.8 463.9 128.3zM336 181.3c-4.094 0-8.188 1.562-11.31 4.688L229.3 281.4L187.3 239.4C184.2 236.2 180.1 234.7 176 234.7c-9.139 0-16 7.473-16 16c0 4.094 1.562 8.188 4.688 11.31l53.34 53.33C221.2 318.4 225.3 320 229.3 320s8.188-1.562 11.31-4.688l106.7-106.7C350.4 205.5 352 201.4 352 197.3C352 188.8 345.1 181.3 336 181.3z"
                            />
                        </svg>

                        <div className="pl-[1.7rem]">Integrity</div>
                    </div>

                    <div className="flex items-center">
                        {/* <HeartIcon
                            className="absolute h-5 w-5 text-primary-400"
                            aria-hidden="true"
                        /> */}
                        <svg
                            aria-hidden="true"
                            fill="currentColor"
                            className="absolute h-5 w-5 text-primary-400 min-[600px]:text-primary-950"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path d="M558.6 85.41C557.4 73.19 547.1 64 534.8 64h-86.84c.0586-9.074 .0187-17.7-.1785-25.19C447.1 17.06 429.6 0 407.7 0H168.3C146.4 0 128.9 17.06 128.3 38.81C128.1 46.3 128 54.93 128.1 64H41.24C28.87 64 18.62 73.19 17.4 85.41c-6.047 60.41-4.375 260.3 263.2 313.1C280.5 399 280 399.4 280 400v27.62c0 9.312-5.436 17.84-13.84 21.75l-101.5 47.38c-3.406 1.594-5.25 5.312-4.438 8.969C161 509.4 164.3 512 168 512h239.1c3.75 0 7-2.594 7.812-6.281c.8125-3.656-1.031-7.375-4.438-8.969l-101.5-47.38C301.4 445.5 296 436.9 296 427.6V400c0-.5859-.5039-.9531-.625-1.504C562.1 345.7 564.6 145.8 558.6 85.41zM33.34 86.97C33.71 83 37.12 80 41.24 80H128.3c2.396 86.91 20.97 221.9 106.7 290.6C29.29 307.3 28.01 140.1 33.34 86.97zM303.1 463.9L371.9 496H204.1l68.84-32.13C279.1 460.1 284.1 456.4 288 451.1C291.9 456.4 296.9 460.1 303.1 463.9zM288 383.4C151.6 327.8 142 124.5 144.3 39.25C144.6 26.22 155.2 16 168.3 16h239.5c13.09 0 23.65 10.22 23.1 23.25C433.1 124.5 424.4 327.8 288 383.4zM447.7 80h87.09c4.123 0 7.529 3 7.904 6.969c5.324 53.13 4.043 220.3-201.7 283.6C426.7 301.9 445.3 166.9 447.7 80zM375.6 152c3.969-3.844 5.375-9.5 3.688-14.78c-1.719-5.25-6.188-9-11.62-9.781l-45.94-6.719l-20.53-41.66c-4.938-9.969-20.91-9.906-25.84 0L254.8 120.8L208.7 127.5C203.2 128.3 198.8 132 197 137.3C195.3 142.6 196.8 148.2 200.7 152.1l33.28 32.31L226.1 230.3C225.2 235.7 227.4 241.1 231.9 244.3C236.4 247.5 242.1 247.9 247 245.4l41.13-21.62l41.13 21.62c2.125 1.094 4.406 1.656 6.719 1.656c2.969 0 5.906-.9375 8.438-2.781c4.469-3.25 6.656-8.656 5.719-14.06l-7.875-45.84L375.6 152zM333.8 229.7l-45.69-24l-45.69 24l8.75-50.97l-37-35.91l51.19-7.469l22.84-46.28l22.84 46.28l51.81 6.656l-37.81 36.72L333.8 229.7z" />
                        </svg>

                        <div className="pl-[1.7rem]">Greatness</div>
                    </div>

                    <div className="flex items-center whitespace-nowrap">
                        <HeartIcon
                            className="absolute h-5 w-5 text-primary-400 min-[600px]:text-primary-950"
                            aria-hidden="true"
                        />

                        <div className="pl-[1.7rem]">Customer satisfaction</div>
                    </div>
                </div>
            </div>
        </>
    )
}
function SaveCard() {
    return (
        <>
            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-primary-500/5 bg-secondary-500/10 px-7 py-10 text-center">
                <p className="relative text-3xl/7 font-semibold tracking-tighter min-[735px]:text-4xl/8">
                    <span className="text-gradient-primary">
                        Save time <br />
                        and money.
                    </span>
                </p>

                <p className="mt-8 block text-sm font-medium text-primary-200">
                    (Hooray!)
                </p>
                {/* <Confetti className="h-full w-full absolute inset-0 -z-10 scale-150"
                    rectOneClassName = 'text-secondary-900/40'
                    rectTwoClassName = 'text-secondary-800/40'
                    rectThreeClassName = 'text-secondary-700/40'
                    rectFourClassName = 'text-secondary-600/70'
                /> */}
                {/* <MyImage
                    className="absolute inset-0 -z-10 size-full scale-[1.8] object-cover opacity-50"
                    src={imageConfetti}
                    alt="confetti"
                    sizes="
                    (min-width: 1024px) 33vw,
                    (min-width: 600px) 50vw,
                    100vw"
                    backgroundColor=""
                    placeholder="empty"
                /> */}
            </div>
        </>
    )
}

function ReviewsCard() {
    return (
        <div className="flex rounded-3xl border border-primary-300 bg-primary-400 px-7 pb-6 pt-10 min-[600px]:border-primary-500/5 min-[600px]:bg-secondary-500/10 min-[600px]:[flex:0.9] min-[620px]:flex-initial">
            <div className="mx-auto flex flex-col lg:items-start">
                <StackAvatars />

                <p className="mt-6 max-w-[15rem] text-balance text-lg/6 font-semibold text-primary-950 min-[600px]:text-primary-200">
                    Rated{' '}
                    <span className="text-secondary-900 min-[600px]:text-primary-400">
                        5/5 stars
                    </span>{' '}
                    based on 21 reviews from families and businesses in The
                    Triangle.
                </p>
                <div className="mt-8 flex flex-wrap gap-x-4 gap-y-3 text-xs text-primary-950 min-[600px]:text-primary-200">
                    <MyLink
                        href={app.googleReviewPageHref}
                        rel={null}
                        className="flex items-center rounded-full bg-primary-200/30 px-2 py-1.5 transition-transform hover:-translate-y-1 hover:translate-x-1 min-[600px]:bg-primary-400/10">
                        <MyImage
                            src={imagegoogle}
                            className="mr-2 size-3"
                            sizes="24px"
                            alt="google logo"
                            placeholder="empty"
                            backgroundColor=""
                        />
                        Google reviews
                    </MyLink>
                    <MyLink
                        href={app.facebookReviewPageHref}
                        rel={null}
                        className="flex items-center rounded-full bg-primary-200/30 px-2 py-1.5 transition-transform hover:-translate-y-1 hover:translate-x-1 min-[600px]:bg-primary-400/10">
                        <MyImage
                            src={imagefb}
                            className="mr-2 size-3"
                            sizes="24px"
                            alt="facebook logo"
                            placeholder="empty"
                            backgroundColor=""
                        />
                        Facebook reviews
                    </MyLink>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

function VideoCard() {
    return (
        <>
            <div className="relative flex w-full flex-col items-center justify-center rounded-3xl bg-white py-32 min-[428px]:py-20 min-[600px]:[flex:1]">
                <MyImage
                    className="absolute left-4 top-4 mb-6 h-auto w-8"
                    src={imageLogoDark}
                    sizes=""
                    alt=""
                    placeholder="empty"
                    backgroundColor=""
                />
                <RoundedButtonWithIcon href={getPageById(4).href}>
                    Get my free estimate
                </RoundedButtonWithIcon>
                <p className="mt-4 text-xs text-gray-900">
                    New customers get 15% off
                </p>
                <Ribbon
                    position="bottom-right"
                    color="bg-primary-100 text-primary-700"
                    shadeColor="bg-primary-50">
                    Winter special
                </Ribbon>
            </div>
            {/* <div className="relative w-full overflow-hidden rounded-3xl min-[600px]:[flex:1]">
                <div className="z-10 absolute inset-0 bg-black/20 text-[#fce8d8] text-3xl/6 min-[920px]:text-5xl/9 lg:text-4xl/7 font-extrabold flex items-center justify-center flex-col">
                    <div className="mt-[4%] min-[434px]:mt-[6%] min-[600px]:mt-0 min-[920px]:mt-[7%] lg:mt-0">
                        <span className="block">Make</span>
                        <span className="block">memories</span>
                        <span className="block text-white">anywhere.</span>
                    </div>
                </div>
                <MyImage
                    className="object-top min-[600px]:aspect-auto aspect-[16/9] w-full object-cover min-[600px]:absolute min-[600px]:inset-0 min-[600px]:h-full"
                    src={image2932}
                    alt=""
                    sizes="
                    (min-width: 1024px) 686px, 
                    (min-width: 600px) 50vw, 
                    100vw"
                />
             
            </div> */}
        </>
    )
}

export function HomeWhyUsSection() {
    return (
        <>
            <Section
                className="isolate overflow-hidden bg-secondary-950"
                headerTheme="header-secondary-dark">
                <div className="pattern-logo-secondary-dark absolute inset-0 -z-10 [background-size:10rem]"></div>
                <Divider
                    className="h-24 w-full -translate-y-px scale-x-flip pb-12 sm:h-auto"
                    pathTwoClassName="text-primary-400"
                    pathFourClassName="stroke-primary-200"
                />

                {/* <GradientSecondaryDark /> */}
                {/* <HeroBackgroundGraphics /> */}
                {/* <div className="absolute pattern-star inset-0 -z-10 opacity-25"></div> */}
                {/* <div className="absolute inset-0 size-full bg-stars opacity-[0.6]"></div>
                <div className="absolute inset-0 size-full bg-twinkling"></div>          */}
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-secondary-900 to-secondary-900 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <SectionContainer className="relative">
                    <div className="min-[485px]:text-center">
                        <h3 className="text-sm font-medium">
                            <span className="text-gradient-primary">
                                Lagos difference
                            </span>
                        </h3>
                        <h2 className="mx-auto mt-2 text-balance text-[1.75rem] font-semibold leading-7 tracking-tight text-white min-[431px]:max-w-xl min-[850px]:max-w-none lg:text-3xl">
                            Why homeowners & businesses in Raleigh{' '}
                            <span className="text-gradient-primary">
                                choose us
                            </span>
                        </h2>
                    </div>
                    <div className="mx-auto mt-16 flex max-w-md flex-col gap-4 min-[600px]:max-w-none lg:flex-row">
                        <div className="flex flex-col gap-4 min-[600px]:flex-row lg:flex-1 lg:[flex-grow:2.5]">
                            <div className="flex-1 space-y-4 lg:[flex-grow:1.5]">
                                <SatisfactionCard></SatisfactionCard>
                                <CoreValuesCard className="hidden min-[600px]:block lg:hidden"></CoreValuesCard>
                            </div>
                            <div className="grid flex-1 gap-4 min-[600px]:grid-rows-2 lg:grid-rows-1">
                                <ProfessionalCard></ProfessionalCard>
                                <CoreValuesCard className="hidden lg:block"></CoreValuesCard>
                                <SaveCard></SaveCard>
                            </div>
                        </div>
                        <div className="grid gap-4 min-[600px]:flex lg:flex-1 lg:flex-col">
                            <ReviewsCard></ReviewsCard>
                            <CoreValuesCard className="min-[600px]:hidden"></CoreValuesCard>
                            <VideoCard></VideoCard>
                        </div>
                    </div>
                </SectionContainer>
                <div className="relative mt-16 sm:mt-20">
                    <StackPictureRow items={stackPictures} />
                    <div className="absolute bottom-0 -z-10 h-[65%] w-full">
                        <Divider
                            pathTwoClassName="text-primary-950"
                            className="h-20 w-full scale-x-flip scale-y-flip sm:h-24"
                        />
                        <div className="h-full w-full bg-gray-50"></div>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl">
                    <div
                        style={{
                            clipPath:
                                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                        }}
                        className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-secondary-600 to-secondary-800 opacity-25"
                    />
                </div>

                {/* <div className="absolute bottom-0 right-1/2 -z-30 h-96 w-96 translate-x-1/2 scale-150 rounded-full bg-secondary-900 blur-2xl"></div> */}
            </Section>
        </>
    )
}
