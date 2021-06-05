<template>
  <div class="navbar" :class="{ dark: dark }">
    <v-container>
      <div class="main-div">
        <div class="title">Where in the world?</div>
        <button @click="mode" class="button">
          <span class="material-icons"> dark_mode </span>
          <span class="mode-text">
              {{ dark ? "Dark Mode" : "Light Mode" }}
          </span>
        </button>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["dark"]),
  },
  methods: {
    mode() {
      this.$store.dispatch("setMode", !this.dark);
    },
  },
};
</script>

<style lang="scss">
.navbar {
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);

  .main-div {
    display: flex;
    justify-content: space-between;
  }

  .material-icons {
    font-size: 1rem !important;
  }

  .mode-text {
      font-size: 1rem;
      margin-bottom: 2rem;
  }
}

.navbar.dark {
  background-color: hsl(209, 23%, 22%) !important;
}
</style>