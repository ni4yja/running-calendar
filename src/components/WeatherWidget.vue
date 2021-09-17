<template>
  <div class="widget" v-if="weather.name">
    <div class="weather-info">
      <p class="date">{{ dateBuilder }}</p>
      <p class="location">{{ weather.name }}, {{ weather.sys.country }}</p>
    </div>
    <div class="weather-box">
      <i class="wi wi-day-sunny" v-if="getCurrent === weatherStatuses.Clear"></i>
      <i class="wi wi-cloudy" v-if="getCurrent === weatherStatuses.Clouds"></i>
      <i class="wi wi-rain"  v-if="getCurrent === weatherStatuses.Rain"></i>
      <i class="wi wi-snow"  v-if="getCurrent === weatherStatuses.Snow"></i>
      <span class="details">{{ getCurrent }}</span>
      <p class="temperature">{{ Math.round(weather.main.temp) }}°C</p>  
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
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  margin-bottom: 27px;
}

.weather-box {
  padding-right: 16px;
  border-right: 1px solid #EBEFF2;

  i {
    margin-right: 12px;
  }

  span {
    font-size: 14px;
  }

  .temperature {
    margin: 5px 0 0;
    font-size: 28px;
  }
}

.weather-info {
  padding-left: 16px;

  p {
    margin: 0;

    &.date {
      margin-bottom: 18px;
    }
  }
}
</style>