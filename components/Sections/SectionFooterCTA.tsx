import { RoundedButtonWithIcon } from '@/components/Buttons/RoundedButtonWithIcon'
import { MyLink } from '@/components/MyLink'
import { getPageById } from '@/functions/getPageById'
import imagefb from '@/public/images/minified/global/logos/third-party/facebook.webp'
import imagegoogle from '@/public/images/minified/global/logos/third-party/google.webp'
// import { Confetti } from '@/components/Graphics/Confetti'
import { DividerFooter } from '@/components/Graphics/DividerFooter'
import { IconStar } from '@/components/Graphics/Icons/TailwindPrimer/IconStar'
import { PatternHexagon } from '@/components/Graphics/PatternHexagon'
import { Ribbon } from '@/components/Graphics/Ribbon'
import { MyImage } from '@/components/MyImage'
import { Section } from '@/components/Sections/Section'
import { StackAvatars } from '@/components/Stacks/StackAvatars'
import { StackReviewsSpotlight } from '@/components/Stacks/StackReviewsSpotlight'
import { SectionSubtitle } from '@/components/Typography/SectionSubtitle'
import { SectionTitle } from '@/components/Typography/SectionTitle'
import { app } from '@/data/app'
import imageConfetti from '@/public/images/minified/global/confetti.svg'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

interface Props {
    className?: string
    cardDividerWrapperClassName?: string
    sectionBackgroundColor?: string
}

const items = [
    '5-star rated',
    'Save time & money',
    '100% satisfaction guaranteed',
    'Licensed & insured',
]

export function SectionFooterCTA({
    className,
    sectionBackgroundColor = 'bg-gray-50',
    cardDividerWrapperClassName,
}: Props) {
    const sectionBackgroundColorAsTextColor = sectionBackgroundColor.replace(
        'bg-',
        'text-'
    )

    return (
        <Section
            className={`${className} bg-secondary-950`}
            headerTheme="header-secondary-dark">
            {/* mobile divider - sm+ */}
            <div
                className={`absolute top-0 hidden h-[40%] w-full ${cardDividerWrapperClassName} ${sectionBackgroundColor} sm:block lg:hidden`}
                aria-hidden="true">
                <DividerFooter
                    className="absolute bottom-0 max-h-28 w-full"
                    viewBox="0 369 960 89"
                    pathThreeClassName={sectionBackgroundColorAsTextColor}
                />
            </div>
            {/* desktop divider */}
            <div
                className={`absolute top-0 hidden h-1/2 w-full ${sectionBackgroundColor} lg:block`}
                aria-hidden="true"></div>
            <div
                className={`absolute bottom-0 hidden h-1/2 w-full -translate-y-10 ${sectionBackgroundColor} lg:block`}
                aria-hidden="true">
                <DividerFooter
                    className="max-h-28 w-full 2xl:max-h-32"
                    viewBox="0 373 960 89"
                    pathThreeClassName={sectionBackgroundColorAsTextColor}
                />
                <div className="h-full bg-secondary-950"></div>
            </div>
            <div className="relative">
                <div className="mx-auto max-w-container sm:px-6 lg:px-8">
                    <div className="relative mx-auto flex max-w-2xl flex-col gap-16 bg-primary-400 px-6 pb-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:pb-10 lg:pl-0 lg:pt-16 lg:ring-0 xl:gap-x-20 xl:pr-20">
                        {/* <div className="absolute -top-[0.54rem] right-0 hidden w-[calc(100%-12rem)] justify-center lg:flex">
                            <div className="h-1.5 w-[93.6%] bg-primary-600 [border-top-left-radius:15.625rem;] [border-top-right-radius:15.625rem;] xl:w-[95%]"></div>
                        </div> */}
                        <div
                            className="absolute top-0 hidden h-full w-full max-w-sm lg:block"
                            aria-hidden="true">
                            {/* top cut out */}
                            <div
                                className={`absolute top-0 h-1/2 w-1/2 ${sectionBackgroundColor}`}></div>
                            <div className="absolute right-0 top-0 h-1/2 w-1/2">
                                <div
                                    className={`h-6 w-6 ${sectionBackgroundColor}`}></div>
                                <div className="absolute inset-0 rounded-tl-3xl bg-primary-400"></div>
                            </div>
                            {/* bottom cut out*/}
                            <div className="absolute bottom-0 left-0 h-1/2 w-1/2 bg-secondary-950"></div>
                            <div className="absolute bottom-0 right-0 h-1/2 w-1/2">
                                <div className="absolute bottom-0 h-6 w-6 bg-secondary-950"></div>
                                <div className="absolute inset-0 rounded-bl-3xl bg-primary-400">
                                    <PatternHexagon
                                        // className="h-[38rem] w-[17rem] -translate-x-4"
                                        className="relative z-10 h-[25rem] w-[15rem]"
                                        patternClassName="text-primary-200"
                                    />
                                    <div className="absolute bottom-0 left-0 h-[1.1rem] w-[1.1rem] bg-primary-950 [clip-path:polygon(44%_69%,105%_105%,10%_100%,0%_8%)]"></div>
                                </div>
                            </div>
                        </div>
                        <div className="pattern-logo-white absolute inset-0 opacity-5 [background-size:10rem] lg:hidden"></div>
                        <div className="pointer-events-none absolute right-0 top-0 hidden h-full rounded-3xl [width:calc(100%-192.2px)] lg:block">
                            <div className="pattern-logo-white absolute inset-0 opacity-5 [background-size:10rem]"></div>
                        </div>
                        <div className="relative isolate z-10 h-96 lg:aspect-[1/1] lg:h-auto lg:max-w-sm">
                            {/* <MyImage
                                alt=""
                                src={image813}
                                className="h-full w-full flex-none rounded-2xl object-cover shadow-xl"
                                sizes="
                            (min-width: 1024px) 768px,
                            100vw"
                            /> */}
                            <div className="relative isolate flex h-[22rem] w-full flex-none flex-col items-center justify-center overflow-hidden rounded-2xl bg-secondary-950 shadow-xl lg:w-[384px] lg:translate-y-2">
                                <div className="absolute -bottom-px left-1/2 flex h-[2px] w-32 -translate-x-1/2">
                                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(14,165,233,0.3)_67.19%,rgba(14,165,233,0)_100%)]"></div>
                                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(14,165,233,0.3)_67.19%,rgba(14,165,233,0)_100%)]"></div>
                                    <div className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(14,165,233,0.3)_67.19%,rgba(14,165,233,0)_100%)]"></div>
                                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(14,165,233,0.3)_67.19%,rgba(14,165,233,0)_100%)]"></div>
                                </div>
                                <div className="absolute bottom-0 -z-10 h-12 w-24 translate-y-1/2 rounded-full bg-secondary-600 blur-2xl"></div>
                                <div className="absolute inset-0 -z-10 [background-image:radial-gradient(circle,rgba(37,99,235,0.3)0%,transparent_70%)]"></div>
                                {/* <Confetti className="absolute inset-0 -z-10 h-full w-full scale-[1.5]"/> */}
                                <MyImage
                                    className="absolute inset-0 -z-10 size-full scale-[1.8] object-cover opacity-50"
                                    src={imageConfetti}
                                    alt="confetti"
                                    sizes="
                                    (min-width: 1024px) 768px,
                                    (min-width: 778px) 1216px,
                                    100vw"
                                    backgroundColor=""
                                    placeholder="empty"
                                />
                                <StackAvatars />
                                <div className="mt-7 flex gap-x-0.5">
                                    {[1, 2, 3, 4, 5].map((index) => (
                                        <IconStar
                                            key={index}
                                            className="size-4 text-primary-400"
                                        />
                                    ))}
                                </div>
                                <p className="mt-2 max-w-[15rem] text-balance text-center text-sm font-semibold text-white">
                                    Neighbors in The Triangle who gave our
                                    service a{' '}
                                    <span className="text-gradient-primary">
                                        5-star rating.
                                    </span>
                                </p>
                                <div className="mt-5 flex gap-x-3">
                                    <MyLink href={app.facebookReviewPageHref}>
                                        <MyImage
                                            src={imagefb}
                                            className="size-3 hover:brightness-150"
                                            sizes="24px"
                                            alt="facebook logo"
                                            placeholder="empty"
                                            backgroundColor=""
                                        />
                                    </MyLink>
                                    <MyLink
                                        rel={null}
                                        href={app.googleReviewPageHref}>
                                        <MyImage
                                            src={imagegoogle}
                                            className="size-3 hover:brightness-150"
                                            sizes="24px"
                                            alt="google logo"
                                            placeholder="empty"
                                            backgroundColor=""
                                        />
                                    </MyLink>
                                </div>
                            </div>

                            {/* mobile divider */}
                            <div
                                className={`absolute inset-0 -z-10 -mx-6 h-[55%] ${sectionBackgroundColor} sm:hidden`}
                                aria-hidden="true">
                                <DividerFooter
                                    className="absolute bottom-0 max-h-28 w-full"
                                    pathThreeClassName={
                                        sectionBackgroundColorAsTextColor
                                    }
                                />
                            </div>
                        </div>

                        <div className="w-full flex-auto">
                            <SectionSubtitle>Quick & easy</SectionSubtitle>
                            <SectionTitle className="mt-2" tag="h2">
                                Get your{' '}
                                <span className="text-secondary-900">free</span>{' '}
                                estimate
                            </SectionTitle>
                            <ul
                                role="list"
                                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-primary-950 sm:grid-cols-2 min-[1099px]:gap-x-0">
                                {items.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-x-3">
                                        <div className="relative isolate flex flex-col items-center justify-center">
                                            <CheckCircleIcon
                                                aria-hidden="true"
                                                className="h-7 w-5 flex-none text-[#dcfce7]"
                                            />
                                            <div className="absolute -z-10 size-2.5 rounded-full bg-[#15803d]"></div>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10 flex flex-wrap items-center gap-4">
                                <RoundedButtonWithIcon
                                    color="button-primary-light"
                                    href={getPageById(4).href}>
                                    Get my free estimate
                                </RoundedButtonWithIcon>

                                <p className="ml-1 text-xs text-primary-950">
                                    New customers get 15% off
                                </p>
                            </div>
                            <StackReviewsSpotlight
                                className="mt-10 origin-left scale-[.85]"
                                title={`Neighbors in ${app.serviceAreasNickname} who choose us`}
                            />
                        </div>
                        <Ribbon
                            className="lg:hidden"
                            position="bottom-right"
                            color="bg-primary-200 text-primary-950"
                            shadeColor="bg-primary-100">
                            Winter special
                        </Ribbon>
                        <Ribbon
                            className="hidden lg:block"
                            position="top-right"
                            color="bg-primary-200 text-primary-950"
                            shadeColor="bg-primary-100">
                            Winter special
                        </Ribbon>
                    </div>
                </div>
            </div>
        </Section>
    )
}
