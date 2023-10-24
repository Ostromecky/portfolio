<template>
  <div class="flex flex-col mx-auto" style="max-width: 1200px">
    <section class="flex flex-col mt-16 mb-8">
      <PageHeader
        :title="'Resume'"
        :subtitle="'Checkout my Resume'"
      ></PageHeader>
    </section>
    <section class="flex flex-col sm:flex-row mb-16">
      <div class="px-4 mb-16 sm:m-0 sm:basis-1/2">
        <ResumeList :title="'Education'" :items="educationList">
          <template #default="{ item }">
            <h3>{{ item.title }}</h3>
            <span class="text-gray mb-2 block">{{ item.subtitle }}</span>
            <p class="text-gray">{{ item.content }}</p>
          </template>
        </ResumeList>
      </div>
      <div class="px-4 sm:basis-1/2">
        <ResumeList :title="'Experience'" :items="experienceList">
          <template #default="{ item }">
            <h3>{{ item.title }}</h3>
            <span class="text-gray mb-2 block">{{ item.subtitle }}</span>
            <p class="text-gray">{{ item.content }}</p>
          </template>
        </ResumeList>
      </div>
      <!-- <ResumeList :title="'Experience'" :items="experienceList"></ResumeList> -->
    </section>
    <section class="flex flex-col my-16 px-4">
      <PageHeader
        class="subheader"
        :title="'My skills'"
        :subtitle="'My level of knowledge in some tools'"
        :animated="false"
      ></PageHeader>
      <div class="flex flex-col sm:flex-row sm:gap-4">
        <div class="grow flex flex-col">
          <ResumeSkill name="HTML/CSS" :value="90"></ResumeSkill>
          <ResumeSkill name="Web Design" :value="60"></ResumeSkill>
          <ResumeSkill name="Javascript" :value="80"></ResumeSkill>
          <ResumeSkill name="Ionic" :value="60"></ResumeSkill>
        </div>
        <div class="grow flex flex-col">
          <ResumeSkill name="Angular" :value="90"></ResumeSkill>
          <ResumeSkill name="Vue" :value="40"></ResumeSkill>
          <ResumeSkill name="Typescript" :value="90"></ResumeSkill>
          <ResumeSkill name="Mobile" :value="40"></ResumeSkill>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const educationList = ref([
  {
    title: 'Computer Science',
    subtitle: 'Wrocławska Wyższa Szkoła Informatyki Stosowanej 2017-2021',
    content: 'BSE CS - Bachelor of Science in Engineering (Computer Science)'
  }
])

const experienceList = ref([
  {
    title: 'Senior Front-End Developer (Freelancer)',
    subtitle: 'IT Bees (06.2023 - 08.2023)',
    content: `
    Developed functionalities for brand new mobile app Park
Control 24
Integrated native functionalities on Android, iOS
(camera, notifications, network etc.)
Stack: Ionic 7, Capacitor 5, Angular 16`
  },
  {
    title: 'Front-End Developer',
    subtitle: 'GOD Nearshore (07.2021 - 10.2023)',
    content: `
    Developed and maintained enterprise ERP-class app for
automotive industry
Developed and maintained system consisted of 2 mobile
apps created with Ionic. Old maintained in Ionic 3 +
Cordova, new created from scratch with NX, Ionic 6,
Capacitor 5`
  },
  {
    title: 'Full-Stack Developer',
    subtitle: 'Sendit S. A. (07.2020 - 07.2021)',
    content: `
    Developed and maintained web app for leading polish
delivery broker
Developed backoffice SPA
Developed map web widget using Vue.js and vanilla JS
Stack: Angular 12, SS

      `
  },
  {
    title: 'Front-End Developer',
    subtitle: 'Angry Nerds (01.2020 - 06.2020)',
    content: `
      Maintained app of Spanish airlines operator Volotea
booking system, backoffice SPA, landing page
ERP-class system development for commercial drinkg
industry
Stack: Angular 10+, Umbraco CMS

      `
  },
  {
    title: 'Junior Software Developer',
    subtitle: 'Exence S. A. (05.2018 - 12.2020)',
    content:
      'Software Development and maintenance (Angular 2+, Java Spring, SQL, Node, Nest.js, Electron, Vue) of enterprise apps dedicated for military, energy, manufacturing industries'
  }
])
</script>

<style lang="scss" scoped>
.subheader {
  @apply justify-start items-start mb-8;
}
</style>
