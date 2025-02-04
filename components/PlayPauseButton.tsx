import { PauseIcon } from '@heroicons/react/20/solid'
import { PlayIcon } from '@heroicons/react/24/solid'

interface Props {
    className?: string
    playIconClassName?: string
    pauseIconClassName?: string
    onClick: any
    isVideoPaused: boolean
}

export function PlayPauseButton({
    className,
    playIconClassName,
    pauseIconClassName,
    onClick,
    isVideoPaused,
}: Props) {
    return (
        <>
            <div
                onClick={onClick}
                className={`${className} flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#D2D2D7] bg-opacity-[0.64] text-black/60 [transition-property:opacity,color] hover:bg-[#E4E4E7] hover:bg-opacity-70 hover:text-black/70`}>
                {isVideoPaused ? (
                    <PlayIcon className={`h-5 w-5 ${playIconClassName}`} />
                ) : (
                    <PauseIcon className={`h-5 w-5 ${pauseIconClassName}`} />
                )}
            </div>
        </>
    )
}
