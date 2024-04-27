<template>
  <div class="home">
    <SidebarGlob></SidebarGlob>
    <div class="w-full flex justify-center">
      <MalLogo></MalLogo>
    </div>
    <div class="mx-10 lg:mx-20 xl:mx-32 xl:w-1/2">
      <p class="text-base md:text-xl lg:text-2xl xl:text-4xl">
        Using <span class="font-merriweathers-sans">Jikan</span> REST API v4 for
        showing anime list from the biggest aggregator anime list, for current
        web, only showing for top chart anime list, and detail on each list.
        <br /><br />

        This web already ready responsive on mobile,tablet, laptop,and desktop,
        already implement fetching api using axios, already implement state
        management using vuex, already implement seperate component, already
        implement loading state, and the CSS using Tailwind, last but not least
        is the router.
      </p>
      <ButtonPrimary
        @click="goToHome"
        class="font-bold text-sm"
        text="GET STARTED"
      ></ButtonPrimary>
    </div>
    <FooterJikan></FooterJikan>
  </div>
</template>

<script>
// @ is an alias to /src
import SidebarGlob from "@/components/SidebarGlob.vue";
import MalLogo from "../components/MalLogo.vue";
import FooterJikan from "@/components/FooterJikan.vue";
import ButtonPrimary from "@/components/ButtonPrimary.vue";

export default {
  name: "HomeView",
  components: {
    SidebarGlob,
    MalLogo,
    FooterJikan,
    ButtonPrimary,
  },
  methods: {
    goToHome() {
      this.$router.push("/anilist");
    },
  },
};
</script>
