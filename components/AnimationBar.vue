<template>
  <div class="relative w-24 h-1 animation-bar"></div>
</template>

<script>
export default {
  name: 'AnimationBar'
}
</script>

<style lang="scss" scoped>
@mixin pseudo {
  position: absolute;
  @apply w-1;
  @apply bg-black;
  @apply h-1;
  content: '';
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 3s;
}

.animation-bar {
  @apply bg-primary;
  content: '';

  &:before {
    left: 0;
    @include pseudo;
    animation-name: barAnimationBefore;
  }

  &:after {
    left: 0.5rem;
    @include pseudo;
    animation-name: barAnimationAfter;
  }

  @keyframes barAnimationBefore {
    from {
      left: -0.75rem;
    }
    to {
      left: 6rem;
    }
  }
  @keyframes barAnimationAfter {
    from {
      left: -0.25rem;
    }
    to {
      left: 6.5rem;
    }
  }
}
</style>
