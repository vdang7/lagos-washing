import { HeaderNavigationDropdownItem } from '@/components/Header/HeaderNavigationDropdownItem'
import {
    Popover,
    PopoverButton,
    PopoverPanel,
    Transition,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'

interface Props {
    name: string
    href: string
    items: any[]
    isCurrentPage: boolean
}

export function HeaderNavigationDropdownButton(props: Props) {
    return (
        <Popover className="relative">
            <PopoverButton
                className={`group flex items-center gap-x-1 text-sm/6 font-semibold ${props.isCurrentPage ? 'text-[--headerNavItemCurrentPageTextColor]' : 'text-[--headerNavItemTextColor] hover:text-[--headerNavItemTextHoverColor]'}`}>
                {props.name}
                <ChevronDownIcon
                    className="h-5 w-5 flex-none text-[--headerDropdownIconColor] group-hover:text-[--headerDropdownIconHoverColor]"
                    aria-hidden="true"
                />
            </PopoverButton>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1">
                <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-3xl bg-primary-400 shadow-lg ring-1 ring-gray-900/5">
                    <div className="pointer-events-none absolute bottom-0 z-10 h-20 w-full bg-gradient-to-t from-primary-400"></div>
                    <div className="max-h-[300px] overflow-y-auto p-4">
                        {props.items.map((item: any) => (
                            <HeaderNavigationDropdownItem
                                key={`${props.name}${item.href}`}
                                name={item.name}
                                href={
                                    item.preserveParentHref
                                        ? props.href + item.href
                                        : item.href
                                }
                                description={item.description}
                                IconComponent={item.IconComponent}
                            />
                        ))}
                    </div>
                    {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                    <a
                        key={item.id}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                    >
                        <item.IconComponent className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        {item.name}
                    </a>
                    ))}
                </div> */}
                </PopoverPanel>
            </Transition>
        </Popover>
    )
}
