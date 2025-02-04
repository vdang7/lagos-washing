'use client'
import { HeaderCTAs } from '@/components/Header/HeaderCTAs'
import { HeaderNavigation } from '@/components/Header/HeaderNavigation'
import { HeaderTelephone } from '@/components/Header/HeaderTelephone'
import { MobileMenu } from '@/components/MobileMenu/MobileMenu'
import { MobileMenuIcon } from '@/components/MobileMenu/MobileMenuIcon'
import { MyImage } from '@/components/MyImage'
import { MyLink } from '@/components/MyLink'
import { debounce } from '@/functions/debounce'
import { useIsAtTopOfDocument } from '@/hooks/useIsAtTopOfDocument'
import imageLogoDark from '@/public/images/minified/global/logos/logo-dark.svg'
import imageLogo from '@/public/images/minified/global/logos/logo.svg'
import { useEffect, useRef, useState } from 'react'

interface SectionObserverEntry extends IntersectionObserverEntry {
    target: HTMLElement
}
function getLogoImage(headerTheme: string | undefined) {
    switch (headerTheme) {
        case 'header-transparent-white':
        case 'header-white':
            return imageLogoDark
        case 'header-secondary-dark':
        case 'header-transparent-secondary-dark':
            return imageLogo
        default:
            return imageLogo
    }
}

export function Header() {
    const headerRef = useRef<HTMLElement | null>(null)
    const sectionsRef = useRef<NodeListOf<HTMLElement> | null>(null)
    const observerRef = useRef<IntersectionObserver>({} as IntersectionObserver)

    const isAtTop = useIsAtTopOfDocument()
    const [pageHeight, setPageHeight] = useState(0)
    const [currentSection, setCurrentSection] =
        useState<SectionObserverEntry | null>(null)
    // const [headerTheme, setHeaderTheme] = useState('')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const currentSectionHeaderTheme = currentSection?.target.dataset.headerTheme
    const headerTheme = isAtTop
        ? currentSectionHeaderTheme?.replace('header-', 'header-transparent-')
        : currentSectionHeaderTheme

    const state = isAtTop
        ? {
              headerClassName: 'pt-6',
              imageLogoSrc: getLogoImage(headerTheme),
              imageLogoSize: 'h-12 sm:h-16',
          }
        : {
              headerClassName:
                  'py-3 bg-[--headerBackgroundColor] supports-[backdrop-filter]:bg-[--headerBackgroundColorTransparent] [backdrop-filter:saturate(180%)_blur(20px)]',
              imageLogoSrc: getLogoImage(headerTheme),
              imageLogoSize: 'h-8 scale-[1.1]',
          }

    function handleWindowResize() {
        if (window.innerHeight !== pageHeight) {
            setPageHeight(window.innerHeight)
        }
    }

    useEffect(() => {
        headerRef.current = document.querySelector('[data-type="header"]')
        sectionsRef.current = document.querySelectorAll('[data-type="section"]')

        if (!headerRef.current || sectionsRef.current.length <= 0) {
            return
        }

        const topMargin = headerRef.current.offsetHeight - 1
        const bottomMargin =
            window.innerHeight - headerRef.current.offsetHeight - 1

        const options = {
            rootMargin: `-${topMargin}px 0px -${bottomMargin}px 0px`,
            threshold: 0,
        }

        const callback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return
                } else {
                    setCurrentSection(entry as SectionObserverEntry)
                }
            })
        }

        observerRef.current = new IntersectionObserver(callback, options)

        sectionsRef.current.forEach((section) => {
            observerRef.current.observe(section)
        })

        return () => {
            observerRef.current.disconnect()
        }
    }, [pageHeight])

    useEffect(() => {
        const debounceDelay = 500

        window.addEventListener(
            'resize',
            debounce(handleWindowResize, debounceDelay)
        )

        return () => {
            window.removeEventListener(
                'resize',
                debounce(handleWindowResize, debounceDelay)
            )
        }
    }, [])

    // useEffect(() => {
    //     const currentSectionHeaderTheme =
    //         currentSection?.target.dataset.headerTheme
    //     let newHeaderTheme: string

    //     if (!currentSectionHeaderTheme) {
    //         return
    //     }

    //     newHeaderTheme = isAtTop
    //         ? currentSectionHeaderTheme.replace(
    //               'header-',
    //               'header-transparent-'
    //           )
    //         : currentSectionHeaderTheme

    //     setHeaderTheme((prevState) => {
    //         if (prevState === newHeaderTheme) {
    //             return prevState
    //         } else {
    //             return newHeaderTheme
    //         }
    //     })
    // }, [isAtTop, currentSection])

    return (
        <header
            data-theme={headerTheme}
            data-type="header"
            className={`${state.headerClassName} ${
                headerTheme
                    ? 'border-[--headerBorderColor] opacity-100'
                    : 'border-transparent opacity-0'
            } fixed z-40 w-full rounded-bl-2xl rounded-br-2xl border-b transition-all duration-500`}>
            <nav
                className="mx-auto flex max-w-container items-center px-6 lg:px-8 2xl:max-w-screen-2xl"
                aria-label="Global">
                <div className="flex flex-1">
                    <MyLink href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Lagos Pressure Washing</span>
                        <MyImage
                            className={`${state.imageLogoSize} w-auto transition-[height]`}
                            src={state.imageLogoSrc}
                            sizes="78px"
                            alt=""
                            backgroundColor=""
                            placeholder="empty"></MyImage>
                    </MyLink>
                </div>

                <HeaderNavigation className="hidden lg:mr-12 lg:flex" />

                <div className="-m-2.5 flex items-center space-x-6">
                    <HeaderTelephone />
                    <HeaderCTAs className="hidden lg:flex" />
                    <MobileMenuIcon
                        className="inline-flex lg:hidden"
                        onClick={() => setMobileMenuOpen(true)}
                    />
                </div>
            </nav>
            <MobileMenu
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            />
        </header>
    )
}
