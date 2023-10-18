<template>
  <div class="flex flex-col mx-auto" style="max-width: 1200px">
    <section class="flex flex-col my-16">
      <PageHeader
        :title="'Get in touch'"
        :subtitle="'Feel free to contact me anytime'"
      ></PageHeader>
    </section>
    <section class="flex flex-col lg:flex-row mb-16 gap-8 px-4">
      <div class="lg:flex-[60%]">
        <h3>Message Me</h3>
        <form class="mb-6">
          <div class="flex flex-col sm:flex-row sm:gap-4">
            <FormField
              v-model="form.name"
              class="grow"
              placeholder="Name"
              name="name"
            />
            <FormField
              v-model="form.email"
              class="grow"
              placeholder="Email"
              type="email"
              name="email"
            />
          </div>
          <FormField v-model="form.subject" placeholder="Subject" type="text" />
          <Textarea
            v-model="form.message"
            placeholder="Message"
            type="text"
            :rows="5"
          />
          <Button
            :rounded="true"
            type="button"
            class="px-8 mr-8"
            label="Send Message"
            @click="send()"
          />
        </form>
      </div>
      <div class="lg:flex-[40%]">
        <h3>Contact Info</h3>
        <p class="text-gray mb-6">
          Always available for freelance work if the right project <br />
          comes along, Feel free to contact me!
        </p>
        <div>
          <ContactItem
            v-for="item in items"
            :key="item.title"
            :title="item.title"
            :subtitle="item.subtitle"
            :icon="item.icon"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const items = [
  {
    title: 'Name',
    subtitle: 'Paweł Ostromecki',
    icon: ['fas', 'user']
  },
  {
    title: 'Location',
    subtitle: 'Wroclaw, Poland',
    icon: ['fas', 'location-dot']
  },
  {
    title: 'Call me',
    subtitle: '+48 661 546 446',
    icon: ['fas', 'phone']
  }
]

const send = () => {}
</script>

<style lang="scss"></style>
