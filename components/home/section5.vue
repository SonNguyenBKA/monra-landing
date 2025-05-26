<template>
  <div v-show="!isMobile" class="home-section-5" ref="targetElement1">
    <div class="bg-section-5 h-full w-full">
      <img class="object-cover h-full w-full absolute top-0 left-0 z-[-1] " style="transform: scale(1.05); object-position: top"
           src="@/assets/images/home/section5/bg-section-5.webp" alt=""
      >
    </div>
    <div class="bg-character relative z-[6]">
      <img class="w-full absolute !z-[10] bottom-[-3rem] left-1/2 -translate-x-1/2" src="@/assets/images/home/section5/img-character.webp" alt="">
    </div>
    <div class="w-[90%] absolute top-[35%] left-1/2 -translate-x-1/2 z-[1]">
      <img class="w-full aniSpinLeft" src="@/assets/images/home/section5/ring.webp" alt="">
    </div>
    <div class="absolute top-[3.75rem] left-0 w-full h-full z-[2]">
      <BlurText class="max-w-[70rem] mx-auto">
        <div class="flex flex-col justify-center items-center gap-2">
          <TextScramble v-if="isIntersecting1" :phrases="['The Next Phase Is Already Listening']" :style="styleTextScramble" />
          <p class="text-gradient">Monra doesn’t move in a straight line. It deepens — responding to patterns, shifting with behavior, and
            offering more only to those who keep moving forward. The surface is behind you. What lies ahead won’t be shown
            to everyone — only to those still moving.</p>
        </div>
      </BlurText>
    </div>
  </div>
  <div v-show="isMobile" class="home-section-5-mb" ref="targetElement2">
    <BlurText class="max-w-[70rem] mx-auto px-2">
      <div class="flex flex-col justify-center items-center gap-2">
        <TextScramble v-if="isIntersecting2" :phrases="['The Next Phase Is Already Listening']" :style="styleTextScramble" />
        <p class="text-gradient">Monra doesn’t move in a straight line. It deepens — responding to patterns, shifting with behavior, and
          offering more only to those who keep moving forward. The surface is behind you. What lies ahead won’t be shown
          to everyone — only to those still moving.</p>
      </div>
    </BlurText>
    <div class="">
      <div class=" w-full absolute bottom-[-8rem] xs:!bottom-[-30%] aniSpinRight">
        <img class="" style="transform: scale(1.1)" src="@/assets/images/home/section5/ring.webp" alt="">
      </div>
      <img class="absolute w-full bottom-0 left-1/2 -translate-x-1/2" src="@/assets/images/home/section5/img-character-mb.webp" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
import BlurText from '~/components/common/blur-text.vue'
import TextScramble from '~/components/common/TextScramble.vue'
import { useInViewport } from '~/composables/useInViewport'

const isMobile = useMobile()
const styleTextScramble = computed(() => {
  return {
    fontSize: !isMobile.value ? '2.625rem' : '1.5rem',
    fontWeight: 700,
    lineHeight: '120%',
    textTransform: 'uppercase',
    color1: '#FFF',
    color2: '#B9BBBD',
    textAlign: 'center'
  }
})
onMounted(() => {
  const homeSection5 = document.querySelector('.home-section-5') as HTMLElement
  homeSection5.addEventListener('mousemove', function (event) {
    parallaxed(event)
  })

  function parallaxed (e: any) {
    if (!isMobile.value) {
      const amountMovedX = (e.clientX * -0.15 / 16)
      const amountMovedY = (e.clientY * -0.15 / 16)
      const x = document.querySelectorAll('.bg-section-5')
      const y = document.querySelectorAll('.bg-character')
      let i
      for (i = 0; i < x.length; i++) {
        x[i].style.transform = 'translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
      }
      for (i = 0; i < y.length; i++) {
        y[i].style.transform = 'translate(' + -amountMovedX + 'px,' + -amountMovedY + 'px)'
      }
    } else {
      const homeSection5 = document.querySelector('.bg-section-5')
      if (homeSection5) {
        homeSection5.style.transform = 'translate(' + 0 + 'px,' + 0 + 'px)'
      }
    }
  }
})

const targetElement1 = ref(null)
const targetElement2 = ref(null)
const { isIntersecting: isIntersecting1 } = useInViewport(targetElement1, {
  rootMargin: '0px',
  threshold: 0.5
})
const { isIntersecting: isIntersecting2 } = useInViewport(targetElement2, {
  rootMargin: '0px',
  threshold: 0.5
})
</script>

<style lang="scss">
.home-section-5 {
  @apply relative h-[100dvh] overflow-hidden;
  @apply bg-[70%_center] md:bg-[center_top];
  min-height: 55rem;
  max-height: 65rem;
  @media screen and (max-width: 767px) {
    background-image: url('@/assets/images/home/section5/bg-section-5.webp');
    background-size: cover;
    background-repeat: no-repeat;
  }
  .text-gradient {
    color: #FFF;
    text-align: center;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 125%;
    text-transform: capitalize;
    background: linear-gradient(90deg, #A28C6F 0%, #F7F5EE 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
.home-section-5-mb {
  min-height: 30rem;
  max-height: 50rem;
  background-image: url('@/assets/images/home/section5/bg-section-5-mb.webp');
  background-size: 100% 100%;
  height: calc(100dvh - 6rem);
  @apply relative overflow-hidden;

  .text-gradient {
    color: #FFF;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 125%;
    text-transform: capitalize;
    background: linear-gradient(90deg, #A28C6F 0%, #F7F5EE 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
