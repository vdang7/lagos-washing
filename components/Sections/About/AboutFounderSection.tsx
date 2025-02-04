import { FadeIn } from '@/components/Animations/FadeIn'
import { RoundedButtonWithIcon } from '@/components/Buttons/RoundedButtonWithIcon'
import { MyImage } from '@/components/MyImage'
import { SectionContainer } from '@/components/SectionContainer'
import { Lead } from '@/components/Sections/About/components/Lead'
import { Section } from '@/components/Sections/Section'
import { InteriorSubtitle } from '@/components/Typography/InteriorSubtitle'
import { InteriorTitle } from '@/components/Typography/InteriorTitle'
import { getPageById } from '@/functions/getPageById'
import imagegoog2 from '@/public/images/minified/global/reviews/google/jefferey.webp'
import image31 from '@/public/images/minified/pages/about/city.webp'
import imageFounder from '@/public/images/minified/pages/about/founder5.webp'

const outerContainerClassName = 'px-6 lg:px-0'
const sectionContainerClassName =
    '!max-w-2xl lg:!max-w-container !px-0 lg:!px-8'

export function AboutFounderSection() {
    return (
        <>
            <Section className="bg-white pt-32">
                <div className={outerContainerClassName}>
                    <SectionContainer className={sectionContainerClassName}>
                        <InteriorSubtitle tag="p">
                            Meet the founder
                        </InteriorSubtitle>
                        <InteriorTitle tag="h2" className="mt-2">
                            Founded by Derek Lagos
                        </InteriorTitle>
                        <Lead className="mt-6 max-w-3xl">
                            “I’ve known Derek for 2 years, and he is a
                            visionary. He takes pride in his business, is
                            customer-friendly and adaptable.”
                        </Lead>
                        <div className="mt-6 flex items-center">
                            <MyImage
                                className="mr-4 size-10"
                                src={imagegoog2}
                                alt="Jeffery headshot"
                                sizes="80px"
                            />
                            <div>
                                <span className="block text-sm font-medium text-gray-900">
                                    Jeffery Flood
                                </span>
                                <span className="mt-0.5 block text-xs text-gray-600">
                                    North Carolina
                                </span>
                            </div>
                        </div>
                        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
                            <div className="max-w-lg">
                                <p className="text-base/7 text-gray-600">
                                    Hello, I&apos;m Derek, a Raleigh native and
                                    a proud graduate of Leesville Road High
                                    School. I&apos;m dedicated to delivering the
                                    best pressure washing services that
                                    homeowners and businesses rely on. Whether
                                    it&apos;s a residential property or a
                                    commercial location, I approach every
                                    project with attention to detail and a
                                    commitment to achieving results that exceed
                                    expectations.
                                    {/* A Raleigh native and a Leesville Road High School graduate, Derek has built a reputation for excellence, consistently delivering exceptional pressure washing services that homeowners and businesses rely on. Whether it’s a home or a business location, Derek approaches every project with attention to detail and a commitment to delivering results that exceed expectations. */}
                                    {/* My journey began when I volunteered to help
                                    a friend with a property cleanup. That
                                    experience ignited a passion for service,
                                    and I felt driven to help more people in my
                                    community. As word spread, I realized the
                                    growing need for my help, so I started Lagos
                                    Washing to keep making a difference in my
                                    community. */}
                                </p>
                                <p className="mt-8 text-base/7 text-gray-600">
                                    {/* Today, {app.companyName} proudly serves Raleigh,
                                    Wake Forest, and Cary in North Carolina
                                    offering both residential and commercial
                                    pressure washing. By consistently exceeding customer expectations and prioritizing their satisfaction, {app.companyName} was able to acheive a perfect 5-star rating, backed by over 23 reviews across Google and Facebook. Join the
                                    growing number of homeowners and businesses
                                    who choose {app.companyName} as their trusted
                                    pressure washing provider. */}
                                    Today, I’m proud to serve Raleigh, Wake
                                    Forest, and Cary, offering both residential
                                    and commercial pressure washing services. By
                                    consistently exceeding customer
                                    expectations, I&apos;ve earned a perfect
                                    5-star rating, supported by over 23 reviews
                                    on Google and Facebook. With a track record
                                    of excellence and a loyal customer base, I’m
                                    committed to continuing to deliver the best
                                    pressure washing services for years to come.
                                </p>
                                <div className="mt-6">
                                    <RoundedButtonWithIcon
                                        className="w-full justify-center sm:w-auto sm:justify-start"
                                        href={getPageById(4).href}>
                                        Get your free estimate
                                    </RoundedButtonWithIcon>
                                </div>
                            </div>
                            <FadeIn className="max-lg:order-first max-lg:max-w-lg">
                                <div className="relative aspect-[3/2] overflow-hidden outline-1 -outline-offset-1 outline-black/10">
                                    <MyImage
                                        alt=""
                                        src={image31}
                                        className="ml-auto block size-full w-[70%] rounded-xl object-cover"
                                        sizes="
                                        (min-width: 1024px) 1232px,
                                        (min-width: 582px) 1024px,
                                        100vw"
                                    />

                                    <div className="absolute bottom-4 right-5 block text-right text-sm/4 font-semibold text-white">
                                        Downtown <br /> Raleigh
                                    </div>
                                    <div className="absolute bottom-0 top-1/2 aspect-[1/1] h-[75%] -translate-y-1/2 overflow-hidden rounded-xl md:h-72 md:w-72 lg:h-64 min-[1123px]:h-72">
                                        <MyImage
                                            className="h-full w-full object-cover object-[49.5%]"
                                            src={imageFounder}
                                            alt=""
                                            sizes="576px"
                                        />
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </SectionContainer>
                </div>
            </Section>
        </>
    )
}
