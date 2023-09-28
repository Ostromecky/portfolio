<template>
  <section class="flex flex-col mx-8 my-16">
    <div class="flex flex-col justify-center mb-16">
      <div class="flex flex-col items-start w-100">
        <span class="text-gray mb-4">Services I offer to my clients</span>
        <h2 class="text-white">My Services</h2>
      </div>
      <div class="grid gap-8 grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          :title="service.title"
          :content="service.content"
          :icon="service.icon"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ServiceCard from '~/components/ServiceCard'

export default {
  components: { ServiceCard },
  data() {
    return {
      services: [
        {
          title: 'Design Trends1',
          icon: ['fab', 'github'],
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          title: 'Design Trends2',
          icon: ['fab', 'github'],
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          title: 'Design Trends3',
          icon: ['fab', 'github'],
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          title: 'Design Trends4',
          icon: ['fab', 'github'],
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          title: 'Design Trends5',
          icon: ['fab', 'github'],
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          title: 'Design Trends6',
          icon: ['fab', 'github'],
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        }
      ]
    }
  }
}
</script>
