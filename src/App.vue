<script >

import AppMain from './components/AppMain.vue';
export default {
  name: "Vue API Client",
  data() {
    return { }
  },  
  components: {
    AppMain
  }
}
</script>

<template>
  <h1>what</h1>
  <AppMain/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
