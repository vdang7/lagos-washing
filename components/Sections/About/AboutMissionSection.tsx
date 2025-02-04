import { AnimatedNumber } from '@/components/Animations/AnimatedNumber'
import { FadeIn, FadeInStagger } from '@/components/Animations/FadeIn'
import { HeaderOffset } from '@/components/Header/HeaderOffset'
import { MyImage } from '@/components/MyImage'
import { SectionContainer } from '@/components/SectionContainer'
import { Lead } from '@/components/Sections/About/components/Lead'
import { Section } from '@/components/Sections/Section'
import { InteriorSubtitle } from '@/components/Typography/InteriorSubtitle'
import { InteriorTitle } from '@/components/Typography/InteriorTitle'
import { app } from '@/data/app'
import imageLogo from '@/public/images/minified/global/logos/logo-dark.svg'
import image1 from '@/public/images/minified/pages/about/1.webp'
import image2 from '@/public/images/minified/pages/about/2.webp'
import image3 from '@/public/images/minified/pages/about/3.webp'
import image4 from '@/public/images/minified/pages/about/4.webp'

const outerContainerClassName = 'px-6 lg:px-0 relative'
const sectionContainerClassName = 'mx-auto max-w-2xl lg:max-w-container lg:px-8'

export function AboutMissionSection() {
    return (
        <>
            <Section className="pt-section bg-white">
                <HeaderOffset />
                <div className="hero-background-image absolute inset-0 size-full bg-cover bg-fixed opacity-30 [background-position:25%_0%] min-[559px]:bg-left-top sm:opacity-100"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white from-0% via-white via-60% lg:via-65%"></div>
                <div className={outerContainerClassName}>
                    <SectionContainer className={sectionContainerClassName}>
                        <div className="mb-4 flex">
                            <MyImage
                                className="mr-1.5 h-auto w-6 object-contain"
                                src={imageLogo}
                                sizes="48px"
                                alt=""
                                placeholder="empty"></MyImage>
                            <InteriorSubtitle>
                                {app.companyName}
                            </InteriorSubtitle>
                            {/* <h2 className="text-sm font-medium text-primary-900">
                                Lagos Pressure Washing
                            </h2> */}
                        </div>
                        <InteriorTitle className="mt-2 text-balance" tag="h1">
                            Make memories anywhere
                        </InteriorTitle>
                        <Lead className="mt-6 max-w-3xl text-balance">
                            {/* Making your property shine for the best times ahead */}
                            We are on a mission to turn every corner in North
                            Carolina into a place where unforgettable moments
                            happen.
                        </Lead>
                        <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
                            <div className="max-w-lg">
                                <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">
                                    Our mission
                                </h2>
                                <p className="mt-6 text-base/7 text-gray-600">
                                    {/* At Lagos Washing, we believe your surroundings impact your actions. That’s why we’re all about making spaces that bring joy and comfort. We believe the right atmosphere can spark creativity, foster connections, and keep the good energy going. We want everyone to feel comfortable and relaxed, so they can thrive and be their best selves. */}
                                    At {app.companyName}, we believe great
                                    spaces inspire great things. That&apos;s why
                                    we create environments designed for comfort.
                                    Imagine a space where creativity flows
                                    effortlessly. Where connections happen
                                    naturally. Where you&apos;re supported on
                                    your journey to achieving your full
                                    potential. That&apos;s the space we create.
                                    {/* We
                                    believe a positive atmosphere sparks
                                    creativity, fosters connections, and keeps
                                    the good energy flowing. We want everyone to feel
                                    at ease, so they can thrive and be their
                                    best selves. */}
                                </p>
                                <p className="mt-8 text-base/7 text-gray-600">
                                    {/* To bring our vision to life, we're committed to delivering world-class service by staying ahead of industry advancements. This ensures that everyone can enjoy spaces where the good times roll at a great value. */}
                                    Thank you to each of our amazing clients for
                                    choosing us. Your satisfaction is our
                                    guarantee, and we look forward to serving
                                    you for years to come.
                                </p>
                            </div>
                            <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                                <FadeInStagger className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                                    <FadeIn className="overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 [aspect-ratio:1/1]">
                                        <MyImage
                                            alt=""
                                            src={image1}
                                            className="block size-full object-cover"
                                            sizes="
                                                    (min-width: 1280px) 584px,
                                                    (min-width: 1024px) 630px,
                                                    (min-width: 640px) 25vw,
                                                    50vw"
                                        />
                                    </FadeIn>
                                    <FadeIn className="-mt-8 overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 [aspect-ratio:1/1] lg:-mt-32">
                                        <MyImage
                                            alt=""
                                            src={image4}
                                            className="block size-full object-cover"
                                            sizes="
                                            (min-width: 1280px) 584px,
                                            (min-width: 1024px) 630px,
                                            (min-width: 640px) 25vw,
                                            50vw"
                                        />
                                    </FadeIn>
                                    <FadeIn className="overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 [aspect-ratio:1/1]">
                                        <MyImage
                                            alt=""
                                            src={image2}
                                            className="block size-full object-cover"
                                            sizes="
                                            (min-width: 1280px) 584px,
                                            (min-width: 1024px) 630px,
                                            (min-width: 640px) 25vw,
                                            50vw"
                                        />
                                    </FadeIn>
                                    <FadeIn className="-mt-8 overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 [aspect-ratio:1/1] lg:-mt-32">
                                        <MyImage
                                            alt=""
                                            src={image3}
                                            className="block size-full object-cover"
                                            sizes="
                                            (min-width: 1280px) 584px,
                                            (min-width: 1024px) 630px,
                                            (min-width: 640px) 25vw,
                                            50vw"
                                        />
                                    </FadeIn>
                                </FadeInStagger>
                            </div>
                            <div className="max-lg:mt-16 lg:col-span-1">
                                <h2 className="text-base/7 font-semibold text-gray-500">
                                    The numbers
                                </h2>
                                <hr className="mt-6 border-t border-gray-200" />
                                <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                                    <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                                        <dt className="text-sm/6 text-gray-600">
                                            5-star reviews
                                        </dt>
                                        <dd className="order-first text-6xl font-semibold tracking-tight">
                                            <AnimatedNumber
                                                start={0}
                                                end={23}
                                            />
                                        </dd>
                                    </div>
                                    <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                                        <dt className="text-sm/6 text-gray-600">
                                            Customer satisfaction rate
                                        </dt>
                                        <dd className="order-first text-6xl font-semibold tracking-tight">
                                            <AnimatedNumber
                                                start={0}
                                                end={100}
                                            />
                                            %
                                        </dd>
                                    </div>
                                    <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
                                        <dt className="text-sm/6 text-gray-600">
                                            Social media followers
                                        </dt>
                                        <dd className="order-first text-6xl font-semibold tracking-tight">
                                            <AnimatedNumber
                                                start={0}
                                                end={1280}
                                            />
                                        </dd>
                                    </div>
                                    <div className="flex flex-col gap-y-2">
                                        <dt className="text-sm/6 text-gray-600">
                                            Areas served in North Carolina
                                        </dt>
                                        <dd className="order-first text-6xl font-semibold tracking-tight">
                                            <AnimatedNumber start={0} end={3} />
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </section>
                    </SectionContainer>
                </div>
            </Section>
        </>
    )
}
