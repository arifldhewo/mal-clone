<template>
  <div class="home">
    <SidebarGlob></SidebarGlob>
    <CardList></CardList>
  </div>
</template>

<script>
// @ is an alias to /src
import CardList from "@/components/CardList.vue";
import SidebarGlob from "@/components/SidebarGlob.vue";

export default {
  name: "HomeView",
  components: {
    CardList,
    SidebarGlob,
  },
};
</script>
