<template>
  <div class="home-section-3">
    <div v-show="!isMobile">
      <div class="home-section-3--content">
        <div ref="targetElement1" class="block-first">
          <div class="flex flex-col items-center gap-2">
            <TextScramble
              v-if="isIntersecting1"
              class="max-w-[51rem] mx-auto h-[6rem] overflow-hidden"
              :style="styleText"
              :phrases="['Two Sigil TYPES. Two Temperaments. One Protocol Watching.']"
            />
            <p class="text-[#21E7B2] text-[1.125rem] leading-[120%]">Each day, Monra opens two gates.</p>
          </div>
          <div class="block-first--layer-1">
            <div class="aniFadeUpScale z-[2]">
              <div data-aos="fade-up" data-aos-delay="100" class="">
                <div class="mirror-sigil component-left-glow flex-shrink-0 mt-[20rem]">
                  <img class="size-[5.5rem]" src="@/assets/images/home/section3/mirror-sigil.webp" alt="">
                  <p class="text-gradient">The Mirror Sigil </p>
                  <div class="line-gradient" />
                  <p class="text-content">
                    The Mirror Sigil arrives at dawn — bold, impulsive, for those who act before
                    others even see the move.
                  </p>
                </div>
              </div>
            </div>
            <div class="double-sigil z-[2]">
              <img src="@/assets/images/home/section3/double-sigil.webp" alt="">
            </div>
            <div class="aniFadeDownScale z-[2]">
              <div data-aos="fade-down" data-aos-delay="100" class="">
                <div class="obsibian-sigil component-right-glow flex-shrink-0 mb-[20rem]">
                  <img class="size-[5.5rem]" src="@/assets/images/home/section3/obsibian-sigil.webp" alt="">
                  <p class="text-gradient">The Obsidian Sigil </p>
                  <div class="line-gradient" />
                  <p class="text-content">The Obsidian Sigil appears at dusk — quiet, strategic, rewarding patience and precision.</p>
                </div>
              </div>
            </div>

            <div class="layer-circle-sigil aniSpinLeft">
              <img class="w-full" src="@/assets/images/home/section3/circle-sigil.webp" alt="">
            </div>
            <div class="layer-circle-obsibian aniSpinRight">
              <img src="@/assets/images/home/section3/circle-obsibian.webp" alt="">
            </div>
          </div>
        </div>
        <div ref="targetElement2" class="!mt-[3.25rem] !mb-[5.5rem]">
          <BlurText>
            <div class="flex flex-col justify-center items-center gap-3">
              <p class="text-gradient-blur">
                Both sigils are priced differently. Both may carry something more. But only a few will contain the artifact
                — a hidden key to what lies beyond the surface.
              </p>
              <p class="text-gradient-blur">
                Choose by instinct. Choose by calculation. Or choose both. What matters is not just what you receive — but
                how you’re seen.
              </p>
            </div>
          </BlurText>
        </div>
        <div class="block-third">
          <div class="flex flex-col items-center gap-2">
            <TextScramble
              v-if="isIntersecting2"
              class="max-w-[60rem] mx-auto h-[3.2rem] overflow-hidden"
              :style="styleText"
              :phrases="['Patterns Are Watched. Timing Is Noticed.']"
            />
            <p class="text-[#21E7B2] text-[1.125rem] leading-[120%]">Each day, Monra opens two gates.</p>
          </div>
          <swiper
            class="mt-[2.625rem]"
            :centered-slides="true"
            :loop="true"
            :speed="1000"
            :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }"
            :effect="'coverflow'"
            :coverflow-effect="{
              rotate: -5,
              stretch: -25,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }"
            :breakpoints="{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
                centeredSlides: false,
                loop: true,
              },
              768: {
                slidesPerView: 3.2,
                spaceBetween: 0,
                centeredSlides: true,
                loop: true,
              },
            }"
            :pagination="{ clickable: true }"
            :modules="[EffectCoverflow, Autoplay]"
            @swiper="onSwiper"
            @slide-change="onSwiper"
          >
            <swiper-slide
              v-for="(card, index) in [...listCard, ...listCard, ...listCard]"
              :key="index"
              @click="onSlideClick(index)"
            >
              <CartItemSection3 :data="card" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="layer-4">
        <div class="line-bottom" />
        <img class="size-[2.625rem] md:size-[1.125rem]" src="@/assets/images/home/section2/bottom.svg" alt="">
        <div class="line-bottom rotate-180" />
      </div>
    </div>
    <div v-show="isMobile">
      <div class="home-section-3--content-mb">
        <div ref="targetElement3" class="py-4">
          <div class="flex flex-col items-center gap-2">
            <TextScramble
              v-if="isIntersecting3"
              class="max-w-[51rem] px-4 mx-auto h-[5.5rem] sm:min-h-[3.5rem] overflow-hidden"
              :style="styleText"
              :phrases="['Two Sigil TYPES. Two Temperaments. One Protocol Watching.']"
            />
            <p class="text-[#21E7B2] text-[0.875rem] leading-[120%]">Each day, Monra opens two gates.</p>
          </div>
        </div>
        <div class="layer-mb-1">
          <div class="layer-mb-1--img1">
            <img class="aniSpinRight w-full" src="@/assets/images/home/section3/circle-obsibian.webp" alt="">
          </div>
          <img class="layer-mb-1--img2" src="@/assets/images/home/section3/book-obsidian.webp" alt="">
        </div>
        <div class="p-4 w-full">
          <div class="block-obsibian-mb">
            <div class="flex items-center gap-2">
              <img class="size-[2.625rem]" src="@/assets/images/home/section3/obsibian-sigil.webp" alt="">
              <p class="text-gradient">The Obsidian Sigil</p>
            </div>
            <div class="line-gradient" />
            <p class="text-content">The Obsidian Sigil appears at dusk — quiet, strategic, rewarding patience and precision.</p>
          </div>
        </div>
        <div class="layer-mb-2">
          <div class="layer-mb-2--img1">
            <img class="aniSpinRight w-full" src="@/assets/images/home/section3/circle-sigil.webp" alt="">
          </div>
          <img class="layer-mb-2--img2" src="@/assets/images/home/section3/book-mirror.webp" alt="">
        </div>
        <div class="p-4 w-full">
          <div class="block-mirror-mb">
            <div class="flex items-center gap-2">
              <img class="size-[2.625rem]" src="@/assets/images/home/section3/mirror-sigil.webp" alt="">
              <p class="text-gradient">The Mirror Sigil </p>
            </div>
            <div class="line-gradient" />
            <p class="text-content">The Mirror Sigil arrives at dawn — bold, impulsive, for those who act before others even see the move.</p>
          </div>
        </div>
        <BlurText>
          <div class="flex flex-col justify-center items-center gap-1 md:gap-3">
            <p class="text-gradient-blur">
              Both sigils are priced differently. Both may carry something more. But only a few will contain the artifact
              — a hidden key to what lies beyond the surface.
            </p>
            <p class="text-gradient-blur">
              Choose by instinct. Choose by calculation. Or choose both. What matters is not just what you receive — but
              how you’re seen.
            </p>
          </div>
        </BlurText>
        <div ref="targetElement4" class="py-4">
          <div class="flex flex-col items-center gap-2">
            <TextScramble
              v-if="isIntersecting4"
              class="max-w-[51rem] px-4 mx-auto min-h-[3.5rem] overflow-hidden"
              :style="styleText"
              :phrases="['Patterns Are Watched. Timing Is Noticed.']"
            />
            <p class="text-[#21E7B2] text-[0.875rem] leading-[120%]">Each day, Monra opens two gates.</p>
          </div>
        </div>
        <swiper
          class="mt-4 mb-[3rem]"
          :centered-slides="true"
          :loop="true"
          :speed="1000"
          :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }"
          :effect="'coverflow'"
          :coverflow-effect="{
            rotate: -5,
            stretch: -25,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }"
          :breakpoints="{
            320: {
              slidesPerView: 1.5,
              spaceBetween: -8,
              centeredSlides: true,
              loop: true,
            },
            430: {
              slidesPerView: 2,
              spaceBetween: -8,
              centeredSlides: true,
              loop: true,
            },
          }"
          :pagination="{ clickable: true }"
          :modules="[EffectCoverflow, Autoplay]"
          @swiper="onSwiper"
          @slide-change="onSwiper"
        >
          <swiper-slide
            v-for="(card, index) in [...listCard, ...listCard, ...listCard]"
            :key="index"
            @click="onSlideClick(index)"
          >
            <CartItemSection3 :data="card" />
          </swiper-slide>
        </swiper>
        <div class="layer-4">
          <div class="line-bottom" />
          <img class="size-[2.625rem] md:size-[1.125rem]" src="@/assets/images/home/section2/bottom.svg" alt="">
          <div class="line-bottom rotate-180" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EffectCoverflow, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import cart1 from '@/assets/images/home/section3/cart-item-1.webp'
import cart2 from '@/assets/images/home/section3/cart-item-2.webp'
import cart3 from '@/assets/images/home/section3/cart-item-3.webp'

import TextScramble from '~/components/common/TextScramble.vue'
import CartItemSection3 from '~/components/page/home/section3/cart-item.vue'
import BlurText from '~/components/common/blur-text.vue'

const styleText = computed(() => {
  return {
    color1: '#FFF',
    color2: '#B9BBBD',
    fontSize: !isMobile.value ? '2.625rem' : '1.5rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    lineHeight: '120%',
    textAlign: 'center'
  }
})
const targetElement1 = ref<HTMLElement | null>()
const targetElement2 = ref<HTMLElement | null>()
const targetElement3 = ref<HTMLElement | null>()
const targetElement4 = ref<HTMLElement | null>()
const { isIntersecting: isIntersecting1 } = useInViewport(targetElement1, {
  threshold: 0,
  rootMargin: '0px'
})
const { isIntersecting: isIntersecting2 } = useInViewport(targetElement2, {
  threshold: 0,
  rootMargin: '0px'
})
const { isIntersecting: isIntersecting3 } = useInViewport(targetElement3, {
  threshold: 0,
  rootMargin: '0px'
})
const { isIntersecting: isIntersecting4 } = useInViewport(targetElement4, {
  threshold: 0,
  rootMargin: '0px'
})

const { isMobile } = useIsMobile()
const swiperInstance = ref<any>(null)
const realIndex = ref(0)
const listCard = [
  {
    image: cart1,
    title: 'Fixed mint price. Limited supply',
    content: 'Each session offers a set number of sigils at a fixed price. Once a cycle ends, that supply is permanently closed — no re-entries, no rerolls.'
  },
  {
    image: cart2,
    title: 'Auto-markup resale',
    content: 'After each session, unsold sigils can be relisted in the next drop window at a higher system-defined price — ensuring early participants benefit as demand rises.'
  },
  {
    image: cart3,
    title: 'Session-based trading',
    content: 'Sigils can only be resold in the following matching session (AM or PM), not the one in which they were minted.\n'
  }
]

const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper
  realIndex.value = swiper.realIndex
}
const onSlideClick = (index: number) => {
  if (swiperInstance.value) {
    swiperInstance.value.slideToLoop(index)
    realIndex.value = index
  }
}
const prevSwiper = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev()
  }
}

const nextSwiper = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext()
  }
}
</script>

<style lang="scss">
.home-section-3 {
  @apply relative w-full min-h-[100dvh];
  background-image: url("@/assets/images/home/section3/bg-section-3.webp");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  @media screen and (max-width: 767px) {
    background-image: url("@/assets/images/home/section3/bg-section-3-mb.webp");
  }

  &--content {
    @apply max-w-content pt-[5.25rem] pb-[9.25rem];
    .block-first {
      @apply relative;
      &--layer-1 {
        @apply relative flex items-center gap-0 mt-[5rem];
        .mirror-sigil {
          width: 21.8125rem;
          height: fit-content;
          padding: 1.5rem;
          background-image: url("@/assets/images/home/section3/bg-mirror-sigil.webp");
          background-size: 100% 100%;

          @apply flex flex-col gap-4 justify-center items-center;
          .text-gradient {
            text-align: center;
            font-size: 2rem;
            font-weight: 700;
            line-height: 120%;
            text-transform: capitalize;
            background: linear-gradient(90deg, #7ED2FF 0%, #D0EFFF 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .text-content {
            color: #D0D1D3;
            text-align: center;
            font-size: 1.125rem;
            font-weight: 400;
            line-height: 120%;
          }
        }

        .obsibian-sigil {
          width: 21.8125rem;
          height: fit-content;
          padding: 1.5rem;
          background-image: url("@/assets/images/home/section3/bg-obsibian-sigil.webp");
          background-size: 100% 100%;

          @apply flex flex-col gap-4 justify-center items-center;
          .text-gradient {
            text-align: center;
            font-size: 2rem;
            font-weight: 700;
            line-height: 120%;
            text-transform: capitalize;
            background: linear-gradient(90deg, #A28C6F 0%, #F7F5EE 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .text-content {
            color: #D0D1D3;
            text-align: center;
            font-size: 1.125rem;
            font-weight: 400;
            line-height: 120%;
          }
        }

        .layer-circle-sigil {
          @apply absolute top-[3rem] left-[6rem] size-[25vw] z-[1];
        }

        .layer-circle-obsibian {
          @apply absolute -bottom-12 right-[6rem] size-[30vw] z-[1];
        }
      }
      .line-gradient {
        width: 100%;
        height: 0.0625rem;
        background: linear-gradient(270deg, rgba(126, 210, 255, 0.00) 0%, #D0EFFF 50%, rgba(126, 210, 255, 0.00) 100%);
      }
    }
  }
  .layer-4 {
    @apply w-full flex items-center gap-4;
    @apply absolute bottom-0 z-[11];
    .line-bottom {
      @apply w-full h-[1px];
      background: linear-gradient(90deg, #A28C6F 0%, #F7F5EE 100%);
    }
  }
  &--content-mb {
    .layer-mb-1 {
      aspect-ratio: 1/1;
      @apply relative size-full max-w-[25.25rem] mx-auto px-4;
      &--img1 {
        @apply w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2;
      }
      &--img2 {
        @apply w-[85%] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2;
      }
    }
    .block-obsibian-mb {
      background-image: url("@/assets/images/home/section3/bg-obsibian-sigil.webp");
      background-size: 100% 100%;
      display: flex;
      padding: 1rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      align-self: stretch;
      @apply max-w-[30rem] mx-auto;
      .text-gradient {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 120%;
        text-transform: capitalize;
        background: linear-gradient(90deg, #A28C6F 0%, #F7F5EE 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .line-gradient {
        @apply w-full h-[1px];
        background: linear-gradient(90deg, rgba(162, 140, 111, 0.00) 0%, #F7F5EE 50.48%, rgba(162, 140, 111, 0.00) 100%);
      }
      .text-content {
        color: #D0D1D3;
        text-align: center;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 130%;
      }
    }
    .layer-mb-2 {
      aspect-ratio: 1/1;
      @apply px-4 relative size-full max-w-[25.25rem] mx-auto;
      &--img1 {
        @apply w-[90%] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2;
      }
      &--img2 {
        @apply w-[85%] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2;
      }
    }
    .block-mirror-mb {
      background-image: url("@/assets/images/home/section3/bg-mirror-sigil.webp");
      background-size: 100% 100%;
      display: flex;
      padding: 1rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      align-self: stretch;
      @apply max-w-[30rem] mx-auto;
      .text-gradient {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 120%;
        text-transform: capitalize;
        background: linear-gradient(90deg, #7ED2FF 0%, #D0EFFF 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .line-gradient {
        @apply w-full h-[1px];
        background: linear-gradient(90deg, rgba(162, 140, 111, 0.00) 0%, #F7F5EE 50.48%, rgba(162, 140, 111, 0.00) 100%);
      }
      .text-content {
        color: #D0D1D3;
        text-align: center;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 130%;
      }
    }
    .block-second-mb {
      background: linear-gradient(90deg, rgba(14, 19, 24, 0) 0%, #0E1318 30%, #0E1318 70%, rgba(14, 19, 24, 0) 100%);
      backdrop-filter: blur(20px);
      @apply px-4;
      .line-gradient {
        width: 100%;
        height: 0.0625rem;
        background: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #A28C6F 50%, rgba(162, 140, 111, 0) 100%);
      }
      &--content {
        .text-gradient {
          text-align: center;
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 130%;
          text-transform: capitalize;
          background: linear-gradient(90deg, #A28C6F 0%, #F7F5EE 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
  .text-gradient-blur {
    text-align: center;
    font-weight: 400;
    line-height: 130%;
    text-transform: capitalize;
    background: linear-gradient(90deg, #A28C6F 0%, #F7F5EE 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @apply text-[0.875rem] md:text-[1.125rem];
  }
}


.component-left-glow {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #E8F4FD 0%, #B8E0FF 100%);

  filter: drop-shadow(-40px 0 30px rgba(135, 206, 235, 0.6)) drop-shadow(-80px 0 50px rgba(135, 206, 235, 0.4));

  animation: component-left 3s ease-in-out infinite alternate;
}

@keyframes component-left {
  0% {
    filter: drop-shadow(-30px 0 20px rgba(135, 206, 235, 0.4)) drop-shadow(-60px 0 40px rgba(135, 206, 235, 0.3));
  }
  100% {
    filter: drop-shadow(-50px 0 40px rgba(135, 206, 235, 0.8)) drop-shadow(-100px 0 60px rgba(135, 206, 235, 0.5));
  }
}

.component-right-glow {
  width: 400px;
  height: 300px;
  background: linear-gradient(135deg, #FFF8E1 0%, #FFCC80 100%);
  /* Drop shadow bên phải với màu cam */
  filter: drop-shadow(40px 0 30px rgba(162, 140, 111, 0.6)) drop-shadow(80px 0 50px rgba(162, 140, 111, 0.4));

  animation: component-right 3s ease-in-out infinite alternate;
}

@keyframes component-right {
  0% {
    filter: drop-shadow(30px 0 20px rgba(162, 140, 111, 0.4)) drop-shadow(60px 0 40px rgba(162, 140, 111, 0.3));
  }
  100% {
    filter: drop-shadow(50px 0 40px rgba(162, 140, 111, 0.8)) drop-shadow(100px 0 60px rgba(162, 140, 111, 0.5));
  }
}
</style>
