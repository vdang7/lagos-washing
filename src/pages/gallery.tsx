import { fontDefault } from '@/app/fonts'
import { HeaderOffset } from '@/components/Header/HeaderOffset'
import { PageLayout } from '@/components/PageLayout'
import { SectionContainer } from '@/components/SectionContainer'
import { Section } from '@/components/Sections/Section'
import { SectionBody } from '@/components/Typography/SectionBody'
import { SectionSubtitle } from '@/components/Typography/SectionSubtitle'
import { SectionTitle } from '@/components/Typography/SectionTitle'
import { app } from '@/data/app'
import { Gallery } from '@/lib/gallery/components/Gallery'
import Modal from '@/lib/gallery/components/Modal'
import { images } from '@/lib/gallery/data/gallery'
import { useLastViewedPhoto } from '@/lib/gallery/utils/useLastViewedPhoto'
import { MyHead } from '@/src/MyHead'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'

export default function Home() {
    const router = useRouter()
    const { photoId } = router.query
    const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto()

    const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
        // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
        if (lastViewedPhoto && !photoId) {
            // @ts-ignore
            lastViewedPhotoRef.current.scrollIntoView({ block: 'center' })
            setLastViewedPhoto(null)
        }
    }, [photoId, lastViewedPhoto, setLastViewedPhoto])

    const title = `Photo Gallery | ${app.companyName}`
    const description = 'Photos of us'
    return (
        <>
            <MyHead
                pathWithoutLeadingSlash="gallery"
                type="website"
                title={title}
                description={description}
                ogTitle={title}
                ogDescription={description}
            />
            <PageLayout>
                <Section
                    className={`${fontDefault.className} pt-section pb-section`}>
                    <HeaderOffset />
                    <SectionContainer>
                        <div className="mx-auto max-w-2xl lg:text-center">
                            <SectionSubtitle>Deploy faster</SectionSubtitle>
                            <SectionTitle className="mt-2">
                                Everything you need to deploy your app
                            </SectionTitle>
                            <SectionBody className="mt-6">
                                Quis tellus eget adipiscing convallis sit sit
                                eget aliquet quis. Suspendisse eget egestas a
                                elementum pulvinar et feugiat blandit at. In mi
                                viverra elit nunc.
                            </SectionBody>
                        </div>
                        {photoId && (
                            <Modal
                                images={images}
                                onClose={() => {
                                    // @ts-ignore
                                    setLastViewedPhoto(photoId)
                                }}
                            />
                        )}
                        <Gallery
                            className="mx-auto mt-16 max-w-2xl columns-2 gap-4 sm:mt-20 lg:mx-0 lg:max-w-none lg:columns-3"
                            images={images}
                            imageSizes="
                                        (min-width: 1024px) 34vw,
                                        50vw
                                    "
                            lastViewedPhoto={lastViewedPhoto}
                            lastViewedPhotoRef={lastViewedPhotoRef}
                        />
                    </SectionContainer>
                </Section>
            </PageLayout>
        </>
    )
}
