'use client'
import { MyImage } from '@/components/MyImage'
import { PlayPauseButton } from '@/components/PlayPauseButton'
import '@/styles/hexagon-mask.css'
import clsx from 'clsx'
import { useInView } from 'framer-motion'
import { StaticImageData } from 'next/image'
import { useEffect, useRef, useState } from 'react'

const A_WORD_IN_I_FRAME_SRC = 'vimeo'

interface Props {
    children: React.ReactNode
    className?: string
    imageClassName?: string
    iconBoxClassName: string
    playIconClassName?: string
    pauseIconClassName?: string
    thumbnailSrc: StaticImageData
    thumbnailAlt: string
    thumbnailSizes: string
    thumbnailPriority?: boolean
    videoId: string
    iFrameTitle: string
}

export function HexagonVideoNoAutoplay(props: Props) {
    const joinedClassName = clsx(
        props.className,
        'w-full inline-block relative leading-[0]'
    )

    const iFrameRef = useRef<HTMLIFrameElement>(null)
    const isVideoInView = useInView(iFrameRef)
    const [isVideoDownloaded, setIsVideoDownloaded] = useState(false)
    const [isVideoPaused, setIsVideoPaused] = useState(true)
    const [didVideoPauseWithoutUserInput, setDidVideoPauseWithoutUserInput] =
        useState(true)

    const isVideoSrcSet = (src: string) => {
        return src.indexOf(A_WORD_IN_I_FRAME_SRC) > -1
    }

    const playVideo = () => {
        if (
            iFrameRef.current &&
            isVideoSrcSet(iFrameRef.current.src) &&
            iFrameRef.current.contentWindow &&
            isVideoPaused
        ) {
            iFrameRef.current.contentWindow.postMessage({ method: 'play' }, '*')
            if (!isVideoDownloaded) {
                setIsVideoDownloaded(true)
            }
            setIsVideoPaused(false)
        }
    }

    const pauseVideo = () => {
        if (
            iFrameRef.current &&
            isVideoSrcSet(iFrameRef.current.src) &&
            iFrameRef.current.contentWindow &&
            !isVideoPaused
        ) {
            iFrameRef.current.contentWindow.postMessage(
                { method: 'pause' },
                '*'
            )
            setIsVideoPaused(true)
        }
    }

    const setIFrameVideo = () => {
        if (iFrameRef.current) {
            iFrameRef.current.src = `https://player.${A_WORD_IN_I_FRAME_SRC}.com/video/${props.videoId}?background=1&keyboard=0&playsinline=1&player_id=0&app_id=58479`
        }
    }

    const handleUserPlayOrPauseVideoRequest = () => {
        if (iFrameRef.current) {
            if (!isVideoSrcSet(iFrameRef.current.src)) {
                setIFrameVideo()
            }

            if (isVideoSrcSet(iFrameRef.current.src)) {
                if (isVideoPaused) {
                    playVideo()
                } else {
                    pauseVideo()
                    setDidVideoPauseWithoutUserInput(false)
                }
            }
        }
    }

    useEffect(() => {
        if (iFrameRef.current && isVideoSrcSet(iFrameRef.current.src)) {
            if (!isVideoInView && !isVideoPaused) {
                pauseVideo()
                setDidVideoPauseWithoutUserInput(true)
            }
            if (
                isVideoInView &&
                isVideoPaused &&
                didVideoPauseWithoutUserInput
            ) {
                playVideo()
            }
        }
    }, [isVideoInView])

    return (
        <>
            <div className={joinedClassName}>
                <div className="[mask-image:--hexagonMask] [mask-mode:luminance] [mask-repeat:no-repeat] [mask-size:contain]">
                    <MyImage
                        className={`aspect-[1/1.15] h-full w-full ${props.imageClassName}`}
                        src={props.thumbnailSrc}
                        alt={props.thumbnailAlt}
                        sizes={props.thumbnailSizes}
                        priority={props.thumbnailPriority}
                    />
                    {!isVideoDownloaded && props.children}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <iframe
                            ref={iFrameRef}
                            className="pointer-events-none h-full w-full"
                            src=""
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            title={props.iFrameTitle}></iframe>
                        {/* <Video
                            reference={videoRef}
                            className="pointer-events-none"
                            src=""
                            extension={props.videoExtension}
                            autoPlay={false}
                            muted={true}
                            loop={true}
                            preload="none"
                            poster={emptyImage}
                        /> */}
                    </div>
                    <div className="absolute inset-0 block h-full w-full [background-image:var(--hexagonOuterBorder),var(--hexagonInnerBorder)]"></div>
                </div>
                <PlayPauseButton
                    onClick={handleUserPlayOrPauseVideoRequest}
                    isVideoPaused={isVideoPaused}
                    className={props.iconBoxClassName}
                    playIconClassName={props.playIconClassName}
                    pauseIconClassName={props.pauseIconClassName}
                />
            </div>
        </>
    )
}
