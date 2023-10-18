<template>
  <div
    :class="[
      horizontal ? 'flex-row space-x-4' : 'flex-col space-y-4',
      'flex p-4 items-center'
    ]"
  >
    <ClientOnly>
      <a
        v-for="media in medias"
        :key="media.href"
        class="hover:text-primary flex items-center"
        :href="media.href"
        target="_blank"
      >
        <font-awesome-icon class="text-2xl" :icon="media.iconArgs" />
      </a>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  props: {
    horizontal: { type: Boolean, default: false, required: false }
  },
  data() {
    return {
      medias: [
        {
          href: 'https://www.linkedin.com/in/paweł-ostromecki-486935168',
          iconArgs: ['fab', 'linkedin']
        },
        {
          href: 'https://github.com/ostromecky',
          iconArgs: ['fab', 'github']
        },
        {
          href: 'https://twitter.com/ostromeckyp',
          iconArgs: ['fab', 'twitter']
        }
      ]
    }
  }
}
</script>
