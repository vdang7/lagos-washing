import { fontCursive } from '@/app/fonts'
import { TextButton } from '@/components/Buttons/TextButton'
import { IconSoundWave } from '@/components/Graphics/Icons/NounProject/IconSoundWave'
import { IconStar } from '@/components/Graphics/Icons/TailwindPrimer/IconStar'
import { Ribbon } from '@/components/Graphics/Ribbon'
import { SparkleMedium } from '@/components/Graphics/SparkleMedium'
import { MyImage } from '@/components/MyImage'
import { MyLink } from '@/components/MyLink'
import { SectionContainer } from '@/components/SectionContainer'
import { Section } from '@/components/Sections/Section'
import { StackAvatars } from '@/components/Stacks/StackAvatars'
import { SectionBodySmall } from '@/components/Typography/SectionBodySmall'
import { SectionTitle } from '@/components/Typography/SectionTitle'
import { app } from '@/data/app'
import { getPageById } from '@/functions/getPageById'
import imageLogo from '@/public/images/minified/global/logos/logo-white.svg'
import imagefb from '@/public/images/minified/global/logos/third-party/facebook.webp'
import imagegoogle from '@/public/images/minified/global/logos/third-party/google.webp'
import image1a from '@/public/images/minified/global/reviews/google/debra.webp'
// import { VimeoVideo } from '@/components/VimeoVideo'
import image4281 from '@/public/images/minified/global/founder/founder-headshot.webp'
import image3 from '@/public/images/minified/pages/home/why-us/before-after/driveway.webp'
import image1 from '@/public/images/minified/pages/home/why-us/before-after/home.webp'
import image2 from '@/public/images/minified/pages/home/why-us/before-after/home2.webp'

export function HomeFounderSection() {
    return (
        <>
            <Section className="pb-section pt-16">
                <SectionContainer className="lg:flex">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                        <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                            <div className="relative inline-flex items-center">
                                {/* <a
                                    href={makeTelephoneHref(location.telephone)}
                                    className="pointer-events-none absolute left-0 -translate-y-9 whitespace-nowrap rounded-full bg-primary-50 px-2.5 py-0.5 text-xs text-primary-700  opacity-0 duration-300 [transition-property:opacity,transform] group-hover:-translate-y-10 group-hover:opacity-100">
                                    Need help? Call or text me at{' '}
                                    <span className="font-medium">{location.telephone}</span>
                                </a> */}
                                <div className="relative mr-3">
                                    <MyImage
                                        className="h-10 w-10 rounded-full"
                                        src={image4281}
                                        sizes="80px"
                                        alt={app.founderFullName}
                                    />
                                    <span className="absolute right-0 top-0 block h-2.5 w-2.5 rounded-full bg-[#16a34a] ring-2 ring-gray-50" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-primary-700">
                                        {app.founderFullName}
                                    </p>
                                    <p className="text-xs text-gray-900">
                                        Founder, {app.companyName}
                                    </p>
                                </div>
                            </div>

                            <SectionTitle className="mt-4">
                                Hi, I am {app.founderFullName}
                                <span className="text-primary-400">.</span>
                            </SectionTitle>
                            <p className="mt-6 text-balance text-xl leading-8 text-[--sectionBodyColor]">
                                {/* I found a passion for pressure washing while
                                helping a friend. Inspired by the
                                transformation, I pursued opportunities in the industry and loved it so much I
                                started {app.companyName}. */}
                                Lagos&apos;s mission is to provide world class
                                service at fair prices. We are committed to
                                excellence and will not leave until every spot
                                is sparkling.
                            </p>
                            <SectionBodySmall className="mt-6 text-balance">
                                Thank you to each of our amazing clients for
                                choosing us. Your satisfaction is our guarantee,
                                and we look forward to serving you for years to
                                come.
                                {/* At {app.companyName}, I prioritize excellence & customer satisfaction in every project. I am honored to have earned 21 five-star reviews from my amazing clients. I treat each one of my client's property as if it were my own, because your satisfaction is my top priority. */}
                            </SectionBodySmall>
                            <TextButton
                                className="mt-6"
                                href={getPageById(4).href}>
                                Get your free estimate
                            </TextButton>
                            <p
                                className={`${fontCursive.className} mt-8 text-4xl font-thin text-gray-500/80`}>
                                {app.founderFullName}
                            </p>
                            <p className="text-sm font-medium text-gray-500">
                                {app.founderFullName}
                            </p>
                        </div>
                        <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                            <div className="relative w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                                <Ribbon
                                    className="hidden lg:block"
                                    position="top-right">
                                    Raleigh
                                </Ribbon>
                                <MyImage
                                    src={image3}
                                    alt="Driveway before and after pressure washing"
                                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl object-cover"
                                    sizes="1184px"
                                />
                                <div className="absolute inset-0 flex aspect-[7/5] w-[37rem] items-center justify-center">
                                    <MyImage
                                        className="h-auto w-24 opacity-50"
                                        src={imageLogo}
                                        sizes="192px"
                                        alt="Lagos pressure washing logo"
                                        backgroundColor=""
                                        placeholder="empty"></MyImage>
                                </div>
                            </div>
                            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                                <div className="relative order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                    <MyImage
                                        src={image2}
                                        alt="home before and after pressure washing"
                                        className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl object-cover"
                                        sizes="768px"
                                    />
                                    <div className="absolute flex aspect-[4/3] w-[24rem] items-center justify-center">
                                        <MyImage
                                            className="h-auto w-20 opacity-50 lg:w-24"
                                            src={imageLogo}
                                            sizes="(min-width: 1024px) 192px, 160px"
                                            alt="Lagos pressure washing logo"
                                            backgroundColor=""
                                            placeholder="empty"></MyImage>
                                    </div>
                                </div>
                                <div className="relative flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                    <div className="absolute aspect-[7/5] w-[37rem]">
                                        <SparkleMedium className="absolute left-0 top-[1.3rem] ml-7 hidden w-[13rem] -translate-x-1/2 text-white md:block" />
                                        <SparkleMedium className="absolute top-[3rem] ml-[3.2rem] hidden w-[2rem] translate-x-1/2 text-primary-200 md:block" />
                                        <SparkleMedium className="absolute bottom-0 right-[0.5rem] hidden w-[6rem] translate-y-1/2 rotate-45 text-gray-100 md:block" />
                                        <SparkleMedium className="absolute bottom-0 right-[0.5rem] mr-8 hidden w-[2rem] translate-y-1/2 rotate-45 text-gray-50 md:block" />
                                    </div>
                                    <MyImage
                                        src={image1}
                                        alt="home before and after pressure washing"
                                        className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl object-cover"
                                        sizes="1184px"
                                    />
                                    <div className="absolute flex aspect-[7/5] w-[37rem] items-center justify-center">
                                        <MyImage
                                            className="h-auto w-20 opacity-50 lg:w-24"
                                            src={imageLogo}
                                            sizes="(min-width: 1024px) 192px, 160px"
                                            alt="Lagos pressure washing logo"
                                            backgroundColor=""
                                            placeholder="empty"></MyImage>
                                    </div>
                                    <div className="absolute bottom-0 left-0 translate-x-10 translate-y-1/2 rotate-[5deg] rounded-2xl bg-primary-400 px-4 py-3 text-center [background-image:--buttonPrimaryGradient]">
                                        <IconSoundWave className="-my-4 mx-auto w-24 scale-y-[.2] text-primary-800" />
                                        <p className="mt-1.5 font-semibold leading-5 text-white">
                                            “Beyond impressed <br />
                                            with the results!”
                                        </p>
                                        <span className="mb-2.5 mt-2 flex items-center justify-center text-xs text-white">
                                            <MyImage
                                                className="mr-2 size-4"
                                                src={image1a}
                                                alt="client debra headshot"
                                                sizes="32px"
                                            />{' '}
                                            From Debra
                                        </span>
                                        <IconSoundWave className="-my-4 mx-auto w-24 scale-x-flip scale-y-[.2] text-primary-800" />
                                    </div>
                                </div>
                                <div className="relative hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                    {/* <MyImage
                                        src={image423}
                                        alt="App screenshot"
                                        className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl object-cover"
                                        sizes="768px"
                                    /> */}
                                    {/* <VimeoVideo
                                        videoId="1015824318"
                                        className="overflow-hidden aspect-[4/3] w-[24rem] rounded-2xl object-cover"
                                        iconBoxClassName="z-10 absolute bottom-3 right-3"
                                        iFrameTitle="Lagos Pressure Washing intro"
                                        iFrameClassName="scale-[1.34]"
                                        thumbnailSrc={image4281}
                                        thumbnailAlt= "enter img alt"
                                        thumbnailSizes="768px"
                                    /> */}
                                    <div className="flex w-[24rem] flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-white pb-5 pt-8">
                                        <StackAvatars />
                                        <div className="mt-6 flex gap-x-0.5">
                                            {[1, 2, 3, 4, 5].map((index) => (
                                                <IconStar
                                                    key={index}
                                                    className="size-4 text-primary-400"
                                                />
                                            ))}
                                        </div>
                                        <p className="mt-2 max-w-[15rem] text-center text-sm font-semibold text-gray-900">
                                            Neighbors in The Triangle who gave
                                            our services a 5-star rating.
                                        </p>
                                        <div className="mt-4 flex gap-x-3">
                                            <MyLink
                                                href={
                                                    app.facebookReviewPageHref
                                                }>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionContainer>
            </Section>
        </>
    )
}
