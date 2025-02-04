import { FormCalendly } from '@/components/Forms/FormCalendly'
import imageLogo from '@/public/images/minified/global/logos/logo.svg'
import { GiftIcon } from '@heroicons/react/16/solid'
// import { Confetti } from '@/components/Graphics/Confetti'
import { IconStar } from '@/components/Graphics/Icons/TailwindPrimer/IconStar'
import { HeaderOffset } from '@/components/Header/HeaderOffset'
import { MyImage } from '@/components/MyImage'
import { PageLayout } from '@/components/PageLayout'
import { SectionColumnsTwo } from '@/components/SectionColumnsTwo'
import { Section } from '@/components/Sections/Section'
import { StackAvatars } from '@/components/Stacks/StackAvatars'
import { SectionBodySmall } from '@/components/Typography/SectionBodySmall'
import { SectionTitleBigger } from '@/components/Typography/SectionTitleBigger'
import { app } from '@/data/app'
import { buildMetadata } from '@/functions/buildMetadata'
import { getPageById } from '@/functions/getPageById'
import { hasDuplicateId } from '@/functions/hasDuplicateId'
import imageConfetti from '@/public/images/minified/global/confetti.svg'
import '@/styles/patterns/pattern-calendly.css'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

const meta = {
    canonicalURL: `${app.siteUrl}${getPageById(4).href}`,
    title: 'Get your free estimate',
    description: 'Lorem itsum dolar',
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
            className={`${className} gap-y-3 text-sm/7 text-primary-400`}>
            {features.map((item) => (
                <li key={item.id} className="flex gap-x-3 whitespace-nowrap">
                    <CheckCircleIcon
                        aria-hidden="true"
                        className="h-7 w-5 flex-none"
                    />
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
                className={`${className} relative isolate mt-10 flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-secondary-900 bg-secondary-500/10 pb-8 pt-10 min-[698px]:rounded-lg lg:rounded-2xl`}>
                <div className="absolute -bottom-0.5 left-1/2 flex h-[2px] w-32 -translate-x-1/2">
                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(14,165,233,0.3)_67.19%,rgba(14,165,233,0)_100%)]"></div>
                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(14,165,233,0.3)_67.19%,rgba(14,165,233,0)_100%)]"></div>
                    <div className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(14,165,233,0.3)_67.19%,rgba(14,165,233,0)_100%)]"></div>
                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(14,165,233,0.3)_67.19%,rgba(14,165,233,0)_100%)]"></div>
                </div>
                {/* <div className="absolute top-0 -z-10 h-32 w-32 -translate-y-1/2 rounded-full bg-primary-400 blur-2xl"></div> */}
                {/* <div className="absolute left-0 top-0 -z-10 h-32 w-32 -translate-y-1/2 rounded-full bg-primary-400 blur-2xl"></div> */}
                {/* <div className="absolute right-0 top-0 -z-10 h-32 w-32 -translate-y-1/2 rounded-full bg-primary-400 blur-2xl"></div> */}
                {/* <div className="absolute bottom-0 -z-10 h-32 w-32 translate-y-1/2 rounded-full bg-primary-400 blur-2xl"></div> */}
                {/* <div className="absolute top-0 -z-10 h-12 w-24 translate-y-1/2 rounded-full bg-secondary-600 blur-2xl"></div> */}
                <div className="absolute bottom-0 -z-10 h-12 w-24 translate-y-1/2 rounded-full bg-secondary-600 blur-2xl"></div>
                <MyImage
                    src={imageLogo}
                    className="absolute right-4 top-4 hidden h-auto w-8 min-[500px]:block"
                    sizes="64px"
                    alt={`${app.companyName} logo`}
                    placeholder="empty"
                    backgroundColor=""></MyImage>
                {/* <div className="absolute bottom-0 left-0 -z-10 h-32 w-32 translate-y-1/2 rounded-full bg-primary-400 blur-2xl"></div> */}
                {/* <div className="absolute bottom-0 right-0 -z-10 h-32 w-32 translate-y-1/2 rounded-full bg-primary-400 blur-2xl"></div> */}
                <div className="absolute inset-0 -z-10 [background-image:radial-gradient(circle,rgba(79,70,229,0.3)0%,transparent_70%)]"></div>
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
                <div className="mt-7 flex -translate-x-[0.2rem] gap-x-0.5">
                    {[1, 2, 3, 4, 5].map((index) => (
                        <IconStar
                            key={index}
                            className="size-[1.2rem] text-primary-400"
                        />
                    ))}
                </div>
                <p className="mt-2 max-w-96 text-balance text-center text-sm font-semibold text-white">
                    Neighbors in The Triangle who gave our service a{' '}
                    <span className="text-gradient-primary">
                        5-star rating.
                    </span>
                </p>
            </div>
        </>
    )
}

export default function Page() {
    return (
        <>
            <PageLayout hideCallToActionSection={true}>
                <Section
                    headerTheme="header-secondary-dark"
                    className="pt-section bg-secondary-950">
                    <HeaderOffset />
                    <div
                        className="hero-background-image absolute inset-0 size-full bg-cover bg-fixed opacity-30 [background-position:10%_0%] min-[420px]:bg-left-top min-[1006px]:opacity-100"
                        // style={{
                        //     backgroundImage: `url(${imageHero.src})`,
                        // }}
                    ></div>
                    <div className="absolute bottom-0 right-0 hidden border-b-[70px] border-r-[70px] border-b-secondary-950 border-r-transparent lg:block"></div>
                    {/* <div className="absolute top-0 hidden h-28 w-full bg-gradient-to-b from-secondary-950 lg:block"></div> */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-secondary-950 from-0% via-secondary-950 via-60% lg:via-40%"></div>
                    <div className="relative mx-auto max-w-container sm:px-6 lg:px-8">
                        <SectionColumnsTwo align="items-end">
                            <div className="px-6 sm:px-0 lg:pr-4 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <div className="mb-6 inline-flex space-x-6">
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
                                        <p className="inline-flex items-center text-sm/6 font-medium text-primary-300">
                                            Get 5% off all services{' '}
                                            <span className="hidden [margin-left:0.22rem] min-[400px]:block">
                                                {' '}
                                                today
                                            </span>
                                        </p>
                                    </div>
                                    <SectionTitleBigger className="mt-2">
                                        Get your{' '}
                                        <br className="hidden lg:block" /> free
                                        estimate
                                    </SectionTitleBigger>
                                    <SectionBodySmall className="mt-6 text-balance">
                                        Choose a time, give us a few details,
                                        and our team will come by to provide
                                        your free estimate.
                                    </SectionBodySmall>
                                    <StackFeatures className="mt-6 hidden grid-cols-2 lg:grid" />
                                </div>
                                <Card className="hidden lg:flex" />
                            </div>
                            <div>
                                <FormCalendly
                                    className="pattern-calendly lg:pattern-calendly overflow-hidden rounded-2xl bg-primary-50 [background-size:3rem] min-[698px]:-ml-4 min-[698px]:-mt-[66px] min-[698px]:bg-transparent min-[698px]:bg-none lg:bg-primary-50"
                                    dataUrl="https://calendly.com/jriowjeijroiw/30min"
                                />
                                <div className="px-6 sm:px-0 min-[698px]:pr-8">
                                    <StackFeatures className="mx-auto mt-10 flex max-w-[26.25rem] flex-wrap justify-center gap-x-8 min-[639px]:grid min-[639px]:grid-cols-2 min-[698px]:mt-1.5 lg:hidden" />
                                    <Card className="mx-auto max-w-[33rem] lg:hidden" />
                                </div>
                            </div>
                        </SectionColumnsTwo>
                    </div>
                </Section>
            </PageLayout>
        </>
    )
}
