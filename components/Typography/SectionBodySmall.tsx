import clsx from 'clsx'

interface Props {
    className?: string
    children: React.ReactNode
}

export function SectionBodySmall(props: Props) {
    const className = clsx(
        props.className,
        'text-base/7 text-[--sectionBodyColor]'
    )

    return <p className={className}>{props.children}</p>
}
