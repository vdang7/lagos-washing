import { app } from '@/data/app'
import Carousel from '@/lib/gallery/components/Carousel'
import { images } from '@/lib/gallery/data/gallery'
import type { GalleryItem } from '@/lib/gallery/utils/types'
import { MyHead } from '@/src/MyHead'
import type { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

const Home = ({ currentPhoto }: { currentPhoto: GalleryItem }) => {
    const router = useRouter()
    const { photoId } = router.query
    let index = Number(photoId)
    if (!currentPhoto.image) return
    const currentPhotoUrl = currentPhoto.image.src as string

    const title = `${currentPhoto.alt} | ${app.companyName}`
    const description = currentPhoto.alt

    return (
        <>
            <MyHead
                pathWithoutLeadingSlash={`p/${currentPhoto.id}`}
                type="website"
                title={title}
                description={description}
                ogTitle={title}
                ogDescription={description}
                ogImageSrc={currentPhotoUrl}
            />
            <main className="mx-auto max-w-[1960px] p-4">
                <div className="absolute inset-0 bg-black"></div>
                <Carousel currentPhoto={currentPhoto} index={index} />
            </main>
        </>
    )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
    const currentPhoto = images.find(
        // @ts-ignore
        (img) => img.id === Number(context.params.photoId)
    )

    return {
        props: {
            currentPhoto: currentPhoto,
        },
    }
}

export async function getStaticPaths() {
    let fullPaths: { params: { photoId: string } }[] = []

    images.forEach((image) => {
        fullPaths.push({ params: { photoId: image.id.toString() } })
    })

    return {
        paths: fullPaths,
        fallback: false,
    }
}
