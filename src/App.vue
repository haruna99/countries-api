<template>
  <v-app :class="{dark: dark}">
    <v-main>
      <Navbar />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import { mapGetters } from 'vuex'

export default {
  name: "App",
  computed: {
    ...mapGetters(['dark'])
  },
  components: {
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  @import '@/assets/css/_media.scss';
#app {
  font-family: 'Nunito Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: hsl(0, 0%, 98%);
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  overflow-x: hidden;
}
  
.dark  {
    background-color: hsl(207, 26%, 17%) !important;
    color: #fff !important;
}
</style>
