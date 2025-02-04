'use client'

import { FormError } from '@/components/Forms/FormError'
import FormInput from '@/components/Forms/FormInput'
import { FormLabel } from '@/components/Forms/FormLabel'
import { FormNetlify } from '@/components/Forms/FormNetlify'
import { IconChevronAnimated } from '@/components/IconChevronAnimated'
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
    message: string
}

const FULL_NAME_MAX_LENGTH = 1000
// const FIRST_NAME_MAX_LENGTH = 30
// const LAST_NAME_MAX_LENGTH = 30
const EMAIL_MAX_LENGTH = 254
const PHONE_NUMBER_MAX_LENGTH = 30
const MESSAGE_MAX_LENGTH = 1000

const inputClassName =
    'block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-400 sm:text-sm/6 outline-none'
const labelClassName = 'block text-sm/6 font-semibold text-gray-900'

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
    message: z
        .string()
        .min(1, 'Your message must contain at least 1 character')
        .max(
            MESSAGE_MAX_LENGTH,
            `Please make your message shorter than ${MESSAGE_MAX_LENGTH} characters`
        )
        .trim(),
})

const RequiredInputGraphic = () => (
    <span className="ml-1 text-[#ff5996]">*</span>
)

export function FormContact({ className }: Props) {
    const joinedClassName = clsx(className)

    const [status, setStatus] = useState('')
    const [error, setError] = useState('')

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
                name="contact"
                className={joinedClassName}
                submitHandler={handleSubmit}
                statusState={{ status, setStatus }}
                errorState={{ error, setError }}>
                <div className="mb-8">
                    <h1 className="text-[1.375rem] font-semibold">
                        Contact us
                    </h1>
                    <p className="mt-1 text-sm/6 text-gray-600">
                        Tell us a few details and we&apos;ll recommend the best
                        solution
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
                            htmlFor="first-name">
                            First name
                        </FormLabel>
                        <div className="mt-2.5">
                            <FormInput
                                className={inputClassName}
                                type="text"
                                autoComplete="given-name"
                                placeholder="Jane"
                                maxLength={FIRST_NAME_MAX_LENGTH}
                                required={true}
                                {...register('firstName')}
                            />
                            {errors.firstName && (
                                <FormError className="mt-4">
                                    {errors.firstName.message}
                                </FormError>
                            )}
                        </div>
                    </div> */}
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
                        <FormLabel className={labelClassName} htmlFor="message">
                            Message
                            <RequiredInputGraphic />
                        </FormLabel>
                        <div className="mt-2.5">
                            <textarea
                                rows={4}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-400 sm:text-sm/6"
                                defaultValue={''}
                                placeholder="Tell us about your needs"
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
                </div>
                <div className="mt-8 flex justify-end">
                    <button
                        type="submit"
                        className="button-primary rounded-button-with-icon-xl rounded-button-with-icon [background-image:--buttonGradient] hover:[background-image:--buttonHoverGradient]">
                        Send message
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
