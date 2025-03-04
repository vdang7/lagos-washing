// @ts-nocheck

import { variants } from '@/lib/gallery/utils/animationVariants'
import { range } from '@/lib/gallery/utils/range'
import type { GalleryItem, SharedModalProps } from '@/lib/gallery/utils/types'
import {
    ArrowUturnLeftIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'

export default function SharedModal({
    index,
    images,
    changePhotoId,
    closeModal,
    navigation,
    currentPhoto,
    direction,
}: SharedModalProps) {
    const [loaded, setLoaded] = useState(false)

    let filteredImages = images?.filter((img: GalleryItem) =>
        range(index - 15, index + 15).includes(img.id)
    )

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            if (index < images?.length - 1) {
                changePhotoId(index + 1)
            }
        },
        onSwipedRight: () => {
            if (index > 0) {
                changePhotoId(index - 1)
            }
        },
        trackMouse: true,
    })

    let currentImage = images ? images[index].image : currentPhoto.image

    return (
        <MotionConfig
            transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
            }}>
            <div
                className="relative z-50 flex aspect-[3/2] w-full max-w-container items-center [@media(min-aspect-ratio:3/2)]:h-full xl:[@media(min-height:854px)]:h-auto"
                {...handlers}>
                {/* Main image */}
                <div className="w-full overflow-hidden">
                    <div className="relative flex aspect-[3/2] items-center justify-center">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={index}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="absolute inset-0">
                                <Image
                                    src={currentImage}
                                    className="mx-auto h-full object-contain"
                                    priority
                                    alt="Next.js Conf image"
                                    onLoadingComplete={() => setLoaded(true)}
                                    sizes="
                        (min-width: 600px) 600px,
                        400px"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Buttons + bottom nav bar */}
                <div className="absolute inset-0 mx-auto flex max-w-container items-center justify-center">
                    {/* Buttons */}
                    {loaded && (
                        <div className="relative aspect-[3/2] max-h-full w-full">
                            {navigation && (
                                <>
                                    {index > 0 && (
                                        <button
                                            className="absolute left-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
                                            style={{
                                                transform:
                                                    'translate3d(0, 0, 0)',
                                            }}
                                            onClick={() =>
                                                changePhotoId(index - 1)
                                            }>
                                            <ChevronLeftIcon className="h-6 w-6" />
                                        </button>
                                    )}
                                    {index + 1 < images.length && (
                                        <button
                                            className="absolute right-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
                                            style={{
                                                transform:
                                                    'translate3d(0, 0, 0)',
                                            }}
                                            onClick={() =>
                                                changePhotoId(index + 1)
                                            }>
                                            <ChevronRightIcon className="h-6 w-6" />
                                        </button>
                                    )}
                                </>
                            )}
                            <div className="absolute left-0 top-0 flex items-center gap-2 p-3 text-white">
                                <button
                                    onClick={() => closeModal()}
                                    className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white">
                                    {navigation ? (
                                        <XMarkIcon className="h-5 w-5" />
                                    ) : (
                                        <ArrowUturnLeftIcon className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>
                    )}
                    {/* Bottom Nav bar */}
                    {navigation && (
                        <div className="fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/60">
                            <motion.div
                                initial={false}
                                className="mx-auto mb-6 mt-6 flex aspect-[3/2] h-14">
                                <AnimatePresence initial={false}>
                                    {filteredImages.map(({ id, image }) => (
                                        <motion.button
                                            initial={{
                                                width: '0%',
                                                x: `${Math.max(
                                                    (index - 1) * -100,
                                                    15 * -100
                                                )}%`,
                                            }}
                                            animate={{
                                                scale: id === index ? 1.25 : 1,
                                                width: '100%',
                                                x: `${Math.max(
                                                    index * -100,
                                                    15 * -100
                                                )}%`,
                                            }}
                                            exit={{ width: '0%' }}
                                            onClick={() => changePhotoId(id)}
                                            key={id}
                                            className={`${
                                                id === index
                                                    ? 'z-20 rounded-md shadow shadow-black/50'
                                                    : 'z-10'
                                            } ${
                                                id === 0 ? 'rounded-l-md' : ''
                                            } ${
                                                id === images.length - 1
                                                    ? 'rounded-r-md'
                                                    : ''
                                            } relative inline-block w-full shrink-0 transform-gpu overflow-hidden focus:outline-none`}>
                                            <Image
                                                alt="small photos on the bottom"
                                                width={180}
                                                height={120}
                                                className={`${
                                                    id === index
                                                        ? 'brightness-110 hover:brightness-110'
                                                        : 'brightness-50 contrast-125 hover:brightness-75'
                                                } h-full transform object-cover transition`}
                                                src={image}
                                                sizes="65px"
                                            />
                                        </motion.button>
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    )}
                </div>
            </div>
        </MotionConfig>
    )
}
