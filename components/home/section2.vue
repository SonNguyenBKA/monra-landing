<template>
  <div class="home-section-2" ref="targetElement">
    <div v-if="!isMobile" class="home-section-2--content">
      <div class="wrapper-layer-1" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
        <img class="layer-1" src="@/assets/images/home/section2/char-1.webp" alt="">
      </div>
      <div class="wrapper-layer-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
        <img class="layer-2" src="@/assets/images/home/section2/char-2.webp" alt="">
      </div>
      <div class="layer-3">
        <div class="layer-3--content">
          <div class="flex flex-col items-flex items-center justify-center gap-6">
            <div class="flex items-center gap-4">
              <img class="size-[3.25rem]" src="@/assets/icons/logo.svg" alt="">
              <p class="text-white text-[2rem] tracking-[1rem] uppercase">MONRA</p>
            </div>
            <div class="line-gradient"></div>
            <div class="h-[6rem] overflow-hidden">
              <TextScramble v-if="isIntersecting" :phrases="['MONRA is a living protocol that opens with a simple act']" :style="styleTextScramble" />
            </div>
            <p class="text-content">Minting and trading NFT sigils. But beneath the surface, something waits. Some sigils
              carry hidden
              artifacts — keys that unlock a deeper layer: a game that reveals itself only to those chosen. Over time, the
              system evolves further. Behavior becomes input. Actions train outcomes. And what began as trade becomes
              something else entirely — a marketplace where intelligence is currency, and models are made, not bought.</p>
            <div class="line-gradient"></div>
            <common-button type="outline" class="!py-4 !px-8 w-fit" class-text-btn="!text-[1.5rem]"
                           text="Enter the Protocol"/>
          </div>
          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" class="icon-object-1-wrapper">
            <img class="icon-object-1 floating-3d" src="@/assets/images/home/section2/obj-1.webp" alt="">
          </div>

          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" class="icon-object-2-wrapper">
            <img class="icon-object-2 floating-breath" src="@/assets/images/home/section2/obj-2.webp" alt="">
          </div>

          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" class="icon-object-3-wrapper">
            <img class="icon-object-3 floating-sway" src="@/assets/images/home/section2/obj-3.webp" alt="">
          </div>
        </div>
      </div>
    </div>
    <div v-else class="home-section-2--content-mb">
      <div class="layer-3-mb">
        <div class="flex flex-col items-flex items-center justify-center gap-4">
          <div class="flex items-center gap-2">
            <img class="size-[2rem]" src="@/assets/icons/logo.svg" alt="">
            <p class="text-white text-[1.5rem] tracking-[0.75rem] uppercase">MONRA</p>
          </div>
          <div class="line-gradient"></div>
          <div class="h-[5.25rem] overflow-hidden">
            <TextScramble v-if="isIntersecting" class="px-4" :phrases="['MONRA is a living protocol that opens with a simple act']" :style="styleTextScramble" />
          </div>
          <p class="text-content">Minting and trading NFT sigils. But beneath the surface, something waits. Some sigils
            carry hidden
            artifacts — keys that unlock a deeper layer: a game that reveals itself only to those chosen. Over time, the
            system evolves further. Behavior becomes input. Actions train outcomes. And what began as trade becomes
            something else entirely — a marketplace where intelligence is currency, and models are made, not bought.</p>
          <div class="line-gradient"></div>
          <common-button type="outline" class="!py-2 md:!py-4 !px-4 md:!px-8 w-fit" class-text-btn="!text-[1rem] md:!text-[1.5rem]"
                         text="Enter the Protocol"/>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" class="icon-object-1-wrapper">
          <img class="icon-object-1 floating-3d" src="@/assets/images/home/section2/obj-1.webp" alt="">
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" class="icon-object-2-wrapper">
          <img class="icon-object-2 floating-breath" src="@/assets/images/home/section2/obj-2.webp" alt="">
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" class="icon-object-3-wrapper">
          <img class="icon-object-3 floating-sway" src="@/assets/images/home/section2/obj-3.webp" alt="">
        </div>
      </div>
      <div class="wrapper-layer-1-mb" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
        <img class="layer-1-mb" src="@/assets/images/home/section2/char-1.webp" alt="">
      </div>
      <div class="wrapper-layer-2-mb" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
        <img class="layer-2" src="@/assets/images/home/section2/char-2.webp" alt="">
      </div>
    </div>

    <div class="layer-4">
      <div class="line-bottom"></div>
      <img class="size-[2.625rem] md:size-[1.125rem]" src="@/assets/images/home/section2/bottom.svg" alt="">
      <div class="line-bottom rotate-180"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TextScramble from "~/components/common/TextScramble.vue";

const isMobile = useMobile()
const targetElement = ref<HTMLElement | null>(null)
const { isIntersecting, intersectionRatio } = useInViewport(targetElement, {
  threshold: 0,
  rootMargin: '0px'
})
const styleTextScramble = computed(() => {
  return {
    fontSize: !isMobile.value ? '2.625rem' : '1.5rem',
    fontWeight: 700,
    lineHeight: '120%',
    textTransform: 'uppercase',
    color1: '#A28C6F',
    color2: '#F7F5EE',
    textAlign: 'center',
  }
})

</script>

<style lang="scss">
.home-section-2 {
  width: 100%;
  height: 100dvh;
  min-height: 50rem;
  background-image: url('@/assets/images/home/section2/bg-section-2.webp');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  overflow: hidden;
  @media (max-width: 767px) {

  }

  @media (max-width: 767px) {
    min-height: 55rem;
    max-height: 60rem;
    background-image: linear-gradient(180deg, #0E1318 0%, rgba(14, 19, 24, 0.00) 100%),
    url('@/assets/images/home/section2/bg-section-2-mb.webp');
  }
  //@media screen and (min-width: 513px) and (max-width: 767px) {
  //  min-height: 55rem;
  //  max-height: 60rem;
  //  background-image: linear-gradient(180deg, #0E1318 0%, rgba(14, 19, 24, 0.00) 100%),
  //  url('@/assets/images/home/section2/bg-section-2-mb.webp');
  //}

  &--content {
    @apply max-w-content h-full relative;
    @apply flex items-center;
    .wrapper-layer-1 {
      @apply max-w-[39rem] absolute top-1/2 left-[-10%] z-[1] p-[3.5rem];
      .layer-1 {
        @apply  -translate-y-1/2 ;
      }
    }
    .wrapper-layer-2 {
      @apply w-[45%] max-w-[49rem] absolute z-[10] left-[2rem] -bottom-8;
    }
    .layer-3 {
      @apply w-full max-w-content flex items-center justify-end z-[2];
      &--content {
        background-image: url('@/assets/images/home/section2/bg-layer-3.webp');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        padding: 2.625rem 4rem 2.625rem 20rem;
        margin-left: 15vw;
        @apply relative;

        // Wrapper cho AOS animation
        .icon-object-1-wrapper {
          position: absolute;
          top: -4rem;
          left: -6rem;
        }

        .icon-object-2-wrapper {
          position: absolute;
          bottom: -7rem;
          right: -4rem;
        }

        .icon-object-3-wrapper {
          position: absolute;
          top: -6.5rem;
          right: 0rem;
        }

        // Style cho các icon (floating animation)
        .icon-object-1 {
          width: 17.04788rem;
          height: 14.375rem;
          transform: rotate(-13.018deg);
          aspect-ratio: 272.77/230.00;
        }

        .icon-object-2 {
          width: 12.85756rem;
          height: 15.10513rem;
          aspect-ratio: 141.72 / 241.68;
        }

        .icon-object-3 {
          width: 7.125rem;
          height: 7.125rem;
          aspect-ratio: 1 / 1;
        }
      }
    }
  }
  &--content-mb {
    @apply max-w-content h-full relative pt-[4rem] relative;

    .layer-3-mb {
      background-image: url('@/assets/images/home/section2/bg-layer-3-mb.webp');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      padding: 1rem 1rem 13rem 1rem;
      @apply relative max-w-[430px] mx-auto z-[10];

      // Wrapper cho AOS animation
      .icon-object-1-wrapper {
        position: absolute;
        top: -2rem;
        left: -1.2rem;
      }

      .icon-object-2-wrapper {
        position: absolute;
        bottom: 0rem;
        right: 2rem;
      }

      .icon-object-3-wrapper {
        position: absolute;
        top: -1.5rem;
        right: -1rem;
        z-index: 1;
      }

      // Style cho các icon (floating animation)
      .icon-object-1 {
        width: 5.04988rem;
        height: 4.25813rem;
        transform: rotate(-13.018deg);
        aspect-ratio: 80.80/68.13;
      }

      .icon-object-2 {
        width: 8.26644rem;
        height: 10.27575rem;
        transform: rotate(26.446deg);
        aspect-ratio: 68.26/116.41;
      }

      .icon-object-3 {
        width: 4.09794rem;
        height: 4.125rem;
        aspect-ratio: 65.57/66.00;
      }
    }
    .wrapper-layer-1-mb {
      position: absolute;
      bottom: 0;
      left: calc((100vw - 430px) / 2 - 4rem);
      z-index: 10;
      width: 16.9375rem;
      height: 20.4375rem;
      aspect-ratio: 271/327;
    }
    .wrapper-layer-2-mb {
      position: absolute;
      bottom: -1rem;
      right: calc((100vw - 430px) / 2 - 4rem);
      z-index: 10;
      width: 22.1875rem;
      height: 15.6875rem;
      aspect-ratio: 355/251;
    }
  }
  .line-gradient {
    @apply w-full h-[1px];
    background: linear-gradient(90deg, rgba(162, 140, 111, 0.00) 0%, #F7F5EE 50.48%, rgba(162, 140, 111, 0.00) 100%);
  }
  .text-gradient {
    text-align: center;
    font-size: 2.625rem !important;
    font-weight: 700 !important;
    line-height: 120%;
    text-transform: uppercase !important;
    background: linear-gradient(90deg, #A28C6F 0%, #F7F5EE 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .text-content {
    color: #D0D1D3;
    text-align: center;
    font-weight: 400;
    line-height: 130%;
    margin-top: -0.5rem;
    @apply text-[0.875rem] md:text-[1.125rem];
  }
  .layer-4 {
    @apply w-full flex items-center gap-4;
    @apply absolute bottom-0 z-[11];
    .line-bottom {
      @apply w-full h-[1px];
      background: linear-gradient(90deg, #A28C6F 0%, #F7F5EE 100%);
    }
  }
}
</style>
