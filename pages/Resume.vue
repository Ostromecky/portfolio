<template>
  <div class="flex flex-col mx-auto" style="max-width: 1200px">
    <section class="flex flex-col my-16">
      <PageHeader
        :title="'Resume'"
        :subtitle="'Checkout my Resume'"
      ></PageHeader>
    </section>
    <section class="flex flex-col sm:flex-row mb-16">
      <div class="px-4 mb-16 sm:m-0">
        <ResumeList :title="'Education'" :items="educationList">
          <template #default="{ item }">
            <h3>{{ item.title }}</h3>
            <span class="text-gray mb-2 block">{{ item.subtitle }}</span>
            <p class="text-gray">{{ item.content }}</p>
          </template>
        </ResumeList>
      </div>
      <div class="px-4">
        <ResumeList :title="'Experience'" :items="educationList">
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
    subtitle: 'University of Wrocław',
    content:
      "I'm currently studying Computer Science at University of Wrocław. I'm in my 3rd year of studies."
  },
  {
    title: 'Computer Science',
    subtitle: 'University of Wrocław',
    content:
      "I'm currently studying Computer Science at University of Wrocław. I'm in my 3rd year of studies."
  }
])
</script>

<style lang="scss" scoped>
.subheader {
  @apply justify-start items-start mb-8;
}
</style>
