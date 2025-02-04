import { MyLink } from '@/components/MyLink'
import { navigationItems } from '@/data/pages'
import clsx from 'clsx'

interface Props {
    className?: string
}

export function FooterNavigation(props: Props) {
    const className = clsx(
        props.className,
        'flex flex-wrap gap-x-12 gap-y-3 justify-center'
    )

    return (
        <nav className={className}>
            {navigationItems.map((item) => (
                <div key={`${item.name}${item.href}`}>
                    {item.children && item.children.length > 0 ? (
                        <h3 className="text-sm/6 font-semibold text-white">
                            {item.name}
                        </h3>
                    ) : (
                        <h3>
                            <MyLink
                                href={item.href}
                                className="text-sm/6 font-semibold text-white hover:text-primary-400">
                                {item.name}
                            </MyLink>
                        </h3>
                    )}
                    {item.children && item.children.length > 0 && (
                        <ul role="list" className="mt-6 space-y-4">
                            {item.children.map((childItem: any) => (
                                <li key={`${item.name}${childItem.href}`}>
                                    <MyLink
                                        href={`${item.href}${childItem.href}`}
                                        className="text-sm/6 text-primary-300 hover:text-white">
                                        {childItem.name}
                                    </MyLink>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </nav>
    )
}
