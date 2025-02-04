import { PageLayout } from '@/components/PageLayout'
// import { ScrollOnce } from '@/components/ScrollOnce'
import { HomeFaqsSection } from '@/components/Sections/Home/HomeFaqsSection'
// import { HomeFeatureSection } from '@/components/Sections/Home/HomeFeatureSection'
import { HomeFeatureSection2 } from '@/components/Sections/Home/HomeFeatureSection2'
import { HomeFounderSection } from '@/components/Sections/Home/HomeFounderSection'
import { HomeHeroSection } from '@/components/Sections/Home/HomeHeroSection'
import { HomeLogosSection } from '@/components/Sections/Home/HomeLogosSection'
import { HomeProcessSection } from '@/components/Sections/Home/HomeProcessSection'
import { HomeReviewsSection } from '@/components/Sections/Home/HomeReviewsSection'
import { HomeServicesSection } from '@/components/Sections/Home/HomeServicesSection'
import { HomeWhyUsSection } from '@/components/Sections/Home/HomeWhyUsSection'
import imageLogo from '@/public/images/minified/global/logos/logo-dark.svg'
// import '@/styles/watermark.css'

export default function Home() {
    return (
        <>
            <PageLayout>
                {/* <div className="watermark fixed inset-0 bg-no-repeat opacity-5 [background-position:95%_center] [background-size:250px]"></div> */}
                <div
                    className="fixed inset-0 bg-no-repeat opacity-5 [background-position:95%_center] [background-size:250px]"
                    style={{ backgroundImage: `url(${imageLogo.src})` }}></div>
                <HomeHeroSection />
                <HomeLogosSection />
                {/* <HomeFeatureSection /> */}
                <HomeFeatureSection2 />
                <HomeFounderSection />
                <HomeServicesSection />
                {/* <ScrollOnce> */}
                <HomeWhyUsSection />
                {/* </ScrollOnce> */}
                <HomeProcessSection />
                {/* <ScrollOnce> */}
                <HomeReviewsSection />
                <HomeFaqsSection />
                {/* </ScrollOnce> */}
            </PageLayout>
        </>
    )
}
