import { convertMapToArrayAllLevels } from '@/functions/convertMapToArrayAllLevels'

export interface InterfacePage {
    name: string
    href: `/${string}`
    children?: Map<number, InterfacePage> | InterfaceChildPage[]
    showInNav: boolean
}

export interface InterfaceChildPage extends InterfacePage {
    useParentPath?: boolean
}

export const pages: Map<number, InterfacePage> = new Map([
    [
        11,
        {
            name: 'Services',
            href: '/',
            showInNav: true,
            children: [
                {
                    id: 100,
                    name: 'Residential pressure washing',
                    href: '/raleigh-residential-pressure-washing-near-me',
                    showInNav: true,

                    preserveParentHref: false,
                },
                {
                    id: 101,
                    name: 'Commercial pressure washing',
                    href: '/raleigh-commercial-pressure-washing-near-me',
                    showInNav: true,

                    preserveParentHref: false,
                },
                {
                    id: 102,
                    name: 'Power washing',
                    href: '/raleigh-power-washing-near-me',
                    showInNav: true,

                    preserveParentHref: false,
                },
                {
                    id: 103,
                    name: 'Gutter cleaning',
                    href: '/raleigh-gutter-cleaning-near-me',
                    showInNav: true,

                    preserveParentHref: false,
                },
                {
                    id: 104,
                    name: 'Roof cleaning',
                    href: '/raleigh-roof-cleaning-near-me',
                    showInNav: true,

                    preserveParentHref: false,
                },
                {
                    id: 105,
                    name: 'House washing',
                    href: '/raleigh-house-washing-near-me',
                    showInNav: true,

                    preserveParentHref: false,
                },
                {
                    id: 106,
                    name: 'Concrete cleaning',
                    href: '/raleigh-concrete-cleaning-near-me',
                    showInNav: true,

                    preserveParentHref: false,
                },
                {
                    id: 107,
                    name: 'Graffiti removal',
                    href: '/raleigh-graffiti-removal-near-me',
                    showInNav: true,

                    preserveParentHref: false,
                },
                {
                    id: 108,
                    name: 'Exterior cleaning',
                    href: '/raleigh-exterior-cleaning-near-me',
                    showInNav: true,

                    preserveParentHref: false,
                },
                {
                    id: 109,
                    name: 'Fence cleaning',
                    href: '/raleigh-fence-cleaning-near-me',
                    showInNav: true,

                    preserveParentHref: false,
                },
                {
                    id: 110,
                    name: 'Patio cleaning',
                    href: '/raleigh-patio-cleaning-near-me',
                    showInNav: true,

                    preserveParentHref: false,
                },
                {
                    id: 111,
                    name: 'Pool deck washing',
                    href: '/raleigh-pool-deck-washing-near-me',
                    showInNav: true,

                    preserveParentHref: false,
                },
            ],
        },
    ],
    [10, { name: 'About us', href: '/about-us', showInNav: true }],
    [1, { name: 'Before & afters', href: '/before-afters', showInNav: true }],
    [3, { name: 'Contact us', href: '/contact-us', showInNav: true }],
    [
        4,
        {
            name: 'Get my free estimate',
            href: '/get-free-estimate',
            showInNav: false,
        },
    ],
    [5, { name: 'Thank you', href: '/thank-you', showInNav: false }],
])

export const navigationItems = convertMapToArrayAllLevels(pages).filter(
    (page) => page.showInNav
)
