import { Indie_Flower, Inter, Parisienne } from 'next/font/google'

export const fontDefault = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export const fontCursive = Parisienne({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

export const fontHandWriting = Indie_Flower({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})
