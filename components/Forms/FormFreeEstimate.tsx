'use client'

import { FormError } from '@/components/Forms/FormError'
import FormInput from '@/components/Forms/FormInput'
import { FormLabel } from '@/components/Forms/FormLabel'
import { FormNetlify } from '@/components/Forms/FormNetlify'
import { IconChevronAnimated } from '@/components/IconChevronAnimated'
import { MyImage } from '@/components/MyImage'
import { MyLink } from '@/components/MyLink'
import { location } from '@/data/location'
import { makeTelephoneHref } from '@/functions/makeTelephoneHref'
import imagefacebook from '@/public/images/minified/global/logos/third-party/facebook.webp'
import imagegoogle from '@/public/images/minified/global/logos/third-party/google.webp'
import imagenextdoor from '@/public/images/minified/global/logos/third-party/nextdoor.webp'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z, ZodType } from 'zod'

interface Props {
    className?: string
}

type FormData = {
    fullName: string
    // firstName: string
    // lastName: string
    email: string
    phoneNumber: string
    propertyAddress: string
    message: string
    foundAt: string | null
    foundAtOther: string
}

// const FIRST_NAME_MAX_LENGTH = 30
// const LAST_NAME_MAX_LENGTH = 30
const FULL_NAME_MAX_LENGTH = 5000
const EMAIL_MAX_LENGTH = 5000
const PHONE_NUMBER_MAX_LENGTH = 5000
const PROPERTY_ADDRESS_MAX_LENGTH = 5000
const MESSAGE_MAX_LENGTH = 5000
const FOUND_AT_MAX_LENGTH = 5000
const FOUND_AT_OTHER_MAX_LENGTH = 5000

const RADIO_INPUT_VALUES = {
    GOOGLE: 'google',
    FACEBOOK: 'facebook',
    TIKTOK: 'tiktok',
    NEXTDOOR: 'nextdoor',
    OTHER: 'other',
}

const schema: ZodType<FormData> = z.object({
    fullName: z
        .string()
        .min(1, 'Your name must contain at least 1 character')
        .max(
            FULL_NAME_MAX_LENGTH,
            `Please make your name shorter than ${FULL_NAME_MAX_LENGTH} characters`
        )
        .trim(),
    // firstName: z
    //     .string()
    //     .min(1, 'Your first name must contain at least 1 character')
    //     .max(
    //         FIRST_NAME_MAX_LENGTH,
    //         `Please make your first name shorter than ${FIRST_NAME_MAX_LENGTH} characters`
    //     )
    //     .trim(),
    // lastName: z
    //     .string()
    //     .min(1, 'Your last name must contain at least 1 character')
    //     .max(
    //         LAST_NAME_MAX_LENGTH,
    //         `Please make your last name shorter than ${LAST_NAME_MAX_LENGTH} characters`
    //     )
    //     .trim(),
    email: z
        .string()
        .email()
        .max(
            EMAIL_MAX_LENGTH,
            `Please make your email shorter than ${EMAIL_MAX_LENGTH} characters`
        )
        .trim(),
    phoneNumber: z
        .string()
        .min(1, 'Your phone number must contain at least 1 character')
        .max(
            PHONE_NUMBER_MAX_LENGTH,
            `Please make your phone number shorter than ${PHONE_NUMBER_MAX_LENGTH} characters`
        )
        .trim(),
    propertyAddress: z
        .string()
        .min(1, 'Your address must contain at least 1 character')
        .max(
            PROPERTY_ADDRESS_MAX_LENGTH,
            `Please make your property address shorter than ${PROPERTY_ADDRESS_MAX_LENGTH} characters`
        )
        .trim(),
    message: z
        .string()
        .min(1, 'Your message must contain at least 1 character')
        .max(
            MESSAGE_MAX_LENGTH,
            `Please make your message shorter than ${MESSAGE_MAX_LENGTH} characters`
        )
        .trim(),
    foundAt: z
        .string()
        .max(
            FOUND_AT_MAX_LENGTH,
            `Please make your response shorter than ${FOUND_AT_MAX_LENGTH} characters`
        )
        .trim()
        .nullable(),
    foundAtOther: z
        .string()
        .max(
            FOUND_AT_OTHER_MAX_LENGTH,
            `Please make your response shorter than ${FOUND_AT_OTHER_MAX_LENGTH} characters`
        )
        .trim(),
})

const inputClassName =
    'block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-400 sm:text-sm/6 outline-none'
const labelClassName = 'block text-sm/6 font-semibold text-gray-900'
const radioInputClassName = 'appearance-none peer'
const radioLabelClassName = `${inputClassName} flex items-center hover:ring-primary-400 hover:ring-2 peer-checked:bg-primary-100 peer-checked:ring-primary-100  peer-checked:shadow-none peer-checked:ring-2`

const RequiredInputGraphic = () => (
    <span className="ml-1 text-[#ff5996]">*</span>
)

export function FormFreeEstimate({ className }: Props) {
    const joinedClassName = clsx(className)

    const [status, setStatus] = useState('')
    const [error, setError] = useState('')
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    const handleRadioChange = (event: any) => {
        if (event.target.id === RADIO_INPUT_VALUES.OTHER) {
            setSelectedValue(RADIO_INPUT_VALUES.OTHER)
        } else {
            setSelectedValue(event.target.value)
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    })

    return (
        <>
            <FormNetlify
                name="free-estimate"
                className={`${joinedClassName} relative`}
                submitHandler={handleSubmit}
                successPage="/thank-you-free-estimate"
                statusState={{ status, setStatus }}
                errorState={{ error, setError }}>
                <div className="mb-8">
                    <p className="text-pretty text-[1.375rem]/8 font-semibold">
                        Ready for your free estimate?
                    </p>
                    <p className="mt-1 text-balance text-sm/6 text-gray-600">
                        Tell us a few details and we&apos;ll provide you with
                        your free estimate or call us at{' '}
                        <MyLink
                            className="whitespace-nowrap font-semibold text-primary-700 transition-colors hover:text-gray-900"
                            href={makeTelephoneHref(location.telephone)}>
                            {location.telephone}
                        </MyLink>
                        .
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <FormLabel
                            className={labelClassName}
                            htmlFor="full-name">
                            Full name
                            <RequiredInputGraphic />
                        </FormLabel>
                        <div className="mt-2.5">
                            <FormInput
                                className={inputClassName}
                                type="text"
                                autoComplete="given-name"
                                placeholder="Jane Doe"
                                maxLength={FULL_NAME_MAX_LENGTH}
                                required={true}
                                {...register('fullName')}
                            />
                            {errors.fullName && (
                                <FormError className="mt-4">
                                    {errors.fullName.message}
                                </FormError>
                            )}
                        </div>
                    </div>
                    {/* <div>
                        <FormLabel
                            className={labelClassName}
                            htmlFor="last-name">
                            Last name
                        </FormLabel>
                        <div className="mt-2.5">
                            <FormInput
                                className={inputClassName}
                                type="text"
                                autoComplete="family-name"
                                placeholder="Doe"
                                maxLength={LAST_NAME_MAX_LENGTH}
                                required={true}
                                {...register('lastName')}
                            />
                            {errors.lastName && (
                                <FormError className="mt-4">
                                    {errors.lastName.message}
                                </FormError>
                            )}
                        </div>
                    </div> */}
                    <div className="sm:col-span-2">
                        <FormLabel className={labelClassName} htmlFor="email">
                            Email
                            <RequiredInputGraphic />
                        </FormLabel>
                        <div className="mt-2.5">
                            <FormInput
                                className={inputClassName}
                                type="email"
                                autoComplete="email"
                                placeholder="jane@email.com"
                                maxLength={EMAIL_MAX_LENGTH}
                                required={true}
                                {...register('email')}
                            />
                            {errors.email && (
                                <FormError className="mt-4">
                                    {errors.email.message}
                                </FormError>
                            )}
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <FormLabel
                            className={labelClassName}
                            htmlFor="phone-number">
                            Phone number
                            <RequiredInputGraphic />
                        </FormLabel>
                        <div className="mt-2.5">
                            <FormInput
                                className={inputClassName}
                                type="tel"
                                autoComplete="tel"
                                placeholder="919-555-5555"
                                maxLength={PHONE_NUMBER_MAX_LENGTH}
                                required={true}
                                {...register('phoneNumber')}
                            />
                            {errors.phoneNumber && (
                                <FormError className="mt-4">
                                    {errors.phoneNumber.message}
                                </FormError>
                            )}
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <FormLabel
                            className={labelClassName}
                            htmlFor="property-address">
                            Property address
                            <RequiredInputGraphic />
                        </FormLabel>
                        <div className="mt-2.5">
                            <FormInput
                                className={inputClassName}
                                type="text"
                                autoComplete="street-address address-level2 address-level1 postal-code"
                                placeholder="123 Fayetteville Street, Raleigh, North Carolina, 27603"
                                maxLength={PROPERTY_ADDRESS_MAX_LENGTH}
                                required={true}
                                {...register('propertyAddress')}
                            />
                            {errors.propertyAddress && (
                                <FormError className="mt-4">
                                    {errors.propertyAddress.message}
                                </FormError>
                            )}
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <FormLabel className={labelClassName} htmlFor="message">
                            How can we help?
                            <RequiredInputGraphic />
                        </FormLabel>
                        <div className="mt-2.5">
                            <textarea
                                rows={4}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-400 sm:text-sm/6"
                                defaultValue={''}
                                placeholder="Tell us about your needs and timeline"
                                maxLength={MESSAGE_MAX_LENGTH}
                                required
                                {...register('message')}
                            />
                            {errors.message && (
                                <FormError className="mt-4">
                                    {errors.message.message}
                                </FormError>
                            )}
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <FormLabel className={labelClassName} htmlFor="foundAt">
                            Where did you find us?
                            <RequiredInputGraphic />
                        </FormLabel>
                        <div className="mt-2.5 flex flex-wrap gap-x-6 gap-y-4">
                            <div className="flex items-center">
                                <input
                                    id={RADIO_INPUT_VALUES.FACEBOOK}
                                    type="radio"
                                    value={RADIO_INPUT_VALUES.FACEBOOK}
                                    className={radioInputClassName}
                                    checked={
                                        selectedValue ===
                                        RADIO_INPUT_VALUES.FACEBOOK
                                    }
                                    onClick={handleRadioChange}
                                    {...register('foundAt')}
                                />
                                <label
                                    htmlFor={RADIO_INPUT_VALUES.FACEBOOK}
                                    className={radioLabelClassName}>
                                    <MyImage
                                        src={imagefacebook}
                                        sizes="32px"
                                        alt=""
                                        className="mr-2 size-4"></MyImage>
                                    Facebook
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id={RADIO_INPUT_VALUES.GOOGLE}
                                    type="radio"
                                    value={RADIO_INPUT_VALUES.GOOGLE}
                                    className={radioInputClassName}
                                    checked={
                                        selectedValue ===
                                        RADIO_INPUT_VALUES.GOOGLE
                                    }
                                    onClick={handleRadioChange}
                                    {...register('foundAt')}
                                />
                                <label
                                    htmlFor={RADIO_INPUT_VALUES.GOOGLE}
                                    className={radioLabelClassName}>
                                    <MyImage
                                        src={imagegoogle}
                                        sizes="32px"
                                        alt=""
                                        className="mr-2 size-4"></MyImage>
                                    Google
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id={RADIO_INPUT_VALUES.TIKTOK}
                                    type="radio"
                                    value={RADIO_INPUT_VALUES.TIKTOK}
                                    className={radioInputClassName}
                                    checked={
                                        selectedValue ===
                                        RADIO_INPUT_VALUES.TIKTOK
                                    }
                                    onClick={handleRadioChange}
                                    {...register('foundAt')}
                                />
                                <label
                                    htmlFor={RADIO_INPUT_VALUES.TIKTOK}
                                    className={radioLabelClassName}>
                                    <div className="relative mr-2 rounded-full bg-gray-900 p-1">
                                        <svg
                                            className="size-2.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512">
                                            <path
                                                fill="#fff"
                                                d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"
                                            />
                                        </svg>
                                    </div>
                                    TikTok
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id={RADIO_INPUT_VALUES.NEXTDOOR}
                                    type="radio"
                                    value={RADIO_INPUT_VALUES.NEXTDOOR}
                                    className={radioInputClassName}
                                    checked={
                                        selectedValue ===
                                        RADIO_INPUT_VALUES.NEXTDOOR
                                    }
                                    onClick={handleRadioChange}
                                    {...register('foundAt')}
                                />
                                <label
                                    htmlFor={RADIO_INPUT_VALUES.NEXTDOOR}
                                    className={radioLabelClassName}>
                                    <MyImage
                                        src={imagenextdoor}
                                        sizes="35.2px"
                                        alt=""
                                        className="mr-2 size-[1.1rem]"></MyImage>
                                    Next Door
                                </label>
                            </div>
                            <div className="flex items-center">
                                <FormInput
                                    id={RADIO_INPUT_VALUES.OTHER}
                                    className={`appearance-none hover:ring-2 ${inputClassName} ${selectedValue === RADIO_INPUT_VALUES.OTHER ? 'ring-2 ring-primary-200' : ''}`}
                                    type="text"
                                    autoComplete="found-at-other"
                                    placeholder="Other..."
                                    maxLength={FOUND_AT_OTHER_MAX_LENGTH}
                                    required={false}
                                    onClick={handleRadioChange}
                                    {...register('foundAtOther')}
                                />
                            </div>
                        </div>
                        {errors.foundAt && (
                            <FormError className="mt-4">
                                {errors.foundAt.message}
                            </FormError>
                        )}
                        {errors.foundAtOther && (
                            <FormError className="mt-4">
                                {errors.foundAtOther.message}
                            </FormError>
                        )}
                    </div>
                </div>
                <div className="mt-8 flex justify-end">
                    <button
                        type="submit"
                        className="button-primary rounded-button-with-icon-xl rounded-button-with-icon [background-image:--buttonGradient] hover:[background-image:--buttonHoverGradient]">
                        Get my free estimate
                        <IconChevronAnimated
                            className="button-icon-mr ml-2.5"
                            color="stroke-[--buttonIconColor] group-hover:stroke-[--buttonIconHoverColor]"
                        />
                    </button>
                </div>
            </FormNetlify>
        </>
    )
}
