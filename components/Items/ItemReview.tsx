// import { IconCheckSolid } from '@/components/Graphics/Icons/FontAwesome/IconCheckSolid'
import { IconCheckInRibbon } from '@/components/Graphics/Icons/NounProject/IconCheckInRibbon'
import { IconStar } from '@/components/Graphics/Icons/TailwindPrimer/IconStar'
import { MyImage } from '@/components/MyImage'
import { MyLink } from '@/components/MyLink'
import { getReviewPageHref } from '@/functions/getReviewPageHref'
import { StaticImageData } from 'next/image'

export interface InterfaceItemReview {
    id: number
    reviewHref: string
    title: string | React.ReactNode
    body: string | React.ReactNode
    authorName: string | React.ReactNode
    authorSubtitle: string | React.ReactNode
    authorImageSrc: StaticImageData
    authorImageAlt: string
    platformLogo: React.ReactNode
}

export function ItemReview(props: InterfaceItemReview) {
    return (
        <figure className="flex flex-col">
            <p className="sr-only">5 out of 5 stars</p>

            <div className="-mx-1 mb-3 flex space-x-1.5 text-primary-500">
                {[0, 1, 2, 3, 4].map((index) => (
                    <IconStar key={index} className="h-5 w-5 flex-none" />
                ))}
            </div>

            <p className="text-balance text-base font-semibold text-white">
                {props.title}
            </p>

            <blockquote className="mt-2 text-sm/6 text-primary-300 2xl:max-w-[25rem]">
                <p>{props.body}</p>
            </blockquote>

            <figcaption className="mt-auto flex items-center pt-6">
                {/* <div className="relative"> */}
                <MyImage
                    className="h-10 w-10 rounded-full"
                    src={props.authorImageSrc}
                    alt={props.authorImageAlt}
                    sizes="80px"
                />
                {/* <div className="absolute bottom-0 right-0 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-primary-600 bg-primary-900 ring-2 ring-primary-950">
                        <IconCheckSolid className="h-2 w-2 text-white"></IconCheckSolid>
                    </div>
                </div> */}
                <div className="ml-4 flex w-full items-end justify-between">
                    <div>
                        <MyLink
                            href={props.reviewHref}
                            className="group relative inline-flex items-center text-sm font-medium text-white">
                            {props.authorName}
                            <div className="relative ml-2">
                                <IconCheckInRibbon className="h-4 w-4 text-primary-200" />
                                <span className="absolute right-0 top-0 -translate-y-6 translate-x-1/2 overflow-hidden whitespace-nowrap rounded-full bg-gray-900 px-2.5 py-0.5 text-xs text-white opacity-0 ring-1 ring-inset ring-gray-500/20 duration-300 [transition-property:opacity,transform] group-hover:-translate-y-[1.7rem] group-hover:opacity-100">
                                    Verified customer
                                    <div className="absolute -top-px left-1/2 flex h-[2px] w-32 -translate-x-1/2 scale-x-flip">
                                        <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#cbd5e1_32.29%,rgba(0,130,205,0.3)_67.19%,rgba(0,130,205,0)_100%)]"></div>
                                        <div className="-ml-[100%] w-full flex-none opacity-30 blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#cbd5e1_32.29%,rgba(0,130,205,0.3)_67.19%,rgba(0,130,205,0)_100%)]"></div>
                                    </div>
                                </span>
                            </div>
                        </MyLink>
                        <div className="mt-0.5 text-xs text-primary-400">
                            {props.authorSubtitle}
                        </div>
                    </div>
                    <MyLink
                        className="group"
                        href={getReviewPageHref(props.reviewHref)}
                        ariaLabel="Read more of our customer reviews">
                        {props.platformLogo}
                    </MyLink>
                </div>
            </figcaption>
        </figure>
    )
}
