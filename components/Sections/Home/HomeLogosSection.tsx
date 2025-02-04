import { MyImage } from '@/components/MyImage'
import { SectionContainer } from '@/components/SectionContainer'
import { Section } from '@/components/Sections/Section'
import image3 from '@/public/images/minified/global/logos/third-party/crafty.webp'
import image1 from '@/public/images/minified/global/logos/third-party/farina.webp'
import image2 from '@/public/images/minified/global/logos/third-party/woof.webp'

const imageSizes = '464px'

export function HomeLogosSection() {
    return (
        <>
            <Section className="pb-section pt-10">
                <SectionContainer>
                    <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-8">
                        <div className="text-center lg:col-span-5 lg:text-left">
                            <h2 className="mb-2 text-sm font-semibold">
                                <span className="text-gradient-primary-dark">
                                    Our clients
                                </span>
                            </h2>
                            <h2 className="text-lg font-semibold tracking-tight text-[--sectionTitleColor] sm:text-2xl sm:font-bold">
                                Trusted by businesses in Raleigh
                            </h2>
                        </div>
                        <div className="mt-10 lg:col-span-7 lg:mt-0">
                            <div className="mx-auto flex max-w-lg items-center justify-center gap-y-10 sm:max-w-xl lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                <MyImage
                                    alt="Farina Neighborhood Italian Logo"
                                    src={image1}
                                    sizes={imageSizes}
                                    className="max-h-12 w-full object-contain sm:max-h-16 md:max-h-20"
                                    backgroundColor=""
                                    placeholder="empty"
                                />

                                <MyImage
                                    alt="Woofinwaggle Dog Spa Boutique logo"
                                    src={image2}
                                    sizes={imageSizes}
                                    backgroundColor=""
                                    placeholder="empty"
                                    className="max-h-12 w-full object-contain sm:max-h-16 md:max-h-20"
                                />

                                <MyImage
                                    alt="Crafty Beer Shop logo"
                                    src={image3}
                                    sizes={imageSizes}
                                    className="max-h-12 w-full object-contain sm:max-h-16 md:max-h-20"
                                    backgroundColor=""
                                    placeholder="empty"
                                />
                            </div>
                        </div>
                    </div>
                </SectionContainer>
            </Section>
        </>
    )
}
