<template>
  <v-container class="landingpage" :class="{dark: dark}">
    <div class="first-row mt-5">
      <div class="search mr-4">
        <v-toolbar dense floating>
          <v-text-field
            hide-details
            prepend-icon="mdi-magnify"
            single-line
            v-model="searchValue"
            label="Search for a country..."
          ></v-text-field>
        </v-toolbar>
      </div>
      <div class="dropdown">
        <div class="d-flex" cols="12">
          <v-select
            :items="items"
            label="Filter by Region"
            v-model="filterValue"
            solo
          ></v-select>
        </div>
      </div>
    </div>
    <div class="second-row">
      <div class="cards-row">
        <div class="text-center">
          <Loader v-if="loading" />
        </div>
        <v-row v-if="!loading">
          <v-col
            cols="12"
            lg="3"
            md="4"
            sm="6"
            v-for="(country, index) in countries"
            :key="index"
          >
            <Cards
              :capital="country.capital"
              :name="country.name"
              :population="country.population"
              :region="country.region"
              :image="country.flag"
              :countryDetail="countryDetail"
              :country="country"
            />
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
import Cards from "@/components/Cards";
import Loader from "@/components/Loader";
import { mapGetters } from 'vuex';

export default {
  name: "LandingPage",
  computed: {
    ...mapGetters(['dark'])
  },
  methods: {
    countryDetail(value) {
      this.$store.state.countryDetail = value;
      this.$router.push('/country-detail')
    },
  },
  components: {
    Cards,
    Loader,
  },
  watch: {
    filterValue(value) {
      if (value != "") {
        this.loading = true;
        fetch(`https://restcountries.eu/rest/v2/region/${value}`)
          .then((res) => res.json())
          .then((response) => {
            this.loading = false;
            this.countries = response;
            console.log(response);
          })
          .catch((err) => {
            this.loading = false;
            console.log(err);
          });
      }
    },
    searchValue(value) {
      if (value != "") {
        this.loading = true;
        fetch(`https://restcountries.eu/rest/v2/name/${value}`)
          .then((res) => res.json())
          .then((response) => {
            this.loading = false;
            this.countries = response;
            console.log(response);
          })
          .catch((err) => {
            this.loading = false;
            console.log(err);
          });
      }
    },
  },
  data() {
    return {
      items: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
      countries: "",
      filterValue: "",
      searchValue: "",
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((response) => {
        this.countries = response;
        this.loading = false;
        console.log(response);
      })
      .catch((err) => {
        this.loading = false;
        console.log(err);
      });
  },
};
</script>

<style lang="scss">
.first-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.v-progress-circular {
  top: 6rem !important;
}

.landingpage.dark {
    .v-toolbar, .v-input__slot {
        background-color: hsl(209, 23%, 22%) !important;
    }

    .v-label, .v-icon, .v-select .v-select__selections {
        color: #fff !important;
    }
}
</style>
