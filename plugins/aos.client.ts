import AOS from 'aos'
import 'aos/dist/aos.css' // Import CSS của AOS

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== 'undefined') {
    const offsetValue = -100
    AOS.init({
      disable: false, // 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      // Settings có thể override cho từng element
      offset: offsetValue, // offset (px) từ trigger point
      delay: 0, // 0-3000ms, step 50ms
      duration: 1000, // 0-3000ms, step 50ms
      easing: 'ease', // default easing
      once: false, // animation chỉ chạy 1 lần
      mirror: false, // animate khi scroll ngược lại
      anchorPlacement: 'top-bottom'
    })
    // Làm mới AOS khi trang được mount
    nuxtApp.hook('app:mounted', () => {
      AOS.refresh()
    })
  }
})
