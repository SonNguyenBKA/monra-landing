<template>
  <div class="blur-text" :class="classEx">
    <div class="blur-text--inner">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineComponent({ name: 'BlurText' })
defineProps({
  classEx: {type: String, default: ''}
})

</script>

<style lang="scss">
.blur-text {
  @apply relative flex w-fit flex-col items-center justify-center p-2 md:px-[2.625rem] md:py-4;
  background: linear-gradient(90deg, rgba(14, 19, 24, 0.00) 0%, #0E1318 50%, rgba(14, 19, 24, 0.00) 100%);
  backdrop-filter: blur(20px);
  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    inset: 0;
    padding: 1px;
    background: linear-gradient(90deg, rgba(162, 140, 111, 0) 0%, #A28C6F 20%, #F7F5EE 50%, #A28C6F 80%, rgba(162, 140, 111, 0) 100%);
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  &--inner {
    @apply relative flex w-fit flex-col items-center justify-center p-2 md:px-[2.625rem] md:py-6;
    background: linear-gradient(90deg, rgba(14, 19, 24, 0.00) 0%, #0E1318 50%, rgba(14, 19, 24, 0.00) 100%);
    backdrop-filter: blur(20px);
    &::before {
      content: '';
      position: absolute;
      z-index: 2;
      inset: 0;
      padding: 1px;
      background: linear-gradient(90deg, rgba(162, 140, 111, 0) 0%, #A28C6F 20%, #F7F5EE 50%, #A28C6F 80%, rgba(162, 140, 111, 0) 100%);
      -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
  }
}
</style>
