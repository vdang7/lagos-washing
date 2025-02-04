import { TextButton } from '@/components/Buttons/TextButton'
import { IconStar } from '@/components/Graphics/Icons/TailwindPrimer/IconStar'
import { MyLink } from '@/components/MyLink'
import { app } from '@/data/app'

export interface InterfaceItemReviewsSummaryCard {
    id: number
    className: string
    numberOfStars: number
    rating: number
    platform: string
    platformHref: string
    platformLogo: React.ReactNode
    numberOfReviews: number
    buttonHref?: string
    buttonText?: string
    invertTextButtonColor?: boolean
    hideGradient?: boolean
}

export function ItemReviewsSummaryCard2({
    className,
    numberOfStars,
    rating,
    platformHref,
    platformLogo,
    platform,
    numberOfReviews,
    buttonText,
    buttonHref,
    invertTextButtonColor = false,
    hideGradient = false,
}: InterfaceItemReviewsSummaryCard) {
    return (
        <div
            className={`relative inline-block shrink-0 rounded-2xl px-6 pb-5 pt-6 ${className}`}>
            {/* <div className="absolute -top-[0.4rem] right-1/2 h-[0.25rem] w-[87%] translate-x-1/2 bg-[--itemReviewsSummaryCardBorderColor] [border-top-left-radius:250px;] [border-top-right-radius:250px;]"></div> */}
            <div className="flex items-center justify-between">
                <div className="flex -translate-x-[0.2rem] gap-x-0.5">
                    {[...Array(numberOfStars)].map((_, index) => (
                        <IconStar
                            key={index}
                            className="h-[1.2rem] w-[1.2rem] text-[--itemReviewsSummaryCardIconColor]"
                        />
                    ))}
                </div>
                <MyLink
                    className="z-10 hover:brightness-125"
                    ariaLabel={`Read more of our ${platform} reviews`}
                    href={platformHref}>
                    {platformLogo}
                </MyLink>
            </div>
            <p className="mt-2.5 inline-block text-sm text-[--itemReviewsSummaryCardBodyColor]">
                <span className="block">
                    {app.companyName} is rated{' '}
                    <span className="font-semibold text-[--itemReviewsSummaryCardBodyBoldColor]">
                        {rating} stars
                    </span>
                </span>
                on {platform} based on {numberOfReviews} reviews.
            </p>
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
            {buttonText && buttonHref && (
                <div className="mt-3">
                    <TextButton
                        className="text-xs font-medium"
                        href={buttonHref}
                        invertColor={invertTextButtonColor}>
                        {buttonText}
                    </TextButton>
                </div>
            )}
        </div>
    )
}
