interface Props {
    tag?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    className?: string
    children: React.ReactNode
}

export function InteriorTitle({ className, children, tag: Tag = 'h1' }: Props) {
    return (
        <Tag
            className={`${className} text-4xl font-semibold tracking-tight text-[--sectionTitleColor] sm:text-5xl`}>
            {children}
        </Tag>
    )
}
