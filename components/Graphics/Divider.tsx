interface Props {
    className?: string
    pathOneClassName?: string
    pathTwoClassName?: string
    pathThreeClassName?: string
    pathFourClassName?: string
}

export function Divider({
    className,
    pathOneClassName = 'text-gray-50',
    pathTwoClassName = 'text-primary-100',
    pathThreeClassName = 'text-white',
    pathFourClassName = 'stroke-primary-400',
}: Props) {
    return (
        <>
            <svg
                className={className}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 115"
                preserveAspectRatio="none"
                aria-hidden="true">
                <path
                    className={`${pathFourClassName} translate-y-3.5 text-transparent`}
                    strokeWidth={2}
                    // strokeDasharray="2 24"
                    strokeDasharray="5 30 5 5 5 24"
                    fill="currentColor"
                    d="M0 0v100c166.7 0 166.7-66 333.3-66S500 77 666.7 77 833.3 28 1000 28V0H0Z"
                    opacity="1"></path>
                <path
                    className={pathThreeClassName}
                    fill="currentColor"
                    d="M0 0v100c166.7 0 166.7-66 333.3-66S500 77 666.7 77 833.3 28 1000 28V0H0Z"
                    opacity="1"></path>
                <path
                    className={pathTwoClassName}
                    fill="currentColor"
                    d="M0 0v100c166.7 0 166.7-66 333.3-66S500 70 666.7 70 833.3 16 1000 16V0H0Z"
                    opacity="1"></path>
                <path
                    className={pathOneClassName}
                    fill="currentColor"
                    d="M0 0v100c166.7 0 166.7-66 333.3-66S500 63 666.7 63 833.3 4 1000 4V0H0Z"></path>
            </svg>
        </>
    )
}
