<template>
  <button class="btn-common" :class="type" :disabled="disabled" @click="emits('submit')">
    <span v-if="!!text" class="btn-common--text" :class="classTextBtn">{{ text }}</span>
    <slot />
  </button>
</template>

<script setup lang="ts">
type TBtn = 'primary' | 'outline'
defineProps({
  text: { type: String, default: 'text' },
  disabled: { type: Boolean, default: false },
  type: { type: String as PropType<TBtn>, default: 'primary' },
  classTextBtn: { type: String, default: '' },
})
const emits = defineEmits(['submit'])
</script>

<style lang="scss">
.btn-common {
  display: flex;
  padding: 0.5rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.5rem;

  &--text {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 150%;
    text-transform: capitalize;
  }

  &.primary {
    border: 1px solid #0E1318;
    background: linear-gradient(180deg, #21E7B2 0%, #008A6C 100%);
    .btn-common--text {
      color: #0B1014;
    }
  }
  &.outline {
    border: 1px solid #21E7B2;
    background: linear-gradient(180deg, #0E1318 0%, #2B3238 100%);
    .btn-common--text {
      color: #21E7B2;
    }
  }
}
</style>
