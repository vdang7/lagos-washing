import { IconStar } from '@/components/Graphics/Icons/TailwindPrimer/IconStar'
import { MyImage } from '@/components/MyImage'
import { app } from '@/data/app'
import { getTotalNumberOfReviews } from '@/functions/getTotalNumberOfReviews'
import { hasDuplicateId } from '@/functions/hasDuplicateId'
import image2 from '@/public/images/minified/global/reviews/facebook/gregory.webp'
import image3 from '@/public/images/minified/global/reviews/facebook/lisa.webp'
import image1 from '@/public/images/minified/global/reviews/google/debra.webp'
import image4 from '@/public/images/minified/global/reviews/google/jim.webp'
import { StaticImageData } from 'next/image'

interface Props {
    className?: string
    imagePriority?: boolean
    title?: React.ReactNode | string
}

interface InterfaceItemAvatar {
    id: number
    imageSrc: StaticImageData
    imageAlt: string
}

const items: InterfaceItemAvatar[] = [
    {
        id: 1,
        imageSrc: image1,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 2,
        imageSrc: image2,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 3,
        imageSrc: image3,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 4,
        imageSrc: image4,
        imageAlt: 'Headshot image of happy client',
    },
]

hasDuplicateId(items)

const totalNumberOfReviews = getTotalNumberOfReviews()

export function StackReviewsSpotlight({
    className,
    imagePriority,
    title = `Neighbors in ${app.serviceAreasNickname} who choose us`,
}: Props) {
    return (
        <div
            className={`${className} flex flex-wrap items-center gap-x-5 gap-y-4`}>
            <div className="flex shrink-0 -space-x-5">
                {items.map((item: InterfaceItemAvatar) => (
                    <MyImage
                        key={item.id}
                        className="inline-block h-12 w-12 rounded-full ring-1 ring-[--stackReviewsSpotlightAvatarRingColor]"
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        sizes="96px"
                        priority={imagePriority}
                    />
                ))}
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[--stackReviewsSpotlightBoxBorderColor] bg-[--stackReviewsSpotlightBoxBackgroundColor] text-xs text-[--stackReviewsSpotlightBoxTextColor] ring-1 ring-[--stackReviewsSpotlightBoxRingColor]">
                    {totalNumberOfReviews - items.length}
                    <span className="text-[--stackReviewsSpotlightBoxTextBoldColor]">
                        +
                    </span>
                </div>
            </div>
            <div>
                <p className="whitespace-nowrap text-sm font-medium text-[--stackReviewsSpotlightTitleColor]">
                    {title}
                </p>
                <p className="mt-1 flex items-center text-xs text-[--stackReviewsSpotlightBodyColor]">
                    <span className="mr-[0.3rem]">Excellent</span>
                    <span className="font-semibold text-[--stackReviewsSpotlightBodyBoldColor]">
                        5.0
                    </span>
                    <IconStar className="ml-0.5 mr-1 h-4 w-4 text-[--stackReviewsSpotlightBodyBoldColor]" />
                    {totalNumberOfReviews}+ trusted reviews
                </p>
            </div>
        </div>
    )
}
