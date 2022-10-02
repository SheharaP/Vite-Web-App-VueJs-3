<template>
  <div id="weatherContainer">

    Lat: <input v-model="lat" class="w-48 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none text-sm text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"/>
    Long: <input v-model="long" class="w-48 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none text-sm text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" />
    <button v-on:click="getWeather" class="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black">Get Weather</button>
    <div class="bg-black text-white">
      <div v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
      </div>
      <div v-else>
        <div v-if="loading">Loading...</div>
        <div v-else>
          <p>
            The weather in {{ myJson.name }} is {{ myJson.weather[0].main }}, with temperature of
            {{ myJson.main.temp }} &deg;C, but it feels like {{ myJson.main.feels_like }} &deg;C
          </p>
          <img
            :src="'http://openweathermap.org/img/wn/' + myJson.weather[0].icon + '@2x.png'"
            :alt="myJson.weather[0].main"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Weather",
  components: {},
  data() {
    return {
      myJson: null,
      loading: true,
      errored: false,
      lat: -37.840935,
      long: 144.946457,
      appID: "41db18334120e0ceb3f572e3e013a4ca",
    };
  },
  mounted() {
    this.getWeather();
  },
  methods: {
    getWeather() {
      URL = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.long}&appid=${this.appID}&units=metric`;
      axios
        .get(URL)
        .then((response) => {
          this.myJson = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>
