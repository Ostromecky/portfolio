<template>
  <section class="flex flex-col my-16">
    <PageHeader :title="'About me'" :subtitle="'Get to know me'" />
    <div class="flex flex-row max-lg:flex-col items-center">
      <div
        class="lg:flex-[0_0_42%] lg:max-w-[42%] flex flex-col justify-center items-start max-lg:items-center max-lg:w-full px-4"
      >
        <div
          class="max-lg:relative max-lg:w-64 max-lg:h-64 max-lg:rounded-full max-lg:overflow-hidden max-lg:mb-16"
        >
          <picture>
            <source media="(max-width: 1023px)" srcset="about_mobile.webp" />
            <source media="(min-width: 1024px)" srcset="about.webp" />
            <img
              loading="lazy"
              width="430"
              height="573"
              class="portrait max-lg:absolute min-width"
              src="/about.webp"
            />
          </picture>
        </div>
      </div>
      <div
        class="lg:flex-[0_0_58%] lg:max-w-[58%] flex flex-col max-lg:w-full max-w-2xl max-lg:max-w-none justify-start px-4"
      >
        <h4 class="text-primary">Who am I?</h4>
        <h3 class="text-white">I'm Paweł Ostromecki, Fullstack Developer</h3>
        <p class="text-gray pb-6 border-b-2 border-borderGray">
          {{ description }}
        </p>
        <div class="flex flex-col py-6">
          <div class="flex flex-row flex-wrap mb-4">
            <div class="w-2/5 max-sm:w-full">
              <span class="mr-4 text-textColor">Name:</span>
              <span class="text-gray">{{ fullname }}</span>
            </div>
            <div class="w-3/5 max-sm:w-full">
              <span class="mr-4 text-textColor">Email:</span>
              <a
                class="text-primary"
                href="mailto:pawel.ostromecky@gmail.com"
                style="unicode-bidi: bidi-override; direction: rtl"
              >
                {{ mailReversed }}</a
              >
            </div>
          </div>
          <div class="flex flex-row flex-wrap">
            <div class="w-2/5 max-sm:w-full">
              <span class="mr-4 text-textColor">Age:</span>
              <span class="text-gray">{{ age }}</span>
            </div>
            <div class="w-3/5 max-sm:w-full">
              <span class="mr-4 text-textColor">From:</span>
              <span class="text-gray">{{ city }}</span>
            </div>
          </div>
        </div>
        <div class="flex flex-row flex-wrap items-center">
          <a href="/cv.pdf" target="_blank">
            <Button :rounded="true" class="px-8 mr-8" label="Download CV" />
          </a>
          <div class="social-media-container flex items-center">
            <SocialMedia :horizontal="true" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AnimationBar from '@/components/AnimationBar'
import SocialMedia from '@/components/SocialMedia'

export default {
  name: 'AboutInfo',
  components: { AnimationBar, SocialMedia },
  data: () => {
    return {
      description:
        'I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.',
      email: 'pawel.ostromecky@gmail.com',
      fullname: 'Paweł Ostromecki',
      age: '23',
      city: 'Wrocław, PL'
    }
  },
  computed: {
    mailReversed() {
      return this.email.split('').reverse().join('')
    }
  }
}
</script>

<style scoped lang="scss">
.social-media-container:before {
  background-color: rgba(255, 255, 255, 0.25);
  content: '';
  height: 2px;
  margin-right: 23px;
  width: 60px;
}

.min-width {
  @media (max-device-width: 1023px) {
    min-width: 0;
  }
}
</style>
