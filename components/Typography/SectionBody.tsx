import clsx from 'clsx'

interface Props {
    className?: string
    children: React.ReactNode
}

export function SectionBody(props: Props) {
    const className = clsx(
        props.className,
        'text-lg/8 text-[--sectionBodyColor]'
    )

    return <p className={className}>{props.children}</p>
}
