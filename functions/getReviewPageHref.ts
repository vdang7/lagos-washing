import { app } from '@/data/app'

export function getReviewPageHref(url: string) {
    switch (true) {
        case url.startsWith('https://g.co'):
            return app.googleReviewPageHref
        case url.startsWith('https://www.facebook'):
            return app.facebookReviewPageHref
        default:
            throw new Error(`${url} is not valid`)
    }
}
