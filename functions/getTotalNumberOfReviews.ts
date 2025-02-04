import { app } from '@/data/app'

export function getTotalNumberOfReviews() {
    return app.numberOfGoogleReviews + app.numberOfFacebookReviews
}
