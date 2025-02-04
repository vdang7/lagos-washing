import { RoundedButtonWithIcon } from '@/components/Buttons/RoundedButtonWithIcon'
import { TextButton } from '@/components/Buttons/TextButton'
import { HeaderOffset } from '@/components/Header/HeaderOffset'
import { ItemReviewsSummaryCard } from '@/components/Items/ItemReviewsSummaryCard'
import { MyImage } from '@/components/MyImage'
import { MyLink } from '@/components/MyLink'
import { SectionContainer } from '@/components/SectionContainer'
import { Section } from '@/components/Sections/Section'
import { app } from '@/data/app'
import { buildMetadata } from '@/functions/buildMetadata'
import { getPageById } from '@/functions/getPageById'
import imagefb from '@/public/images/minified/global/logos/third-party/facebook.webp'
import imagegoogle from '@/public/images/minified/global/logos/third-party/google.webp'
import { GiftIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const slug = params.slug
    const page = pages[slug as keyof typeof pages]

    return buildMetadata({
        canonicalURL: `${app.siteUrl}/${slug}`,
        title: page.metaTitle,
        description: page.metaDescription,
    })
}

const pages = {
    'raleigh-residential-pressure-washing-near-me': {
        metaTitle: 'Best Raleigh residential pressure washing company near me',
        metaDescription:
            "Raleigh's top-rated residential pressure washing company. Serving Raleigh, Cary, Wake Forest & surrounding areas. Get 15% off your first service. Call or text 919-526-0633 now for your free pressure washing estimate.",
        hero: {
            title: 'Raleigh residential pressure washing',
            items: [
                {
                    title: "Restore your home's beauty",
                    body: "Enhance your curb appeal and protect your investment with our professional residential pressure washing services in Raleigh. We remove dirt, grime, mold, and other unsightly blemishes, revitalizing your home's exterior.",
                },
                {
                    title: 'Extend the life of surfaces',
                    body: "Protect your home's siding, roof, deck, and other surfaces from harmful contaminants that cause deterioration. Pressure washing cleans and extends their life, boosting curb appeal and preventing costly repairs.",
                },
                {
                    title: 'Ensure safe and effective cleaning',
                    body: 'Trust our trained technicians who use environmentally friendly cleaning solutions and safe pressure washing techniques to protect your property and landscaping. We deliver a thorough clean without causing damage.',
                },
            ],
        },
        whyUs: {
            title: '100% of customers who choose us are satisfied with our residential pressure washing services.',
            items: [
                {
                    title: 'Experience the difference with our professionals',
                    body: 'Choose our highly trained and experienced pressure washing technicians who are dedicated to providing exceptional service and delivering outstanding results for every Raleigh homeowner. We are the experts.',
                },
                {
                    title: 'Get guaranteed satisfaction with our service',
                    body: "Rely on us to stand behind our work. Your satisfaction is our top priority. If you're not happy with our residential pressure washing service, we'll make it right. We guarantee it for all Raleigh residents.",
                },
                {
                    title: 'Enjoy competitive pricing for quality service',
                    body: 'Benefit from our competitive pricing for residential pressure washing services in Raleigh, providing excellent value for your money. Get a free estimate today and see how affordable a sparkling clean home can be.',
                },
            ],
        },
        signs: {
            title: '6 signs your Raleigh property needs residential pressure washing and how to tell',
            items: [
                {
                    title: 'Spot visible dirt and grime on surfaces',
                    body: "Check for accumulated dirt, grime, and stains on your siding, roof, walkways, or deck. This is the most obvious sign you need residential pressure washing in Raleigh. Don't delay!",
                },
                {
                    title: 'Notice mold or mildew growth on your home',
                    body: 'Look for green or black patches, indicating mold or mildew growth. Pressure washing effectively removes these harmful substances, protecting your Raleigh home. Schedule a cleaning today!',
                },
                {
                    title: 'See fading paint or siding on your house',
                    body: "If your paint or siding is looking faded or dull, pressure washing can often restore its original vibrancy and improve your Raleigh home's curb appeal. Make your home shine again with our service.",
                },
                {
                    title: 'Identify stains and discoloration on surfaces',
                    body: 'Notice any stains from rust, hard water, or organic matter? Our residential pressure washing services in Raleigh can remove these blemishes effectively. We can make your home look new again.',
                },
                {
                    title: 'Detect increased allergens around your home',
                    body: 'Pressure washing helps remove allergens like pollen and dust, creating a healthier environment for your family in your Raleigh home. Consider this for seasonal cleaning to breathe easier in your home.',
                },
                {
                    title: 'Prepare to sell your home with a fresh look',
                    body: "Boost your home's value and make a great first impression on potential buyers with a professional pressure washing before listing your Raleigh property. It makes a huge difference in sales success.",
                },
            ],
        },
        process: {
            title: 'Our 5 step process delivers guaranteed residential pressure washing results for residential and commercial properties.',
            items: [
                {
                    title: 'Begin with assessment and preparation',
                    body: 'We start with a thorough assessment of your Raleigh property, identifying specific cleaning needs and protecting delicate areas before starting our residential pressure washing service. We tailor our approach to your home.',
                },
                {
                    title: 'Apply pre-treatment (if needed) to surfaces',
                    body: 'For stubborn stains or heavily soiled surfaces, we apply specialized, eco-friendly cleaning solutions to loosen dirt and grime, ensuring a more effective residential pressure washing result for your Raleigh property. This is key.',
                },
                {
                    title: 'Perform pressure washing application with care',
                    body: "Using the appropriate pressure and nozzle, we carefully clean your home's exterior surfaces, removing dirt, grime, mold, and other contaminants with our professional residential pressure washing equipment. We are careful and thorough.",
                },
                {
                    title: 'Complete rinsing and inspection of the area',
                    body: 'After pressure washing, we thoroughly rinse the area to remove any remaining cleaning solution and debris. We then conduct a final inspection to ensure your satisfaction with our residential pressure washing service in Raleigh. We check everything.',
                },
                {
                    title: 'Finalize with clean up and satisfaction check',
                    body: "We clean up the work area, leaving your Raleigh property looking its best. We'll also walk you through the results and ensure you are completely satisfied with our residential pressure washing work. We value your feedback and your happiness.",
                },
            ],
        },
    },
    'raleigh-commercial-pressure-washing-near-me': {
        metaTitle: 'Best Raleigh commercial pressure washing company near me',
        metaDescription:
            "Raleigh's top-rated commercial pressure washing company. Serving Raleigh, Cary, Wake Forest & surrounding areas. Get 15% off your first service. Call or text 919-526-0633 now for your free pressure washing estimate.",
        hero: {
            title: 'Raleigh commercial pressure washing',
            items: [
                {
                    title: 'Enhance your business image',
                    body: "Impress clients and customers with a clean and well-maintained exterior. Our commercial pressure washing services in Raleigh remove dirt, grime, and graffiti, improving your business's image.",
                },
                {
                    title: 'Maintain a safe environment',
                    body: 'Protect employees and customers by removing slippery substances, mold, and other hazards. Our professional cleaning services in Raleigh create a safer environment for your business.',
                },
                {
                    title: 'Increase property value',
                    body: "Preserve your building's condition and prevent costly repairs with regular commercial pressure washing. This helps maintain and even increase the value of your Raleigh property.",
                },
            ],
        },
        whyUs: {
            title: '100% of customers who choose us are satisfied with our commercial pressure washing services.',
            items: [
                {
                    title: 'Trust our experienced professionals',
                    body: 'Choose our highly trained and experienced commercial pressure washing technicians. We ensure safe and effective cleaning for your Raleigh business, understanding the unique needs of commercial properties.',
                },
                {
                    title: 'Get customized solutions for your business',
                    body: 'Benefit from our tailored commercial pressure washing services, designed to meet your specific needs and budget. We offer solutions for one-time cleanings and regular maintenance plans in Raleigh.',
                },
                {
                    title: 'Support environmentally responsible practices',
                    body: 'Partner with us and choose eco-friendly cleaning solutions and techniques. We minimize our impact on the environment while protecting your Raleigh business and the planet with our responsible services.',
                },
            ],
        },
        signs: {
            title: '6 signs your Raleigh property needs commercial pressure washing and how to tell',
            items: [
                {
                    title: 'See dirty sidewalks and walkways',
                    body: 'Keep entrances and walkways clean and safe for everyone. Pressure washing removes dirt, grime, and gum, creating a positive first impression of your Raleigh business. Make a good impression.',
                },
                {
                    title: 'Observe grimy building exteriors',
                    body: "Notice dirt, mold, and pollution accumulating on your building's exterior? Pressure washing restores its original appearance, enhancing your Raleigh business's curb appeal. Revitalize your building's look.",
                },
                {
                    title: 'Find stained parking areas on your property',
                    body: "Oil stains, tire marks, and other blemishes detract from your property's appearance. Pressure washing removes these stains, improving the look of your Raleigh business. Make your parking area shine.",
                },
                {
                    title: "Detect graffiti on your building's walls",
                    body: "Graffiti can damage your reputation. Our commercial pressure washing services in Raleigh include effective graffiti removal to protect your business's image. We can remove the unwanted graffiti.",
                },
                {
                    title: 'Smell unpleasant odors near dumpster pads',
                    body: 'Maintain a clean and sanitary environment around your dumpsters. Pressure washing removes odors and bacteria, improving the hygiene of your Raleigh business. Keep your business smelling fresh.',
                },
                {
                    title: 'Prepare for special events at your business',
                    body: 'Ensure your Raleigh business looks its best for grand openings, special events, or seasonal promotions with a professional commercial pressure washing service. We help you make a great impression for your business.',
                },
            ],
        },
        process: {
            title: 'Our 5 step process delivers guaranteed commercial pressure washing results for residential and commercial properties.',
            items: [
                {
                    title: 'Start with a thorough site assessment',
                    body: 'We carefully assess your Raleigh property, identifying cleaning needs and potential challenges. This allows us to tailor our commercial pressure washing service to your specific requirements. We analyze your property.',
                },
                {
                    title: 'Prepare the surface for cleaning',
                    body: 'We prepare the area for pressure washing, protecting delicate surfaces and landscaping. This ensures a safe and effective cleaning process for your Raleigh business. We take precautions to protect your property.',
                },
                {
                    title: 'Apply cleaning solution to the area',
                    body: 'We apply specialized, eco-friendly cleaning solutions to loosen dirt, grime, and other contaminants. This maximizes the effectiveness of our commercial pressure washing service in Raleigh. We use effective and safe solutions.',
                },
                {
                    title: 'Perform pressure washing with precision',
                    body: 'Using adjustable pressure and specialized nozzles, we thoroughly clean all surfaces. We remove dirt, grime, graffiti, and other unwanted substances from your Raleigh property. We are precise in our work.',
                },
                {
                    title: 'Complete a final rinse and inspection',
                    body: 'We rinse all surfaces to remove any residual cleaning solution. We conduct a final inspection to ensure your complete satisfaction with our commercial pressure washing service in Raleigh. We check everything thoroughly.',
                },
            ],
        },
    },
    'raleigh-power-washing-near-me': {
        metaTitle: 'Best Raleigh power washing company near me',
        metaDescription:
            "Raleigh's top-rated power washing for residential & commercial properties. Serving Raleigh, Cary, Wake Forest & surrounding areas. Get 15% off your first service. Call or text 919-526-0633 now for your free pressure washing estimate.",
        hero: {
            title: 'Raleigh power washing',
            items: [
                {
                    title: 'Tackle tough cleaning jobs',
                    body: 'Power washing removes stubborn dirt, grime, mold, and other contaminants from durable surfaces. We handle tough cleaning projects with professional power washing.',
                },
                {
                    title: 'Restore hard surfaces to their original glory',
                    body: 'Revitalize concrete, brick, and other hard surfaces with our powerful power washing services.  We restore surfaces to their original beauty, enhancing your Raleigh property.',
                },
                {
                    title: 'Effective cleaning for commercial properties',
                    body: 'Maintain a clean and professional image for your business with our commercial power washing services. We clean building exteriors, parking lots, and more in Raleigh.',
                },
            ],
        },
        whyUs: {
            title: '100% of customers who choose us are satisfied with our power washing services.',
            items: [
                {
                    title: 'Experienced and skilled technicians',
                    body: 'Our technicians are highly trained and experienced in power washing techniques. They understand the appropriate pressure settings for different surfaces, ensuring safe and effective cleaning in Raleigh.',
                },
                {
                    title: 'Guaranteed satisfaction for every job',
                    body: "We stand behind our work and your satisfaction is our top priority. If you're not happy with our power washing service, we'll make it right. We guarantee it for all Raleigh residents and businesses.",
                },
                {
                    title: 'Competitive pricing and free estimates',
                    body: 'We offer competitive pricing for our power washing services in Raleigh. Get a free estimate today and discover how affordable it can be to restore the beauty of your property.',
                },
            ],
        },
        signs: {
            title: '6 signs your Raleigh property needs power washing and how to tell',
            items: [
                {
                    title: 'See stubborn dirt and grime on surfaces',
                    body: "Notice stubborn dirt, grime, or stains that regular cleaning can't remove? Power washing is the solution for deep cleaning hard surfaces around your Raleigh property.  We can remove the tough stuff.",
                },
                {
                    title: 'Observe mold or mildew growth on concrete',
                    body: 'Look for mold or mildew growth on concrete patios, walkways, or other hard surfaces. Power washing effectively eliminates these contaminants, protecting your Raleigh property and creating a healthier environment.',
                },
                {
                    title: 'Identify graffiti on walls or surfaces',
                    body: 'Find graffiti on your building or other surfaces? Power washing can remove graffiti effectively, restoring the appearance of your Raleigh property.  We can remove unwanted graffiti quickly.',
                },
                {
                    title: 'Detect oil or grease stains on driveways',
                    body: 'See oil or grease stains on your driveway or parking area? Power washing is the best way to remove these unsightly and slippery blemishes from your Raleigh property. We can clean your driveway.',
                },
                {
                    title: 'Notice rust stains on metal surfaces',
                    body: 'Observe rust stains on metal fences, equipment, or other surfaces? Power washing can help remove rust and prepare the surface for painting or other treatments.  We can help remove those rust stains.',
                },
                {
                    title: 'Prepare surfaces for painting or sealing',
                    body: 'Planning to paint or seal a surface? Power washing is essential to remove loose paint, dirt, and other debris, ensuring proper adhesion of the new coating.  We can prepare your surfaces for painting.',
                },
            ],
        },
        process: {
            title: 'Our 5 step process delivers guaranteed power washing results for residential and commercial properties.',
            items: [
                {
                    title: 'Begin with a thorough site evaluation',
                    body: 'We start by evaluating your Raleigh property to understand the specific cleaning needs and identify any potential challenges.  This helps us tailor our power washing approach for the best results.',
                },
                {
                    title: 'Prepare the area for power washing',
                    body: 'We prepare the area by protecting delicate landscaping and other sensitive elements. This ensures a safe and effective power washing process for your Raleigh property.  We are careful with your property.',
                },
                {
                    title: 'Apply appropriate cleaning solutions',
                    body: 'We apply specialized cleaning solutions (if needed) to loosen dirt, grime, and other contaminants before power washing. This maximizes the cleaning power and ensures a thorough clean in Raleigh.  We use effective solutions.',
                },
                {
                    title: 'Perform power washing with precision',
                    body: 'Using the right pressure and nozzles, we carefully power wash the designated surfaces, removing dirt, grime, mold, and other unwanted substances from your Raleigh property.  We are precise and careful in our work.',
                },
                {
                    title: 'Complete a final rinse and inspection',
                    body: 'We rinse the area to remove any remaining cleaning solution and debris. We perform a final inspection to ensure your complete satisfaction with our power washing service in Raleigh.  We check everything thoroughly.',
                },
            ],
        },
    },
    'raleigh-gutter-cleaning-near-me': {
        metaTitle: 'Best Raleigh gutter cleaning company near me',
        metaDescription:
            "Raleigh's top-rated gutter cleaning for residential & commercial properties. Serving Raleigh, Cary, Wake Forest & surrounding areas. Get 15% off your first service. Call or text 919-526-0633 now for your free gutter cleaning estimate.",
        hero: {
            title: 'Raleigh gutter cleaning',
            items: [
                {
                    title: 'Prevent costly water damage',
                    body: 'Protect your home from water damage by ensuring your gutters are clean and functioning properly.  Our Raleigh gutter cleaning service prevents costly repairs from overflowing gutters.',
                },
                {
                    title: 'Extend the life of your gutters',
                    body: 'Maintain the effectiveness of your gutters and extend their lifespan with regular cleaning.  Our professional gutter cleaning in Raleigh removes debris that can cause clogs and damage over time.',
                },
                {
                    title: "Improve your home's curb appeal",
                    body: "Enhance the beauty of your home by keeping your gutters clean and free of debris.  Our Raleigh gutter cleaning service improves your home's curb appeal and prevents unsightly build-up.",
                },
            ],
        },
        whyUs: {
            title: '100% of customers who choose us are satisfied with our gutter cleaning services.',
            items: [
                {
                    title: 'Experienced gutter cleaning professionals',
                    body: 'Our team consists of trained and experienced gutter cleaning professionals who are dedicated to providing exceptional service and ensuring your gutters are clean and functioning correctly in Raleigh.',
                },
                {
                    title: 'Guaranteed satisfaction with our work',
                    body: "We stand behind our work. Your satisfaction is our top priority.  If you're not happy with our gutter cleaning service, we'll make it right. We guarantee it for all Raleigh residents.",
                },
                {
                    title: 'Affordable gutter cleaning services',
                    body: 'We offer competitive and affordable pricing for our professional gutter cleaning services in Raleigh, providing excellent value for your money. Get a free estimate today and see how affordable clean gutters can be.',
                },
            ],
        },
        signs: {
            title: '6 signs your Raleigh property needs gutter cleaning and how to tell',
            items: [
                {
                    title: 'See overflowing gutters during rain',
                    body: 'Observe water overflowing from your gutters during rain? This is a clear sign that they are clogged and need cleaning to protect your Raleigh home from water damage.',
                },
                {
                    title: 'Notice debris build-up in gutters',
                    body: 'Look for visible debris such as leaves, twigs, and dirt accumulating in your gutters. This build-up restricts water flow and can cause overflows, requiring gutter cleaning in Raleigh.',
                },
                {
                    title: 'Find sagging or detached gutters',
                    body: 'Detect sagging or detached sections of your gutters? This indicates a problem, often caused by heavy debris or improper maintenance, requiring professional gutter cleaning in Raleigh.',
                },
                {
                    title: 'Observe water damage around your home',
                    body: 'Find water stains, mold growth, or other signs of water damage near your foundation? This can be a result of overflowing gutters and requires immediate attention and gutter cleaning in Raleigh.',
                },
                {
                    title: 'Hear birds or other animals in gutters',
                    body: 'Hear birds or other animals nesting in your gutters? This indicates a significant build-up of debris and necessitates gutter cleaning to prevent further problems and keep your Raleigh home safe.',
                },
                {
                    title: 'Schedule annual gutter maintenance',
                    body: 'Plan for annual gutter cleaning as part of your regular home maintenance routine.  This preventative measure helps maintain their functionality and protects your Raleigh property long-term.',
                },
            ],
        },
        process: {
            title: 'Our 5 step process delivers guaranteed gutter cleaning results for residential and commercial properties.',
            items: [
                {
                    title: 'Conduct a thorough gutter inspection',
                    body: 'We start by inspecting your gutters, identifying areas of concern and assessing the extent of cleaning needed.  This ensures a targeted and effective gutter cleaning service in Raleigh.',
                },
                {
                    title: 'Remove debris from gutters by hand',
                    body: 'We carefully remove leaves, twigs, and other debris from your gutters by hand, ensuring a thorough cleaning without damaging your gutters or property in Raleigh.  We are careful and thorough.',
                },
                {
                    title: 'Flush gutters and downspouts completely',
                    body: 'We flush your gutters and downspouts with water to remove any remaining debris and ensure proper water flow. This step is vital for effective gutter cleaning in Raleigh. We check for proper flow.',
                },
                {
                    title: 'Inspect for leaks and secure loose brackets',
                    body: 'We check for leaks, loose brackets, or other potential issues with your gutters. We secure any loose components to ensure the long-term functionality of your gutters in Raleigh.  We check for damage.',
                },
                {
                    title: 'Clean up debris and ensure satisfaction',
                    body: 'We clean up any debris from the cleaning process and ensure your complete satisfaction with our gutter cleaning service.  We leave your Raleigh property clean and tidy. We value your feedback.',
                },
            ],
        },
    },
    'raleigh-roof-cleaning-near-me': {
        metaTitle: 'Best Raleigh roof cleaning company near me',
        metaDescription:
            "Raleigh's top-rated roof cleaning for residential & commercial properties. Serving Raleigh, Cary, Wake Forest & surrounding areas. Get 15% off your first service. Call or text 919-526-0633 now for your free roof cleaning estimate.",
        hero: {
            title: 'Raleigh roof cleaning',
            items: [
                {
                    title: 'Extend the life of your roof',
                    body: 'Protect your investment and extend the life of your roof with professional roof cleaning.  Our Raleigh roof cleaning service removes harmful growth and debris, preventing premature deterioration.',
                },
                {
                    title: "Improve your home's curb appeal",
                    body: 'Enhance the beauty of your home and boost its curb appeal with a clean and well-maintained roof.  Our Raleigh roof cleaning service removes unsightly stains and growth, making your home look its best.',
                },
                {
                    title: 'Prevent costly roof repairs',
                    body: 'Avoid expensive roof repairs by addressing roof issues early with regular cleaning.  Our Raleigh roof cleaning service prevents damage caused by moss, algae, and other harmful growths.',
                },
            ],
        },
        whyUs: {
            title: '100% of customers who choose us are satisfied with our roof cleaning services.',
            items: [
                {
                    title: 'Experienced and trained roof cleaners',
                    body: 'Our team consists of experienced and trained roof cleaning professionals who understand the proper techniques for cleaning different roof types. We ensure a safe and effective cleaning in Raleigh.',
                },
                {
                    title: 'Guaranteed satisfaction on every job',
                    body: "We stand behind our work and your satisfaction is our top priority.  If you're not happy with our roof cleaning service, we'll make it right. We guarantee it for all Raleigh residents.",
                },
                {
                    title: 'Affordable roof cleaning solutions',
                    body: 'We offer competitive and affordable pricing for our professional roof cleaning services in Raleigh. Get a free estimate today and discover how affordable a clean and healthy roof can be.',
                },
            ],
        },
        signs: {
            title: '6 signs your Raleigh property needs roof cleaning and how to tell',
            items: [
                {
                    title: 'See dark streaks or stains on your roof',
                    body: "Observe dark streaks or stains on your roof shingles? This is often a sign of algae growth and indicates the need for professional roof cleaning in Raleigh to restore your roof's appearance.",
                },
                {
                    title: 'Notice moss or algae growth on roof tiles',
                    body: 'Look for visible moss or algae growth on your roof tiles. These growths can damage your roof and shorten its lifespan, making roof cleaning in Raleigh essential to protect your investment.',
                },
                {
                    title: 'Find granules from shingles in gutters',
                    body: 'Detect granules from your roof shingles in your gutters? This can indicate shingle deterioration and necessitates a roof inspection and cleaning to prevent further damage to your Raleigh home.',
                },
                {
                    title: 'Observe sagging or warping roof sections',
                    body: 'Find sagging or warping sections of your roof? This is a serious issue and requires immediate attention. Roof cleaning may be necessary, along with repairs, to restore the integrity of your Raleigh roof.',
                },
                {
                    title: 'Increased energy bills due to roof issues',
                    body: 'Notice increased energy bills? A dirty roof can trap heat, making your home less energy-efficient. Roof cleaning can help improve ventilation and lower your energy costs in Raleigh. Save money on energy.',
                },
                {
                    title: 'Schedule regular roof maintenance and cleaning',
                    body: 'Plan for regular roof cleaning as part of your preventative home maintenance. This helps maintain its condition, prevents costly damage, and extends the life of your roof in Raleigh. Protect your investment.',
                },
            ],
        },
        process: {
            title: 'Our 5 step process delivers guaranteed roof cleaning results for residential and commercial properties.',
            items: [
                {
                    title: 'Begin with a thorough roof inspection',
                    body: 'We begin by inspecting your roof, identifying areas of concern and assessing the extent of cleaning needed. This ensures a targeted and effective roof cleaning service for your Raleigh property. We check the roof thoroughly.',
                },
                {
                    title: 'Apply a soft wash cleaning solution',
                    body: 'We apply a specialized, eco-friendly soft wash cleaning solution to your roof to kill algae, moss, and other growths without damaging your shingles. This is a key step to protect your Raleigh roof. We are gentle and effective.',
                },
                {
                    title: 'Allow cleaning solution to dwell and work',
                    body: 'We allow the cleaning solution to dwell on your roof for a specified time, allowing it to penetrate and loosen the growths. This maximizes the effectiveness of the cleaning process for your Raleigh home. We let the solution work.',
                },
                {
                    title: 'Rinse roof gently with low pressure',
                    body: 'We rinse your roof gently with low pressure water to remove the loosened debris and cleaning solution. This ensures a thorough cleaning without causing damage to your Raleigh roof. We are careful with your roof.',
                },
                {
                    title: 'Final inspection and satisfaction check',
                    body: 'We conduct a final inspection to ensure your complete satisfaction with our roof cleaning service. We clean up any debris from the process.  We value your feedback and want you happy with our work in Raleigh.',
                },
            ],
        },
    },

    'raleigh-house-washing-near-me': {
        metaTitle: 'Best Raleigh house washing company near me',
        metaDescription:
            "Raleigh's top-rated house washing for residential & commercial properties. Serving Raleigh, Cary, Wake Forest & surrounding areas. Get 15% off your first service. Call or text 919-526-0633 now for your free house washing estimate.",
        hero: {
            title: 'Raleigh house washing',
            items: [
                {
                    title: 'Boost your curb appeal',
                    body: "Enhance your home's beauty and make a great first impression with professional house washing. Our Raleigh service removes dirt, grime, and other unsightly blemishes, revitalizing your home's exterior.",
                },
                {
                    title: "Protect your home's exterior",
                    body: 'Extend the life of your siding and other exterior surfaces with regular house washing. Our Raleigh service removes harmful contaminants that can cause deterioration, protecting your investment.',
                },
                {
                    title: 'Create a healthier home environment',
                    body: "Remove mold, mildew, and other allergens from your home's exterior with professional house washing. Our Raleigh service creates a healthier environment for you and your family.",
                },
            ],
        },
        whyUs: {
            title: '100% of customers who choose us are satisfied with our house washing services.',
            items: [
                {
                    title: 'Experienced house washing professionals',
                    body: 'Our team consists of experienced and trained house washing professionals who understand the best techniques for cleaning different types of siding and exterior surfaces in Raleigh. We are experts.',
                },
                {
                    title: 'Guaranteed satisfaction with our service',
                    body: "We stand behind our work. Your satisfaction is our top priority. If you're not happy with our house washing service, we'll make it right.  We guarantee it for all Raleigh residents.",
                },
                {
                    title: 'Affordable house washing options',
                    body: 'We offer competitive and affordable pricing for our professional house washing services in Raleigh, providing excellent value for your money. Get a free estimate today and see how affordable a clean home can be.',
                },
            ],
        },
        signs: {
            title: '6 signs your Raleigh property needs house washing and how to tell',
            items: [
                {
                    title: 'See visible dirt and grime on siding',
                    body: 'Notice accumulated dirt, grime, or stains on your siding? This is the most obvious sign that your house needs a professional washing in Raleigh to restore its original beauty.',
                },
                {
                    title: 'Observe mold or mildew growth on surfaces',
                    body: 'Look for green or black patches, indicating mold or mildew growth. House washing effectively removes these harmful substances, protecting your Raleigh home and creating a healthier environment.',
                },
                {
                    title: 'Detect faded paint or dull siding',
                    body: "Find your paint or siding looking faded or dull? House washing can often restore its original vibrancy and significantly improve your Raleigh home's curb appeal. Make your home shine again.",
                },
                {
                    title: 'Identify stains and discoloration on walls',
                    body: "Notice any stains from rust, hard water, or organic matter on your exterior walls? Our house washing services in Raleigh can remove these blemishes effectively, restoring your home's appearance.",
                },
                {
                    title: 'Smell musty odors around your house',
                    body: 'Detect musty odors around your house, particularly after rain? This can indicate mold or mildew growth, requiring professional house washing in Raleigh to eliminate the source of the smell.',
                },
                {
                    title: 'Prepare your house for painting or repairs',
                    body: "Planning to paint or make repairs to your home's exterior? House washing is essential to remove loose paint, dirt, and debris, ensuring proper adhesion of new paint or materials in Raleigh.",
                },
            ],
        },
        process: {
            title: 'Our 5 step process delivers guaranteed house washing results for residential and commercial properties.',
            items: [
                {
                    title: 'Begin with a thorough house assessment',
                    body: 'We start by assessing your Raleigh property, identifying specific cleaning needs and protecting delicate areas. This allows us to tailor our house washing approach for the best and safest results for your home.',
                },
                {
                    title: 'Apply pre-treatment solutions (if needed)',
                    body: 'For stubborn stains or heavily soiled areas, we apply specialized, eco-friendly cleaning solutions to loosen dirt and grime. This ensures a more effective house washing result for your Raleigh property. This is a key step.',
                },
                {
                    title: 'Perform house washing with care and precision',
                    body: "Using the appropriate pressure and nozzles, we carefully clean your home's exterior surfaces, removing dirt, grime, mold, and other contaminants. We handle your Raleigh home with care and precision.",
                },
                {
                    title: 'Complete rinsing and inspection of the area',
                    body: 'After washing, we thoroughly rinse the area to remove any remaining cleaning solution and debris. We then conduct a final inspection to ensure your satisfaction with our house washing service in Raleigh. We check everything.',
                },
                {
                    title: 'Finalize with clean up and satisfaction check',
                    body: "We clean up the work area, leaving your Raleigh property looking its best. We'll also walk you through the results and ensure you are completely satisfied with our house washing work. We value your feedback and your happiness.",
                },
            ],
        },
    },

    'raleigh-concrete-cleaning-near-me': {
        metaTitle: 'Best Raleigh concrete cleaning company near me',
        metaDescription:
            "Raleigh's top-rated concrete cleaning for residential & commercial properties. Serving Raleigh, Cary, Wake Forest & surrounding areas. Get 15% off your first service. Call or text 919-526-0633 now for your free concrete cleaning estimate.",
        hero: {
            title: 'Raleigh concrete cleaning',
            items: [
                {
                    title: 'Restore the beauty of your concrete',
                    body: 'Revitalize your concrete surfaces with our professional cleaning services. We remove dirt, grime, stains, and other blemishes, restoring the original beauty of your concrete in Raleigh.',
                },
                {
                    title: 'Extend the life of your concrete surfaces',
                    body: 'Protect your concrete investment and extend its lifespan with regular cleaning. Our Raleigh concrete cleaning service removes harmful contaminants that can cause deterioration over time.',
                },
                {
                    title: "Enhance your property's curb appeal",
                    body: 'Improve the overall appearance of your property with clean and well-maintained concrete surfaces. Our Raleigh concrete cleaning service enhances your curb appeal and adds value to your home or business.',
                },
            ],
        },
        whyUs: {
            title: '100% of customers who choose us are satisfied with our concrete cleaning services.',
            items: [
                {
                    title: 'Experienced concrete cleaning specialists',
                    body: 'Our team consists of experienced and trained concrete cleaning specialists who understand the best techniques for cleaning various types of concrete surfaces in Raleigh. We are experts in concrete care.',
                },
                {
                    title: 'Guaranteed satisfaction on every job',
                    body: "We stand behind our work. Your satisfaction is our top priority. If you're not happy with our concrete cleaning service, we'll make it right. We guarantee it for all Raleigh residents and businesses.",
                },
                {
                    title: 'Affordable concrete cleaning solutions',
                    body: 'We offer competitive and affordable pricing for our professional concrete cleaning services in Raleigh, providing excellent value for your money. Get a free estimate and see how affordable clean concrete can be.',
                },
            ],
        },
        signs: {
            title: '6 signs your Raleigh property needs concrete cleaning and how to tell',
            items: [
                {
                    title: 'See visible dirt and grime on surfaces',
                    body: 'Notice accumulated dirt, grime, or stains on your concrete surfaces? This is the most obvious sign that your concrete needs a professional cleaning in Raleigh to restore its original appearance.',
                },
                {
                    title: 'Observe mold or mildew growth on concrete',
                    body: 'Look for green or black patches, indicating mold or mildew growth. Concrete cleaning effectively removes these harmful substances, protecting your Raleigh property and creating a healthier environment.',
                },
                {
                    title: 'Detect oil or grease stains on driveways',
                    body: 'Find oil or grease stains on your driveway or other concrete surfaces? Concrete cleaning is the best way to remove these unsightly and slippery blemishes from your Raleigh property. We can clean your driveway effectively.',
                },
                {
                    title: 'Identify rust stains on concrete surfaces',
                    body: 'Notice rust stains on your concrete surfaces? Our concrete cleaning services in Raleigh can remove these blemishes effectively, restoring the beauty of your concrete and preventing further damage.',
                },
                {
                    title: 'Smell foul odors from concrete areas',
                    body: 'Detect foul odors coming from your concrete areas, particularly after rain? This can indicate mold or mildew growth, requiring professional concrete cleaning in Raleigh to eliminate the source of the smell.',
                },
                {
                    title: 'Prepare concrete for sealing or painting',
                    body: 'Planning to seal or paint your concrete surfaces? Concrete cleaning is essential to remove dirt, grime, and loose debris, ensuring proper adhesion of the sealant or paint in Raleigh. We prepare your surfaces correctly.',
                },
            ],
        },
        process: {
            title: 'Our 5 step process delivers guaranteed concrete cleaning results for residential and commercial properties.',
            items: [
                {
                    title: 'Begin with a thorough concrete assessment',
                    body: 'We start by assessing your Raleigh property, identifying specific cleaning needs and protecting delicate areas. This allows us to tailor our concrete cleaning approach for the best and safest results for your property.',
                },
                {
                    title: 'Apply pre-treatment solutions (if needed)',
                    body: 'For stubborn stains or heavily soiled areas, we apply specialized, eco-friendly cleaning solutions to loosen dirt and grime. This ensures a more effective concrete cleaning result for your Raleigh property.  This step is key.',
                },
                {
                    title: 'Perform concrete cleaning with care and precision',
                    body: 'Using the appropriate pressure and nozzles, we carefully clean your concrete surfaces, removing dirt, grime, mold, and other contaminants. We handle your Raleigh property with care and precision, ensuring a thorough clean.',
                },
                {
                    title: 'Complete rinsing and inspection of the area',
                    body: 'After cleaning, we thoroughly rinse the area to remove any remaining cleaning solution and debris. We then conduct a final inspection to ensure your satisfaction with our concrete cleaning service in Raleigh. We check everything thoroughly.',
                },
                {
                    title: 'Finalize with clean up and satisfaction check',
                    body: "We clean up the work area, leaving your Raleigh property looking its best. We'll also walk you through the results and ensure you are completely satisfied with our concrete cleaning work. We value your feedback and your happiness.",
                },
            ],
        },
    },

    'raleigh-graffiti-removal-near-me': {
        metaTitle: 'Best Raleigh graffiti removal company near me',
        metaDescription:
            "Raleigh's top-rated graffiti removal for residential & commercial properties. Serving Raleigh, Cary, Wake Forest & surrounding areas. Get 15% off your first service. Call or text 919-526-0633 now for your free graffiti removal estimate.",
        hero: {
            title: 'Raleigh graffiti removal',
            items: [
                {
                    title: "Protect your property's image",
                    body: "Graffiti can damage your property's reputation and create a negative impression. Our Raleigh graffiti removal service quickly and effectively removes unwanted markings, restoring your property's appearance.",
                },
                {
                    title: 'Prevent further vandalism',
                    body: 'Removing graffiti promptly discourages future vandalism and helps maintain a clean and safe environment for your Raleigh property. We act quickly to protect your investment.',
                },
                {
                    title: 'Safe and effective removal',
                    body: 'Our experienced technicians use safe and effective graffiti removal techniques, protecting the underlying surface while removing unwanted markings. We restore your Raleigh property to its original condition.',
                },
            ],
        },
        whyUs: {
            title: '100% of customers who choose us are satisfied with our graffiti removal services.',
            items: [
                {
                    title: 'Experienced graffiti removal specialists',
                    body: 'Our team consists of experienced and trained graffiti removal specialists who understand the best techniques for removing graffiti from various surfaces in Raleigh. We are experts in graffiti removal.',
                },
                {
                    title: 'Guaranteed satisfaction with our work',
                    body: "We stand behind our work. Your satisfaction is our top priority. If you're not happy with our graffiti removal service, we'll make it right. We guarantee it for all Raleigh residents and businesses.",
                },
                {
                    title: 'Affordable graffiti removal solutions',
                    body: 'We offer competitive and affordable pricing for our professional graffiti removal services in Raleigh, providing excellent value for your money. Get a free estimate and see how affordable graffiti removal can be.',
                },
            ],
        },
        signs: {
            title: '6 signs your Raleigh property needs graffiti removal and how to tell',
            items: [
                {
                    title: 'See visible graffiti on your property',
                    body: "Notice any unwanted markings, tags, or graffiti on your property? This is the most obvious sign that you need professional graffiti removal in Raleigh to restore your property's appearance.",
                },
                {
                    title: 'Prevent further damage to your property',
                    body: 'Graffiti can lead to further vandalism and damage if left unaddressed. Prompt graffiti removal in Raleigh helps protect your property and maintain its value. Act quickly to prevent further issues.',
                },
                {
                    title: 'Maintain a positive business image',
                    body: "Graffiti can create a negative impression on customers and clients. Our graffiti removal services in Raleigh help businesses maintain a professional and welcoming environment. Protect your business's reputation.",
                },
                {
                    title: 'Ensure a safe and clean community',
                    body: 'Graffiti can contribute to a sense of neglect and disorder. Removing graffiti helps create a safer and cleaner community for everyone in Raleigh. We contribute to a better environment for all.',
                },
                {
                    title: 'Protect the value of your investment',
                    body: "Graffiti can decrease the value of your property. Our graffiti removal services in Raleigh help protect your investment and maintain the value of your home or business. We help you protect your property's value.",
                },
                {
                    title: 'Comply with local regulations and ordinances',
                    body: 'Many areas have regulations requiring property owners to remove graffiti. Our services help you comply with local ordinances and avoid potential fines in Raleigh. We keep you compliant with local regulations.',
                },
            ],
        },
        process: {
            title: 'Our 5 step process delivers guaranteed graffiti removal results for residential and commercial properties.',
            items: [
                {
                    title: 'Begin with a thorough graffiti assessment',
                    body: 'We start by assessing the graffiti on your Raleigh property, identifying the type of paint or markings and the surface affected. This allows us to choose the most effective removal method. We analyze the graffiti carefully.',
                },
                {
                    title: 'Choose the appropriate removal technique',
                    body: 'We select the best graffiti removal technique based on the type of graffiti and the surface. This may involve pressure washing, chemical removal, or a combination of methods. We tailor our approach to your specific needs in Raleigh.',
                },
                {
                    title: 'Apply graffiti removal solution (if needed)',
                    body: 'We apply specialized, eco-friendly graffiti removal solutions to break down the paint or markings. This step is essential for effective removal without damaging the underlying surface in Raleigh. We use safe and effective solutions.',
                },
                {
                    title: 'Remove graffiti with care and precision',
                    body: "Using the appropriate tools and techniques, we carefully remove the graffiti from your Raleigh property, ensuring no damage to the original surface. We are meticulous in our work to restore your property's appearance.",
                },
                {
                    title: 'Finalize with clean up and inspection',
                    body: 'We clean up the work area, removing any residual cleaning solution or debris. We then conduct a final inspection to ensure your complete satisfaction with our graffiti removal service in Raleigh. We check everything thoroughly.',
                },
            ],
        },
    },

    'raleigh-exterior-cleaning-near-me': {
        metaTitle: 'Best Raleigh exterior cleaning company near me',
        metaDescription:
            "Raleigh's top-rated exterior cleaning for residential & commercial properties. Serving Raleigh, Cary, Wake Forest & surrounding areas. Get 15% off your first service. Call or text 919-526-0633 now for your free exterior cleaning estimate.",
        hero: {
            title: 'Raleigh exterior cleaning',
            items: [
                {
                    title: "Enhance your property's curb appeal",
                    body: "Boost your home or business's first impression with professional exterior cleaning. Our Raleigh service removes dirt, grime, mold, and other blemishes, revitalizing your property's appearance.",
                },
                {
                    title: 'Protect your investment with regular cleaning',
                    body: 'Extend the life of your exterior surfaces and prevent costly repairs with regular cleaning. Our Raleigh exterior cleaning services protect your investment from the damaging effects of the elements.',
                },
                {
                    title: 'Create a clean and healthy environment',
                    body: "Remove harmful mold, mildew, and allergens from your property's exterior with professional cleaning. Our Raleigh service creates a healthier environment for your family, customers, and employees.",
                },
            ],
        },
        whyUs: {
            title: '100% of customers who choose us are satisfied with our exterior cleaning services.',
            items: [
                {
                    title: 'Experienced exterior cleaning professionals',
                    body: 'Our team consists of experienced and trained exterior cleaning professionals who understand the best techniques for cleaning various surfaces. We deliver outstanding results for Raleigh homes and businesses.',
                },
                {
                    title: 'Guaranteed satisfaction on every job',
                    body: "We stand behind our work and your satisfaction is our top priority. If you're not happy with our exterior cleaning service, we'll make it right. We guarantee it for all Raleigh residents and businesses.",
                },
                {
                    title: 'Affordable exterior cleaning solutions',
                    body: 'We offer competitive and affordable pricing for our professional exterior cleaning services in Raleigh, providing excellent value for your money. Get a free estimate today and see how affordable a clean property can be.',
                },
            ],
        },
        signs: {
            title: '6 signs your Raleigh property needs exterior cleaning and how to tell',
            items: [
                {
                    title: 'See visible dirt and grime on surfaces',
                    body: 'Notice accumulated dirt, grime, or stains on your siding, roof, walkways, or other exterior surfaces? This is the most obvious sign that your property needs a professional cleaning in Raleigh.',
                },
                {
                    title: 'Observe mold or mildew growth on exterior walls',
                    body: 'Look for green or black patches, indicating mold or mildew growth. Exterior cleaning effectively removes these harmful substances, protecting your Raleigh property and creating a healthier environment.',
                },
                {
                    title: 'Detect faded paint or dull surfaces',
                    body: "Find your paint or siding looking faded or dull? Exterior cleaning can often restore its original vibrancy and significantly improve your Raleigh property's curb appeal. Make your property shine again.",
                },
                {
                    title: 'Identify stains and discoloration on surfaces',
                    body: "Notice any stains from rust, hard water, or organic matter on your exterior surfaces? Our exterior cleaning services in Raleigh can remove these blemishes effectively, restoring your property's appearance.",
                },
                {
                    title: 'Smell musty odors around your property',
                    body: 'Detect musty odors around your property, particularly after rain? This can indicate mold or mildew growth, requiring professional exterior cleaning in Raleigh to eliminate the source of the smell.',
                },
                {
                    title: 'Prepare your property for painting or repairs',
                    body: "Planning to paint or make repairs to your property's exterior? Exterior cleaning is essential to remove loose paint, dirt, and debris, ensuring proper adhesion of new paint or materials in Raleigh.",
                },
            ],
        },
        process: {
            title: 'Our 5 step process delivers guaranteed exterior cleaning results for residential and commercial properties.',
            items: [
                {
                    title: 'Begin with a thorough property assessment',
                    body: 'We start by assessing your Raleigh property, identifying specific cleaning needs and protecting delicate areas. This allows us to tailor our exterior cleaning approach for the best and safest results for your property.',
                },
                {
                    title: 'Apply pre-treatment solutions (if needed)',
                    body: 'For stubborn stains or heavily soiled areas, we apply specialized, eco-friendly cleaning solutions to loosen dirt and grime. This ensures a more effective exterior cleaning result for your Raleigh property. This is a key step.',
                },
                {
                    title: 'Perform exterior cleaning with care and precision',
                    body: "Using the appropriate pressure and nozzles, we carefully clean your property's exterior surfaces, removing dirt, grime, mold, and other contaminants. We handle your Raleigh property with care and precision.",
                },
                {
                    title: 'Complete rinsing and inspection of the area',
                    body: 'After cleaning, we thoroughly rinse the area to remove any remaining cleaning solution and debris. We then conduct a final inspection to ensure your satisfaction with our exterior cleaning service in Raleigh. We check everything.',
                },
                {
                    title: 'Finalize with clean up and satisfaction check',
                    body: "We clean up the work area, leaving your Raleigh property looking its best. We'll also walk you through the results and ensure you are completely satisfied with our exterior cleaning work. We value your feedback and your happiness.",
                },
            ],
        },
    },

    'raleigh-fence-cleaning-near-me': {
        metaTitle: 'Best Raleigh fence cleaning company near me',
        metaDescription:
            "Raleigh's top-rated fence cleaning for residential & commercial properties. Serving Raleigh, Cary, Wake Forest & surrounding areas. Get 15% off your first service. Call or text 919-526-0633 now for your free fence cleaning estimate.",
        hero: {
            title: 'Raleigh fence cleaning',
            items: [
                {
                    title: 'Restore the beauty of your fence',
                    body: "Revitalize your fence and enhance your property's curb appeal with professional fence cleaning. Our Raleigh service removes dirt, grime, mold, and other blemishes, restoring your fence's original beauty.",
                },
                {
                    title: 'Extend the life of your fence',
                    body: 'Protect your investment and extend the lifespan of your fence with regular cleaning. Our Raleigh fence cleaning service removes harmful contaminants that can cause deterioration over time, saving you money on repairs.',
                },
                {
                    title: "Improve your property's appearance",
                    body: 'A clean and well-maintained fence significantly improves the overall appearance of your property. Our Raleigh fence cleaning service enhances your curb appeal and adds value to your home or business.',
                },
            ],
        },
        whyUs: {
            title: '100% of customers who choose us are satisfied with our fence cleaning services.',
            items: [
                {
                    title: 'Experienced fence cleaning professionals',
                    body: 'Our team consists of experienced and trained fence cleaning professionals who understand the best techniques for cleaning various types of fence materials in Raleigh. We are experts in fence care.',
                },
                {
                    title: 'Guaranteed satisfaction with our service',
                    body: "We stand behind our work. Your satisfaction is our top priority. If you're not happy with our fence cleaning service, we'll make it right. We guarantee it for all Raleigh residents and businesses.",
                },
                {
                    title: 'Affordable fence cleaning options',
                    body: 'We offer competitive and affordable pricing for our professional fence cleaning services in Raleigh, providing excellent value for your money. Get a free estimate today and see how affordable a clean fence can be.',
                },
            ],
        },
        signs: {
            title: '6 signs your Raleigh property needs fence cleaning and how to tell',
            items: [
                {
                    title: 'See visible dirt and grime on fence',
                    body: 'Notice accumulated dirt, grime, or stains on your fence? This is the most obvious sign that your fence needs a professional cleaning in Raleigh to restore its original appearance and protect its integrity.',
                },
                {
                    title: 'Observe mold or mildew growth on fence',
                    body: 'Look for green or black patches, indicating mold or mildew growth. Fence cleaning effectively removes these harmful substances, protecting your Raleigh property and creating a healthier environment for everyone.',
                },
                {
                    title: 'Detect faded paint or dull finish',
                    body: "Find your fence's paint or finish looking faded or dull? Fence cleaning can often restore its original vibrancy and significantly improve your Raleigh property's curb appeal. Make your fence look new again.",
                },
                {
                    title: 'Identify stains and discoloration',
                    body: 'Notice any stains from rust, hard water, or organic matter on your fence? Our fence cleaning services in Raleigh can remove these blemishes effectively, restoring the beauty of your fence and preventing further damage.',
                },
                {
                    title: 'Smell musty odors around fence area',
                    body: 'Detect musty odors around your fence, particularly after rain? This can indicate mold or mildew growth, requiring professional fence cleaning in Raleigh to eliminate the source of the smell and protect your property.',
                },
                {
                    title: 'Prepare your fence for painting or staining',
                    body: 'Planning to paint or stain your fence? Fence cleaning is essential to remove dirt, grime, and loose debris, ensuring proper adhesion of the new paint or stain in Raleigh. We prepare your fence for a fresh look.',
                },
            ],
        },
        process: {
            title: 'Our 5 step process delivers guaranteed fence cleaning results for residential and commercial properties.',
            items: [
                {
                    title: 'Begin with a thorough fence assessment',
                    body: 'We start by assessing your Raleigh property, identifying specific cleaning needs and protecting delicate areas. This allows us to tailor our fence cleaning approach for the best and safest results for your property. We analyze your fence.',
                },
                {
                    title: 'Apply pre-treatment solutions (if needed)',
                    body: 'For stubborn stains or heavily soiled areas, we apply specialized, eco-friendly cleaning solutions to loosen dirt and grime. This ensures a more effective fence cleaning result for your Raleigh property. This step is key for tough stains.',
                },
                {
                    title: 'Perform fence cleaning with care and precision',
                    body: 'Using the appropriate pressure and nozzles, we carefully clean your fence, removing dirt, grime, mold, and other contaminants. We handle your Raleigh property with care and precision, ensuring a thorough clean without damage.',
                },
                {
                    title: 'Complete rinsing and inspection of fence',
                    body: 'After cleaning, we thoroughly rinse the fence to remove any remaining cleaning solution and debris. We then conduct a final inspection to ensure your satisfaction with our fence cleaning service in Raleigh. We check the fence thoroughly.',
                },
                {
                    title: 'Finalize with clean up and satisfaction check',
                    body: "We clean up the work area, leaving your Raleigh property looking its best. We'll also walk you through the results and ensure you are completely satisfied with our fence cleaning work. We value your feedback and your happiness with our service.",
                },
            ],
        },
    },

    'raleigh-patio-cleaning-near-me': {
        metaTitle: 'Best Raleigh patio cleaning company near me',
        metaDescription:
            "Raleigh's top-rated patio cleaning for residential & commercial properties. Serving Raleigh, Cary, Wake Forest & surrounding areas. Get 15% off your first service. Call or text 919-526-0633 now for your free patio cleaning estimate.",
        hero: {
            title: 'Raleigh patio cleaning',
            items: [
                {
                    title: 'Create an outdoor oasis',
                    body: 'Transform your patio into a relaxing outdoor space with professional cleaning. Our Raleigh patio cleaning service removes dirt, grime, mold, and other blemishes, creating an inviting area for you to enjoy.',
                },
                {
                    title: 'Extend the life of your patio surfaces',
                    body: 'Protect your patio investment and extend the lifespan of its surfaces with regular cleaning. Our Raleigh patio cleaning service removes harmful contaminants that can cause deterioration over time, saving you money on repairs.',
                },
                {
                    title: 'Enhance your outdoor living space',
                    body: 'Improve the beauty and functionality of your patio with a professional cleaning. Our Raleigh patio cleaning service enhances your outdoor living space and creates an enjoyable area for entertaining and relaxing.',
                },
            ],
        },
        whyUs: {
            title: '100% of customers who choose us are satisfied with our patio cleaning services.',
            items: [
                {
                    title: 'Experienced patio cleaning professionals',
                    body: 'Our team consists of experienced and trained patio cleaning professionals who understand the best techniques for cleaning various patio materials in Raleigh. We are experts in patio care and cleaning.',
                },
                {
                    title: 'Guaranteed satisfaction with our service',
                    body: "We stand behind our work. Your satisfaction is our top priority. If you're not happy with our patio cleaning service, we'll make it right. We guarantee it for all Raleigh residents and businesses.",
                },
                {
                    title: 'Affordable patio cleaning options',
                    body: 'We offer competitive and affordable pricing for our professional patio cleaning services in Raleigh, providing excellent value for your money. Get a free estimate today and see how affordable a clean patio can be.',
                },
            ],
        },
        signs: {
            title: '6 signs your Raleigh property needs patio cleaning and how to tell',
            items: [
                {
                    title: 'See visible dirt and grime on patio',
                    body: 'Notice accumulated dirt, grime, or stains on your patio surfaces? This is the most obvious sign that your patio needs a professional cleaning in Raleigh to restore its original beauty and make it inviting.',
                },
                {
                    title: 'Observe mold or mildew growth on patio',
                    body: 'Look for green or black patches, indicating mold or mildew growth. Patio cleaning effectively removes these harmful substances, protecting your Raleigh property and creating a healthier outdoor environment.',
                },
                {
                    title: 'Detect faded or dull patio surfaces',
                    body: "Find your patio surfaces looking faded or dull? Patio cleaning can often restore their original vibrancy and significantly improve your Raleigh property's outdoor living space. Make your patio look its best again.",
                },
                {
                    title: 'Identify stains and discoloration on patio',
                    body: 'Notice any stains from rust, hard water, or organic matter on your patio surfaces? Our patio cleaning services in Raleigh can remove these blemishes effectively, restoring the beauty of your outdoor space.',
                },
                {
                    title: 'Smell musty odors around patio area',
                    body: 'Detect musty odors around your patio, particularly after rain? This can indicate mold or mildew growth, requiring professional patio cleaning in Raleigh to eliminate the source of the smell and protect your property.',
                },
                {
                    title: 'Prepare your patio for outdoor events',
                    body: 'Planning to host outdoor gatherings or events on your patio? Patio cleaning is essential to create a clean and welcoming space for your guests in Raleigh. We can make your patio party-ready in no time.',
                },
            ],
        },
        process: {
            title: 'Our 5 step process delivers guaranteed patio cleaning results for residential and commercial properties.',
            items: [
                {
                    title: 'Begin with a thorough patio assessment',
                    body: 'We start by assessing your Raleigh property, identifying specific cleaning needs and protecting delicate areas. This allows us to tailor our patio cleaning approach for the best and safest results for your outdoor space. We analyze your patio.',
                },
                {
                    title: 'Apply pre-treatment solutions (if needed)',
                    body: 'For stubborn stains or heavily soiled areas, we apply specialized, eco-friendly cleaning solutions to loosen dirt and grime. This ensures a more effective patio cleaning result for your Raleigh property. This is a key step for tough stains.',
                },
                {
                    title: 'Perform patio cleaning with care and precision',
                    body: 'Using the appropriate pressure and nozzles, we carefully clean your patio surfaces, removing dirt, grime, mold, and other contaminants. We handle your Raleigh property with care and precision, ensuring a thorough clean without damage.',
                },
                {
                    title: 'Complete rinsing and inspection of patio',
                    body: 'After cleaning, we thoroughly rinse the patio to remove any remaining cleaning solution and debris. We then conduct a final inspection to ensure your satisfaction with our patio cleaning service in Raleigh. We check the patio thoroughly.',
                },
                {
                    title: 'Finalize with clean up and satisfaction check',
                    body: "We clean up the work area, leaving your Raleigh property looking its best. We'll also walk you through the results and ensure you are completely satisfied with our patio cleaning work. We value your feedback and want you happy with our service.",
                },
            ],
        },
    },

    'raleigh-pool-deck-washing-near-me': {
        metaTitle: 'Best Raleigh pool deck washing company near me',
        metaDescription:
            "Raleigh's top-rated pool deck washing for residential & commercial properties. Serving Raleigh, Cary, Wake Forest & surrounding areas. Get 15% off your first service. Call or text 919-526-0633 now for your free pool deck washing estimate.",
        hero: {
            title: 'Raleigh pool deck washing',
            items: [
                {
                    title: 'Create a safe and inviting pool area',
                    body: 'Enhance the safety and beauty of your pool area with professional pool deck washing. Our Raleigh service removes slippery substances, dirt, grime, and mold, creating an inviting space for relaxation.',
                },
                {
                    title: 'Extend the life of your pool deck',
                    body: 'Protect your pool deck investment and extend its lifespan with regular cleaning. Our Raleigh pool deck washing service removes harmful contaminants that can cause deterioration over time, saving you money on repairs.',
                },
                {
                    title: 'Improve the appearance of your pool area',
                    body: 'Revitalize your pool deck and surrounding area with a professional cleaning. Our Raleigh pool deck washing service enhances the overall appearance of your pool area and creates a more enjoyable outdoor space.',
                },
            ],
        },
        whyUs: {
            title: '100% of customers who choose us are satisfied with our pool deck washing services.',
            items: [
                {
                    title: 'Experienced pool deck washing professionals',
                    body: 'Our team consists of experienced and trained pool deck washing professionals who understand the best techniques for cleaning various pool deck materials in Raleigh. We are experts in pool deck care.',
                },
                {
                    title: 'Guaranteed satisfaction with our service',
                    body: "We stand behind our work. Your satisfaction is our top priority. If you're not happy with our pool deck washing service, we'll make it right. We guarantee it for all Raleigh residents and businesses.",
                },
                {
                    title: 'Affordable pool deck washing options',
                    body: 'We offer competitive and affordable pricing for our professional pool deck washing services in Raleigh, providing excellent value for your money. Get a free estimate today and see how affordable a clean pool deck can be.',
                },
            ],
        },
        signs: {
            title: '6 signs your Raleigh property needs pool deck washing and how to tell',
            items: [
                {
                    title: 'See slippery surfaces around pool',
                    body: 'Notice slippery surfaces around your pool deck? This is a safety hazard and a clear sign that your pool deck needs a professional cleaning in Raleigh to remove algae, mold, and other slippery substances.',
                },
                {
                    title: 'Observe mold or mildew growth on deck',
                    body: 'Look for green or black patches, indicating mold or mildew growth. Pool deck washing effectively removes these harmful substances, creating a safer and healthier environment around your Raleigh pool.',
                },
                {
                    title: 'Detect stains and discoloration on deck',
                    body: 'Find your pool deck surfaces looking stained or discolored? Pool deck washing can often restore their original vibrancy and significantly improve the appearance of your Raleigh pool area. Make your deck look its best.',
                },
                {
                    title: 'Identify dirt and grime build-up',
                    body: 'Notice accumulated dirt, grime, or debris on your pool deck? This is a common issue and requires regular pool deck washing in Raleigh to maintain a clean and inviting pool area for you and your guests.',
                },
                {
                    title: 'Smell musty odors around pool deck',
                    body: 'Detect musty odors around your pool deck, particularly after rain? This can indicate mold or mildew growth, requiring professional pool deck washing in Raleigh to eliminate the source of the smell and protect your property.',
                },
                {
                    title: 'Prepare pool deck for summer season',
                    body: 'Planning to open your pool for the summer? Pool deck washing is essential to create a clean and welcoming space for swimming and relaxation in Raleigh. We can get your pool deck ready for summer fun.',
                },
            ],
        },
        process: {
            title: 'Our 5 step process delivers guaranteed pool deck washing results for residential and commercial properties.',
            items: [
                {
                    title: 'Begin with a thorough pool deck assessment',
                    body: 'We start by assessing your Raleigh property, identifying specific cleaning needs and protecting delicate areas around your pool. This allows us to tailor our pool deck washing approach for the best and safest results. We analyze your deck.',
                },
                {
                    title: 'Apply pre-treatment solutions (if needed)',
                    body: 'For stubborn stains or heavily soiled areas, we apply specialized, eco-friendly cleaning solutions to loosen dirt and grime. This ensures a more effective pool deck washing result for your Raleigh property. This is a key step for tough stains.',
                },
                {
                    title: 'Perform pool deck washing with care',
                    body: 'Using the appropriate pressure and nozzles, we carefully clean your pool deck surfaces, removing dirt, grime, mold, and other contaminants. We handle your Raleigh property with care and precision, ensuring a thorough clean.',
                },
                {
                    title: 'Complete rinsing and inspection',
                    body: 'After cleaning, we thoroughly rinse the area to remove any remaining cleaning solution and debris. We then conduct a final inspection to ensure your satisfaction with our pool deck washing service in Raleigh. We check everything thoroughly.',
                },
                {
                    title: 'Finalize with clean up and satisfaction check',
                    body: "We clean up the work area, leaving your Raleigh property looking its best. We'll also walk you through the results and ensure you are completely satisfied with our pool deck washing work. We value your feedback and your happiness with our service.",
                },
            ],
        },
    },
}

export async function generateStaticParams() {
    return Object.keys(pages)
}

const sectionPadding = 'py-24 sm:py-32'

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug

    const page = pages[slug as keyof typeof pages]

    return (
        <>
            <Section className={`isolate ${sectionPadding}`}>
                <div className="hero-background-image absolute inset-0 -z-10 size-full bg-cover bg-fixed opacity-30 [background-position:25%_0%] min-[559px]:bg-left-top sm:opacity-100"></div>
                <div className="absolute bottom-0 -z-10 h-[150%] w-full bg-gradient-to-t from-gray-50"></div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-gray-50 from-0% via-gray-50 via-70% lg:via-50%"></div>
                <HeaderOffset></HeaderOffset>
                <SectionContainer>
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <MyLink
                            prefetch={false}
                            href={getPageById(4).href}
                            className="group mb-6 inline-flex flex-wrap gap-x-6 gap-y-2">
                            <span className="relative flex items-center rounded-full bg-primary-100 px-3 pb-1 pt-[0.1875rem] text-[0.8125rem] font-semibold">
                                <GiftIcon
                                    className="mr-2 h-4 w-4 text-primary-400"
                                    aria-hidden="true"
                                />{' '}
                                <span className="text-primary-700">
                                    Winter special
                                </span>
                            </span>
                            <TextButton
                                disableLink={true}
                                className="font-medium text-primary-700 group-hover:text-gray-900 [&_[data-slot=icon-chevron-animated]]:group-hover:stroke-gray-900">
                                New customers get 15% off
                            </TextButton>
                        </MyLink>
                        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                            {page.hero.title}
                        </p>
                        <p className="mt-6 text-pretty text-lg/8 text-gray-600">
                            Proudly serving Raleigh, Durham, and surround areas.
                        </p>
                        <div className="mt-10">
                            <RoundedButtonWithIcon
                                href={getPageById(4).href}
                                prefetch={false}>
                                Get my free estimate
                            </RoundedButtonWithIcon>

                            <p className="mt-4 text-xs text-gray-600">
                                * New customers get 15% off
                            </p>
                        </div>
                        <div className="mt-6 flex scale-[0.85] flex-wrap justify-center gap-x-8 gap-y-4">
                            <ItemReviewsSummaryCard
                                className="whitespace-nowrap bg-white ring-1 ring-inset ring-gray-900/10"
                                href={app.googleReviewPageHref}
                                rating="5.0"
                                numberOfStars={5}
                                numberOfReviews={13}
                                logo={
                                    <MyImage
                                        className="size-[1.8rem]"
                                        src={imagegoogle}
                                        alt="google logo"
                                        sizes="58px"
                                        backgroundColor=""
                                        placeholder="empty"
                                    />
                                }
                                hideGradient
                            />
                            <ItemReviewsSummaryCard
                                className="bg-white ring-1 ring-inset ring-gray-900/10"
                                href={app.facebookReviewPageHref}
                                rating="5.0"
                                numberOfStars={5}
                                numberOfReviews={9}
                                logo={
                                    <MyImage
                                        className="size-[1.8rem]"
                                        src={imagefb}
                                        alt="facebook logo"
                                        sizes="58px"
                                        backgroundColor=""
                                        placeholder="empty"
                                    />
                                }
                                hideGradient
                            />
                        </div>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            {page.hero.items.map((item) => (
                                <div key={item.title} className="flex flex-col">
                                    <dt className="text-pretty text-base/7 font-semibold text-gray-900">
                                        <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-primary-100">
                                            <CheckIcon
                                                aria-hidden="true"
                                                className="size-6 text-primary-400"
                                            />
                                        </div>
                                        {item.title}
                                    </dt>
                                    <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                                        <p className="flex-auto text-pretty">
                                            {item.body}
                                        </p>
                                        {/* <p className="mt-6">
                                                <a
                                                    href={feature.href}
                                                    className="text-sm/6 font-semibold text-primary-400">
                                                    Learn more{' '}
                                                    <span aria-hidden="true">
                                                        →
                                                    </span>
                                                </a>
                                            </p> */}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </SectionContainer>
            </Section>
            <Section className={`bg-white ${sectionPadding}`}>
                <SectionContainer>
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <h2 className="mb-2 text-base/7 font-semibold">
                            <span className="text-gradient-primary-dark">
                                Why Lagos Pressure Washing?
                            </span>
                        </h2>
                        <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            {page.whyUs.title}
                        </h2>
                        {/* <p className="mt-6 text-lg/8 text-gray-600">
                                Lorem ipsum dolor sit amet consect adipisicing
                                elit. Possimus magnam voluptatum cupiditate
                                veritatis in accusamus quisquam.
                            </p> */}
                        <div className="mt-10">
                            <RoundedButtonWithIcon
                                href={getPageById(4).href}
                                prefetch={false}>
                                Get my free estimate
                            </RoundedButtonWithIcon>

                            <p className="mt-4 text-xs text-gray-600">
                                * New customers get 15% off
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            {page.whyUs.items.map((item) => (
                                <div key={item.title} className="flex flex-col">
                                    <dt className="text-pretty text-base/7 font-semibold text-gray-900">
                                        <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-primary-100">
                                            <CheckIcon
                                                aria-hidden="true"
                                                className="size-6 text-primary-400"
                                            />
                                        </div>
                                        {item.title}
                                    </dt>
                                    <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                                        <p className="flex-auto text-pretty">
                                            {item.body}
                                        </p>
                                        {/* <p className="mt-6">
                                                <a
                                                    href={feature.href}
                                                    className="text-sm/6 font-semibold text-primary-600">
                                                    Learn more{' '}
                                                    <span aria-hidden="true">
                                                        →
                                                    </span>
                                                </a>
                                            </p> */}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </SectionContainer>
            </Section>
            <Section className={sectionPadding}>
                <SectionContainer>
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base/7 font-semibold">
                            <span className="text-gradient-primary-dark">
                                Is this for me?
                            </span>
                        </h2>
                        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                            {page.signs.title}
                        </p>
                        <div className="mt-10">
                            <RoundedButtonWithIcon
                                href={getPageById(4).href}
                                prefetch={false}>
                                Get my free estimate
                            </RoundedButtonWithIcon>

                            <p className="mt-4 text-xs text-gray-600">
                                * New customers get 15% off
                            </p>
                        </div>
                        {/* <p className="mt-6 text-lg/8 text-gray-600">
                                Proudly serving Raleigh, Durham, and surround
                                areas.
                            </p> */}
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            {page.signs.items.map((item) => (
                                <div key={item.title} className="flex flex-col">
                                    <dt className="text-pretty text-base/7 font-semibold text-gray-900">
                                        <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-primary-100">
                                            <MagnifyingGlassIcon
                                                aria-hidden="true"
                                                className="size-6 text-primary-400"
                                            />
                                        </div>
                                        {item.title}
                                    </dt>
                                    <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                                        <p className="flex-auto text-pretty">
                                            {item.body}
                                        </p>
                                        {/* <p className="mt-6">
                                                <a
                                                    href={feature.href}
                                                    className="text-sm/6 font-semibold text-primary-600">
                                                    Learn more{' '}
                                                    <span aria-hidden="true">
                                                        →
                                                    </span>
                                                </a>
                                            </p> */}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </SectionContainer>
            </Section>
            <Section className={sectionPadding}>
                <SectionContainer>
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <h2 className="text-base/7 font-semibold">
                            <span className="text-gradient-primary-dark">
                                Lagos formula
                            </span>
                        </h2>
                        <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            {page.process.title}
                        </h2>
                        {/* <p className="mt-6 text-lg/8 text-gray-600">
                                {page.process.body}
                            </p> */}
                        <div className="mt-10">
                            <RoundedButtonWithIcon
                                href={getPageById(4).href}
                                prefetch={false}>
                                Get my free estimate
                            </RoundedButtonWithIcon>

                            <p className="mt-4 text-xs text-gray-600">
                                * New customers get 15% off
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-5">
                            {page.process.items.map((item, index) => (
                                <div key={item.title} className="flex flex-col">
                                    <dt className="text-balance text-base/7 font-semibold text-gray-900">
                                        <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-primary-100">
                                            {/* <CheckIcon
                                                    aria-hidden="true"
                                                    className="size-6 text-white"
                                                /> */}
                                            <span className="text-primary-400">
                                                {index + 1}
                                            </span>
                                        </div>
                                        {item.title}
                                    </dt>
                                    <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                                        <p className="flex-auto text-pretty">
                                            {item.body}
                                        </p>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </SectionContainer>
            </Section>
        </>
    )
}
