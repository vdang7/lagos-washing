'use client'
import { PlayPauseButton } from '@/components/PlayPauseButton'
import { Video } from '@/components/Video/Video'
import '@/styles/hexagon-mask.css'
import clsx from 'clsx'
import { useInView } from 'framer-motion'
import { StaticImageData } from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface Props {
    children: React.ReactNode
    className?: string
    iconBoxClassName: string
    playIconClassName?: string
    pauseIconClassName?: string
    src: string
    poster: StaticImageData
    extension: string
}
const isVideoPlaying = (video: HTMLVideoElement) =>
    !!(
        video.currentTime > 0 &&
        !video.paused &&
        !video.ended &&
        video.readyState > 2
    )

export function HexagonVideoHero(props: Props) {
    const joinedClassName = clsx(
        props.className,
        'w-full inline-block relative leading-[0]'
    )

    const videoRef = useRef<HTMLVideoElement>(null)
    const isVideoInView = useInView(videoRef)

    const [isVideoPaused, setIsVideoPaused] = useState(false)
    const [didUserPauseVideo, setDidUserPauseVideo] = useState(false)

    
    const playVideo = () => {
        if (videoRef.current && isVideoPlaying(videoRef.current) === false) {
            videoRef.current.play().catch(() => {})

            setIsVideoPaused(false)
        }
    }

    const pauseVideo = () => {
        if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause()
            setIsVideoPaused(true)
        }
    }

    const handleUserPlayOrPauseVideoRequest = () => {
        if (videoRef.current && videoRef.current.paused) {
            playVideo()
            setDidUserPauseVideo(false)
        } else {
            pauseVideo()
            setDidUserPauseVideo(true)
        }
    }

    useEffect(() => {
        if (videoRef.current && videoRef.current.src) {
            if (!isVideoInView && !isVideoPaused) {
                pauseVideo()
            } else {
                if (!didUserPauseVideo) {
                    playVideo()
                }
            }
        }
    }, [isVideoInView])

    return (
        <>
            <div className={joinedClassName}>
                <div className="[mask-image:--hexagonMask] [mask-mode:luminance] [mask-repeat:no-repeat] [mask-size:contain]">
                    <Video
                        reference={videoRef}
                        className="aspect-[1/1.15] size-full object-cover"
                        src={props.src}
                        poster={props.poster}
                        extension={props.extension}
                        autoPlay={true}
                        loop={true}></Video>
                    {props.children}
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
