import { IconCheckInRibbon } from '@/components/Graphics/Icons/NounProject/IconCheckInRibbon'
import { IconStar } from '@/components/Graphics/Icons/TailwindPrimer/IconStar'
import { MyImage } from '@/components/MyImage'
import { MyLink } from '@/components/MyLink'
import { getReviewPageHref } from '@/functions/getReviewPageHref'
import { StaticImageData } from 'next/image'

export interface InterfaceItemReviewCardWithStars {
    id: number
    title: string
    body: string | React.ReactNode
    authorName: string | React.ReactNode
    authorSubtitle: string | React.ReactNode
    authorImageSrc: StaticImageData
    authorImageAlt: string
    reviewHref: string
    platformLogoMobile: React.ReactNode
    platformLogoDesktop: React.ReactNode
}

export function ItemReviewCardWithStars(
    props: InterfaceItemReviewCardWithStars
) {
    return (
        <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
            <figure className="relative rounded-2xl bg-primary-50 px-6 pb-7 pt-8 text-sm/6">
                <div className="-mx-1 mb-2 flex space-x-1 text-primary-400">
                    {[0, 1, 2, 3, 4].map((index) => (
                        <IconStar
                            key={index}
                            className="h-[1.2rem] w-[1.2rem] flex-none"
                        />
                    ))}
                </div>
                <p className="text-lg font-semibold text-gray-900">
                    {props.title}
                </p>
                <blockquote className="mt-6 text-gray-600">
                    <p>{`“${props.body}”`}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                    <MyImage
                        className="h-10 w-10 shrink-0 rounded-full bg-gray-50"
                        src={props.authorImageSrc}
                        alt={props.authorImageAlt}
                        sizes="80px"
                    />
                    <div className="flex w-full items-end justify-between">
                        <div className="shrink-0">
                            <MyLink
                                href={props.reviewHref}
                                className="group relative flex cursor-pointer items-center">
                                <div className="font-semibold text-gray-900">
                                    {props.authorName}
                                </div>
                                <div className="relative ml-2">
                                    <IconCheckInRibbon className="h-4 w-4 text-primary-200" />

                                    <span className="absolute right-0 top-0 -translate-y-6 translate-x-1/2 overflow-hidden whitespace-nowrap rounded-full bg-gray-900 px-2.5 py-0.5 text-xs text-white opacity-0 ring-1 ring-inset ring-gray-500/20 duration-300 [transition-property:opacity,transform] group-hover:-translate-y-[1.7rem] group-hover:opacity-100">
                                        Verified customer
                                        <div className="absolute -top-px left-1/2 flex h-[2px] w-32 -translate-x-1/2 scale-x-flip">
                                            <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#cbd5e1_32.29%,rgba(0,130,205,0.3)_67.19%,rgba(0,130,205,0)_100%)]"></div>
                                            <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#cbd5e1_32.29%,rgba(0,130,205,0.3)_67.19%,rgba(0,130,205,0)_100%)]"></div>
                                        </div>
                                        {/* <div className="absolute -top-px left-1/2 flex h-[2px] w-32 -translate-x-1/2 scale-x-flip">
                                            <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#cbd5e1_32.29%,rgba(2,132,199,0.3)_67.19%,rgba(2,132,199,0)_100%)]"></div>
                                            <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#cbd5e1_32.29%,rgba(2,132,199,0.3)_67.19%,rgba(2,132,199,0)_100%)]"></div>
                                            <div className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#cbd5e1_32.29%,rgba(2,132,199,0.3)_67.19%,rgba(2,132,199,0)_100%)]"></div>
                                            <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#cbd5e1_32.29%,rgba(2,132,199,0.3)_67.19%,rgba(2,132,199,0)_100%)]"></div>
                                        </div>
                                        <div className="absolute -top-px right-1/2 flex h-[2px] w-32 translate-x-1/2 scale-x-flip">
                                            <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#cbd5e1_32.29%,rgba(2,132,199,0.3)_67.19%,rgba(2,132,199,0)_100%)]"></div>
                                            <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#cbd5e1_32.29%,rgba(2,132,199,0.3)_67.19%,rgba(2,132,199,0)_100%)]"></div>
                                            <div className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#cbd5e1_32.29%,rgba(2,132,199,0.3)_67.19%,rgba(2,132,199,0)_100%)]"></div>
                                            <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#cbd5e1_32.29%,rgba(2,132,199,0.3)_67.19%,rgba(2,132,199,0)_100%)]"></div>
                                        </div> */}
                                    </span>
                                </div>
                            </MyLink>
                            <div className="text-xs text-gray-600">
                                {props.authorSubtitle}
                            </div>
                        </div>
                        <MyLink
                            className="hover:brightness-125"
                            href={getReviewPageHref(props.reviewHref)}
                            ariaLabel="Read more of our customer reviews">
                            {props.platformLogoDesktop}
                        </MyLink>
                    </div>
                </figcaption>
                <MyLink
                    className="hover:brightness-125"
                    href={getReviewPageHref(props.reviewHref)}
                    ariaLabel="Read more of our customer reviews">
                    {props.platformLogoMobile}
                </MyLink>
            </figure>
        </div>
    )
}
