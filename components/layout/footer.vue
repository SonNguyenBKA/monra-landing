<template>
  <footer ref="targetElement" class="footer-common" :class="{active: mounted}">
    <div class="footer-common--content max-w-content" data-aos="fade-up">
      <div class="flex flex-col items-center justify-center gap-4">
        <img class="size-[4rem] md:size-[7.5rem]" src="@/assets/icons/logo.svg" alt="">
        <p class="text-logo">MONRA</p>
      </div>
      <p class="text-title">The Unknown Belongs to the Chosen</p>
      <div class="w-full md:w-fit grid grid-cols-2 gap-2 md:gap-6">
        <common-button class="md:!py-4 !px-8" class-text-btn="mobile:!text-[1rem]" text="Launch App" />
        <common-button class="md:!py-4 !px-8" class-text-btn="mobile:!text-[1rem]" type="outline" text="Company" />
      </div>
      <div class="list-link">
        <button v-for="item in listLink" class="list-link--item" @click="handleLink(item.link)">
          {{ item.name }}
        </button>
      </div>
      <div class="w-full flex mobile:flex-col-reverse justify-between items-center gap-6 md:gap-4">
        <p class="text-info">©2025 Company. All rights reserved.</p>
        <div class="flex items-center gap-4">
          <a v-for="item in socialLinks" @click="handleLinkSocial(item.link)">
            <img class="size-[2.625rem]" :src="item.icon" alt="">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import iconX from '@/assets/icons/x.svg'
import iconTele from '@/assets/icons/tele.svg'

const targetElement = ref()
const { isIntersecting } = useInViewport(targetElement, {
  threshold: 0,
  rootMargin: '0px'
})

const listLink = ref([
  {
    name: 'Privacy',
    link: null
  },
  {
    name: 'Terms of use',
    link: null
  },
  {
    name: 'Pitch deck',
    link: null
  }
])
const socialLinks = ref([
  {
    name: 'x',
    icon: iconX,
    link: null
  },
  {
    name: 'Discord',
    icon: iconTele,
    link: null
  },
  {
    name: 'Telegram',
    icon: iconTele,
    link: null
  }
])
const handleLink = (link: any) => {
  if (!link) {
    return messageInfo('Coming soon')
  }
}

const handleLinkSocial = (link: any) => {
  if (!link) {
    return messageInfo('Coming soon')
  } else {
    window.open(link, '_blank')
  }
}
const mounted = ref(false)
const idTimeOut = ref()
watch(isIntersecting, (val) => {
  if (val) {
    idTimeOut.value = setTimeout(() => {
      mounted.value = true
    }, 2000)
  } else {
    clearTimeout(idTimeOut.value)
  }
}, { immediate: true })
</script>

<style lang="scss">
.footer-common {
  background-size: 100% 100%;
  padding: 2.625rem 0;
  width: 100%;
  overflow: hidden;
  background-image: url("@/assets/images/footer/bg-footer-dark.webp");
  position: relative;

  @media screen and (max-width: 768px) {
    background-image: url("@/assets/images/footer/bg-footer-dark-mb.webp");
    background-size: cover;
  }

  &.active {
    background-image: radial-gradient(ellipse 120% 80% at 50% -20%, #21E7B2 0%, rgba(33, 231, 178, 0.4) 25%, rgba(33, 231, 178, 0.1) 50%, transparent 75%), url("@/assets/images/footer/bg-footer-dark.webp");
  }

  &--content {
    @apply flex flex-col items-center justify-center gap-6 md:gap-[2.625rem];
    .text-logo {
      color: #FFF;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 1rem;
      text-transform: capitalize;
      @apply text-[1.5rem] md:text-[2rem];
    }

    .text-title {
      text-align: center;
      font-weight: 700;
      line-height: 125%;
      text-transform: uppercase;
      background: linear-gradient(90deg, #FFF 0%, #B9BBBD 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      @apply text-[2rem] md:text-[2.625rem];
    }

    .list-link {
      @apply flex justify-center items-center py-6 w-full;
      border-top: 1px solid #42494E;
      border-bottom: 1px solid #42494E;
      backdrop-filter: blur(10px);

      &--item {
        &:first-child {
          border-left: none;
        }

        width: 14rem;
        border-left: 1px solid #42494E;

        color: #FFF;
        text-align: center;
        font-weight: 400;
        line-height: 125%;
        text-transform: capitalize;
        @apply text-[0.875rem] md:text-[1.5rem];
      }
    }

    .text-info {
      color: #FFF;
      text-align: center;
      font-weight: 400;
      line-height: 125%;
      @apply text-[0.875rem] md:text-[1.125rem];
    }
  }
}
</style>
