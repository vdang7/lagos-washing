import { BottomCTABar } from '@/components/BottomCTABar'
import { Header } from '@/components/Header/Header'
import { ScrollOnce } from '@/components/ScrollOnce'
// import { SectionPanelOverlap } from '@/components/Sections/SectionPanelOverlap'
import { SectionFooterCTA } from '@/components/Sections/SectionFooterCTA'

interface Props {
    children: React.ReactNode
    hideCallToActionSection?: boolean
    sectionCallToActionBackgroundColor?: string
    sectionCallToActionCardDividerWrapperClassName?: string
}

export function PageLayout({
    children,
    hideCallToActionSection = false,
    sectionCallToActionBackgroundColor,
    sectionCallToActionCardDividerWrapperClassName,
}: Props) {
    return (
        <>
            {/* <ScrollOnce> */}
            <Header />
            {/* </ScrollOnce> */}
            <main className="relative overflow-x-clip bg-gray-50">
                <div
                    data-type="top-of-page"
                    className="absolute top-0 h-[60px] w-full"></div>
                {children}
                {hideCallToActionSection ? null : (
                    <SectionFooterCTA
                        sectionBackgroundColor={
                            sectionCallToActionBackgroundColor
                        }
                        cardDividerWrapperClassName={
                            sectionCallToActionCardDividerWrapperClassName
                        }
                    />
                    // <SectionPanelOverlap
                    //     sectionBackgroundColor={
                    //         sectionCallToActionBackgroundColor
                    //     }
                    // />
                )}

                
                <ScrollOnce>
                <BottomCTABar className="lg:hidden" />
                </ScrollOnce>
            </main>
        </>
    )
}
