import { SectionContainer } from '@/components/SectionContainer'
import { Section } from '@/components/Sections/Section'
import { InteriorSubtitle } from '@/components/Typography/InteriorSubtitle'
import { InteriorTitle } from '@/components/Typography/InteriorTitle'
import { CheckIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

interface InterfaceTier {
    name: string
    id: string

    features: string[]
    mostPopular: boolean
}

const tiers: InterfaceTier[] = [
    {
        name: 'Integrity',
        id: 'tier-integrity',

        features: [
            'We do what we say',
            'We own all of our actions',
            'We communicate our intentions',
        ],
        mostPopular: false,
    },

    {
        name: 'Customer satisfaction',
        id: 'tier-customer-obsession',

        features: [
            'We put our customers first',
            'We seek and act on feedback',
            'We anticipate customer challenges',
            'We exceed expectations consistently',
        ],
        mostPopular: true,
    },
    {
        name: 'Excellence',
        id: 'tier-excellence',

        features: [
            'We seek for ways to improve',
            'We reflect on successes & setbacks',
            'We deliver excellence in every aspect',
        ],
        mostPopular: false,
    },
]

export function AboutValuesSection() {
    return (
        <>
            <Section className="bg-white py-24 sm:py-32">
                <SectionContainer>
                    <div className="mx-auto max-w-4xl text-center">
                        <InteriorSubtitle tag="h2">
                            Our core values
                        </InteriorSubtitle>
                        <InteriorTitle tag="h3" className="mt-2 text-balance">
                            The Lagos difference
                        </InteriorTitle>
                    </div>
                    <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {tiers.map((tier, tierIdx) => (
                            <div
                                key={tier.id}
                                className={clsx(
                                    tier.mostPopular
                                        ? 'lg:z-10 lg:rounded-b-none'
                                        : 'lg:mt-8',
                                    tierIdx === 0 ? 'lg:rounded-r-none' : '',
                                    tierIdx === tiers.length - 1
                                        ? 'lg:rounded-l-none'
                                        : '',
                                    'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10'
                                )}>
                                <div>
                                    <div className="flex items-center justify-between gap-x-4">
                                        <h3
                                            id={tier.id}
                                            className={clsx(
                                                tier.mostPopular
                                                    ? 'text-primary-700'
                                                    : 'text-gray-900',
                                                'text-lg/8 font-semibold'
                                            )}>
                                            {tier.name}
                                        </h3>
                                    </div>

                                    <ul
                                        role="list"
                                        className="mt-8 space-y-3 text-sm/6 text-gray-600">
                                        {tier.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex gap-x-3">
                                                <CheckIcon
                                                    aria-hidden="true"
                                                    className="h-6 w-5 flex-none text-primary-600"
                                                />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionContainer>
            </Section>
        </>
    )
}
