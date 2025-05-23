<template>
  <suspense>
    <template #default>
      <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
      </NuxtLayout>
    </template>
  </suspense>
</template>

<script setup lang="ts">
import { nextTick, onMounted } from 'vue'
import { trans } from '~/utils/utils'

// const i18n = useI18n()

// useHead({
//   htmlAttrs: { lang: i18n.locale.value },
// })
useSeoMeta({
  ogImage: '/assets/image.png',
  ogDescription: trans('description')
})

onMounted(async () => {
  const { locale, setLocale, t } = useI18n()
  await nextTick()
  const cookie = useCookie('i18n_lang')

  if (cookie.value && cookie.value !== locale.value) {
    setLocale(cookie.value)
  } else {
    setLocale('en')
    useCookie('i18n_lang').value = 'en'
  }
})
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
