import { RoundedButtonWithIcon } from '@/components/Buttons/RoundedButtonWithIcon'
import { getPageById } from '@/functions/getPageById'
import clsx from 'clsx'

const cta = getPageById(4)

interface Props {
    className?: string
}

export function MobileMenuCTAs(props: Props) {
    const className = clsx(props.className, 'bg-gray-50 p-3')

    return (
        <div className={className}>
            <RoundedButtonWithIcon
                className="flex w-full justify-center"
                href={cta.href}>
                {cta.name}
            </RoundedButtonWithIcon>
        </div>
    )
}
