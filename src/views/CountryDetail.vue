<template>
  <v-container :class="{dark: dark}" class="country-detail">
    <v-btn color="white" @click="goBack" class="back">
        <span class="material-icons mr-3">arrow_back</span>
        back
    </v-btn>
    <v-row class="main-row">
      <v-col cols="12" sm="6">
        <img :src="countryDetail.flag" alt="" />
      </v-col>
      <v-col cols="12" sm="6" class="right-div">
        <h2 class="name">{{ countryDetail.name }}</h2>
        <v-row>
          <v-col cols="12" sm="6">
            <div class="main-text">
              <span>Native Name</span>: {{ countryDetail.nativeName }}
            </div>
            <div class="main-text">
              <span>Population</span>: {{ countryDetail.population }}
            </div>
            <div class="main-text">
              <span>Region</span>: {{ countryDetail.region }}
            </div>
            <div class="main-text">
              <span>Suspan Region</span>: {{ countryDetail.subregion }}
            </div>
            <div class="main-text">
              <span>Capital</span>: {{ countryDetail.capital }}
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <div class="main-text">
              <span>Top Level Domain</span>:
              {{ countryDetail.topLevelDomain[0] }}
            </div>
            <div class="main-text">
              <span>Currencies</span>:
              <em v-for="(val, index) in currency" :key="index">{{ val }}, </em>
            </div>
            <div class="main-text">
              <span>Languages</span>:
              <em v-for="(val, index) in language" :key="index">{{ val }}, </em>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="main-text borders">
              <span class="mr-3">Border Countries:</span>
              <div
                class="border mb-3"
                v-for="(val, index) in countryDetail.borders"
                :key="index"
              >
                {{ val }}
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      currency: [],
      language: [],
    };
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
    currencies() {
      for (let val of this.countryDetail.currencies) {
        this.currency.push(val.name);
      }
    },
    languages() {
      for (let val of this.countryDetail.languages) {
        this.language.push(val.name);
      }
    },
  },
  computed: {
    ...mapGetters(["countryDetail", "dark"]),
  },
  mounted() {
    this.currencies(), this.languages();
  },
};
</script>

<style lang="scss">
.borders {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  .border {
    border: 1px solid #fff;
    border-radius: .3rem;
    margin-right: 1rem;
    padding: 0.1rem 2rem;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  }
}

.back {
  margin: 5rem 0rem;
  img {
    width: 1.5rem !important;
    margin-right: 1rem;
  }
}

.country-detail {
    // color: #fff !important;
  img {
    width: 95%;
  }

  .name {
    text-transform: uppercase;
    margin: 3rem 0rem;
  }

  .main-row {
    span {
      font-weight: 500;
    }

    .main-text {
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    .right-div {
      padding-left: 4rem;
    }
  }
}

.country-detail.dark {
    .border {
        background-color: hsl(209, 23%, 22%) !important;
        border: 1px solid hsl(207, 26%, 17%) !important;
    }

    .back {
        background-color: hsl(209, 23%, 22%) !important;
        color: #fff !important
    }
}
</style>