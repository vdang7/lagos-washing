import { RoundedOutlineButtonWithIcon } from '@/components/Buttons/RoundedOutlineButtonWithIcon'
import { FormNewsletter } from '@/components/Forms/FormNewsletter'
import { MyImage } from '@/components/MyImage'
import { location } from '@/data/location'
import { makeEmailHref } from '@/functions/makeEmailHref'
import { makeTelephoneHref } from '@/functions/makeTelephoneHref'
import imageLogo from '@/public/images/minified/global/logos/logo.svg'
import { ClockIcon, MapPinIcon } from '@heroicons/react/24/outline'

interface Props {
    className?: string
}

const Title = (props: { children: React.ReactNode }) => (
    <h3 className="text-lg font-semibold text-white">{props.children}</h3>
)

const ContactButton = (props: { href: string; children: React.ReactNode }) => (
    <RoundedOutlineButtonWithIcon
        color="button-outline-primary-light"
        size="rounded-button-with-icon-xl lg:rounded-button-with-icon-base"
        href={props.href}
        className="w-full justify-center lg:w-auto">
        {props.children}
    </RoundedOutlineButtonWithIcon>
)

export function FooterCTAs(props: Props) {
    return (
        <div
            className={`${props.className} space-y-16 text-center lg:grid lg:grid-cols-3 lg:space-y-0 lg:text-left`}>
            <div className="space-y-8">
                <MyImage
                    className="mx-auto h-auto w-28 lg:mx-0 lg:w-24 min-[1147px]:mt-2 min-[1147px]:w-2 min-[1147px]:origin-left min-[1147px]:-translate-y-2 min-[1147px]:scale-[7]"
                    src={imageLogo}
                    sizes="(min-width: 1024px) 160px, 224px"
                    alt=""
                    backgroundColor=""
                    placeholder="empty"></MyImage>

                <div className="flex flex-col items-center lg:items-start">
                    <p className="text-sm/6 text-primary-300">
                        Make memories, anywhere
                    </p>
                    <div className="mt-6 flex items-center text-xs">
                        <MapPinIcon className="mr-2.5 size-3.5 text-primary-500" />

                        <span className="text-white">
                            {location.address.city}, {location.address.state}
                        </span>
                    </div>
                    <div className="mt-3 text-xs text-primary-500">
                        <div className="flex items-center">
                            <ClockIcon className="mr-2.5 size-3.5 text-primary-500"></ClockIcon>
                            <span className="text-white">
                                {location.hours[0].day} at{' '}
                                {location.hours[0].time}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                <Title>Contact us</Title>

                <div className="space-y-8 min-[1147px]:space-y-5">
                    <h3 className="flex flex-col gap-x-4 gap-y-3 lg:items-start min-[1147px]:flex-row min-[1147px]:items-center">
                        <span className="flex-shrink-0 text-xs font-medium text-primary-300">
                            Call or text us
                        </span>
                        <ContactButton
                            href={makeTelephoneHref(location.telephone)}>
                            {location.telephone}
                        </ContactButton>
                    </h3>
                    <h3 className="flex flex-col gap-x-4 gap-y-3 lg:items-start min-[1147px]:flex-row min-[1147px]:items-center">
                        <span className="flex-shrink-0 text-xs font-medium text-primary-300">
                            Email us
                        </span>
                        <ContactButton href={makeEmailHref(location.email)}>
                            {location.email}
                        </ContactButton>
                    </h3>
                </div>
            </div>
            <div className="space-y-8 lg:ml-8 min-[1147px]:ml-12">
                <Title>Sign up for discounts + updates</Title>

                <FormNewsletter className="mx-auto max-w-md" />
            </div>
        </div>
    )
}
