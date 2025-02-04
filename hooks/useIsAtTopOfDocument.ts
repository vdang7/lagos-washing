import { useEffect, useRef, useState } from 'react'

export function useIsAtTopOfDocument() {
    const [isAtTop, setIsAtTop] = useState(false)

    const observerRef = useRef<IntersectionObserver>({} as IntersectionObserver)
    const topElementRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        topElementRef.current = document.querySelector(
            '[data-type="top-of-page"]'
        )

        observerRef.current = new IntersectionObserver(([entry]) => {
            setIsAtTop(entry.isIntersecting)
        })

        if (!topElementRef.current) {
            return
        }

        observerRef.current.observe(topElementRef.current)

        return () => {
            observerRef.current.disconnect()
        }
    }, [])

    return isAtTop
}
