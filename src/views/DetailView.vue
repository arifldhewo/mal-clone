<template>
  <div>
    <SidebarGlob></SidebarGlob>
    <IsLoadingAnimation v-if="isLoading"></IsLoadingAnimation>
    <div v-for="(detail, index) in aniDetail" :key="index">
      <h1 class="text-center font-bold text-3xl my-5 lg:hidden">
        {{ detail.title }}
      </h1>

      <div
        class="flex justify-center lg:grid lg:grid-cols-2 2xl:mx-96 lg:my-10 lg:mx-20 xl:mx-60"
      >
        <img class="rounded-xl" :src="detail.images.webp.large_image_url" />
        <div class="hidden lg:block text-justify ml-10">
          <h1 class="font-bold text-3xl">
            {{ detail.title }}
          </h1>
          <div class="mt-5">
            <p class="font-bold lg:hidden xl:block">Synopsis:</p>
            <p class="mb-5 lg:hidden xl:block">{{ detail.synopsis }}</p>
            <p class="font-bold">
              Genres:
              <span
                v-for="(genre, index) in detail.genres"
                :key="index"
                class="font-normal"
                >{{ genre.name }}
              </span>
            </p>
            <p class="font-bold">
              Themes:
              <span
                v-for="(theme, index) in detail.themes"
                :key="index"
                class="font-normal"
                >{{ theme.name }}
              </span>
            </p>
            <p class="font-bold">
              Studio:
              <span
                v-for="(studio, index) in detail.studios"
                :key="index"
                class="font-normal"
                >{{ studio.name }}
              </span>
            </p>
            <p class="font-bold">
              Rank: <span class="font-normal">{{ detail.rank }}</span>
            </p>
            <p class="font-bold">
              Episodes: <span class="font-normal">{{ detail.episodes }}</span>
            </p>
            <p class="font-bold">
              Duration: <span class="font-normal">{{ detail.duration }}</span>
            </p>
            <p class="font-bold">
              Source: <span class="font-normal">{{ detail.source }}</span>
            </p>
            <p class="font-bold">
              Type: <span class="font-normal">{{ detail.type }}</span>
            </p>
            <p class="font-bold">
              Year: <span class="font-normal">{{ detail.year }}</span>
            </p>
            <a :href="detail.url">
              <ButtonPrimary text="Go To MAL"></ButtonPrimary>
            </a>
          </div>
        </div>
      </div>

      <div class="mb-24 mt-5 lg:ml-20 xl:ml-32 xl:hidden">
        <p class="font-bold">Synopsis:</p>
        <p class="mb-5">{{ detail.synopsis }}</p>

        <div class="lg:hidden">
          <p class="font-bold">
            Genres:
            <span
              v-for="(genre, index) in detail.genres"
              :key="index"
              class="font-normal"
              >{{ genre.name }}
            </span>
          </p>
          <p class="font-bold">
            Themes:
            <span
              v-for="(theme, index) in detail.themes"
              :key="index"
              class="font-normal"
              >{{ theme.name }}
            </span>
          </p>
          <p class="font-bold">
            Studio:
            <span
              v-for="(studio, index) in detail.studios"
              :key="index"
              class="font-normal"
              >{{ studio.name }}
            </span>
          </p>
          <p class="font-bold">
            Rank: <span class="font-normal">{{ detail.rank }}</span>
          </p>
          <p class="font-bold">
            Episodes: <span class="font-normal">{{ detail.episodes }}</span>
          </p>
          <p class="font-bold">
            Duration: <span class="font-normal">{{ detail.duration }}</span>
          </p>
          <p class="font-bold">
            Source: <span class="font-normal">{{ detail.source }}</span>
          </p>
          <p class="font-bold">
            Type: <span class="font-normal">{{ detail.type }}</span>
          </p>
          <p class="font-bold">
            Year: <span class="font-normal">{{ detail.year }}</span>
          </p>
          <a :href="detail.url">
            <ButtonPrimary text="Go To MAL"></ButtonPrimary>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from "@/components/ButtonPrimary.vue";
import IsLoadingAnimation from "@/components/IsLoadingAnimation.vue";
import SidebarGlob from "@/components/SidebarGlob.vue";

export default {
  name: "DetailView",
  data() {
    return {
      isLoading: true,
      aniDetail: this.$store.state.aniDetail,
    };
  },
  methods: {
    triggerAniDetail() {
      this.$store
        .dispatch("triggerStoreAniDetail", this.$route.path)
        .then(() => {
          this.isLoading = false;
        });
    },
    triggerDeleteAniDetail() {
      this.$store.dispatch("triggerDeleteAniDetail");
    },
  },
  components: {
    SidebarGlob,
    IsLoadingAnimation,
    ButtonPrimary,
  },
  mounted() {
    this.triggerAniDetail();
  },
  destroyed() {
    this.triggerDeleteAniDetail();
  },
};
</script>
