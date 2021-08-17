<template>
  <div class="widget" v-if="weather.name">
    <h2 class="date">{{ dateBuilder }}</h2>
    <p class="location">{{ weather.name }}, {{ weather.sys.country }}</p>
    <div class="weather-box">
      <i class="wi wi-day-sunny" v-if="getCurrent === weatherStatuses.Clear"></i>
      <i class="wi wi-cloudy" v-if="getCurrent === weatherStatuses.Clouds"></i>
      <i class="wi wi-rain"  v-if="getCurrent === weatherStatuses.Rain"></i>
      <i class="wi wi-snow"  v-if="getCurrent === weatherStatuses.Snow"></i>
      <p class="temperature">{{ Math.round(weather.main.temp) }}°C</p>
      <p class="details">{{ getCurrent }}</p>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import { mapActions, mapGetters } from 'vuex';

export default {
  created() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.getWeather(position);
        }
      );
    }
    else{
      console.log("Your browser does not support geolocation API")
    }
  },
  computed: {
    ...mapGetters(['weather']),
    getCurrent() {
      let detail = this.weather.weather[0].main;
      return detail;
    },
    weatherStatuses() {
      let status = {
        Clear: 'Clear',
        Clouds: 'Clouds',
        Rain: 'Rain',
        Snow: 'Snow'
      }

      return status;
    },
    dateBuilder () {
      return dayjs().format("dddd, DD MMMM");
    }
  },
  methods: {
    ...mapActions(['getWeather'])
  }
}
</script>

<style lang="scss">
.widget {
  background: #deebff;
  color: darkslategray;
  text-align: center;
  padding: 1rem 3rem 2rem;
  border-radius: 0 0 2rem 2rem;
  width: fit-content;
  margin: -3rem auto 0;

  .date {
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
  }
}

.weather-box {
  display: flex;
  justify-content: center;
  align-items: center;

  i, p {
    padding: 0 .5rem;
    margin: 0;
  }
}
</style>