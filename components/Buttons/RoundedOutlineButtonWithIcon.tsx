import { IconChevronAnimated } from '@/components/IconChevronAnimated'
import { MyLink } from '@/components/MyLink'
import clsx from 'clsx'

interface Props {
    href: string
    prefetch?: boolean
    children: React.ReactNode
    className?: string
    color?: string
    size?: string
}

export function RoundedOutlineButtonWithIcon({
    color = 'button-outline-primary-light-text-dark',
    className,
    size = 'rounded-button-with-icon-xl',
    href,
    prefetch,
    children,
}: Props) {
    const joinedClassName = clsx(
        'group rounded-outline-button-with-icon',
        color,
        className,
        size
    )

    return (
        <MyLink href={href} prefetch={prefetch} className={joinedClassName}>
            {children}

            <IconChevronAnimated
                className="button-icon-mr ml-2.5"
                color="stroke-[--buttonIconColor] group-hover:stroke-[--buttonIconHoverColor]"
            />
        </MyLink>
    )
}
