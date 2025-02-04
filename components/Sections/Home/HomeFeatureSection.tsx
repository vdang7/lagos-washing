import { RoundedButtonWithIcon } from '@/components/Buttons/RoundedButtonWithIcon'
import { IconSparkle } from '@/components/Graphics/Icons/Framer/IconSparkle'
import { IconSparkleThin } from '@/components/Graphics/Icons/Framer/IconSparkleThin'
import { PatternHexagon } from '@/components/Graphics/PatternHexagon'
import { MyImage } from '@/components/MyImage'
import { SectionContainer } from '@/components/SectionContainer'
import { Section } from '@/components/Sections/Section'
import { getPageById } from '@/functions/getPageById'
import image4232 from '@/public/images/minified/global/founder/founder-headshot-torso-featured.webp'
import image423 from '@/public/images/minified/pages/home/feature/featured-before-after.webp'

export function HomeFeatureSection() {
    return (
        <>
            <Section className="pb-section">
                <SectionContainer>
                    <div className="relative isolate">
                        <div className="absolute inset-0">
                            <IconSparkleThin className="absolute h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-primary-700" />
                            <IconSparkleThin className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-white" />
                            {/* <IconSparkleThin className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 text-gray-50" /> */}
                            <IconSparkle className="absolute -mt-4 ml-6 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-primary-400" />
                            <IconSparkle className="absolute -ml-6 mt-4 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-primary-200" />
                            <PatternHexagon
                                className="absolute bottom-0 right-0 -z-10 w-28 translate-x-1/2 translate-y-1/2 md:w-48"
                                patternClassName="text-primary-400"
                            />
                        </div>
                        <MyImage
                            src={image423}
                            alt="Home before pressure washing"
                            className="rounded-2xl shadow-2xl ring-1 ring-gray-900/10"
                            sizes="100vw"
                        />
                        {/* <span className="absolute top-1/2 -translate-y-[50%] text-[10vw] min-[400px]:text-[13vw] lg:text-[10rem] font-black text-white/50 left-1/2 -translate-x-[50%]">Serve</span> */}
                        <div className="absolute bottom-0 flex w-full justify-between px-2 pb-2 font-semibold text-white sm:px-3 sm:pb-3 lg:pb-3.5 lg:px-3.5 text-xs lg:text-sm">
                            <span className="bg-white/20 px-3 py-0.5 rounded-full">Before</span>
                            <span className="bg-white text-primary-700 px-3 py-0.5 rounded-full">After</span>
                        </div>
                        {/* <div className="absolute inset-0 flex justify-center">
                            <LogoLagos 
                                className='w-[20rem]'
                                pathOneClassName='text-white/30' 
                                pathTwoClassName='text-white/30'
                            />
                        </div> */}
                        <div className="absolute z-10 flex w-full -translate-y-1/2 flex-col items-center">
                            <RoundedButtonWithIcon
                                className="whitespace-nowrap !text-xs min-[441px]:!text-sm lg:scale-[1.2] [&>[data-slot=icon-chevron-animated]]:hidden [&>[data-slot=icon-chevron-animated]]:min-[401px]:block"
                                href={getPageById(4).href}>
                                Get my free estimate
                            </RoundedButtonWithIcon>
                            <p className="absolute bottom-0 translate-y-9 text-xs text-gray-600 lg:translate-y-10">
                                New customers get 15% off
                            </p>
                        </div>
                        <MyImage
                            className="absolute -bottom-[1.15px] right-1/2 w-[34vw] max-w-[27rem] translate-x-1/2 grayscale"
                            src={image4232}
                            alt="Home after pressure washing"
                            sizes="864px"
                            backgroundColor=""
                            placeholder="empty"
                        />
                    </div>
                </SectionContainer>
            </Section>
        </>
    )
}
