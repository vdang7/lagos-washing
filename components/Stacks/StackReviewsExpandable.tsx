'use client'
import { LogoGoogle } from '@/components/Graphics/Logos/LogoGoogle'
import { PatternHexagon } from '@/components/Graphics/PatternHexagon'
import { IconChevronAnimated } from '@/components/IconChevronAnimated'
import { ItemReviewCardWithStars } from '@/components/Items/ItemReviewCardWithStars'
import { MyLink } from '@/components/MyLink'
import { reviews } from '@/data/reviews'
import { useEffect, useRef, useState } from 'react'

const ReviewCard = ({ item }: { item: any }) => (
    <ItemReviewCardWithStars
        id={item.id}
        title={item.title}
        body={item.body}
        authorName={item.authorName}
        authorSubtitle={item.authorSubtitle}
        authorImageSrc={item.authorImageSrc}
        authorImageAlt={item.authorImageAlt}
        platformLogoMobile={item.platformLogoMobile}
        platformLogoDesktop={item.platformLogoDesktop}
        reviewHref={item.reviewHref}
    />
)

const Button = ({
    className,
    onClick,
    children,
}: {
    className?: string
    onClick: any
    children: React.ReactNode
}) => (
    <button
        type="button"
        className={`${className} rounded-button-with-icon button-primary px-6 py-2.5 text-sm font-semibold transition-transform [background-image:--buttonGradient] hover:[background-image:--buttonHoverGradient]`}
        onClick={onClick}>
        {children}
    </button>
)

function chunkArray(arr: any, parts: any) {
    const chunks: any = Array.from({ length: parts }, () => [])
    // const totalChars = arr.reduce((sum:any, item:any) => sum + item.body.length, 0);
    // const targetChars = totalChars / parts;

    // Sort items by length (descending) to better balance chunks
    const sortedArr = arr.sort(
        (a: any, b: any) => b.body.length - a.body.length
    )

    for (const item of sortedArr) {
        let smallestChunkIndex = 0
        let smallestChunkSize = chunks[0].reduce(
            (sum: any, i: any) => sum + i.body.length,
            0
        )

        // Find the chunk with the smallest total character count
        for (let i = 1; i < chunks.length; i++) {
            const chunkSize = chunks[i].reduce(
                (sum: any, i: any) => sum + i.body.length,
                0
            )
            if (chunkSize < smallestChunkSize) {
                smallestChunkSize = chunkSize
                smallestChunkIndex = i
            }
        }

        // Add the item to the smallest chunk
        chunks[smallestChunkIndex].push(item)
    }

    return chunks
}

const allChunks = chunkArray(reviews, 3)

interface Props {
    className?: string
}

export function StackReviewsExpandable({ className }: Props) {
    const reviewsContainerRef = useRef<HTMLDivElement>(null)
    const showLessContainerRef = useRef<HTMLDivElement>(null)
    const bottomOfReviewsRef = useRef<HTMLDivElement>(null)

    const [isExpanded, setIsExpanded] = useState(false)
    const [showMoreButton, setShowMoreButton] = useState(true)
    const [showLessButton, setShowLessButton] = useState(false)

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev)
        setShowMoreButton((prev) => !prev)
        if (reviewsContainerRef.current) {
            reviewsContainerRef.current.scrollIntoView()
        }
    }

    useEffect(() => {
        if (!bottomOfReviewsRef.current) return

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setShowLessButton(true)
            } else {
                setShowLessButton(false)
            }
        })

        observer.observe(bottomOfReviewsRef.current)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <div
            ref={reviewsContainerRef}
            className={`${className} ${isExpanded ? 'pb-section' : ''}`}>
            <div className="relative">
                <PatternHexagon className="absolute left-0 top-0 size-40 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div
                className={`relative -mt-8 flex flex-col sm:flex-row ${isExpanded ? 'max-h-none' : 'max-h-[55rem] overflow-hidden lg:max-h-[33rem]'}`}>
                <div className="flex-1 sm:-ml-4">
                    {allChunks[0].map((item: any) => (
                        <ReviewCard key={item.id} item={item} />
                    ))}
                </div>
                <div className="flex-1 sm:-mr-4 lg:mr-0">
                    {allChunks[1].map((item: any) => (
                        <ReviewCard key={item.id} item={item} />
                    ))}
                    <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
                        <figure className="relative flex flex-col items-center rounded-2xl bg-white px-6 pb-7 pt-8">
                            <LogoGoogle className="size-10" />
                            <MyLink
                                href="https://g.page/r/Cdy5bIZOM0NaEBM/review"
                                rel={null}
                                className="group z-20 flex items-center text-sm font-medium text-gray-900 hover:text-primary-700">
                                Write my review
                                <IconChevronAnimated
                                    className="ml-2.5"
                                    color="stroke-gray-700 group-hover:stroke-primary-400"
                                />
                            </MyLink>
                        </figure>
                    </div>
                </div>
                <div className="flex-1 sm:hidden lg:-mr-4 lg:block">
                    {allChunks[2].map((item: any) => (
                        <ReviewCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
            {showMoreButton && (
                <>
                    <div className="absolute bottom-0 left-0 h-72 w-full bg-gradient-to-t from-gray-50 via-gray-50 sm:h-96"></div>

                    <div className="absolute bottom-48 left-0 flex w-full justify-center">
                        <Button onClick={toggleExpand}>Show more…</Button>
                    </div>
                </>
            )}
            <div
                ref={showLessContainerRef}
                className={`${!showMoreButton && showLessButton ? 'opacity-100' : 'pointer-events-none opacity-0'} sticky inset-x-0 bottom-12 z-10 mt-[-12.5rem] flex justify-center bg-gradient-to-t from-gray-50 pb-8 pt-32 transition-opacity duration-300 lg:bottom-0`}>
                <Button
                    className={`${!showMoreButton && showLessButton ? 'translate-y-0' : 'translate-y-4'}`}
                    onClick={toggleExpand}>
                    Okay, I get the point
                </Button>
            </div>
            <div
                ref={bottomOfReviewsRef}
                className="pointer-events-none absolute bottom-0 -z-10 h-[30%] w-full"></div>
        </div>
    )
}
