import { clsx } from 'clsx'

interface Props {
    className?: string
}

export function Gradient({ className }: Props) {
    return (
        <div className={`${className} relative mx-auto max-w-container`}>
            <div
                className={clsx(
                    'absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0',
                    'bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#cffafe] from-[28%] via-primary-400 via-[70%] to-secondary-700',
                    'rotate-[-10deg] rounded-full blur-3xl'
                )}
            />
        </div>
    )
}
