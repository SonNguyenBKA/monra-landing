import AOS from 'aos'
import 'aos/dist/aos.css' // Import CSS của AOS

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== 'undefined') {
    const offsetValue = -200
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: false,
      mirror: true,
      offset: offsetValue
    })
    // Làm mới AOS khi trang được mount
    nuxtApp.hook('app:mounted', () => {
      AOS.refresh()
    })
  }
})
