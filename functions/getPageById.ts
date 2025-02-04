import { pages } from '@/data/pages'

export function getPageById(id: number, pagesGiven = pages) {
    const foundPage = pagesGiven.get(id)

    if (!foundPage) {
        throw new Error(`Page with ID ${id} not found`)
    }

    return foundPage
}
