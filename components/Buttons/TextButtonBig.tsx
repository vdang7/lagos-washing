import { IconChevronAnimated } from '@/components/IconChevronAnimated'
import { MyLink } from '@/components/MyLink'
import clsx from 'clsx'

interface Props {
    className?: string
    href: string
    prefetch?: boolean
    children: React.ReactNode
}

export function TextButtonBig(props: Props) {
    const className = clsx(
        props.className,
        'transition-colors group inline-flex items-center text-base/6 font-semibold text-[--textButtonColor] hover:text-[--textButtonHoverColor]'
    )

    return (
        <MyLink href={props.href} prefetch={props.prefetch} className={className}>
            {props.children}
            <IconChevronAnimated
                className="-mr-1 ml-2.5"
                color="stroke-[--textButtonIconColor] group-hover:stroke-[--textButtonIconHoverColor]"
            />
        </MyLink>
    )
}
