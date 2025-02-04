interface Props {
    className?: string
    children: string
}

export function Lead({ className, children }: Props) {
    return <p className={`${className} text-xl/8 text-gray-700`}>{children}</p>
}
