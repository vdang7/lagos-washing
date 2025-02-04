import { HeaderNavigationDropdownButton } from '@/components/Header/HeaderNavigationDropdownButton'
import { HeaderNavigationItem } from '@/components/Header/HeaderNavigationItem'
import { navigationItems } from '@/data/pages'
import { PopoverGroup } from '@headlessui/react'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

interface Props {
    className?: string
}

export function HeaderNavigation(props: Props) {
    const pathname = usePathname()
    const className = clsx(props.className, 'lg:gap-x-12')
    return (
        <PopoverGroup className={className}>
            {navigationItems.map((item) =>
                item.children && item.children.length > 0 ? (
                    <HeaderNavigationDropdownButton
                        key={`${item.name}${item.href}`}
                        name={item.name}
                        href={item.href}
                        items={item.children}
                        isCurrentPage={item.children.some(
                            (childItem: any) => childItem.href == pathname
                        )}
                    />
                ) : (
                    <HeaderNavigationItem
                        key={`${item.name}${item.href}`}
                        name={item.name}
                        href={item.href}
                        isCurrentPage={pathname == item.href}
                    />
                )
            )}
        </PopoverGroup>
    )
}
