<template>
  <header class="header-common">

  </header>
</template>

<script setup lang="ts">
import { useIsMobile } from '~/composables/use-is-mobile'
import { messageInfo } from '~/utils/utils'

const { t } = useI18n()

const route = useRoute()

const { isMobile } = useIsMobile()
const linkPages = [
  { name: t('Home'), link: '/', coming_soon: false },
  { name: t('About'), link: '/about', coming_soon: true },
]
onMounted(() => {
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header-common') as HTMLElement
    if (window.scrollY > 50) {
      header.classList.add('header-scrolled')
    } else {
      header.classList.remove('header-scrolled')
    }
  })
})
const setLang = (lang: string) => {
  useCookie('i18n_lang').value = lang
  window.location.reload()
}
const toggleLang = () => {
  const langs = ['en', 'ch']
  const currentLang = useCookie('i18n_lang').value
  const otherLang = currentLang === langs[0] ? langs[1] : langs[0]
  setLang(otherLang)
}
const langText = computed(() => {
  const langs = ['en', 'ch']
  return useCookie('i18n_lang').value === langs[0] ? langs[1] : langs[0]
})
const routerLink = (link: string, coming_soon: boolean) => {
  if (coming_soon) {
    messageInfo(t('coming_soon'))
    return
  }
  if (route.path === '/') {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  useRouter().push(link)
}
</script>

<style lang="scss">
.header-common {

}
</style>
