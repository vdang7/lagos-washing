// @ts-nocheck

import SharedModal from '@/lib/gallery/components/SharedModal'
import type { GalleryItem } from '@/lib/gallery/utils/types'
import { useLastViewedPhoto } from '@/lib/gallery/utils/useLastViewedPhoto'
import { useRouter } from 'next/router'
import useKeypress from 'react-use-keypress'

export default function Carousel({
    index,
    currentPhoto,
}: {
    index: number
    currentPhoto: GalleryItem
}) {
    const router = useRouter()
    const [, setLastViewedPhoto] = useLastViewedPhoto()

    function closeModal() {
        setLastViewedPhoto(currentPhoto.id)
        router.push('/gallery', undefined, { shallow: true })
    }

    function changePhotoId(newVal: number) {
        return newVal
    }

    useKeypress('Escape', () => {
        closeModal()
    })

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <button
                className="absolute inset-0 z-30 cursor-default bg-black backdrop-blur-2xl"
                onClick={closeModal}>
                {/* <Image
            src={currentPhoto.image.blurDataURL}
            className="pointer-events-none h-full w-full"
            alt="blurred background"
            fill
            priority={true}
          /> */}
            </button>
            <SharedModal
                index={index}
                changePhotoId={changePhotoId}
                currentPhoto={currentPhoto}
                closeModal={closeModal}
                navigation={false}
            />
        </div>
    )
}
