<template>
  <div class="home">
    <div class="container">
      <Schedule/>
      <div class="results">
        <p>
          <span>{{ this.$store.state.day1.time }}</span>
          <span>{{ this.$store.state.day1.distance }}</span>
        </p>
        <p>
          <span>{{ this.$store.state.day2.time }}</span>
          <span>{{ this.$store.state.day2.distance }}</span>
        </p>
        <p>
          <span>{{ this.$store.state.day3.time }}</span>
          <span>{{ this.$store.state.day3.distance }}</span>
        </p>
        <p>
          <span>{{ this.$store.state.day4.time }}</span>
          <span>{{ this.$store.state.day4.distance }}</span>
        </p>
        <p>
          <span>{{ this.$store.state.day5.time }}</span>
          <span>{{ this.$store.state.day5.distance }}</span>
        </p>
        <p>
          <span>{{ this.$store.state.day6.time }}</span>
          <span>{{ this.$store.state.day6.distance }}</span>
        </p>
        <p>
          <span>{{ this.$store.state.day7.time }}</span>
          <span>{{ this.$store.state.day7.distance }}</span>
        </p>
        <p>
          <span>{{ this.$store.state.day8.time }}</span>
          <span>{{ this.$store.state.day8.distance }}</span>
        </p>
        <p>
          <span>{{ this.$store.state.day9.time }}</span>
          <span>{{ this.$store.state.day9.distance }}</span>
        </p>
        <p>
          <span>{{ this.$store.state.day10.time }}</span>
          <span>{{ this.$store.state.day10.distance }}</span>
        </p>
        <p>
          <span>{{ this.$store.state.day11.time }}</span>
          <span>{{ this.$store.state.day11.distance }}</span>
        </p>
        <p>
          <span>{{ this.$store.state.day12.time }}</span>
          <span>{{ this.$store.state.day12.distance }}</span>
        </p>
        <p>
          <span>{{ this.$store.state.day13.time }}</span>
          <span>{{ this.$store.state.day13.distance }}</span>
        </p>
        <p>
          <span>{{ this.$store.state.day14.time }}</span>
          <span>{{ this.$store.state.day14.distance }}</span>
        </p>
        <p>
          <span>{{ this.$store.state.day15.time }}</span>
          <span>{{ this.$store.state.day15.distance }}</span>
        </p>
        <p>
          <span>{{ this.$store.state.day16.time }}</span>
          <span>{{ this.$store.state.day16.distance }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Schedule from '@/components/Schedule'

export default {
  name: 'Home',
  components: {
    Schedule
  }
}
</script>


