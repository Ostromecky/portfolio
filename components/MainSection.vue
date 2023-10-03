<template>
  <section class="relative h-full background-image flex flex-row">
    <div class="flex flex-col items-center justify-center w-full">
      <h1>{{ title }}</h1>
      <h3 class="w-full text-center font-normal z-[1]">
        {{ prefix }}
        <span
          ref="subtitle"
          class="typewriter title-animated inline-block"
          :class="[show ? 'typewriter-visible' : 'typewriter-hidden']"
        >
          {{ subtitle }}
        </span>
      </h3>
    </div>
    <div class="absolute bottom-0 left-0">
      <SocialMedia />
    </div>
  </section>
</template>
<script>
export default {
  data: () => {
    return {
      finished: false,
      elementIdx: 0,
      delta: 300,
      deleting: false,
      counters: null,
      title: '',
      prefix: '',
      subtitle: '',
      show: false
    }
  },

  mounted() {
    console.log('env', process.env.NODE_ENV)
    this.handleSetTitle('Paweł Ostromecki')
    const subtitleSrc = ['Developer', 'Designer', 'Freelancer']
    this.counters = setInterval(() => this.type(subtitleSrc), 2000)
  },

  unmounted() {
    clearInterval(this.counters)
    this.counters = null
    this.handleSetTitle('')
  },

  methods: {
    handleSetTitle(title) {
      this.title = title
      this.prefix = 'I am a '
    },
    async type(src) {
      if (this.show) {
        this.show = false
        return
      }
      this.show = true
      this.elementIdx < src.length - 1
        ? this.elementIdx++
        : (this.elementIdx = 0)
      this.subtitle = src[this.elementIdx]
      await new Promise((resolve) => setTimeout(resolve, 500))
    }
  }
}
</script>

<style lang="scss" scoped>
.background-image {
  background-image: url('/Me_2.webp');
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 100%;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    // background-color: rgba(0, 0, 0, 0.4);
  }

  h1,
  h2 {
    z-index: 1;
  }
}

.title-animated {
  white-space: nowrap;
  overflow: hidden;
  max-width: fit-content;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
}

/* Animation */
.typewriter {
  z-index: 1;
  vertical-align: top;
  line-height: 1.2em;

  &-visible {
    width: 100%;
    transition-property: width;
    transition-duration: 2s;
    animation: blinkTextCursor 800ms infinite normal;
  }

  &-hidden {
    width: 0;
    transition-property: width;
    transition-duration: 1s;
    animation: blinkTextCursor 800ms infinite normal;
  }
}

@keyframes blinkTextCursor {
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  to {
    border-right-color: transparent;
  }
}
</style>
