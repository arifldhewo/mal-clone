<template>
  <div class="my-5 mx-3">
    <div
      class="w-full bg-slate-300 h-full rounded-md grid grid-cols-2 bg-dark-primary"
    >
      <div class="w-40">
        <img class="w-full rounded-l-lg" :src="imgUrl" alt="anime images" />
      </div>
      <div class="mx-5 mt-5">
        <div>{{ titleEnglish }}</div>
        <div>Rank : {{ rank }}</div>
        <div>Score: {{ score }}</div>
        <div>{{ status }}</div>
        <div class="mb-5">
          <ButtonPrimary
            @click="goToDetail(malId)"
            text="See Detail"
          ></ButtonPrimary>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from "./ButtonPrimary.vue";

export default {
  name: "CardIndividual",
  props: {
    imgUrl: String,
    titleEnglish: String,
    rank: Number,
    score: Number,
    status: String,
    malId: Number,
  },
  components: {
    ButtonPrimary,
  },
  methods: {
    goToDetail(malId) {
      this.$router.push(`/anime/${malId}`);
    },
  },
};
</script>
