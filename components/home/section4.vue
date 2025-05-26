<template>
  <div class="home-section-4">
    <!-- Parallax Section 1 -->
    <section class="parallax-1">
      <div class="parallax-content">
        <div class="block-one component-left-green">
          <img class="block-one--img" src="@/assets/images/home/section4/img-right-one.webp" alt="">
        </div>
        <div class="block-two component-right-green">
          <div class="line-gradient"></div>
          <TextScramble :phrases="['MONRA WORLD — A GAME BENEATH THE SURFACE']" :style="styleTextScramble" />
          <p class="text-content-color">The Gate Won’t Announce Itself. But It’s Already Watching.</p>
          <p class="text-content">Artifact holders unlock more than access — they enter a hidden phase of Monra: a game built on intuition,
            discovery, and choice. This is not a game revealed to everyone. Only those pulled inward will see what lies
            ahead. It’s an experience that unfolds for those the protocol selects — quietly, precisely, and always
            watching.
          </p>
          <p class="text-content">If you are chosen, tt is meant to be.</p>
          <div class="line-gradient"></div>
        </div>
      </div>
    </section>
    <div class="w-full h-[10rem]"></div>
    <section class="parallax-2">
      <div class="parallax-content">
        <div class="block-one component-left-green z-[10] relative">
          <div class="line-gradient"></div>
          <TextScramble :phrases="['MONRA WORLD — A GAME BENEATH THE SURFACE']" :style="styleTextScramble" />
          <p class="text-content-color">The Gate Won’t Announce Itself. But It’s Already Watching.</p>
          <p class="text-content">Artifact holders unlock more than access — they enter a hidden phase of Monra: a game built on intuition,
            discovery, and choice. This is not a game revealed to everyone. Only those pulled inward will see what lies
            ahead. It’s an experience that unfolds for those the protocol selects — quietly, precisely, and always
            watching.
          </p>
          <p class="text-content">If you are chosen, tt is meant to be.</p>
          <div class="line-gradient"></div>
        </div>
        <div class="block-two component-right-green">
          <img class="block-one--img" src="@/assets/images/home/section4/bg-right-two.webp" alt="">
        </div>
      </div>
    </section>
    <div class="w-full h-[10rem]"></div>
  </div>
</template>

<script setup>
import TextScramble from '~/components/common/TextScramble.vue'

const isMobile = useMobile()
const styleTextScramble = computed(() => {
  return {
    fontSize: !isMobile.value ? '2.625rem' : '1.5rem',
    fontWeight: 700,
    lineHeight: '120%',
    textTransform: 'uppercase',
    color1: '#FFF',
    color2: '#B9BBBD',
    textAlign: 'left'
  }
})
</script>

<style lang="scss">
/* Parallax Section 1 */
.home-section-4 {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  min-height: 100dvh;
  background-image: url("@/assets/images/home/section4/bg-section-4.webp");
  background-size: 100% 100%;
}

.parallax-1 {
  @apply max-w-content mt-[6.5rem];
  position: relative;
  .parallax-content {
    .block-one {
      width: 70%;
      max-width: 1000px;
      aspect-ratio: 1000/520;
      background-image: url('@/assets/images/home/section4/bg-right-one.webp');
      background-size: 100% 100%;
      &--img {
        width: 82%;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
    .block-two {
      display: flex;
      max-width: 44.375rem;
      width: 60%;
      padding: 1.5rem 2.625rem;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      gap: 1rem;
      background-size: 100% 100%;
      background-image: url('@/assets/images/home/section4/bg-left-one.webp');
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);

      .text-content {
        color: #D0D1D3;
        font-size: 1.125rem;
        font-weight: 400;
        line-height: 125%;
      }
      .text-content-color {
        color: #21E7B2;
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 125%;
        text-transform: capitalize;
      }
    }
    .line-gradient {
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, rgba(162, 140, 111, 0) 0%, #F7F5EE 50%, rgba(162, 140, 111, 0) 100%);
    }
  }
}

.parallax-2 {
  @apply max-w-content mt-[6.5rem];
  position: relative;
  .parallax-content {
    .block-two {
      width: 70%;
      max-width: 1000px;
      aspect-ratio: 1000/520;
      background-image: url('@/assets/images/home/section4/img-right-two.webp');
      background-size: 100% 100%;

      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);

    }
    .block-one {
      display: flex;
      max-width: 44.375rem;
      width: 60%;
      padding: 1.5rem 2.625rem;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      gap: 1rem;
      background-size: 100% 100%;
      background-image: url('@/assets/images/home/section4/bg-left-one.webp');

      &--img {
        width: 82%;
        position: absolute;
        bottom: 0;
        right: 0;
      }

      .text-content {
        color: #D0D1D3;
        font-size: 1.125rem;
        font-weight: 400;
        line-height: 125%;
      }
      .text-content-color {
        color: #21E7B2;
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 125%;
        text-transform: capitalize;
      }
    }
    .line-gradient {
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, rgba(162, 140, 111, 0) 0%, #F7F5EE 50%, rgba(162, 140, 111, 0) 100%);
    }
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-30px);
  }
}

/* Mobile */
@media (max-width: 768px) {
  /* Mobile parallax fix */
  .parallax-1,
  .parallax-2 {
    background-attachment: scroll;
  }
}

.component-left-green {
  background: linear-gradient(135deg, #A7F3D0 0%, #34D399 100%);
  filter: drop-shadow(-20px 0 15px rgba(52, 211, 153, 0.6)) drop-shadow(-40px 0 25px rgba(52, 211, 153, 0.4));
  animation: component-left-green 3s ease-in-out infinite alternate;
}

@keyframes component-left-green {
  0% {
    filter: drop-shadow(-15px 0 10px rgba(52, 211, 153, 0.4)) drop-shadow(-30px 0 20px rgba(52, 211, 153, 0.3));
  }
  100% {
    filter: drop-shadow(-25px 0 20px rgba(52, 211, 153, 0.8)) drop-shadow(-50px 0 30px rgba(52, 211, 153, 0.5));
  }
}

.component-right-green {
  background: linear-gradient(135deg, #A7F3D0 0%, #34D399 100%);
  filter: drop-shadow(20px 0 15px rgba(52, 211, 153, 0.6)) drop-shadow(40px 0 25px rgba(52, 211, 153, 0.4));
  animation: component-right-green 3s ease-in-out infinite alternate;
}

@keyframes component-right-green {
  0% {
    filter: drop-shadow(15px 0 10px rgba(52, 211, 153, 0.4)) drop-shadow(30px 0 20px rgba(52, 211, 153, 0.3));
  }
  100% {
    filter: drop-shadow(25px 0 20px rgba(52, 211, 153, 0.8)) drop-shadow(50px 0 30px rgba(52, 211, 153, 0.5));
  }
}
</style>
