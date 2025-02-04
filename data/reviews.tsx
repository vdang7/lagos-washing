import { LogoFacebook } from '@/components/Graphics/Logos/LogoFacebook'
import { LogoGoogle } from '@/components/Graphics/Logos/LogoGoogle'
import { InterfaceItemReviewCardWithStars } from '@/components/Items/ItemReviewCardWithStars'
import { hasDuplicateId } from '@/functions/hasDuplicateId'
import imagefb from '@/public/images/minified/global/reviews/facebook/andrew.webp'
import imagefb2 from '@/public/images/minified/global/reviews/facebook/angelica.webp'
import imagefb3 from '@/public/images/minified/global/reviews/facebook/gregory.webp'
import imagefb4 from '@/public/images/minified/global/reviews/facebook/hulan.webp'
import imagefb5 from '@/public/images/minified/global/reviews/facebook/lamont.webp'
import imagefb6 from '@/public/images/minified/global/reviews/facebook/lisa.webp'
import imagefb7 from '@/public/images/minified/global/reviews/facebook/michelle.webp'
import imagefb8 from '@/public/images/minified/global/reviews/facebook/real.webp'
import imagefb9 from '@/public/images/minified/global/reviews/facebook/tj.webp'
import imagefb10 from '@/public/images/minified/global/reviews/facebook/zach.webp'
import imagegoog from '@/public/images/minified/global/reviews/google/angela.webp'
import imagegoog2 from '@/public/images/minified/global/reviews/google/debra.webp'
import imagegoog3 from '@/public/images/minified/global/reviews/google/jefferey.webp'
import imagegoog4 from '@/public/images/minified/global/reviews/google/jim.webp'
import imagegoog5 from '@/public/images/minified/global/reviews/google/lanard.webp'
import imagegoog6 from '@/public/images/minified/global/reviews/google/mcallister.webp'
import imagegoog7 from '@/public/images/minified/global/reviews/google/plague.webp'
import imagegoog8 from '@/public/images/minified/global/reviews/google/quinn.webp'
import imagegoog9 from '@/public/images/minified/global/reviews/google/tamara.webp'
import imagegoog10 from '@/public/images/minified/global/reviews/google/tocarara.webp'
const googleLogoMobile = (
    <LogoGoogle className="absolute bottom-3 right-5 hidden w-10 sm:block xl:hidden" />
)
const googleLogoDesktop = <LogoGoogle className="w-12 sm:hidden xl:block" />
const facebookLogoMobile = (
    <LogoFacebook className="absolute bottom-3 right-5 hidden w-12 sm:block xl:hidden" />
)
const facebookLogoDesktop = <LogoFacebook className="w-14 sm:hidden xl:block" />
export const reviews: InterfaceItemReviewCardWithStars[] = [
    {
        id: 1,
        title: 'Always recommend',
        body: 'Derek was very quick and efficient when he pressure washed my house and soft washed my house. He offered me very decent competitive rates and was willing to work with me on the pricing and scheduling around my very busy work week. He was on time and left a very good lasting impression, would recommend Lagos Pressure Washing any day.',
        authorName: 'Plague Pestilence',
        authorSubtitle: 'North Carolina',
        authorImageSrc: imagegoog7,
        authorImageAlt: 'Leslie headshot',
        platformLogoMobile: googleLogoMobile,
        platformLogoDesktop: googleLogoDesktop,
        reviewHref: 'https://g.co/kgs/c1uFTgJ',
    },
    {
        id: 2,
        title: 'Made it happen',
        body: 'I would absolutely recommend Lagos Pressure Washing! Derek is extremely professional and did a wonderful job. He really helped us out of a bind by showing up with very little notice and continuing to work in the dark and rain to finish the job! Make him your go-to for pressure and soft washing!',
        authorName: 'Tamara Miller',
        authorSubtitle: 'North Carolina',
        authorImageSrc: imagegoog9,
        authorImageAlt: 'Leslie headshot',
        platformLogoMobile: googleLogoMobile,
        platformLogoDesktop: googleLogoDesktop,
        reviewHref: 'https://g.co/kgs/WimVxLa',
    },
    {
        id: 3,
        title: 'Great job, great price',
        body: 'They did a great job on my house for a great price. Even included my small shed in the backyard. Very professional and great communication, completed the job in a timely manner. Would recommend Lagos to others for great service.',
        authorName: 'Tocarra Barnes',
        authorSubtitle: 'North Carolina',
        authorImageSrc: imagegoog10,
        authorImageAlt: 'Leslie headshot',
        platformLogoMobile: googleLogoMobile,
        platformLogoDesktop: googleLogoDesktop,
        reviewHref: 'https://g.co/kgs/hgG37Y5',
    },
    {
        id: 4,
        title: 'Spotless driveway',
        body: "Derek did an awesome job with my grandmother's driveway, back patio, and house! He even gave us a 40% discount for the 4th. He takes his time and ensures every spot is clean. Plus, he’s a really nice guy! I highly recommend using his services!",
        authorName: 'mcallister82',
        authorSubtitle: 'North Carolina',
        authorImageSrc: imagegoog6,
        authorImageAlt: 'Leslie headshot',
        platformLogoMobile: googleLogoMobile,
        platformLogoDesktop: googleLogoDesktop,
        reviewHref: 'https://g.co/kgs/zhKJFUD',
    },
    {
        id: 5,
        title: 'Exceeded my expectations',
        body: "I recently hired Derek to power wash our filthy driveway, and I’m beyond impressed! From start to finish, the experience was top-notch. His team showed utmost professionalism. I highly recommend them for any power washing needs—next year, he'll do the whole house!",
        authorName: 'Debra',
        authorSubtitle: 'North Carolina',
        authorImageSrc: imagegoog2,
        authorImageAlt: 'Leslie headshot',
        platformLogoMobile: googleLogoMobile,
        platformLogoDesktop: googleLogoDesktop,
        reviewHref: 'https://g.co/kgs/WabW5iW',
    },
    {
        id: 6,
        title: "You won't find better",
        body: "I’ve known Derek for about 2 years now, and he takes pride in his work. He’s customer-friendly and always adapts to my needs. You won't find better service!",
        authorName: 'Jeffrey Flood',
        authorSubtitle: 'North Carolina',
        authorImageSrc: imagegoog3,
        authorImageAlt: 'Leslie headshot',
        platformLogoMobile: googleLogoMobile,
        platformLogoDesktop: googleLogoDesktop,
        reviewHref: 'https://g.co/kgs/DyDmL97',
    },
    {
        id: 7,
        title: 'I highly recommend',
        body: "Highly recommend for pressure washing! Great communication and pricing—couldn't be happier!",
        authorName: 'Lanard Colbert',
        authorSubtitle: 'North Carolina',
        authorImageSrc: imagegoog5,
        authorImageAlt: 'Leslie headshot',
        platformLogoMobile: googleLogoMobile,
        platformLogoDesktop: googleLogoDesktop,
        reviewHref: 'https://g.co/kgs/LnTu7y4',
    },
    {
        id: 8,
        title: 'Hardworking and dependable',
        body: 'Derek is a good, hard-working person who truly cares about his clients. You can trust him to get the job done right!',
        authorName: 'Quinn Ethridge',
        authorSubtitle: 'North Carolina',
        authorImageSrc: imagegoog8,
        authorImageAlt: 'Leslie headshot',
        platformLogoMobile: googleLogoMobile,
        platformLogoDesktop: googleLogoDesktop,
        reviewHref: 'https://g.co/kgs/KiRZn7Q',
    },
    {
        id: 9,
        title: 'Superior service. Amazing price.',
        body: 'Thank you, Derek! You did an excellent job. Superior service at a fantastic price. Highly recommend!',
        authorName: 'Angela Silverio',
        authorSubtitle: 'North Carolina',
        authorImageSrc: imagegoog,
        authorImageAlt: 'Leslie headshot',
        platformLogoMobile: googleLogoMobile,
        platformLogoDesktop: googleLogoDesktop,
        reviewHref: 'https://g.co/kgs/QnZhsvQ',
    },
    {
        id: 10,
        title: 'Consistently fantastic service',
        body: 'Jim Carter here, and I can vouch for the fantastic service I’ve received. They always deliver quality work.',
        authorName: 'Jim Carter',
        authorSubtitle: 'North Carolina',
        authorImageSrc: imagegoog4,
        authorImageAlt: 'Leslie headshot',
        platformLogoMobile: googleLogoMobile,
        platformLogoDesktop: googleLogoDesktop,
        reviewHref: 'https://g.co/kgs/h7hg4AY',
    },
    {
        id: 20,
        title: 'A company that cares',
        body: 'Lagos Pressure Washing is a good local business operated by good hometown guys who grew up here in NC. Very curtious, professional and detailed when it comes to cleaning the exterior of your home. They will work with you to get you the best possible price and service in the industry. Thanks to Lagos Pressure Washing my home and driveway looks like a new again.',
        authorName: 'TJ Duncan',
        authorSubtitle: 'North Carolina',
        authorImageSrc: imagefb9,
        authorImageAlt: 'Leslie headshot',
        platformLogoMobile: googleLogoMobile,
        platformLogoDesktop: googleLogoDesktop,
        reviewHref: 'https://g.co/kgs/4Zaw7pw',
    },
    {
        id: 11,
        title: "Makes sure you're satisfied",
        body: 'Great job on time! They make sure the customer is satisfied before leaving, which I truly appreciate.',
        authorName: 'Gregory A Lovick',
        authorSubtitle: 'North Carolina',
        authorImageSrc: imagefb3,
        authorImageAlt: 'Leslie headshot',
        platformLogoMobile: facebookLogoMobile,
        platformLogoDesktop: facebookLogoDesktop,
        reviewHref:
            'https://www.facebook.com/gregory.lovick/posts/pfbid0cj77XMR6vcSUiZkVqrnJknVf7q9GdJ9bP672QgpVKQwzQBTe3qhCAm6CeeXk7R7l',
    },
    {
        id: 12,
        title: 'Competitive rates',
        body: 'Derek was quick and efficient when he pressure washed my house. He offered competitive rates and worked around my busy schedule. Highly recommend Lagos Pressure Washing!',
        authorName: 'Zachary Randler',
        authorSubtitle: 'North Carolina',
        authorImageSrc: imagefb10,
        authorImageAlt: 'Leslie headshot',
        platformLogoMobile: facebookLogoMobile,
        platformLogoDesktop: facebookLogoDesktop,
        reviewHref:
            'https://www.facebook.com/zachary.randler.3/posts/pfbid02KF9hTgHK4i2AvTSkqGuNRDEbAgKJYnVsYBU8QLW28R64uADd1BqK4bCkm8eJs4xDl',
    },
    {
        id: 13,
        title: 'Great professionalism',
        body: 'Derek pressure washed our house and driveway and did an amazing job! He communicated well and arrived on time. Highly recommend him for any pressure washing needs.',
        authorName: 'Hulan Williams',
        authorSubtitle: 'North Carolina',
        authorImageSrc: imagefb4,
        authorImageAlt: 'Leslie headshot',
        platformLogoMobile: facebookLogoMobile,
        platformLogoDesktop: facebookLogoDesktop,
        reviewHref:
            'https://www.facebook.com/hulan.williams/posts/pfbid02wP14s5QBQVHs2txXuqK6ch2xnhDWcMQm8L8vmhvT8FBZDBPFKTQ1vHNf3SV1GGzPl',
    },
    {
        id: 14,
        title: 'I always recommend to my friends',
        body: 'My grandson Derek did an amazing job cleaning my house and driveway. I always recommend him to my friends!',
        authorName: 'Angelica Lagos',
        authorSubtitle: 'North Carolina',
        authorImageSrc: imagefb2,
        authorImageAlt: 'Leslie headshot',
        platformLogoMobile: facebookLogoMobile,
        platformLogoDesktop: facebookLogoDesktop,
        reviewHref:
            'https://www.facebook.com/angelica.lagos.142/posts/pfbid023LYVXYHGCVYxeVhBe5HoZgUUwNt9wiAFCoyYsgPzcMsyiGVHz41JY8piSkWeyGkHl',
    },
    {
        id: 15,
        title: 'No lines, just a spotless driveway',
        body: 'Derek with Lagos pressure washing did an awesome job on my mom’s house! I highly recommend him—he doesn’t leave lines on driveways like the average Joe!',
        authorName: 'Andrew McAllister',
        authorSubtitle: 'North Carolina',
        authorImageSrc: imagefb,
        authorImageAlt: 'Leslie headshot',
        platformLogoDesktop: facebookLogoDesktop,
        platformLogoMobile: facebookLogoMobile,
        reviewHref:
            'https://www.facebook.com/andrew.mcallister.3139/posts/pfbid02YaFNu8Qo9qCpdMDckZniFpUFZMdwz1r5SjyM2FAD9NSL6afLVHQ1yXUybxE5YLS2l',
    },
    {
        id: 16,
        title: 'Vinyl siding on house looks brand new',
        body: 'Derek was extremely professional. He was on time and very thorough. The vinyl siding on my house looks brand new! His pricing is competitive and he was able to accommodate my busy schedule. Highly recommend!',
        authorName: 'Lisa McAllister',
        authorSubtitle: 'North Carolina',
        authorImageSrc: imagefb6,
        authorImageAlt: 'Leslie headshot',
        platformLogoMobile: facebookLogoMobile,
        platformLogoDesktop: facebookLogoDesktop,
        reviewHref:
            'https://www.facebook.com/lisa.macartneymcallister/posts/pfbid0xjJjocSkUgML6a6MdQdyHKpCiZmX5g8n36RXrUqYg8cpvmx6rftmX42tQjAXhmFBl',
    },
    {
        id: 17,
        title: 'Went out of his way',
        body: "Derek is a great guy. He went out of his way to do my best friend's mom's house, windows, and driveway for a great price. Actually, he came by himself and did a great job. I recommend you use his service.",
        authorName: 'Real Nottingham',
        authorSubtitle: 'North Carolina',
        authorImageSrc: imagefb8,
        authorImageAlt: 'Leslie headshot',
        platformLogoMobile: facebookLogoMobile,
        platformLogoDesktop: facebookLogoDesktop,
        reviewHref:
            'https://www.facebook.com/brandon.nottingham.3304/posts/pfbid0BTTYDRxWvSzonemcRZC248Cg3QCuMYUXaqD7KR2fLZjcScVtbyEPKNkG83xajXBVl',
    },
    {
        id: 18,
        title: 'Breathed new life into my driveway!',
        body: 'After neglecting my driveway for years, the team came through and breathed new life into my driveway. They were personable, on-time, and did great work. Definitely recommend them and will use them again in the future. 5!',
        authorName: 'Lamont Mayfield',
        authorSubtitle: 'North Carolina',
        authorImageSrc: imagefb5,
        authorImageAlt: 'Leslie headshot',
        platformLogoMobile: facebookLogoMobile,
        platformLogoDesktop: facebookLogoDesktop,
        reviewHref:
            'https://www.facebook.com/lamont.mayfield/posts/pfbid02Cqcmiy2vuvuvS43ZZcZdjUtxZSZZPYWZZusBmXdS9bwYMqviSZFUM6vgRNaCeYHMl',
    },
    {
        id: 19,
        title: 'Fantastic job on a long driveway!',
        body: 'Derek and his crew power washed our very long driveway and did a fantastic job! I have and will continue to recommend Lagos to other people.',
        authorName: 'Michelle Wilder-Baker',
        authorSubtitle: 'North Carolina',
        authorImageSrc: imagefb7,
        authorImageAlt: 'Leslie headshot',
        platformLogoMobile: facebookLogoMobile,
        platformLogoDesktop: facebookLogoDesktop,
        reviewHref:
            'https://www.facebook.com/michelle.wilderbaker/posts/pfbid02zQB5SvMafywKZDtJhE58aoShmuFwaPf9dkot3QksqhuZBnGVecy6A74Bnp7imkYRl',
    },

    // More reviews...
]

hasDuplicateId(reviews)
