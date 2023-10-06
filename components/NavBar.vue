<template>
  <div class="flex justify-end px-8 py-6 nav">
    <nav class="flex justify-around">
      <NuxtLink
        v-for="item in routes"
        :key="item.route"
        class="p-4"
        :to="item.route"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data: () => {
    return {
      routes: [
        {
          route: '/about',
          label: 'About'
        },
        {
          route: '/resume',
          label: 'Resume'
        },
        {
          route: '/contact',
          label: 'Contact'
        }
      ]
    }
  }
}
</script>

<style scoped>
.brand {
  font-weight: 700;
  font-size: 1.5em;
  text-decoration: none;
}
.nav {
  display: flex;
  align-items: center;
  height: 60px;
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  border-bottom: solid 2px #39b982;
}
.nav a {
  display: inline-block;
}
</style>
