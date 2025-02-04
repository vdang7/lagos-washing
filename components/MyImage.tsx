import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'

interface BaseProps {
    src: StaticImageData
    alt: string
    priority?: boolean
    className?: string
    backgroundColor?: string
    placeholder?: 'blur' | 'empty'
    onClick?: any
    onLoad?: any
    width?: number
    height?: number
    unoptimized?: boolean
}

interface OptimizedProps extends BaseProps {
    sizes: string
    unoptimized?: false
}

interface UnoptimizedProps extends BaseProps {
    sizes?: never
    unoptimized: true
}

type Props = OptimizedProps | UnoptimizedProps

export function MyImage({
    className,
    src,
    alt,
    sizes,
    priority = false,
    backgroundColor = 'bg-white/10',
    placeholder = 'blur',
    onClick,
    onLoad,
    width,
    height,
    unoptimized,
}: Props) {
    const joinedClassName = clsx(className, backgroundColor)

    return (
        <Image
            onClick={onClick}
            onLoad={onLoad}
            className={joinedClassName}
            width={width}
            height={height}
            sizes={sizes}
            unoptimized={unoptimized}
            src={src}
            placeholder={placeholder}
            priority={priority}
            alt={alt}
        />
    )
}
