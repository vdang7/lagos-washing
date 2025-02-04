'use client'
import { MyImage } from '@/components/MyImage'
import { PlayPauseButton } from '@/components/PlayPauseButton'
import { Video } from '@/components/Video/Video'
import emptyImage from '@/public/images/minified/empty-image.webp'
import '@/styles/hexagon-mask.css'
import clsx from 'clsx'
import { useInView } from 'framer-motion'
import { StaticImageData } from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface Props {
    className?: string
    imageClassName?: string
    iconBoxClassName: string
    playIconClassName?: string
    pauseIconClassName?: string
    thumbnailSrc: StaticImageData
    thumbnailAlt: string
    thumbnailSizes: string
    thumbnailPriority?: boolean
    videoSrc: string
    videoExtension: string
}
const isVideoPlaying = (video: HTMLVideoElement) =>
    !!(
        video.currentTime > 0 &&
        !video.paused &&
        !video.ended &&
        video.readyState > 2
    )

export function HexagonVideo(props: Props) {
    const joinedClassName = clsx(
        props.className,
        'w-full inline-block relative leading-[0]'
    )

    const videoRef = useRef<HTMLVideoElement>(null)
    const isVideoInView = useInView(videoRef)
    const [isVideoPaused, setIsVideoPaused] = useState(false)
    const [didUserPauseVideo, setDidUserPauseVideo] = useState(false)

    // const [isModalOpen, setIsModalOpen] = useState(false)

    const playPreviewVideo = () => {
        if (
            videoRef.current &&
            videoRef.current.src &&
            isVideoPlaying(videoRef.current) === false
        ) {
            videoRef.current.play().catch(() => {})

            setIsVideoPaused(false)
        }
    }

    const pausePreviewVideo = () => {
        if (videoRef.current && videoRef.current.src) {
            videoRef.current.pause()
            setIsVideoPaused(true)
        }
    }

    const handleOnPageLoad = () => {
        if (videoRef.current) {
            videoRef.current.src = props.videoSrc
            videoRef.current.preload = 'auto'
            playPreviewVideo()
        }
    }

    const handleUserPlayOrPauseVideoRequest = () => {
        if (videoRef.current && videoRef.current.paused) {
            playPreviewVideo()
            setDidUserPauseVideo(false)
        } else {
            pausePreviewVideo()
            setDidUserPauseVideo(true)
        }
    }

    useEffect(() => {
        if (document.readyState === 'complete') {
            handleOnPageLoad()
        } else {
            window.addEventListener('load', handleOnPageLoad, { once: true })

            return () => {
                window.removeEventListener('load', handleOnPageLoad)
            }
        }
    }, [])

    useEffect(() => {
        if (videoRef.current && videoRef.current.src) {
            // if (isModalOpen || !isVideoInView) {
            if (!isVideoInView) {
                pausePreviewVideo()
            }
            if (
                // !isModalOpen &&
                isVideoInView &&
                !didUserPauseVideo
            ) {
                playPreviewVideo()
            }
        }
        // }, [isModalOpen, isVideoInView])
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
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Video
                            reference={videoRef}
                            className="pointer-events-none"
                            src=""
                            extension={props.videoExtension}
                            autoPlay={false}
                            muted={true}
                            loop={true}
                            preload="none"
                            poster={emptyImage}
                        />
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
