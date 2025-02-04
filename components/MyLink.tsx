import Link from 'next/link'

function isExternalLink(href: string) {
    return /^http/.test(href)
}

function isActionLink(href: string) {
    return href.startsWith('mailto:') || href.startsWith('tel:')
}

interface Props {
    href: string
    children: React.ReactNode
    target?: string
    rel?: string | null
    className?: string
    ariaLabel?: string
    prefetch?: boolean
}

export function MyLink({
    href,
    target,
    rel,
    ariaLabel,
    className,
    children,
    prefetch,
}: Props) {
    const isExternal = isExternalLink(href)
    const isAction = isActionLink(href)

    const linkProps = {
        className,
        href,
        'aria-label': ariaLabel,
        ...(isExternal && {
            target: target ?? '_blank',
            // rel: rel ?? 'noopener noreferrer',
            rel: rel === null ? undefined : 'noopener noreferrer',
        }),
        ...(!(isAction || isExternal) && {
            prefetch: prefetch
        }),
    }

    const LinkComponent = isAction || isExternal ? 'a' : Link

    return <LinkComponent {...linkProps}>{children}</LinkComponent>
}
