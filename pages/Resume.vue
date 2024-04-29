<template>
  <div class="flex flex-col mx-auto" style="max-width: 1200px">
    <section class="flex flex-col my-8">
      <PageHeader
        :title="'Resume'"
        :subtitle="'Checkout my Resume'"
      ></PageHeader>
    </section>
    <section class="flex flex-col max-sm:gap-8 sm:flex-row my-8">
      <div class="px-4 sm:m-0 sm:basis-1/2">
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
    <section class="flex flex-col my-8 px-4">
      <PageHeader
        class="subheader"
        :title="'My skills'"
        :subtitle="'My level of knowledge in some tools'"
        :animated="false"
      ></PageHeader>
      <div class="flex flex-col sm:flex-row sm:gap-6">
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
    <section class="flex flex-col md:flex-row px-4 my-8 sm:gap-6">
      <div class="px-4 md:basis-1/2 mb-8">
        <h2>Get to know me</h2>
        <p class="text-gray">
          👋 Hi there! I'm Paweł, a senior software engineer with 6 years of diverse experience spanning industries like Automotive, Master Data Management, E-commerce, and Military. Proficient in Angular, Ionic, Vue, I specialize in architecting robust solutions and fostering collaborative environments. Whether leading teams through complex projects or diving into code, I'm driven by a passion for innovation and excellence. Outside work, you'll find me cycling, running, and drinking coffee, fueling my creativity and drive for continuous learning. Let's connect and discuss how I can contribute to your next project!
        </p>
      </div>
      <div class="video-container px-4 md:basis-1/2">
        <iframe
          class="video-iframe"
          src="https://www.youtube.com/embed/DPeF4v2CNmU?si=YjfNL4Kn--ODNEVW"
          title="YouTube video player"
          frameborder="0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
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

.video {
  &-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    // padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */

    @apply md:pt-[28.125%] pt-[56.25%];
  }

  &-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
