import { PatternHexagon } from '@/components/Graphics/PatternHexagon'
import { IconChevronAnimated } from '@/components/IconChevronAnimated'
import { MyImage } from '@/components/MyImage'
import { MyLink } from '@/components/MyLink'
import { SectionContainer } from '@/components/SectionContainer'
import { Section } from '@/components/Sections/Section'
import { StackReviewsSpotlight } from '@/components/Stacks/StackReviewsSpotlight'
import { SectionTitle } from '@/components/Typography/SectionTitle'
import { location } from '@/data/location'
import { getPageById } from '@/functions/getPageById'
import { makeTelephoneHref } from '@/functions/makeTelephoneHref'
import image4281 from '@/public/images/minified/global/founder/founder-headshot.webp'
import imageLogo from '@/public/images/minified/global/logos/logo.svg'
import image1 from '@/public/images/minified/pages/home/services/commercial.webp'
import image73 from '@/public/images/minified/pages/home/services/concrete.webp'
import image7 from '@/public/images/minified/pages/home/services/ext5.webp'
import image8 from '@/public/images/minified/pages/home/services/fence.webp'
import image6 from '@/public/images/minified/pages/home/services/graf.webp'
import image2 from '@/public/images/minified/pages/home/services/gutter.webp'
import image4 from '@/public/images/minified/pages/home/services/house-wash.webp'
import image9 from '@/public/images/minified/pages/home/services/patio.webp'
import image10 from '@/public/images/minified/pages/home/services/pool.webp'
import image5 from '@/public/images/minified/pages/home/services/power.webp'
import image428111 from '@/public/images/minified/pages/home/services/residential.webp'
import image3 from '@/public/images/minified/pages/home/services/roof.webp'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { StaticImageData } from 'next/image'

interface InterfaceItemBase {
    href: string
    imageClassName?: string
    imageSrc: StaticImageData
    imageAlt: string
    imageSizes: string
    imagePriority?: boolean
}

interface ItemProps extends InterfaceItemBase {
    className?: string
    children: React.ReactNode
}

interface InterfaceItem extends InterfaceItemBase {
    id: number
    title: string
}

function ItemComponent({
    className,
    href,
    imageClassName,
    imageSrc,
    imageAlt,
    imageSizes,
    imagePriority,
    children,
}: ItemProps) {
    return (
        <>
            <MyLink
                href={href}
                className={`${className} group relative block overflow-hidden rounded-2xl transition-transform duration-500 hover:-translate-y-1`}>
                <div
                    data-slot="item-service-image-wrapper"
                    className="aspect-h-9 aspect-w-16 relative">
                    <MyImage
                        className={`${imageClassName} w-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-110`}
                        src={imageSrc}
                        sizes={imageSizes}
                        alt={imageAlt}
                        priority={imagePriority}
                    />
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-transparent mix-blend-multiply" /> */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-transparent mix-blend-multiply" /> */}
                <div className="absolute bottom-0 h-[55%] w-full bg-gradient-to-t from-black/80"></div>
                <MyImage
                    className="absolute right-3 top-3 h-auto w-6"
                    sizes="48px"
                    alt="Lagos Pressure Washing logo"
                    src={imageLogo}
                    placeholder="empty"
                    backgroundColor=""></MyImage>
                {children}
            </MyLink>
        </>
    )
}

const topItemsImageSizes = `
            (min-width: 590px) 50vw, 
            100vw
        `
const bottomItemsImageSizes = `
            (min-width: 1024px) 20vw, 
            (min-width: 590px) 34vw, 
            50vw
        `

const serviceHref = getPageById(4)
const topItems: InterfaceItem[] = [
    {
        id: 3423,
        title: 'Residential pressure washing',
        href: serviceHref.href,
        imageSrc: image7,
        imageAlt: '',
        imageSizes: topItemsImageSizes,
    },
    {
        id: 3423,
        title: 'Commercial pressure washing',
        href: serviceHref.href,
        imageSrc: image1,
        imageAlt: '',
        imageSizes: topItemsImageSizes,
    },
]

const bottomItems: InterfaceItem[] = [
    {
        id: 3423,
        title: 'Power washing',
        href: serviceHref.href,
        imageSrc: image5,
        imageAlt: '',
        imageSizes: bottomItemsImageSizes,
    },
    {
        id: 3423,
        title: 'Gutter cleaning',
        href: serviceHref.href,
        imageSrc: image2,
        imageAlt: '',
        imageSizes: bottomItemsImageSizes,
    },
    {
        id: 3423,
        title: 'Roof cleaning',
        href: serviceHref.href,
        imageClassName: 'scale-x-flip group-hover:-scale-x-110',
        imageSrc: image3,
        imageAlt: '',
        imageSizes: bottomItemsImageSizes,
    },
    {
        id: 3423,
        title: 'House washing',
        href: serviceHref.href,
        imageClassName: 'scale-x-flip group-hover:-scale-x-110',
        imageSrc: image4,
        imageAlt: '',
        imageSizes: bottomItemsImageSizes,
    },
    {
        id: 3423,
        title: 'Concrete cleaning',
        href: serviceHref.href,
        imageSrc: image73,
        imageAlt: '',
        imageSizes: bottomItemsImageSizes,
    },
    {
        id: 3423,
        title: 'Graffiti removal',
        href: serviceHref.href,
        imageSrc: image6,
        imageAlt: '',
        imageSizes: bottomItemsImageSizes,
    },
    {
        id: 3423,
        title: 'Exterior cleaning',
        href: serviceHref.href,
        imageSrc: image428111,
        imageAlt: '',
        imageSizes: bottomItemsImageSizes,
    },
    {
        id: 3423,
        title: 'Fence cleaning',
        href: serviceHref.href,
        imageSrc: image8,
        imageAlt: '',
        imageSizes: bottomItemsImageSizes,
    },
    {
        id: 3423,
        title: 'Patio cleaning',
        href: serviceHref.href,
        imageSrc: image9,
        imageAlt: '',
        imageSizes: bottomItemsImageSizes,
    },
    {
        id: 3423,
        title: 'Pool deck washing',
        href: serviceHref.href,
        imageSrc: image10,
        imageAlt: '',
        imageSizes: `
            (min-width: 1024px) 20vw, 
            (min-width: 590px) 100vw, 
            50vw
        `,
    },
]

const ItemTitleTag = 'h3'

export function HomeServicesSection() {
    return (
        <>
            <Section className="pt-section pb-section">
                <div className="absolute bottom-0 h-10 w-full bg-gradient-to-t from-gray-50"></div>
                <SectionContainer>
                    <PatternHexagon
                        className="absolute right-0 top-0 hidden w-72 -translate-y-[40%] translate-x-1/2 md:block lg:w-[23rem]"
                        patternClassName="text-primary-400"
                    />
                    {/* <PatternHexagon className="absolute right-2 top-0 mt-2 hidden w-72 -translate-y-[40%] translate-x-1/2 md:block lg:w-[23rem]" /> */}
                    <PatternHexagon
                        className="absolute left-0 top-0 hidden w-60 -translate-x-1/2 translate-y-[40%] lg:block"
                        patternClassName="text-primary-200"
                    />

                    {/* <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="hidden lg:block  relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gray-600 to-gray-400 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div> */}

                    {/* <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="hidden lg:block relative right-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gray-400 to-gray-600 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div> */}

                    <div className="mx-auto max-w-2xl lg:text-center">
                        <StackReviewsSpotlight className="mb-6 origin-left scale-90 lg:origin-center lg:justify-center [&_[data-slot=my-image]]:lg:ring-gray-200 [&_[data-slot=stack-reviews-spotlight-box]]:lg:border-gray-100 [&_[data-slot=stack-reviews-spotlight-box]]:lg:ring-primary-50" />
                        <SectionTitle
                            tag="h2"
                            className="relative mt-2 text-balance lg:text-[2.8rem] lg:leading-[2.8rem]">
                            <svg
                                className="absolute hidden size-6 -translate-x-1 -translate-y-3 scale-x-flip lg:block"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="371"
                                zoomAndPan="magnify"
                                viewBox="0 0 278.25 323.999988"
                                height="432"
                                preserveAspectRatio="xMidYMid meet"
                                aria-hidden="true"
                                version="1.0">
                                <path
                                    className="text-primary-200"
                                    fill="currentColor"
                                    d="M 52.738281 153.308594 C 70.820312 117.167969 91.292969 82.273438 113.996094 48.847656 C 130.691406 24.1875 90.746094 1.097656 74.140625 25.574219 C 51.382812 59.109375 30.894531 94.132812 12.796875 130.402344 C -0.398438 156.910156 39.363281 180.371094 52.648438 153.679688 Z M 52.738281 153.308594 "
                                    fill-opacity="1"
                                    fill-rule="nonzero"
                                />
                                <path
                                    className="text-primary-400"
                                    fill="currentColor"
                                    d="M 129.214844 229.136719 L 242.871094 139.730469 C 266.210938 121.261719 233.644531 88.933594 210.214844 107.035156 L 96.652344 196.625 C 73.3125 215.097656 105.875 247.425781 129.308594 229.320312 Z M 129.214844 229.136719 "
                                    fill-opacity="1"
                                    fill-rule="nonzero"
                                />
                                <path
                                    className="text-primary-200"
                                    fill="currentColor"
                                    d="M 171.191406 315.125 L 248.128906 293.789062 C 276.726562 285.847656 264.550781 241.328125 235.859375 249.269531 L 158.921875 270.515625 C 130.324219 278.457031 142.5 322.976562 171.191406 315.03125 Z M 171.191406 315.125 "
                                    fill-opacity="1"
                                    fill-rule="nonzero"
                                />
                            </svg>
                            {/* Our pressure washing services */}
                            {/* Make your property shine bright without the hassle */}
                            Get{' '}
                            <span className="text-gradient-primary-dark">
                                the best
                            </span>{' '}
                            pressure washing services in Raleigh, NC today
                        </SectionTitle>
                        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[--sectionBodyColor] lg:justify-center">
                            <div className="flex items-center">
                                <div className="relative isolate flex flex-col items-center justify-center">
                                    <CheckCircleIcon
                                        aria-hidden="true"
                                        className="h-7 w-5 flex-none text-[#dcfce7]"
                                    />
                                    <div className="absolute -z-10 size-2.5 rounded-full bg-[#15803d]"></div>
                                </div>
                                <span className="ml-2.5">
                                    100% satisfaction guaranteed
                                </span>
                            </div>
                            <div className="flex items-center">
                                <div className="relative isolate flex flex-col items-center justify-center">
                                    <CheckCircleIcon
                                        aria-hidden="true"
                                        className="h-7 w-5 flex-none text-[#dcfce7]"
                                    />
                                    <div className="absolute -z-10 size-2.5 rounded-full bg-[#15803d]"></div>
                                </div>
                                <span className="ml-2.5">
                                    New customers get 15% off
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-3 [&>:last-child_[data-slot=item-service-image-wrapper]]:min-[590px]:aspect-h-4 [&>:last-child_[data-slot=item-service-image-wrapper]]:lg:aspect-h-9 min-[450px]:grid-cols-2 min-[590px]:grid-cols-6 lg:grid-cols-10 lg:gap-6 [&>:last-child]:min-[590px]:col-span-full [&>:last-child]:lg:col-span-2">
                        {topItems.map((item) => (
                            <ItemComponent
                                key={item.id}
                                className="min-[450px]:col-span-2 min-[590px]:col-span-3 lg:col-span-5"
                                href={item.href}
                                imageClassName={item.imageClassName}
                                imageSrc={item.imageSrc}
                                imageAlt={item.imageAlt}
                                imageSizes={item.imageSizes}
                                imagePriority={item.imagePriority}>
                                <ItemTitleTag className="absolute bottom-0 max-w-[90%] text-balance pb-5 pl-4 text-lg/4 font-semibold text-white transition-transform duration-[600ms] group-hover:-translate-y-5 md:text-xl/4 lg:max-w-none lg:pl-5 lg:text-2xl">
                                    {item.title}
                                </ItemTitleTag>
                                <span className="absolute bottom-0 flex translate-y-7 items-center pl-4 text-xs text-primary-200 opacity-0 duration-[600ms] ease-in-out group-hover:-translate-y-3.5 group-hover:opacity-100 lg:pl-5 lg:text-sm lg:group-hover:-translate-y-4">
                                    Get my free estimate
                                    <IconChevronAnimated
                                        className="ml-2 mt-0.5"
                                        color="stroke-primary-200"
                                    />
                                </span>
                            </ItemComponent>
                        ))}

                        {bottomItems.map((item) => (
                            <ItemComponent
                                key={item.id}
                                className="min-[590px]:col-span-2"
                                href={item.href}
                                imageClassName={item.imageClassName}
                                imageSrc={item.imageSrc}
                                imageAlt={item.imageAlt}
                                imageSizes={item.imageSizes}
                                imagePriority={item.imagePriority}>
                                <div className="absolute bottom-0 h-16 w-full translate-y-3 bg-gradient-to-t from-[#041D2F] via-[#041D2F] opacity-0 duration-[600ms] ease-in-out [transition-property:opacity,transform] group-hover:translate-y-0 group-hover:opacity-80" />
                                <ItemTitleTag className="absolute bottom-0 max-w-[90%] text-balance pb-5 pl-4 text-lg/4 font-semibold text-white transition-transform duration-[600ms] group-hover:-translate-y-4 lg:max-w-none lg:pb-3 lg:text-base/4 lg:group-hover:-translate-y-5 xl:text-lg xl:group-hover:-translate-y-4">
                                    {item.title}
                                </ItemTitleTag>

                                <div className="absolute bottom-0 flex translate-y-7 items-center pl-4 text-xs text-primary-200 opacity-0 duration-[600ms] ease-in-out group-hover:-translate-y-3 group-hover:opacity-100">
                                    Get my free estimate
                                    <IconChevronAnimated
                                        className="ml-2 mt-0.5"
                                        color="stroke-primary-200"
                                    />
                                </div>
                            </ItemComponent>
                        ))}
                    </div>
                    <div className="mt-12 flex w-full justify-center">
                        <div className="relative isolate inline-flex justify-center rounded-2xl border border-gray-100 py-3 pl-4 pr-5 min-[491px]:items-center">
                            <div className="pattern-bubbles-primary-light absolute top-1/2 -z-10 mt-[0.1rem] h-[128%] w-[90%] -translate-y-1/2 scale-y-flip"></div>
                            <div className="absolute inset-0 -z-10 rounded-2xl bg-white"></div>
                            {/* <div className="absolute inset-0 bg-white rounded-2xl -z-10"></div>
                        <div className="absolute h-full w-[86%] right-1/2 translate-x-1/2 -bottom-3 bg-primary-100 rounded-2xl -z-20"></div>
                        <div className="absolute h-full w-[93%] right-1/2 translate-x-1/2 -bottom-1.5 bg-primary-50 rounded-2xl -z-20"></div> */}
                            {/* <div className="mt-11 flex justify-center min-[434px]:items-center"> */}
                            <div className="relative mt-1 shrink-0 min-[491px]:mt-0">
                                <MyImage
                                    className="h-11 w-11 rounded-full"
                                    src={image4281}
                                    alt="Derek Lagos"
                                    sizes="88px"
                                />
                                <span className="absolute right-0 top-0 block h-2.5 w-2.5 rounded-full bg-[#16a34a] ring-2 ring-gray-50" />
                            </div>
                            <p className="ml-4 max-w-[24rem] text-pretty text-sm leading-6 text-[--itemBodyColor]">
                                Don&apos;t see what you&apos;re looking for?
                                Call us at{' '}
                                <br className="hidden min-[434px]:block" />
                                <MyLink
                                    href={makeTelephoneHref(location.telephone)}
                                    className="text-link">
                                    {location.telephone}
                                </MyLink>
                                . We&apos;re here to help with your search.
                            </p>
                        </div>
                    </div>
                </SectionContainer>
            </Section>
        </>
    )
}
