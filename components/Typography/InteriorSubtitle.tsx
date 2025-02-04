interface Props {
    tag?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
    className?: string
    children: React.ReactNode
}

export function InteriorSubtitle({ className, children, tag: Tag = 'h2' }: Props) {
    return (
        <Tag
            className={`${className} text-base/7 font-semibold text-[--sectionSubtitleColor]`}>
            {children}
        </Tag>
    )
}
