<template>
  <section class="flex flex-col px-4 my-16">
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
          title: 'Web Apps',
          icon: ['fab', 'angular'],
          content: 'SSR or SPA, I can build it for you. (Angular, Vue.js)'
        },
        {
          title: 'Websites',
          icon: ['fab', 'vuejs'],
          content:
            'User experience oriented websites, landing pages and e-commerce'
        },
        {
          title: 'Backend',
          icon: ['fab', 'node'],
          content: 'I deliver high quality backend solutions (NestJS, Supabase)'
        },
        {
          title: 'Audit',
          icon: ['fa', 'rocket'],
          content:
            'I can audit your code and suggest improvements, refactor. It saves time and money.'
        },
        {
          title: 'Responsive Web Design',
          icon: ['fas', 'palette'],
          content: 'Mobile first approach, responsive design'
        },
        {
          title: 'Mobile Apps',
          icon: ['fab', 'android'],
          content: `Polished and professional looking mobile hybrid apps both for Android and iOS
            (Ionic, Capacitor)`
        }
      ]
    }
  }
}
</script>
