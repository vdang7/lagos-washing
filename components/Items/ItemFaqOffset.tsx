export interface InterfaceItemFaqOffset {
    id: number
    index?: number
    title: string | React.ReactNode
    body: React.ReactNode
}

export function ItemFaqOffset({ title, body }: InterfaceItemFaqOffset) {
    return (
        <div>
            <dt className="text-base/7 font-semibold text-[--itemTitleColor]">
                {title}
            </dt>
            <dd className="mt-2 text-base/7 text-[--itemBodyColor]">{body}</dd>
        </div>
    )
}
