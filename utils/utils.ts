import appStore from '~/store/app'

export function getImg(path: string) {
  return new URL(`../assets/images/${path}`, import.meta.url)
}

export function getIcon(path: string) {
  return new URL(`../assets/icons/${path}`, import.meta.url)
}

export const trans = (key: string, params: any = []) => {
  const nuxtApp = useNuxtApp()
  const i18n = nuxtApp.$i18n
  return i18n.t(key, params)
}

export function genNonce(length = 32) {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

export const getTextLangOneOrMany = (count, textOne, textMany) => {
  if (getCurrentLang() === 'en') {
    return Number(count ?? 0) > 1 ? textMany : textOne
  }
  return textOne
}

export const getCurrentLang = () => {
  const store = appStore()
  if (store.currentLang) {
    return store.currentLang
  }
  const nuxtApp = useNuxtApp()
  const i18n = nuxtApp.$i18n
  return i18n.locale.value ?? useRuntimeConfig().public.DEFAULT_LANG
}

export const messageInfo = (message: string) => {
  ElMessage({
    message: message,
    type: 'info',
    grouping: true,
    offset: 120,
  })
}

export const routingDapp = () => {
  window.open(useRuntimeConfig().public.DAPP_URL, '_blank')
}

