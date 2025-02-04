import { Bubbles } from '@/components/Graphics/Bubbles'
import { HexagonShape } from '@/components/Graphics/HexagonShape'
import { HexagonImage } from '@/components/HexagonImage'
// import { MyImage } from '@/components/MyImage'
// import imageLogo from '@/public/images/minified/global/logos/logo-white.svg'
import '@/styles/hexagon-mask-for-item-hexagon-image.css'
import { StaticImageData } from 'next/image'

export interface InterfaceItemHexagonImage {
    id: number
    index?: number
    title: string | React.ReactNode
    body: string | React.ReactNode
    className?: string
    imageClassName?: string
    imageSrc: StaticImageData
    imageAlt: string
    imageSizes: string
    imagePriority?: boolean
}

export function ItemHexagonImage({
    index,
    title,
    body,
    className,
    imageClassName,
    imageSrc,
    imageAlt,
    imageSizes,
    imagePriority,
}: InterfaceItemHexagonImage) {
    return (
        <div
            data-slot="item-hexagon-image"
            className="relative max-w-md text-center lg:max-w-none">
            <Bubbles
                className="absolute -top-3 right-0 w-10 text-gray-200"
                pathTwoClassName={`
                    ${index === 0 || index === 3 ? 'sm:text-primary-200 lg:text-gray-200' : ''} 
                    ${index !== undefined && index % 2 === 0 ? 'text-primary-200 sm:text-gray-200 lg:text-primary-200' : ''}
                  `}
                pathFourClassName={`
                ${index === 0 || index === 3 ? 'sm:text-primary-400 lg:text-gray-200' : ''} 
                ${index !== undefined && index % 2 === 0 ? 'text-primary-400 sm:text-gray-200 lg:text-primary-400' : ''}
                `}
            />
            <div className="relative mb-6 w-full">
                <HexagonImage
                    className={className}
                    imageClassName={`object-cover max-w-72 sm:max-w-60 h-auto ${imageClassName}`}
                    src={imageSrc}
                    alt={imageAlt}
                    sizes={imageSizes}
                    priority={imagePriority}
                />
                {/* <MyImage src={imageLogo} className='absolute opacity-60 w-12 h-auto top-1/2 -translate-y-1/2 translate-x-1/2 right-1/2' sizes="96px" alt="lagos washing logo" placeholder='empty' backgroundColor=''></MyImage> */}
                <HexagonShape className="absolute left-0 top-0 origin-top-left translate-y-[2.9rem] scale-[0.3] !text-gray-50 sm:translate-y-[2.3rem]">
                    {index != undefined && (
                        <>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-7xl font-black text-primary-600">
                                    {index + 1}
                                </span>
                            </div>
                        </>
                    )}
                </HexagonShape>
            </div>
            <p className="text-base font-semibold leading-6 text-[--itemTitleColor]">
                {title}
            </p>
            <div className="mt-1 text-sm leading-6 text-[--itemBodyColor]">
                {body}
            </div>
        </div>
    )
}
