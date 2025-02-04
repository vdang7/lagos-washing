interface Props {
    className?: string
    children?: React.ReactNode
    onClick?: any
}

export function HexagonShape({ className, children, onClick }: Props) {
    return (
        <>
            <div
                onClick={onClick}
                className={`${className} inline-block w-[12.5rem] text-primary-300 [filter:url('#goo')]`}>
                <div className="block bg-current pt-[115%] [clip-path:polygon(0%_25%,0%_75%,50%_100%,100%_75%,100%_25%,50%_0%);]">
                    {children}
                </div>
            </div>
            <svg
                className="invisible absolute"
                width="0"
                height="0"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="8"
                            result="blur"
                        />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                            result="goo"
                        />
                        <feComposite
                            in="SourceGraphic"
                            in2="goo"
                            operator="atop"
                        />
                    </filter>
                </defs>
            </svg>
        </>
    )
}
