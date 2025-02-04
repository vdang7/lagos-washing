import { RoundedButtonWithIcon } from '@/components/Buttons/RoundedButtonWithIcon'
import { PatternHexagon } from '@/components/Graphics/PatternHexagon'
import {
    InterfaceItemHexagonImage,
    ItemHexagonImage,
} from '@/components/Items/ItemHexagonImage'
import { SectionContainer } from '@/components/SectionContainer'
import { Section } from '@/components/Sections/Section'
import { Items } from '@/components/Stacks/Items'
import { SectionSubtitle } from '@/components/Typography/SectionSubtitle'
import { SectionTitle } from '@/components/Typography/SectionTitle'
import { getPageById } from '@/functions/getPageById'
import image1 from '@/public/images/minified/pages/home/process/book.webp'
import image4 from '@/public/images/minified/pages/home/process/done.webp'
import image2 from '@/public/images/minified/pages/home/process/estimate.webp'
import image3 from '@/public/images/minified/pages/home/services/house-wash.webp'

const stepsImageSizes = `576px`

const steps: InterfaceItemHexagonImage[] = [
    {
        id: 1,
        title: 'Book your appointment',
        body: "It's free",
        imageClassName: '[object-position:12%]',
        imageSrc: image1,
        imageAlt: 'enter img alt',
        imageSizes: stepsImageSizes,
    },
    {
        id: 2,
        title: 'Get your free estimate',
        body: 'No surprise fees',
        imageClassName: 'scale-x-flip',
        imageSrc: image2,
        imageAlt: 'enter img alt',
        imageSizes: stepsImageSizes,
    },
    {
        id: 3,
        title: 'Receive your services',
        body: '100% satisfaction guaranteed',
        imageSrc: image3,
        imageAlt: 'enter img alt',
        imageSizes: stepsImageSizes,
    },
    {
        id: 4,
        title: 'Relax and enjoy',
        body: 'Thank you for choosing us',
        imageSrc: image4,
        imageAlt: 'enter img alt',
        imageSizes: stepsImageSizes,
    },
]

export function HomeProcessSection() {
    return (
        <>
            <Section className="pt-section pb-section">
                <SectionContainer>
                    <PatternHexagon
                        className="absolute left-0 top-0 size-96 -translate-x-1/2 translate-y-20"
                        patternClassName="text-primary-100"
                    />
                    <div className="mx-auto max-w-2xl text-center">
                        <SectionSubtitle tag="h2" >
                        <span className="text-gradient-primary ">
                        How it works</span>
                                
                            
                        </SectionSubtitle>
                        <SectionTitle className="mt-2" tag="p">
                            Quick and easy
                        </SectionTitle>
                    </div>
                    <div className="relative mx-auto mt-16 grid max-w-2xl grid-cols-1 justify-items-center gap-x-8 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                        <Items items={steps} ItemComponent={ItemHexagonImage} />
                    </div>
                    <div className="relative isolate mt-10 flex flex-col items-center sm:mt-12 md:mt-14 lg:mt-16">
                        <RoundedButtonWithIcon href={getPageById(4).href}>
                            Get my free estimate
                        </RoundedButtonWithIcon>
                        <p className="mt-4 text-xs text-gray-600">
                            New customers get 15% off
                        </p>
                        {/* <div className="absolute -z-10 h-32 w-64 rounded-full bg-primary-200/60 blur-2xl"></div> */}
                    </div>
                </SectionContainer>
            </Section>
        </>
    )
}
