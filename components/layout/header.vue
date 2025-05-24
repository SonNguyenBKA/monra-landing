<template>
  <header class="header-common">
      <div class="header-common--content">
        <button class="flex items-center justify-center gap-2 md:gap-4">
          <img class="size-8 md:size-[3.25rem]" src="@/assets/icons/logo.svg" alt="">
          <p class="header-common--content__text-logo">MONRA</p>
        </button>
        <div class="hidden md:flex items-center justify-center gap-4">
          <nuxt-link v-for="(link, index) in linkPages" :key="index" :to="link.link" class="link-item" @click="routerLink(link.link, link.coming_soon)">
            {{ link.name }}
          </nuxt-link>
          <common-button text="Launch App" />
        </div>
        <common-button class="block md:!hidden " class-text-btn="!text-[1rem]" type="outline" text="Menu" />
      </div>
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
 @apply w-full py-4 fixed z-[10];
  background: rgba(14, 19, 24, 0.80);
  backdrop-filter: blur(20px);
  &--content {
    @apply max-w-content flex items-center justify-between;
    &__text-logo {
      color: #FFF;
      font-weight: 400;
      text-transform: capitalize;
      @apply text-[1.5rem] md:text-[2rem] tracking-[0.75rem] md:tracking-[1rem];
    }
    .link-item {
      display: flex;
      padding: 0.5rem 1rem;
      justify-content: center;
      align-items: center;
      gap: 0.625rem;
      border-radius: 0.5rem;
      color: #D0D1D3;

      font-size: 1.5rem;
      font-weight: 400;
      text-transform: capitalize;
      &.router-link-exact-active {
        background: #2B3238;
        color: #D0D1D3;
      }

    }
  }
}
</style>
