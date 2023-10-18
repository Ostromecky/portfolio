<template>
  <section class="flex flex-col px-4 my-8">
    <div class="flex flex-col justify-center mb-16">
      <div class="flex flex-col items-start w-100">
        <span class="text-gray mb-4">What my clients think about me</span>
        <h2 class="text-white">Testimonials</h2>
      </div>
      <div class="mx-[-1em]">
        <carousel v-bind="settings" :breakpoints="breakpoints">
          <slide
            v-for="testimonial in testimonials"
            :key="testimonial.fullName"
          >
            <div class="carousel__item">
              <TestimonialCard
                :full-name="testimonial.fullName"
                :content="testimonial.content"
                :position="testimonial.position"
                :icon="testimonial.icon"
                :img-src="testimonial.imgSrc"
              />
            </div>
          </slide>

          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { debounce } from '~/utils/debounce'
// import TestimonialCard from '~/components/TestimonialCard'

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  data() {
    return {
      isMobile: true,
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
        wrapAround: true
      },
      // Breakpoints are mobile first and apply upwards
      breakpoints: {
        768: {
          itemsToShow: 2,
          snapAlign: 'start'
        }
      },
      testimonials: [
        {
          fullName: 'Maria Wilson',
          content:
            "Paweł's expertise shines beyond rapid, quality code delivery. His proactive approach in offering insights and embracing feedback makes him stand out. Throughout our collaboration, he was an integral team player, adapting swiftly and effectively. Highly recommended for any frontend development needs.",
          position: 'Envato Customer',
          icon: ['fas', 'quote-right'],
          imgSrc: '/dawid.jpeg'
        },
        {
          fullName: 'Jon Doe',
          content:
            'Paweł proved to be exceptionally creative and responsive in our collaboration. He didn’t just address our needs promptly; he also enriched the work with valuable insights from his vast coding experience. Open to feedback and iterative refinement, Paweł partnered with us through every step of the project, ensuring all changes and adaptations were handled with expertise. His commitment to not just delivering tasks but also contributing ideas set him apart. I highly recommend his services for anyone looking for a skilled and proactive frontend developer.',
          position: 'Envato Customer',
          icon: ['fas', 'quote-right'],
          imgSrc: '/dawid.jpeg'
        },
        {
          fullName: 'Dawid Puda',
          content:
            'Paweł did an excellent creative job, addressing our requests quickly, and also providing his own code insight, being open to feedback and changes or edits when they arose. He worked with us the entire way. Highly recommended.',
          position: 'CEO at Ex-App',
          icon: ['fas', 'quote-right'],
          imgSrc: '/dawid.jpeg'
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

<style lang="scss">
.carousel {
  &__item {
    min-height: 200px;
    width: 100%;
    height: 100%;
  }

  &__slide {
    padding: 1em;
    align-items: start;
  }

  &__prev,
  &__next {
    display: none;
  }

  &__pagination {
    &-button {
      &::after {
        @apply bg-gray;
        @apply rounded-full;
      }

      &:hover {
        &::after {
          @apply bg-primary;
        }
      }
      &--active {
        &::after {
          @apply rounded-full;
          @apply bg-white;
        }
      }
    }
  }
}

@screen md {
  .panels {
    @apply grid-cols-1;
  }
}
</style>
