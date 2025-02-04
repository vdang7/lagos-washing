import { MyImage } from '@/components/MyImage'
import { hasDuplicateId } from '@/functions/hasDuplicateId'
// import { shuffle } from '@/functions/shuffle'
import image5 from '@/public/images/minified/global/reviews/facebook/angelica.webp'
import image2a from '@/public/images/minified/global/reviews/facebook/gregory.webp'
import image8 from '@/public/images/minified/global/reviews/facebook/hulan.webp'
import image13 from '@/public/images/minified/global/reviews/facebook/lamont.webp'
import image3a from '@/public/images/minified/global/reviews/facebook/lisa.webp'
import image7 from '@/public/images/minified/global/reviews/facebook/michelle.webp'
import image12 from '@/public/images/minified/global/reviews/facebook/real.webp'
import image10 from '@/public/images/minified/global/reviews/facebook/tj.webp'
import image11 from '@/public/images/minified/global/reviews/facebook/zach.webp'
import image1a from '@/public/images/minified/global/reviews/google/debra.webp'
import image14 from '@/public/images/minified/global/reviews/google/jefferey.webp'
import image4 from '@/public/images/minified/global/reviews/google/jim.webp'
import image33a from '@/public/images/minified/global/reviews/google/mcallister.webp'
import image15 from '@/public/images/minified/global/reviews/google/quinn.webp'
import { StaticImageData } from 'next/image'

export interface InterfaceItemAvatar {
    id: number
    imageSrc: StaticImageData
    imageAlt: string
    imagePriority?: boolean
}

const items: InterfaceItemAvatar[] = [
    {
        id: 4913,
        imageSrc: image1a,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 9813,
        imageSrc: image2a,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 4981,
        imageSrc: image3a,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 55,
        imageSrc: image4,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 113,
        imageSrc: image5,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 313,
        imageSrc: image33a,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 234,
        imageSrc: image7,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 312,
        imageSrc: image8,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 3,
        imageSrc: image15,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 4,
        imageSrc: image10,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 5,
        imageSrc: image11,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 6,
        imageSrc: image12,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 7,
        imageSrc: image13,
        imageAlt: 'Headshot image of happy client',
    },
    {
        id: 222,
        imageSrc: image14,
        imageAlt: 'Headshot image of happy client',
    },
]

hasDuplicateId(items)

interface Props {
    className?: string
    rowClassName?: string
    imageClassName?: string
    numberOfRows?: number
    numberOfItemsInEachRow?: number
}

// shuffle(items)

export function StackAvatars({
    className,
    rowClassName,
    imageClassName,
    numberOfRows = 3,
    numberOfItemsInEachRow = 5,
}: Props) {
    return (
        <div className={`${className} -space-y-4`}>
            {[...Array(numberOfRows)].map((_, rowIndex) => (
                <div
                    key={rowIndex}
                    className={`${rowClassName} flex -space-x-4`}>
                    {items
                        .slice(
                            rowIndex * numberOfItemsInEachRow,
                            rowIndex * numberOfItemsInEachRow +
                                numberOfItemsInEachRow
                        )
                        .map((item: InterfaceItemAvatar) => (
                            <MyImage
                                key={item.id}
                                className={`${imageClassName} inline-block size-[3.85rem] min-w-0 rounded-full object-cover ring-[1.5px] ring-[--sectionBackgroundColor]`}
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                sizes="124px"
                                priority={item.imagePriority}
                            />
                        ))}
                    {rowIndex === numberOfRows - 1 && (
                        <div className="inline-flex size-[3.85rem] items-center justify-center rounded-full bg-[--sectionBackgroundColor] text-sm text-[--stackAvatarsBoxTextColor]">
                            8
                            <span className="text-[--stackAvatarsBoxTextBoldColor]">
                                +
                            </span>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}
