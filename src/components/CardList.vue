<template>
  <div class="">
    <IsLoadingAnimation v-if="isLoading"></IsLoadingAnimation>

    <div v-if="!isLoading" class="flex justify-center">
      <MalLogo></MalLogo>
    </div>
    <h1
      v-if="!isLoading"
      class="text-center mb-9 text-xl md:text-4xl font-bold"
    >
      Top Chart
    </h1>

    <div v-if="!isLoading" class="flex md:justify-end justify-center mb-24">
      <div
        class="w-full lg:w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        <CardIndividual
          v-for="(anime, index) in aniList[0]"
          :key="index"
          :img-url="anime.images.webp.image_url"
          :title-english="anime.title"
          :rank="anime.rank"
          :score="anime.score"
          :status="anime.status"
          :mal-id="anime.mal_id"
        ></CardIndividual>
      </div>
    </div>
  </div>
</template>

<script>
import CardIndividual from "./CardIndividual.vue";
import IsLoadingAnimation from "./IsLoadingAnimation.vue";
import MalLogo from "./MalLogo.vue";

export default {
  name: "CardList",
  data() {
    return {
      isLoading: true,
      aniList: this.$store.state.aniList,
    };
  },
  components: {
    CardIndividual,
    MalLogo,
    IsLoadingAnimation,
  },
  methods: {
    storeList() {
      this.$store.dispatch("triggerStoreAniList").then(() => {
        this.isLoading = false;
      });
    },
  },
  mounted() {
    this.storeList();
  },
  destroyed() {
    this.$store.dispatch("triggerDeleteAniList");
  },
};
</script>
