import { convertMapToArrayAllLevels } from '@/functions/convertMapToArrayAllLevels'

function isValidURL(url: string) {
    const pattern =
        /^(https?:\/\/)(www\.)?[^\s/$.?#].[^\s]*\.(com|net|org|app)(\/[^\s]*)?$/i
    return pattern.test(url)
}

function doesPathExist(url: string, pages: any, path: any): boolean {
    const parsedUrl = new URL(url)
    const givenPathName = parsedUrl.pathname

    const getParentFolderName = (): string => {
        const parentDir = path.dirname(__filename)
        return path.basename(parentDir)
    }
    const parentFolderName = getParentFolderName()

    if (givenPathName == '/') {
        return true
    }

    if (!givenPathName.includes(parentFolderName)) {
        return false
    }

    const checkPath = (item: any, parentHref = ''): boolean => {
        const fullHref = `${parentHref}${item.href}`

        if (fullHref === givenPathName) {
            return true
        }

        // Recursively check children if they exist
        if (item.children) {
            return item.children.some((child: any) =>
                checkPath(child, fullHref)
            )
        }

        return false
    }

    return pages.some((item: any) => checkPath(item))
}

export function isValidCanonicalURL(url: string) {
    if (process.env.NODE_ENV == 'development') {
        const { pages } = require('@/data/pages')
        const path = require('path')
        const pagesAsArray = convertMapToArrayAllLevels(pages)

        if (!isValidURL(url)) {
            throw new Error(`Invalid canonical URL: ${url}`)
        }

        if (!doesPathExist(url, pagesAsArray, path)) {
            throw new Error(`Invalid canonical slug: ${url}`)
        }
    }

    return url
}
