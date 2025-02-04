import { IconChevronAnimated } from '@/components/IconChevronAnimated'
import { MyLink } from '@/components/MyLink'
import clsx from 'clsx'

interface BaseProps {
    className?: string
    prefetch?: boolean
    children: React.ReactNode
    invertColor?: boolean
}

interface LinkProps extends BaseProps {
    href: string
    disableLink?: false
}

interface NotALinkProps extends BaseProps {
    href?: never
    disableLink: true
}

type Props = LinkProps | NotALinkProps

export function TextButton({
    disableLink,
    children,
    className,
    href,
    prefetch,
    invertColor = false,
}: Props) {
    const buttonColor = invertColor
        ? 'text-[--textButtonColorInverted] hover:text-[--textButtonHoverColorInverted]'
        : 'text-[--textButtonColor] hover:text-[--textButtonHoverColor]'

    const iconColor = invertColor
        ? 'stroke-[--textButtonIconColorInverted] group-hover:stroke-[--textButtonIconHoverColorInverted]'
        : 'stroke-[--textButtonIconColor] group-hover:stroke-[--textButtonIconHoverColor]'

    const joinedClassName = clsx(
        className,
        buttonColor,
        'transition-colors group inline-flex items-center text-sm/6 font-semibold'
    )

    const Icon = (
        <IconChevronAnimated className="-mr-1 ml-2.5" color={iconColor} />
    )

    return disableLink ? (
        <span className={joinedClassName}>
            {children}
            {Icon}
        </span>
    ) : (
        <MyLink href={href} prefetch={prefetch} className={joinedClassName}>
            {children}
            {Icon}
        </MyLink>
    )
}
