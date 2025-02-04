'use client'

import { MyImage } from '@/components/MyImage'
import { app } from '@/data/app'
import imageHeadshot from '@/public/images/minified/global/founder/founder-headshot.webp'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Transition,
} from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

export interface InterfaceItemFaq {
    id: number
    index?: number
    title: string | React.ReactNode
    body: React.ReactNode
}

export function ItemFaq(props: InterfaceItemFaq) {
    return (
        <Disclosure defaultOpen={props.index === 0} as="div" className="pt-6">
            {({ open }) => (
                <>
                    <dt>
                        <DisclosureButton
                            className={`flex w-full items-start justify-between text-left ${
                                open
                                    ? 'text-primary-700'
                                    : 'text-gray-900 transition-colors hover:text-primary-600'
                            }`}>
                            <span className="text-pretty text-base/7 font-semibold">
                                {props.title}
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                                {open ? (
                                    <MinusSmallIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <PlusSmallIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                )}
                            </span>
                        </DisclosureButton>
                    </dt>
                    <Transition
                        as="dd"
                        className="duration-300 ease-in-out [transition-property:opacity,transform,max-height]"
                        enterFrom="opacity-0 -translate-y-1 max-h-0"
                        enterTo="opacity-100 translate-y-0 max-h-[2000px]"
                        leaveFrom="opacity-100 translate-y-0 max-h-[2000px]"
                        leaveTo="opacity-0 -translate-y-1 max-h-0">
                        <DisclosurePanel className="mt-2 pr-12">
                            <div className="text-sm/6 text-gray-600">
                                <div className="relative inline-flex items-center mt-4 mb-3">
                                    <span className="relative inline-block">
                                        <MyImage
                                        src={imageHeadshot}
                                        sizes="72px"
                                        alt={app.founderFullName}
                                        className="size-9 rounded-full"
                                        />
                                        <span className="absolute right-0 top-0 block size-2 rounded-full bg-[#16a34a] ring-2 ring-gray-50" />
                                    </span>
                                    <div className="ml-3">
                                        <p className="text-[0.7875rem]/none  font-medium text-primary-700">
                                            {app.founderFullName}
                                        </p>
                                        <p className="text-[0.675rem]/none text-gray-900 mt-1.5">
                                            Founder, {app.companyName}
                                        </p>
                                    </div>
                                </div>
                                {props.body}
                            </div>
                        </DisclosurePanel>
                    </Transition>
                </>
            )}
        </Disclosure>
    )
}
