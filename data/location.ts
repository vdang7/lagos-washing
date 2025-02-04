import { hasDuplicateId } from '@/functions/hasDuplicateId'

export const location = {
    telephone: '919-526-0633',
    email: 'lagospressurewashingllc@gmail.com',
    address: {
        street: '3786 Manhatten Street',
        city: 'Raleigh',
        state: 'North Carolina',
        zip: '73241',
        map: 'https://www.google.com/maps',
    },
    hours: [
        {
            day: 'Monday - Sunday',
            time: '8:00 AM - 7:00 PM',
        },
    ],
}

hasDuplicateId(location.hours)
