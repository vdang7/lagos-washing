import { app } from '../../data/app'

describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://example.cypress.io')
    })
})

describe('Verify site url is valid', () => {
    it('should be a valid URL', () => {
        const regex =
            /^(https?:\/\/)(www\.)?([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*)(\.(com|net|org|io|app))$/
        const isValidUrl = regex.test(app.siteUrl)
        expect(isValidUrl).to.be.true
    })
})

describe('Verify canonical on all pages', () => {
    const pages = [
        '',
        '/official',
        '/about-us',
        '/before-afters',
        '/contact-us',
        '/get-free-estimate',
        '/thank-you',
    ]

    pages.forEach((path) => {
        it(`should verify canonical for ${path}`, () => {
            cy.visit(path)
            const expectedCanonical = `${app.siteUrl}${path}`
            cy.get('link[rel="canonical"]').should(
                'have.attr',
                'href',
                expectedCanonical
            )
            cy.get('meta[property="og:url"]').should(
                'have.attr',
                'content',
                expectedCanonical
            )
        })
    })
})
