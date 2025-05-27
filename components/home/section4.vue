<template>
  <div class="home-section-4">
    <div v-show="!isMobile">
      <div class="w-full h-[3rem]"></div>
      <section ref="targetElement1" class="parallax-1">
        <div class="parallax-content">
          <div class="block-one component-left-green">
            <img class="block-one--img" src="@/assets/images/home/section4/img-right-one.webp" alt="">
          </div>
          <div class="block-two component-right-green">
            <div class="line-gradient"></div>
            <div class="h-[3.375rem] overflow-hidden">
              <TextScramble v-if="isIntersecting1" :phrases="['MONRA WORLD — A GAME BENEATH THE SURFACE']"
                            :style="styleTextScramble"
              />
            </div>
            <p class="text-content-color">The Gate Won’t Announce Itself. But It’s Already Watching.</p>
            <p class="text-content">Artifact holders unlock more than access — they enter a hidden phase of Monra: a
              game
              built on intuition,
              discovery, and choice. This is not a game revealed to everyone. Only those pulled inward will see what
              lies
              ahead. It’s an experience that unfolds for those the protocol selects — quietly, precisely, and always
              watching.
            </p>
            <p class="text-content">If you are chosen, tt is meant to be.</p>
            <div class="line-gradient"></div>
          </div>
        </div>
      </section>
      <div class="w-full h-[12rem]"></div>
      <section ref="targetElement2" class="parallax-2">
        <div class="parallax-content">
          <div class="block-one component-left-green z-[10] relative">
            <div class="line-gradient"></div>
            <div class="h-[6rem] overflow-hidden">
              <TextScramble v-if="isIntersecting2" :phrases="['THE FUTURE AHEAD — MARKETPLACE OF MINDS']"
                            :style="styleTextScramble"
              />
            </div>
            <p class="text-content-color">A New Economy: From Choice to Consciousness.</p>
            <p class="text-content">As Monra evolves, it moves beyond artifacts and gameplay. What begins as minting
              becomes training. What begins as behavior becomes value.
            </p>
            <p class="text-content">In the later phases, the protocol opens a new layer: a marketplace where users trade
              not just NFT and items, but AI assistants, custom-trained models, and behavior-shaped logic. These agents
              don’t come prepackaged. They emerge — from how you’ve played, what you’ve taught, and what the system has
              learned from you.</p>
            <div class="line-gradient"></div>
          </div>
          <div class="block-two component-right-green">
            <img class="block-one--img" src="@/assets/images/home/section4/bg-right-two.webp" alt="">
          </div>
        </div>
      </section>
      <div class="w-full h-[12rem]"></div>
    </div>
    <div v-show="isMobile">
      <div class="w-full py-[3rem] max-w-[32rem] mx-auto flex flex-col items-center gap-4 px-4">
        <div ref="targetElement3" class="layer-1-mb relative w-full">
          <img class="absolute z-[1] top-0" src="@/assets/images/home/section4/img-one-mb.webp" alt="">
          <div class="w-full mt-[15rem] relative z-[2]">
            <div class="block-layer-1-mb">
              <div class="line-gradient"></div>
              <div class="h-[3.375rem] overflow-hidden">
                <TextScramble v-if="isIntersecting3" :phrases="['MONRA WORLD — A GAME BENEATH THE SURFACE']"
                              :style="styleTextScramble"
                />
              </div>
              <p class="text-content-color">The Gate Won’t Announce Itself. But It’s Already Watching.</p>
              <p class="text-content">Artifact holders unlock more than access — they enter a hidden phase of Monra: a
                game
                built on intuition,
                discovery, and choice. This is not a game revealed to everyone. Only those pulled inward will see what
                lies
                ahead. It’s an experience that unfolds for those the protocol selects — quietly, precisely, and always
                watching.
              </p>
              <p class="text-content">If you are chosen, tt is meant to be.</p>
              <div class="line-gradient"></div>
            </div>
          </div>
        </div>
        <div ref="targetElement4" class="layer-1-mb relative w-full">
          <img class="absolute z-[1] top-0" src="@/assets/images/home/section4/img-two-mb.webp" alt="">
          <div class="w-full mt-[15rem] relative z-[2]">
            <div class="block-layer-1-mb">
              <div class="line-gradient"></div>
              <div class="h-[3.375rem] overflow-hidden">
                <TextScramble v-if="isIntersecting4" :phrases="['THE FUTURE AHEAD — MARKETPLACE OF MINDS']"
                              :style="styleTextScramble"
                />
              </div>
              <p class="text-content-color">A New Economy: From Choice to Consciousness.</p>
              <p class="text-content">As Monra evolves, it moves beyond artifacts and gameplay. What begins as minting
                becomes training. What begins as behavior becomes value.
              </p>
              <p class="text-content">In the later phases, the protocol opens a new layer: a marketplace where users
                trade not just NFT and items, but AI assistants, custom-trained models, and behavior-shaped logic. These
                agents don’t come prepackaged. They emerge — from how you’ve played, what you’ve taught, and what the
                system has learned from you.</p>
              <div class="line-gradient"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
    textAlign: isMobile.value ? 'center' : 'left'
  }
})
const targetElement1 = ref(null)
const targetElement2 = ref(null)
const targetElement3 = ref(null)
const targetElement4 = ref(null)
const { isIntersecting: isIntersecting1 } = useInViewport(targetElement1, {
  rootMargin: '0px',
  threshold: 0.5
})
const { isIntersecting: isIntersecting2 } = useInViewport(targetElement2, {
  rootMargin: '0px',
  threshold: 0.5
})
const { isIntersecting: isIntersecting3 } = useInViewport(targetElement3, {
  rootMargin: '0px',
  threshold: 0.5
})
const { isIntersecting: isIntersecting4 } = useInViewport(targetElement4, {
  rootMargin: '0px',
  threshold: 0.5
})
</script>

<style lang="scss">
/* Parallax Section 1 */
.home-section-4 {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  min-height: 100svh;
  background-image: url("@/assets/images/home/section4/bg-section-4.webp");
  background-size: cover;
  @media screen and (max-width: 767px) {
    background-image: url("@/assets/images/home/section4/bg-section-4-mb.webp");
    background-size: cover;
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


  .layer-1-mb {
    .block-layer-1-mb {
      margin: 0.75rem;
      padding: 1rem;
      background-image: url("@/assets/images/home/section4/bg-left-one.webp");
      background-size: 100% 100%;
      @apply flex flex-col gap-4;
      .line-gradient {
        width: 100%;
        height: 1px;
        background: linear-gradient(90deg, rgba(162, 140, 111, 0) 0%, #F7F5EE 50%, rgba(162, 140, 111, 0) 100%);
      }

      .text-content-color {
        color: #21E7B2;
        text-align: center;
        font-size: 1rem;
        font-weight: 400;
        line-height: 125%;
        text-transform: capitalize;
      }

      .text-content {
        color: #D0D1D3;
        text-align: center;
        font-size: 0.9375rem;
        font-weight: 400;
        line-height: 125%;
      }
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
    filter: drop-shadow(-5px 0 4px rgba(52, 211, 153, 0.6)) drop-shadow(-10px 0 6px rgba(52, 211, 153, 0.4));
    animation: component-left-green 3s ease-in-out infinite alternate;
  }

  @keyframes component-left-green {
    0% {
      filter: drop-shadow(-4px 0 3px rgba(52, 211, 153, 0.4)) drop-shadow(-7px 0 5px rgba(52, 211, 153, 0.3));
    }
    100% {
      filter: drop-shadow(-6px 0 5px rgba(52, 211, 153, 0.8)) drop-shadow(-12px 0 7px rgba(52, 211, 153, 0.5));
    }
  }

  .component-right-green {
    background: linear-gradient(135deg, #A7F3D0 0%, #34D399 100%);
    filter: drop-shadow(5px 0 4px rgba(52, 211, 153, 0.6)) drop-shadow(4px 0 6px rgba(52, 211, 153, 0.4));
    animation: component-right-green 3s ease-in-out infinite alternate;
  }

  @keyframes component-right-green {
    0% {
      filter: drop-shadow(4px 0 3px rgba(52, 211, 153, 0.4)) drop-shadow(7px 0 5px rgba(52, 211, 153, 0.3));
    }
    100% {
      filter: drop-shadow(6px 0 5px rgba(52, 211, 153, 0.8)) drop-shadow(12px 0 7px rgba(52, 211, 153, 0.5));
    }
  }
}
</style>
