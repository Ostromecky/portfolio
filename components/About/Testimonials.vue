<template>
  <section class="flex flex-col mx-8 my-16">
    <div class="flex flex-col justify-center mb-16">
      <div class="flex flex-col items-start w-100">
        <span class="text-gray mb-4">What my clients think about me</span>
        <h2 class="text-white">Testimonials</h2>
      </div>
      <Flicking
        ref="flicking"
        :hide-before-init="true"
        :options="{
          circular: true,
          align: 'prev'
        }"
      >
        <div class="panel">1</div>
        <div class="panel">2</div>
        <div class="panel">3</div>

        <!-- <div v-for="testimonial in testimonials" class="panels">
          <TestimonialCard
            :full-name="testimonial.fullName"
            :content="testimonial.content"
            :position="testimonial.position"
            :icon="testimonial.icon"
            :img-src="testimonial.imgSrc"
          />
        </div> -->
      </Flicking>
      <!-- <Flicking
        v-else
        ref="flicking"
        :hide-before-init="true"
        class="flicking"
        :options="{
          circular: true,
          align: 'prev',
          autoResize: true,
          inputType: ['touch', 'mouse']
        }"
      >
        <div
          v-for="(testimonial, index) in testimonials"
          v-if="index % 2 === 0"
          class="panels"
        >
          <TestimonialCard
            :full-name="testimonials[index].fullName"
            :content="testimonials[index].content"
            :position="testimonials[index].position"
            :icon="testimonials[index].icon"
            :img-src="testimonials[index].imgSrc"
          />
          <TestimonialCard
            v-if="testimonials[index + 1]"
            :full-name="testimonials[index + 1].fullName"
            :content="testimonials[index + 1].content"
            :position="testimonials[index + 1].position"
            :icon="testimonials[index + 1].icon"
            :img-src="testimonials[index + 1].imgSrc"
          />
        </div>
      </Flicking> -->
    </div>
  </section>
</template>

<script>
import Flicking from '@egjs/vue3-flicking'
import { debounce } from '~/utils/debounce'
import TestimonialCard from '~/components/TestimonialCard'

export default {
  components: { TestimonialCard, Flicking },
  data() {
    return {
      isMobile: true,
      testimonials: [
        {
          fullName: 'Maria Wilson1',
          content:
            'Emma did an excellent creative job, addressing our request quickly, and also providing her own graphic insight, being open to feedback and changes or edits when they arose. She worked with us the entire way. Highly recommended.' +
            'Emma did an excellent creative job, addressing our request quickly, and also providing her own graphic insight, being open to feedback and changes or edits when they arose. She worked with us the entire way. Highly recommended.',
          position: 'Envato Customer',
          icon: ['fab', 'github'],
          imgSrc: 'http://exill.dk/demo/kitzu/template/img/client-3.jpg'
        },
        {
          fullName: 'Maria Wilson2',
          content:
            'Emma did an excellent creative job, addressing our request quickly, and also providing her own graphic insight, being open to feedback and changes or edits when they arose. She worked with us the entire way. Highly recommended.',
          position: 'Envato Customer',
          icon: ['fab', 'github'],
          imgSrc: 'http://exill.dk/demo/kitzu/template/img/client-3.jpg'
        },
        {
          fullName: 'Maria Wilson3',
          content:
            'Emma did an excellent creative job, addressing our request quickly, and also providing her own graphic insight, being open to feedback and changes or edits when they arose. She worked with us the entire way. Highly recommended.',
          position: 'Envato Customer',
          icon: ['fab', 'github'],
          imgSrc: 'http://exill.dk/demo/kitzu/template/img/client-3.jpg'
        }
      ]
    }
  },
  watch: {
    isMobile: function () {
      this.change()
    }
  },

  mounted() {
    this.isMobile = this.getMobile()
    if (process.browser) {
      window.addEventListener(
        'resize',
        debounce(() => (this.isMobile = this.getMobile()), 0)
      )
      window.addEventListener('resize', debounce(this.change, 0))

      // this.$on('hook:beforeDestroy', () => {
      //   window.removeEventListener('resize', debounce(this.change, 0))
      //   window.removeEventListener('resize', debounce(this.getMobile, 0))
      // })
    }
  },

  methods: {
    /**
     * Resize flicking container
     */
    change() {
      // if (this.$refs.flicking && this.$refs.flicking.panels > 0) {
      //   this.$refs.flicking.element.style.height = Math.max(
      //     ...this.$refs.flicking
      //       .panels()
      //       .map((panel) => panel.element.scrollHeight)
      //   )
      //   this.$refs.flicking.resize()
      // }
    },
    getMobile() {
      return window.innerWidth < 768
    }
  }
}
</script>

<style scoped lang="scss">
.flicking {
  width: 100%;
  margin: 0px auto;
  @apply py-4;
}

.panels {
  //position: absolute;
  //top: 0;
  margin-right: 30px;
  width: 100%;
  @apply grid;
  @apply gap-8;
  @apply grid-cols-2;
}

@screen md {
  .panels {
    @apply grid-cols-1;
  }
}
</style>
