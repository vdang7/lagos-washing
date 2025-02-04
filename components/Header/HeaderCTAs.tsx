import { RoundedButtonWithIcon } from '@/components/Buttons/RoundedButtonWithIcon'
import { getPageById } from '@/functions/getPageById'
import clsx from 'clsx'

const cta = getPageById(4)

interface Props {
    className?: string
}

export function HeaderCTAs(props: Props) {
    const className = clsx(props.className, 'items-center gap-x-6')

    return (
        <div className={className}>
            <RoundedButtonWithIcon
                href={cta.href}
                size="rounded-button-with-icon-base">
                {cta.name}
            </RoundedButtonWithIcon>
        </div>
    )
}
