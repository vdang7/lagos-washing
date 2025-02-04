import { InteriorSubtitle } from '@/components/Typography/InteriorSubtitle'
import { InteriorTitle } from '@/components/Typography/InteriorTitle'
import { app } from '@/data/app'
import { location } from '@/data/location'
import { buildMetadata } from '@/functions/buildMetadata'
import { makeEmailHref } from '@/functions/makeEmailHref'
import { makeTelephoneHref } from '@/functions/makeTelephoneHref'
import {
    EnvelopeIcon,
    PhoneIcon
} from '@heroicons/react/24/outline'
// import { WufooFormContact } from '@/components/Forms/WufooFormContact'
import { FormContact } from '@/components/Forms/FormContact'
import { HeaderOffset } from '@/components/Header/HeaderOffset'
import { IconChevronAnimated } from '@/components/IconChevronAnimated'
import { MyLink } from '@/components/MyLink'
import { PageLayout } from '@/components/PageLayout'
import { SectionColumnsTwo } from '@/components/SectionColumnsTwo'
import { SectionContainer } from '@/components/SectionContainer'
import { Section } from '@/components/Sections/Section'
import { SectionBody } from '@/components/Typography/SectionBody'

const meta = {
    canonicalURL: `${app.siteUrl}/contact-us`,
    title: 'Contact us',
    description: `Need a pressure washing estimate or have a question? Call/text us at ${location.telephone} or email us at ${location.email} and we'll recommend the best solution.`,
}

export const metadata = buildMetadata({ ...meta })

interface TitleProps {
    children: React.ReactNode
}

interface TextButtonProps {
    href: string
    children: React.ReactNode
}

function Title(props: TitleProps) {
    return (
        <div className="mb-2 mt-0.5 text-base font-semibold text-gray-900">
            {props.children}
        </div>
    )
}

function TextButton(props: TextButtonProps) {
    return (
        <MyLink
            href={props.href}
            className="group mt-4 inline-flex items-center text-xs/6 font-semibold text-primary-700 hover:text-gray-900">
            {props.children}
            <IconChevronAnimated
                className="-mr-1 ml-2.5"
                color="stroke-primary-400 group-hover:stroke-gray-900"
            />
        </MyLink>
    )
}

export default function Page() {
    return (
        <>
            <PageLayout>
                <Section
                    // headerTheme="header-secondary-dark"
                    className="pt-section pb-20 isolate bg-gray-50">
                    <HeaderOffset />
                    {/* <div
                        className="absolute inset-0 size-full bg-cover bg-fixed [background-position:10%_0%] min-[420px]:bg-left-top"
                        style={{
                            backgroundImage: `url(${imageHero.src})`,
                        }}></div> */}
                    <div
                        className="absolute inset-0 size-full bg-cover bg-fixed [background-position:10%_0%] min-[420px]:bg-left-top hero-background-image opacity-30 min-[1006px]:opacity-100"
                        // style={{
                        //     backgroundImage: `url(${imageHero.src})`,
                        // }}
                        ></div>
                    {/* <div className="absolute bottom-0 right-0 hidden border-b-[70px] border-r-[70px] border-b-gray-50 border-r-transparent lg:block"></div> */}
                    <div className="absolute h-40 bottom-0 w-full bg-gradient-to-t from-gray-50"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 from-0% via-gray-50 via-60% lg:via-40%"></div>

                    {/* <HeroBackgroundGraphics /> */}
                    <SectionContainer className="relative">
                        <SectionColumnsTwo>
                            <div className="lg:pr-4 lg:pt-16">
                                <div className="lg:max-w-lg">
                                    <InteriorSubtitle className="mb-4" tag="p">
                                        We&apos;re listening
                                    </InteriorSubtitle>
                                    <InteriorTitle
                                        tag="h3"
                                        className="text-balance">
                                        Can we help you?
                                    </InteriorTitle>
                                    <SectionBody className="mt-6 text-balance">
                                        Call, email, or send us a message
                                        and we&apos;ll offer the best solution.
                                    </SectionBody>

                                    <dl className="mt-10 max-w-xl space-y-10 text-base/7 text-gray-600 lg:max-w-none">
                                        <div className="flex gap-x-4">
                                            <dt className="flex-none">
                                                <span className="sr-only">
                                                    Telephone
                                                </span>
                                                <PhoneIcon
                                                    className="h-7 w-6 text-primary-400"
                                                    aria-hidden="true"
                                                />
                                            </dt>
                                            <dd>
                                                <Title>Call us</Title>
                                                {location.telephone}
                                                <br />
                                                <TextButton
                                                    href={makeTelephoneHref(
                                                        location.telephone
                                                    )}>
                                                    Click to call
                                                </TextButton>
                                            </dd>
                                        </div>
                                        <div className="flex gap-x-4">
                                            <dt className="flex-none">
                                                <span className="sr-only">
                                                    Telephone
                                                </span>
                                                <EnvelopeIcon
                                                    className="h-7 w-6 text-primary-400"
                                                    aria-hidden="true"
                                                />
                                            </dt>
                                            <dd>
                                                <Title>Email us</Title>
                                                {location.email}
                                                <br />
                                                <TextButton
                                                    href={makeEmailHref(
                                                        location.email
                                                    )}>
                                                    Click to email
                                                </TextButton>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                            <div>
                                {/* <WufooFormContact /> */}
                                <FormContact className="-mx-[1.49rem] bg-white px-6 pb-8 pt-8 sm:mx-0 sm:rounded-2xl sm:px-8 ring-1 ring-black/5" />
                            </div>
                        </SectionColumnsTwo>
                    </SectionContainer>
                </Section>
            </PageLayout>
        </>
    )
}
