type ScrollCallback = () => void

let isListenerActive = false
let isScrolled = false
let callbacks: ScrollCallback[] = []

const handleScroll = () => {
    isScrolled = true
    callbacks.forEach((cb) => cb())
    // Remove the listener after the first scroll
    window.removeEventListener('scroll', handleScroll)
    isListenerActive = false
}

export const registerScrollListener = (callback: ScrollCallback) => {
    if (isScrolled) {
        // If already scrolled, immediately invoke the callback

        callback()
        return
    }

    // Register the callback
    callbacks.push(callback)

    // Add the event listener if not already active
    if (!isListenerActive) {
        window.addEventListener('scroll', handleScroll)
        isListenerActive = true
    }
}

export const unregisterScrollListener = (callback: ScrollCallback) => {
    // Remove the callback
    callbacks = callbacks.filter((cb) => cb !== callback)

    // Cleanup listener if no callbacks are left
    if (callbacks.length === 0 && isListenerActive) {
        window.removeEventListener('scroll', handleScroll)
        isListenerActive = false
    }
}
