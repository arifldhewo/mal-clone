<template>
  <div id="app" class="lg:mx-10">
    <audio id="audio" src="@/assets/bg-music.mp3"></audio>
    <router-view />
  </div>
</template>

<script>
export default {
  playAudio() {
    const audio = document.getElementById("audio");
    audio.play();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #c8d1f2;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
