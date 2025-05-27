<template>
  <div class="home-section-1">
    <div class="home-section-1--content">
      <img class="hidden md:block" src="@/assets/images/home/character.webp" alt="">
      <img class="block md:hidden absolute top-1/2 -translate-y-1/2" src="@/assets/images/home/character-mb.webp" alt="">
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col gap-1 md:gap-2 mb-6 md:mb-[7.5rem]">
        <template v-if="!isMobile">
          <p class="text-title">Begin with a choice.</p>
          <p class="text-title-color">Unlock THE MYSTERY.</p>
        </template>
        <template v-else>
          <p class="text-title-mb">Begin with</p>
          <p class="text-title-mb !text-[3rem]">a choice.</p>
          <p class="text-title-mb-color">Unlock</p>
          <p class="text-title-mb-color !text-[2.25rem] text-nowrap">THE MYSTERY.</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useMobile} from "~/composables/mobile";

const isMobile = useMobile()
</script>

<style lang="scss">
.home-section-1 {
  width: 100%;
  height: 100svh;
  min-height: 55rem;
  //max-height: 60rem;
  background-image: url('@/assets/images/home/bg-section-1.webp');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  @apply flex flex-col justify-end;
  @media (max-width: 430px) {
    min-height: 42rem;
    background-image: url('@/assets/images/home/bg-section-1-mb.webp');
  }
  @media screen and (min-width: 513px) and (max-width: 767px) {
    min-height: 55rem;
    background-image: url('@/assets/images/home/bg-section-1-mb.webp');
  }
  &--content {
    @apply size-full relative;
    background-image:  linear-gradient(180deg, rgba(14, 19, 24, 0.00) 0%, #0E1318 100%);
    img {
      width: 100%;
    }
    .text-title {
      color: #FFF;
      text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.80);
      font-size: 5.25rem;
      font-weight: 600;
      text-transform: uppercase;
      white-space: nowrap;
      line-height: 110%;
    }
    .text-title-color {
      color: #21E7B2;
      text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.80);
      font-size: 5.25rem;
      font-weight: 600;
      text-transform: uppercase;
      white-space: nowrap;
      line-height: 110%;
    }
    .text-title-mb {
      color: #FFF;
      text-align: center;
      text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.80);
      font-size: 2.625rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
    }
    .text-title-mb-color {
      color: #21E7B2;
      text-align: center;
      text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.80);
      font-size: 3.875rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
    }
  }
}
</style>
