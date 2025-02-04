import clsx from 'clsx'

interface Props {
    tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    className?: string
    children: React.ReactNode
}

export function SectionTitle({ tag: Tag = 'h1', className, children }: Props) {
    const joinedClassName = clsx(
        className,
        'text-3xl font-semibold tracking-tight text-[--sectionTitleColor] sm:text-4xl'
    )

    return (
        <Tag data-slot="section-title" className={joinedClassName}>
            {children}
        </Tag>
    )
}
