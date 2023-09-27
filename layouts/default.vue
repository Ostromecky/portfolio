<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="view-wrapper text-white bg-black">
    <NavBar />
    <slot />
    <ScrollTopButton />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
  font-size: 14px;
  line-height: 24px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  /**
     * Scroll styles for Firefox
     */
  scrollbar-color: #39b982 white;
  scrollbar-width: thin;

  height: -webkit-fill-available;

  @media (max-width: 767px) {
    font-size: 14px;
  }
}

body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

/* width */
::-webkit-scrollbar {
  width: 0.5rem;
}

/* Track */
::-webkit-scrollbar-track {
  //box-shadow: inset 0 0 5px white;
  border-radius: 0.5rem;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-primary;
  border-radius: 0.5rem;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  @apply bg-primaryShadowed;
}

.view-wrapper {
  min-height: 100vh;
  height: -webkit-fill-available;

  & > *:not(.nav) {
    min-height: 100vh;
    height: -webkit-fill-available;
  }
}

#__layout {
  min-height: 100vh;
  height: -webkit-fill-available;
}

#__nuxt {
  min-height: 100vh;
  height: -webkit-fill-available;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

button:focus {
  outline: none;
}

a {
  outline: none;
}

.portrait {
  height: auto;
  width: 100%;
  max-width: 400px;
}
</style>
