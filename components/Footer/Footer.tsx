import { FooterCTAs } from '@/components/Footer/FooterCTAs'
import { FooterNavigation } from '@/components/Footer/FooterNavigation'
import { MyImage } from '@/components/MyImage'
import { MyLink } from '@/components/MyLink'
import { SectionContainer } from '@/components/SectionContainer'
import { app } from '@/data/app'
import imageLogoSecondaryDark from '@/public/images/minified/global/logos/logo-secondary-1000.svg'

export function Footer() {
    return (
        <footer
            data-type="section"
            data-header-theme="header-secondary-dark"
            className="relative bg-secondary-950 pt-20 pb-8 sm:pt-24 lg:pt-28 min-[1147px]:pt-32 isolate overflow-clip"
            aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            {/* <div className="absolute inset-0 [background-size:10rem] pattern-logo-secondary-dark"></div> */}
            <div
                className="absolute left-[calc(50%-4rem)] top-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)] translate-y-32"
                aria-hidden="true">
                <div
                    className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-secondary-500 to-secondary-700 opacity-20"
                    style={{
                        clipPath:
                            'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                    }}
                />
            </div>
            {/* <div className="absolute inset-0 size-full bg-stars opacity-[0.5]"></div>
            <div className="absolute inset-0 size-full bg-twinkling"></div>  */}
            {/* <GradientSecondaryDark/> */}
            <div className="absolute top-0 h-40 w-full bg-gradient-to-b from-secondary-950"></div>
            <SectionContainer className="relative">

            {/* <MyImage
                    src={imageLogo}
                    className="absolute left-1/2 right-1/2 -top-12 w-52 h-auto -translate-x-1/2 opacity-[0.07] lg:w-80 lg:left-0 lg:-top-24"
                    alt=""
                    sizes="
                    (min-width: 1024px) 640px,
                    416px"
                    backgroundColor=""
                    placeholder="empty"
                /> */}
                <FooterCTAs className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none" />
                <FooterNavigation className="mt-16" />
                <div className="mt-10 flex flex-wrap text-sm/6 text-primary-500 text-center items-center justify-center gap-y-2 gap-x-2">
                    <p className="text-center text-balance relative">
                        &copy; {new Date().getFullYear()} {app.companyLegalName}. (Lagos Washing)
                    </p>
                    <span className="inline-block text-white">·</span>
                    <p>All rights reserved.</p>
                    <span className="inline-block text-white">·</span>
                    <p className="flex items-center">
                        Made by
                        <MyLink href="https://howdywrld.com" className="ml-2 inline-flex opacity-70 hover:opacity-100 transition-opacity text-white font-extrabold" rel={null}>
                            <svg className="w-5 h-auto mr-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 -0 448 257">
                                <path  fill="#38bdf8" d="M223.1 132.6c53.24 0 91.02-8.625 117.1-18.5C330 64.5 309.5 0 276.6 0c-10.37 0-19.62 4.5-27.37 10.5C241.8 16.28 232.9 19.13 224 19.29C215.1 19.13 206.2 16.28 198.8 10.5C191 4.5 181.8 0 171.4 0C138.6 0 118 64.5 106.9 114.1C133 124 170.7 132.6 223.1 132.6zM224 256c106.7 0 196.3-67.43 223.1-138.9c2.75-7.625-.938-15.94-8.686-19.44c-7.623-3.5-16.81-1.312-21.93 5.312c-.875 1.25-45.63 61.63-192.5 61.63S32.39 104.3 31.52 103C26.39 96.38 17.27 94.13 9.647 97.63c-7.75 3.5-11.5 11.88-8.749 19.5C27.66 188.6 117.3 256 224 256z" />
                            </svg>
                            <span className="text-base">howdywrld</span>
                        </MyLink>    
                    </p>
                </div>
                {/* <div className="mt-16 flex flex-col justify-between gap-y-1 text-primary-500 min-[402px]:items-center sm:mt-20 lg:mt-24 lg:flex-row">
                    <p className="max-w-[12rem] text-xs/5 min-[402px]:max-w-none">
                        A pressure washing company based in{' '}
                        {location.address.city}, {location.address.state}
                    </p>
                    <p className="mt-3 max-w-[12rem] text-xs/5 min-[402px]:mt-0 min-[402px]:max-w-none flex items-center">
                        &copy; {new Date().getFullYear()} {app.companyLegalName}
                        . All rights reserved. <span className="h-3 w-px bg-primary-500 mx-2"></span>
                         <MyLink href="https://howdywrld.com" className="opacity-70 hover:opacity-100 transition-opacity text-white font-extrabold flex" rel={null}>
                            <svg className="w-4 h-auto mr-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 -0 448 257">
                                <path  fill="#38bdf8" d="M223.1 132.6c53.24 0 91.02-8.625 117.1-18.5C330 64.5 309.5 0 276.6 0c-10.37 0-19.62 4.5-27.37 10.5C241.8 16.28 232.9 19.13 224 19.29C215.1 19.13 206.2 16.28 198.8 10.5C191 4.5 181.8 0 171.4 0C138.6 0 118 64.5 106.9 114.1C133 124 170.7 132.6 223.1 132.6zM224 256c106.7 0 196.3-67.43 223.1-138.9c2.75-7.625-.938-15.94-8.686-19.44c-7.623-3.5-16.81-1.312-21.93 5.312c-.875 1.25-45.63 61.63-192.5 61.63S32.39 104.3 31.52 103C26.39 96.38 17.27 94.13 9.647 97.63c-7.75 3.5-11.5 11.88-8.749 19.5C27.66 188.6 117.3 256 224 256z" />
                            </svg>
                            howdywrld
                        </MyLink>    
                    </p>
                </div> */}
            </SectionContainer>
            {/* <div className="-mx-3 hidden lg:block">
                <MyImage
                    src={imageFooterGraphic}
                    className="relative mt-16 block w-full"
                    alt=""
                    sizes="100vw"
                    backgroundColor=""
                    placeholder="empty"
                />
            </div> */}

            <MyImage src={imageLogoSecondaryDark} className="absolute left-0 bottom-1/2 -translate-x-1/2 -z-10 translate-y-1/2 w-[40rem] h-auto" alt="Lagos Pressure Washing logo"  placeholder='empty' backgroundColor='' sizes="1280px"></MyImage>
        </footer>
    )
}
