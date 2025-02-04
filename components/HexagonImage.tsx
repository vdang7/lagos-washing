import { MyImage } from '@/components/MyImage'
import '@/styles/hexagon-mask.css'
import clsx from 'clsx'
import { StaticImageData } from 'next/image'

interface Props {
    children?: React.ReactNode
    className?: string
    imageClassName?: string
    src: StaticImageData
    alt: string
    sizes: string
    priority?: boolean
}

export function HexagonImage({
    className,
    imageClassName,
    src,
    alt,
    sizes,
    children,
    priority,
}: Props) {
    const joinedClassName = clsx(
        className,
        'w-full inline-block relative leading-[0]'
    )

    return (
        <>
            <div className={joinedClassName}>
                <div className="[mask-image:--hexagonMask] [mask-mode:luminance] [mask-repeat:no-repeat] [mask-size:contain]">
                    <MyImage
                        className={`aspect-[1/1.15] h-full w-full ${imageClassName}`}
                        src={src}
                        alt={alt}
                        sizes={sizes}
                        priority={priority}
                    />
                    {children}
                    <div
                        data-slot="hexagon-image-border"
                        className="absolute inset-0 block h-full w-full [background-image:var(--hexagonOuterBorder),var(--hexagonInnerBorder)]"></div>
                </div>
            </div>
        </>
    )
}
