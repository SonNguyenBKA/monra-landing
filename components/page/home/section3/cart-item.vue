<template>
  <div class="card-item-home">
    <div class="card-item-home--top">
      <div class="layer-1">
        <img class="aniSpinLeft" src="@/assets/images/home/section3/cart-item-4.webp" alt="">
      </div>
      <div class="layer-2">
        <img class="floating-3d" :src="data.image" alt="">
      </div>
    </div>
    <div class="card-item-home--bottom">
      <p class="text-gradient md:min-h-[3rem]">{{ data.title }}</p>
      <p class="text-content min-h-[4.5rem] md:min-h-[6.25rem]">{{ data.content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import imgCart from '@/assets/images/home/section3/cart-item-1.webp'
defineComponent({ name: 'CartItemSection3' })
defineProps({
  data: {type: Object, default: () => ({
      image: imgCart,
      title: 'title',
      content: 'content'
    })},
})

</script>

<style lang="scss">
.card-item-home {
  background-image: url("@/assets/images/home/section3/wrapper-bg-cart-item.webp");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  flex: 1 0 0;
  @apply p-4 md:p-6 gap-4 md:gap-6;
  &--top {
    background-image: url("@/assets/images/home/section3/bg-cart-item.webp");
    background-size: 100% 100%;
    aspect-ratio: 26/20;
    @apply w-full relative;
    .layer-1 {
      @apply absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[60%];
    }
    .layer-2 {
      @apply absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[60%];
    }
  }
  &--bottom {
    @apply w-full flex flex-col justify-center items-center gap-1 md:gap-4;
    .text-gradient {
      text-align: center;
      font-weight: 700;
      line-height: 120%;
      text-transform: capitalize;
      background: linear-gradient(90deg, #A28C6F 0%, #F7F5EE 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      @apply text-[1rem] md:text-[1.5rem];
    }
    .text-content {
      color: #D0D1D3;
      text-align: center;
      font-weight: 400;
      line-height: 120%;
      @apply text-[0.875rem] md:text-[1.125rem];
    }
  }
}
</style>
