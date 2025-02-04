'use client'
import { FormError } from '@/components/Forms/FormError'
import FormInput from '@/components/Forms/FormInput'
import { FormLabel } from '@/components/Forms/FormLabel'
import { FormNetlify } from '@/components/Forms/FormNetlify'
import { IconChevronAnimated } from '@/components/IconChevronAnimated'
import { CheckCircleIcon } from '@heroicons/react/16/solid'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z, ZodType } from 'zod'

interface Props {
    className?: string
}

type FormData = {
    email: string
}

const EMAIL_MAX_LENGTH = 254
const schema: ZodType<FormData> = z.object({
    email: z
        .string()
        .email()
        .max(
            EMAIL_MAX_LENGTH,
            `Please make your email shorter than ${EMAIL_MAX_LENGTH} characters`
        )
        .trim(),
})

export function FormNewsletter({ className }: Props) {
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
                name="newsletter"
                className={joinedClassName}
                submitHandler={handleSubmit}
                statusState={{ status, setStatus }}
                errorState={{ error, setError }}
                successPage="">
                {status !== 'ok' && (
                    <>
                        <p className="mb-6 text-sm/6 text-primary-300">
                            Be the first to hear from us.
                        </p>
                        <div className="flex items-start gap-x-4 gap-y-8 lg:flex-col lg:items-stretch min-[1147px]:flex-row min-[1147px]:items-start">
                            <FormLabel
                                htmlFor="email-address"
                                className="sr-only">
                                Email address
                            </FormLabel>
                            <FormInput
                                id="email-address"
                                className="w-full min-w-0 appearance-none rounded-full border-0 bg-white/5 px-3 py-1.5 text-sm/6 text-white shadow-sm outline-none ring-1 ring-inset ring-white/10 placeholder:text-primary-300 focus:ring-2 focus:ring-inset focus:ring-primary-400"
                                type="email"
                                autoComplete="email"
                                placeholder="Enter your email"
                                maxLength={EMAIL_MAX_LENGTH}
                                required={true}
                                {...register('email')}
                            />
                            <div className="flex-shrink-0">
                                <button
                                    type="submit"
                                    className="button-outline-primary-light rounded-button-with-icon-xl lg:rounded-button-with-icon-lg rounded-outline-button-with-icon group flex w-full items-center justify-center">
                                    Yes, please!
                                    <IconChevronAnimated
                                        className="button-icon-mr ml-2.5"
                                        color="stroke-[--buttonIconColor] group-hover:stroke-[--buttonIconHoverColor]"
                                    />
                                </button>
                                <div className="mt-4 flex items-center justify-center gap-x-2 text-xs text-primary-300">
                                    <CheckCircleIcon className="h-4 w-4" />
                                    <span>No spam ever</span>
                                </div>
                            </div>
                        </div>
                        {errors.email && (
                            <FormError className="mt-4 lg:ml-0.5">
                                {errors.email.message}
                            </FormError>
                        )}
                    </>
                )}
                {status === 'ok' && (
                    <>
                        <p className="mt-6 text-balance text-sm/6 font-medium text-primary-300">
                            Thank you for subscribing to our email updates. Stay
                            tuned for updates.
                        </p>
                    </>
                )}
            </FormNetlify>
        </>
    )
}
