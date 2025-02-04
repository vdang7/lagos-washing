import { useId } from 'react'

interface Props {
    className?: string
    patternClassName?: string
}

export const PatternHexagon = ({
    className,
    patternClassName = 'text-primary-400',
}: Props) => {
    const patternId = useId()

    return (
        <svg
            className={className}
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true">
            <defs>
                <pattern
                    className={patternClassName}
                    id={patternId}
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse">
                    <rect
                        x="0"
                        y="0"
                        rx={4}
                        ry={4}
                        width="4"
                        height="4"
                        fill="currentColor"></rect>
                </pattern>
            </defs>
            <polygon
                points="202,20 377,100 377,284 202,364 27,284 27,100"
                fill={`url(#${patternId})`}
            />
        </svg>
    )
}
