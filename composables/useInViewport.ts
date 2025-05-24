export const useInViewport = (target, options = {}) => {
    const isIntersecting = ref(false)
    const intersectionRatio = ref(0)

    const defaultOptions = {
        threshold: 0.1,
        rootMargin: '0px',
        ...options
    }

    let observer = null

    onMounted(() => {
        if (!target.value) return

        observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            isIntersecting.value = entry.isIntersecting
            intersectionRatio.value = entry.intersectionRatio
        }, defaultOptions)

        observer.observe(target.value)
    })

    onUnmounted(() => {
        if (observer) {
            observer.disconnect()
        }
    })

    return {
        isIntersecting: readonly(isIntersecting),
        intersectionRatio: readonly(intersectionRatio)
    }
}
