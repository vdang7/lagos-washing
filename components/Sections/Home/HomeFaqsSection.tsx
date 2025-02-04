import { RoundedButtonWithIcon } from '@/components/Buttons/RoundedButtonWithIcon'
import { TextButton } from '@/components/Buttons/TextButton'
import { IconSparkle } from '@/components/Graphics/Icons/Framer/IconSparkle'
import { IconSparkleThin } from '@/components/Graphics/Icons/Framer/IconSparkleThin'
import { PatternHexagon } from '@/components/Graphics/PatternHexagon'
import { InterfaceItemFaq, ItemFaq } from '@/components/Items/ItemFaq'
import { MyLink } from '@/components/MyLink'
import { SectionContainer } from '@/components/SectionContainer'
import { Section } from '@/components/Sections/Section'
import { Items } from '@/components/Stacks/Items'
import { SectionSubtitle } from '@/components/Typography/SectionSubtitle'
import { getPageById } from '@/functions/getPageById'

const faqs: InterfaceItemFaq[] = [
    {
        id: 1,
        title: 'Is pressure washing safe for my property?',
        body: (
            <>
                <p>
                    Yes, pressure washing is safe for your property when done by
                    professionals. Our experienced technicians use
                    industry-approved techniques to make sure your property
                    remains undamaged during the cleaning process. Before
                    washing, we assess all surfaces and tailor our approach
                    accordingly to achieve the best results without compromising
                    the condition of your property. We also protect plants and
                    landscaping nearby by using eco-friendly solutions.
                </p>
            </>
        ),
    },
    {
        id: 2,
        title: 'Do I need to be on site during the pressure washing service?',
        body: (
            <>
                <p>
                    You do not need to be on site during our pressure washing
                    service. Our team can handle everything while you’re away.
                    Just make sure we have access to the areas that need
                    cleaning, and we’ll take care of the rest. If you have any
                    specific requests, please share it with us beforehand.
                </p>
            </>
        ),
    },
    {
        id: 3,
        title: 'What is the cost of pressure washing services? ',
        body: (
            <>
                <p>
                    The cost of pressure washing can vary based on the size of
                    the area being cleaned. To help you plan your budget
                    effectively, we offer{' '}
                    <MyLink className="text-link" href={getPageById(4).href}>
                        free estimates
                    </MyLink>
                    . We understand that cost is an important factor for our
                    customers and that&apos;s why we continually improve our
                    services to provide you outstanding service at competitive
                    rates.
                </p>
            </>
        ),
    },
]

export function HomeFaqsSection() {
    return (
        <>
            <Section className="pb-section">
                <SectionContainer>
                    <div className="mx-auto max-w-4xl divide-y divide-gray-100">
                        <div>
                            <SectionSubtitle tag="p" className="text-sm mb-1">
                                <span className="text-gradient-primary-dark">
                                    100% transparency</span>
                            </SectionSubtitle>
                            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                                Questions? Answers.
                            </h2>
                        </div>
                        <dl className="mt-10 space-y-6 divide-y divide-gray-100">
                            <Items items={faqs} ItemComponent={ItemFaq} />
                        </dl>
                    </div>
                    <div className="mx-auto mt-12 max-w-4xl">
                        <div className="relative w-full rounded-2xl border border-gray-100 p-5 min-[800px]:flex min-[800px]:items-center min-[800px]:justify-between isolate">
                            <div className="pattern-bubbles-primary-light scale-y-flip absolute w-[90%] h-[122%] min-[800px]:h-[132%] top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 min-[800px]:mt-[0.1rem] -z-10"></div>
                            <div className="absolute inset-0 bg-white -z-10 rounded-2xl"></div>
                        {/* <div className="absolute inset-0 bg-white rounded-2xl -z-10"></div>
                        <div className="absolute h-full w-[93%] right-1/2 translate-x-1/2 -bottom-3 bg-primary-100 rounded-2xl -z-20"></div>
                        <div className="absolute h-full w-[97%] right-1/2 translate-x-1/2 -bottom-1.5 bg-primary-50 rounded-2xl -z-20"></div> */}
                            <div className="absolute left-0 top-[1rem] scale-[.6]">
                                <IconSparkleThin className="absolute h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-primary-500" />
                                <IconSparkle className="absolute -mt-4 ml-6 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-primary-200" />
                                <IconSparkle className="absolute -ml-6 mt-4 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-primary-700" />
                            </div>
                            <div>
                                <p className="text-base font-semibold text-gray-900">
                                    Still have a question?
                                </p>
                                <p className="mt-1 text-sm leading-6 text-gray-600">
                                    We’d love to hear from you! Send us your
                                    questions so we can serve you better.
                                </p>
                            </div>
                            <TextButton
                                className="mt-6 min-[800px]:hidden"
                                href="/contact-us">
                                Contact us
                            </TextButton>
                            <RoundedButtonWithIcon
                                className="!hidden min-[800px]:!inline-flex"
                                href="/contact-us">
                                Contact us
                            </RoundedButtonWithIcon>
                        </div>
                    </div>
                </SectionContainer>
                {/* <PatternHexagon className="absolute bottom-1/2 hidden size-40 -translate-x-3/4 translate-y-1/2 lg:block min-[1230px]:-translate-x-1/2" /> */}
                <PatternHexagon className="absolute bottom-1/2 hidden size-96 lg:block -translate-x-[21rem] min-[1230px]:-translate-x-[19rem]" />
                <PatternHexagon className="absolute right-0 bottom-1/2 hidden size-40 translate-y-3/4 lg:block translate-x-3/4" />
            </Section>
        </>
    )
}
