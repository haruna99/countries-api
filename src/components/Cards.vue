<template>
  <v-card @click="countryDetail(country)" :class="{dark: dark}"  class="mx-auto my-4">
    <v-img height="200" :src="image"></v-img>

    <v-card-title>{{ name }}</v-card-title>

    <v-card-text>
      <div><b>Population</b>: {{ population }}</div>
      <div><b>Region</b>: {{ region }}</div>
      <div><b>Capital</b>: {{ capital }}</div>
      <!-- <v-btn @click="countryDetail(country)" class="my-5">View details</v-btn> -->
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['dark'])
  },
  props: ["name", "population", "region", "capital", "image", "countryDetail", "country"],
};
</script>

<style lang="scss">
    .v-card {
        cursor: pointer;
    }

    .v-card.dark {
        background-color: hsl(209, 23%, 22%) !important;
        div {
            color: #fff !important
        }

        .v-btn {
            background-color: hsl(207, 26%, 17%) !important;
            color: #fff !important
        }
    }
</style>