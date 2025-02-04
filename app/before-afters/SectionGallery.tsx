'use client'

import { MyImage } from '@/components/MyImage'
// import { SectionContainer } from '@/components/SectionContainer'
// import { Section } from '@/components/Sections/Section'
import { hasDuplicateId } from '@/functions/hasDuplicateId'
import { range } from '@/lib/gallery/utils/range'
import image1 from '@/public/images/minified/pages/before-after/1.webp'
import image10 from '@/public/images/minified/pages/before-after/10.webp'
import image11 from '@/public/images/minified/pages/before-after/11.webp'
import image12 from '@/public/images/minified/pages/before-after/12.webp'
import image13 from '@/public/images/minified/pages/before-after/13.webp'
import image14 from '@/public/images/minified/pages/before-after/14.webp'
import image15 from '@/public/images/minified/pages/before-after/15.webp'
import image16 from '@/public/images/minified/pages/before-after/16.webp'
import image17 from '@/public/images/minified/pages/before-after/17.webp'
import image18 from '@/public/images/minified/pages/before-after/18.webp'
import image19 from '@/public/images/minified/pages/before-after/19.webp'
import image2 from '@/public/images/minified/pages/before-after/2.webp'
import image20 from '@/public/images/minified/pages/before-after/20.webp'
import image3 from '@/public/images/minified/pages/before-after/3.webp'
import image4 from '@/public/images/minified/pages/before-after/4.webp'
import image5 from '@/public/images/minified/pages/before-after/5.webp'
import image6 from '@/public/images/minified/pages/before-after/6.webp'
import image7 from '@/public/images/minified/pages/before-after/7.webp'
import image8 from '@/public/images/minified/pages/before-after/8.webp'
import image9 from '@/public/images/minified/pages/before-after/9.webp'
import { Dialog, DialogPanel, Transition } from '@headlessui/react'
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'
import { StaticImageData } from 'next/image'
import { Fragment, useEffect, useMemo, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
// @ts-ignore
import useKeypress from 'react-use-keypress'

interface Props {
    className?: string
}

export interface InterfaceImage {
    id: number
    imageSrc: StaticImageData
    imageAlt: string
    imagePriority?: boolean
}

const images: InterfaceImage[] = [
    {
        id: 0,
        imageSrc: image1,
        imageAlt: '',
    },
    {
        id: 1,
        imageSrc: image2,
        imageAlt: '',
    },
    {
        id: 2,
        imageSrc: image3,
        imageAlt: '',
    },
    {
        id: 3,
        imageSrc: image4,
        imageAlt: '',
    },
    {
        id: 4,
        imageSrc: image5,
        imageAlt: '',
    },
    {
        id: 5,
        imageSrc: image6,
        imageAlt: '',
    },
    {
        id: 6,
        imageSrc: image7,
        imageAlt: '',
    },
    {
        id: 7,
        imageSrc: image8,
        imageAlt: '',
    },
    {
        id: 8,
        imageSrc: image9,
        imageAlt: '',
    },
    {
        id: 9,
        imageSrc: image10,
        imageAlt: '',
    },

    {
        id: 19,
        imageSrc: image20,
        imageAlt: '',
    },
    {
        id: 10,
        imageSrc: image11,
        imageAlt: '',
    },
    {
        id: 11,
        imageSrc: image12,
        imageAlt: '',
    },
    {
        id: 12,
        imageSrc: image13,
        imageAlt: '',
    },
    {
        id: 13,
        imageSrc: image14,
        imageAlt: '',
    },
    {
        id: 14,
        imageSrc: image15,
        imageAlt: '',
    },
    {
        id: 15,
        imageSrc: image16,
        imageAlt: '',
    },
    {
        id: 16,
        imageSrc: image17,
        imageAlt: '',
    },
    {
        id: 17,
        imageSrc: image18,
        imageAlt: '',
    },
    {
        id: 18,
        imageSrc: image19,
        imageAlt: '',
    },
]

hasDuplicateId(images)

interface ModalProps {
    images: InterfaceImage[]
    currentIndex: number
    isOpen: boolean
    closeModal: () => void
    changeImageIndex: any
}

const Modal = ({
    images,
    currentIndex,
    isOpen,
    closeModal,
    changeImageIndex,
}: ModalProps) => {
    const [loaded, setLoaded] = useState(false)

    let filteredImages = images?.filter((img: InterfaceImage) =>
        range(currentIndex - 15, currentIndex + 15).includes(img.id)
    )

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            if (currentIndex < images?.length - 1) {
                changeImageIndex(currentIndex + 1)
            }
        },
        onSwipedRight: () => {
            if (currentIndex > 0) {
                changeImageIndex(currentIndex - 1)
            }
        },
        trackMouse: true,
    })

    let currentImage = images[currentIndex]

    return (
        <Transition
            show={isOpen}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            as={Fragment}>
            <Dialog
                onClose={closeModal}
                className="fixed inset-0 z-[1000001] min-h-screen">
                <div
                    className="fixed inset-0 bg-black/70 [backdrop-filter:saturate(180%)_blur(20px)]"
                    aria-hidden="true"
                />

                <div
                    className="fixed inset-0 flex w-screen items-center justify-center"
                    {...handlers}>
                    <DialogPanel className="relative h-full w-full">
                        <div className="flex h-full w-full items-center justify-center">
                            <img
                                src={currentImage.imageSrc.src}
                                className="h-auto max-h-screen w-full max-w-full object-contain"
                                alt={currentImage.imageAlt}
                                width={1920}
                                height={1280}
                                fetchPriority="high"
                                onLoad={() => setLoaded(true)}
                            />
                        </div>
                        {/* Buttons + bottom nav bar */}
                        <div className="absolute inset-0 mx-auto flex max-w-container items-center justify-center">
                            {/* Buttons */}
                            {loaded && (
                                <>
                                    <div className="relative aspect-[3/2] max-h-full w-full">
                                        {currentIndex > 0 && (
                                            <button
                                                className="absolute left-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition-colors hover:bg-black/75 hover:text-white focus:outline-none"
                                                style={{
                                                    transform:
                                                        'translate3d(0, 0, 0)',
                                                }}
                                                onClick={() =>
                                                    changeImageIndex(
                                                        currentIndex - 1
                                                    )
                                                }>
                                                <ChevronLeftIcon className="h-6 w-6" />
                                            </button>
                                        )}
                                        {currentIndex + 1 < images.length && (
                                            <button
                                                className="absolute right-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition-colors hover:bg-black/75 hover:text-white focus:outline-none"
                                                style={{
                                                    transform:
                                                        'translate3d(0, 0, 0)',
                                                }}
                                                onClick={() =>
                                                    changeImageIndex(
                                                        currentIndex + 1
                                                    )
                                                }>
                                                <ChevronRightIcon className="h-6 w-6" />
                                            </button>
                                        )}
                                    </div>
                                    <div className="absolute right-0 top-0 flex items-center gap-2 p-3 text-white">
                                        <button
                                            onClick={() => closeModal()}
                                            className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition-colors hover:bg-black/75 hover:text-white">
                                            <XMarkIcon className="h-5 w-5" />
                                        </button>
                                    </div>
                                </>
                            )}

                            {/* Bottom Nav bar */}
                            <div className="fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/60">
                                <motion.div
                                    initial={false}
                                    className="mx-auto mb-6 mt-6 flex aspect-[3/2] h-14">
                                    <AnimatePresence initial={false}>
                                        {filteredImages.map(
                                            ({
                                                id,
                                                imageSrc,
                                                imageAlt,
                                            }: InterfaceImage) => (
                                                <motion.button
                                                    initial={{
                                                        width: '0%',
                                                        x: `${Math.max(
                                                            (currentIndex - 1) *
                                                                -100,
                                                            15 * -100
                                                        )}%`,
                                                    }}
                                                    animate={{
                                                        scale:
                                                            id === currentIndex
                                                                ? 1.25
                                                                : 1,
                                                        width: '100%',
                                                        x: `${Math.max(
                                                            currentIndex * -100,
                                                            15 * -100
                                                        )}%`,
                                                    }}
                                                    exit={{ width: '0%' }}
                                                    onClick={() =>
                                                        changeImageIndex(id)
                                                    }
                                                    key={id}
                                                    className={`${
                                                        id === currentIndex
                                                            ? 'z-20 rounded-md shadow shadow-black/50'
                                                            : 'z-10'
                                                    } ${id === 0 ? 'rounded-l-md' : ''} ${
                                                        id === images.length - 1
                                                            ? 'rounded-r-md'
                                                            : ''
                                                    } relative inline-block w-full shrink-0 transform-gpu overflow-hidden focus:outline-none`}>
                                                    <img
                                                        alt={imageAlt}
                                                        width={180}
                                                        height={120}
                                                        className={`${
                                                            id === currentIndex
                                                                ? 'brightness-110 hover:brightness-110'
                                                                : 'brightness-50 contrast-125 hover:brightness-75'
                                                        } h-full object-cover transition-[filter]`}
                                                        src={imageSrc.src}
                                                    />
                                                </motion.button>
                                            )
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </Transition>
    )
}

const preloadImages = (imageArray: InterfaceImage[], index = 0) => {
    if (imageArray && imageArray.length > index) {
        const img = new window.Image()
        img.onload = () => {
            // console.log(imageArray[index].imageSrc.src); // Log the currently loaded image
            preloadImages(imageArray, index + 1) // Load the next image
        }
        img.src = imageArray[index].imageSrc.src
    }
}

export function SectionGallery({ className }: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
        preloadImages(images)
    }, [])

    const openModal = (index: number) => {
        setSelectedIndex(index)
        setIsOpen(true)
    }

    const next = () => {
        if (selectedIndex < images.length - 1) {
            setSelectedIndex(selectedIndex + 1)
        }
    }

    const previous = () => {
        if (selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1)
        }
    }

    useKeypress('ArrowRight', () => {
        next()
    })

    useKeypress('ArrowLeft', () => {
        previous()
    })

    const memoizedImages = useMemo(() => {
        return images.map((item, index) => (
            <div
                key={item.id}
                className={`relative ${index === 8 ? 'sm:hidden lg:block' : ''}`}>
                <MyImage
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    unoptimized
                    className="cursor-zoom-in rounded-2xl transition-[filter] will-change-auto hover:brightness-[1.2]"
                    onClick={() => openModal(item.id)}
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            </div>
        ))
    }, [images])

    return (
        <>
            {/* <Section className="mt-20 pb-section">
                <SectionContainer className="2xl:max-w-screen-2xl"> */}
            {/* <p className="text-center text-xs">
                        All photos were taken in North Carolina
                    </p> */}
            <div
                className={`${className} w-full gap-x-4 space-y-4 sm:columns-2 lg:columns-3`}>
                {memoizedImages}
            </div>
            {/* </SectionContainer>
            </Section> */}
            <Modal
                images={images}
                currentIndex={selectedIndex}
                isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
                changeImageIndex={setSelectedIndex}
            />
        </>
    )
}
