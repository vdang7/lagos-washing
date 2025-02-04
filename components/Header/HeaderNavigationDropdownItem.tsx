import { MyLink } from '@/components/MyLink';
import {
    HomeModernIcon
} from '@heroicons/react/24/outline'; // Changed to 'outline'

interface Props {
    name: string
    href: string
    description: string
    IconComponent: React.ComponentType<any>
}

export function HeaderNavigationDropdownItem(props: Props) {
    return (
        <div className="group relative flex items-center gap-x-3 rounded-3xl py-2.5 px-4 text-sm/6 hover:bg-primary-300">
            {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"> */}
                <HomeModernIcon
                    className="h-5 w-5 text-gray-600 group-hover:text-gray-900"
                    aria-hidden="true"
                />
            {/* </div> */}
            <div className="flex-auto">
                <MyLink
                    href={props.href}
                    className="block font-semibold text-gray-900">
                    {props.name}
                    <span className="absolute inset-0" />
                </MyLink>
                <p className="mt-1 text-gray-600">{props.description}</p>
            </div>
        </div>
    )
}
