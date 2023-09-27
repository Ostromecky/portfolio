<template>
  <nuxt-link :to="{ path: '/', hash: '' }">
    <transition name="fade">
      <Button
        v-if="scrollTopButtonVisible"
        :icon="['fa', 'arrow-up']"
        class="scroll-top fixed flex justify-center items-center w-10 h-10 opacity-75 hover:opacity-100"
        @click="scrollTop()"
      />
    </transition>
  </nuxt-link>
</template>

<script>
import { debounce } from '../utils/debounce'

export default {
  data: () => ({
    scrollTopButtonVisible: false
  }),

  mounted() {
    if (process.browser) {
      window.addEventListener('scroll', debounce(this.handleScroll, 50))
    }
  },

  beforeUnmount() {
    if (process.browser) {
      window.removeEventListener('scroll', debounce(this.handleScroll, 50))
    }
  },

  methods: {
    scrollTop() {
      window.scrollTo(0, 0)
    },

    handleScroll() {
      const visible = window.scrollY > 100
      this.scrollTopButtonVisible = visible
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-top {
  bottom: 2.5rem;
  right: 2.5rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
