export function useMobile() {
  const result = ref(+window.innerWidth < 768)

  function handleResize() {
    result.value = +window.innerWidth < 768
  }

  onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
  return result
}
