import { IconStar } from '@/components/Graphics/Icons/TailwindPrimer/IconStar'
import { MyLink } from '@/components/MyLink'

export interface InterfaceItemReviewsSummaryCard {
    className: string
    href: string
    rating: string
    numberOfStars: number
    numberOfReviews: number
    logo: React.ReactNode
    hideGradient?: boolean
}

export function ItemReviewsSummaryCard({
    className,
    href,
    rating,
    numberOfStars,
    numberOfReviews,
    logo,
    hideGradient = false,
}: InterfaceItemReviewsSummaryCard) {
    return (
        <MyLink
            href={href}
            rel={null}
            className={`${className} relative flex rounded-full py-3 pl-3 pr-5 text-xs text-[--itemReviewsSummaryCardTextColor] transition-transform hover:-translate-y-1 hover:translate-x-1`}>
            <div className="flex items-center">{logo}</div>
            <div className="ml-4">
                <div className="flex items-center gap-x-2">
                    {rating}
                    <div className="flex">
                        {[...Array(numberOfStars)].map((_, index) => (
                            <IconStar
                                key={index}
                                className="size-4 text-[--itemReviewsSummaryCardStarColor]"
                            />
                        ))}
                    </div>
                </div>
                <span className="mt-0.5 block">
                    Based on{' '}
                    <span className="font-semibold">{numberOfReviews}</span>{' '}
                    reviews
                </span>
            </div>
            {!hideGradient && (
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div className="absolute -bottom-px left-1/2 right-1/2 flex h-[2px] w-32 -translate-x-1/2">
                        <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#07a3f0_32.29%,rgba(2,132,199,0.3)_67.19%,rgba(2,132,199,0)_100%)]"></div>
                        <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#07a3f0_32.29%,rgba(2,132,199,0.3)_67.19%,rgba(2,132,199,0)_100%)]"></div>
                        <div className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#07a3f0_32.29%,rgba(2,132,199,0.3)_67.19%,rgba(2,132,199,0)_100%)]"></div>
                        <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#07a3f0_32.29%,rgba(2,132,199,0.3)_67.19%,rgba(2,132,199,0)_100%)]"></div>
                    </div>
                </div>
            )}
        </MyLink>
    )
}
