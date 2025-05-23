<template>
  <button class="btn-common" :class="type" :disabled="disabled" @click="emits('submit')">
    <img v-if="iconLeft" class="size-8" :src="iconLeft" alt="">
    <span class="btn-common--text uppercase">{{ text }}</span>
  </button>
</template>

<script setup lang="ts">
type TBtn = 'gold' | 'silver'
defineProps({
  text: { type: String, default: 'text' },
  disabled: { type: Boolean, default: false },
  iconLeft: { type: Object, default: null },
  type: { type: String as PropType<TBtn>, default: 'gold' }
})
const emits = defineEmits(['submit'])
</script>

<style lang="scss">
.btn-common {
  background-image: url("@/assets/images/common/bg-btn.webp");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  @apply flex px-[2.625rem] py-4 justify-center items-center;
  @apply gap-2 md:gap-4;
  transition: all 0.35s linear;
  &.silver {
    background-image: url("@/assets/images/common/bg-btn-silver.webp");
    .btn-common--text {
      text-shadow: none;
    }
  }
  &--text {
    text-shadow: 0px 1px 0px #E6E588;
    @apply text-black text-center font-normal text-[1rem] md:text-[1.5rem];
  }
  &:hover {
    transform: scale(1.1);
  }
}
</style>
