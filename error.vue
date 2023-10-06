<template>
  <NuxtLayout :name="404">
    <div class="container">
      <h1>404</h1>
      <h2 class="font-normal">Not this way, boss.</h2>
      <Button :rounded="true" class="px-8 mr-8" label="Back" @click="goBack" />
    </div>
  </NuxtLayout>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
