<template>
  <div class="results-list">
    <WeatherWidget></WeatherWidget>
    <h2 class="results-list--title">Don't wait until a perfect Monday, start running today! Pick a date, to get your training plan ⬇️</h2>
    <div v-if="dateSelected" class="results-tabs">
      <TabNav :tabs="weeks" :selected="selected" @selected="setSelected">
        <template v-for="(week, indexWeek) in weeks">
          <transition
            name="fade"
            mode="out-in"
            appear
            :duration="500"
            :key="indexWeek"
          >
          <Tab :isSelected="selected === week">
            <p v-for="(day, index) in program[selected]" :key="index">
              <span>{{ day.time }}</span>
              <span>{{ day.distance }}</span>
            </p>
          </Tab>
          </transition>
        </template>
    </TabNav>
    </div>
  </div>
</template>

<script>
import WeatherWidget from '@/components/WeatherWidget'
import TabNav from '@/components/TabNav'
import Tab from '@/components/Tab'
import { mapGetters } from 'vuex';

export default {
  components: {
    WeatherWidget, 
    TabNav, 
    Tab 
  },
  data() {
    return {
      selected: ''
    }
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    }
  },
  computed: {
    ...mapGetters(['program', 'dateSelected']),
    weeks () {
      return Object.keys(this.program)
    }
  },
  watch: {
    program: {
      deep: true,
      handler (newProgram, oldProgram) {
        this.selected = this.weeks[0];
      }
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  & > * {
    transition-duration: 200ms;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(.6,.15,.35,.8);
  }
}

$delay: 100ms;
$delayStep: 100ms;

.fade-enter,
.fade-leave-to {
  & > p {
    opacity: 0;
    transform: translateY(40px);
  }
}
.fade-enter-active {
  & > p {
    &:nth-child(2) {
      transition-delay: $delay;
    }
    &:nth-child(3) {
      transition-delay: $delay + $delayStep;
    }
    &:nth-child(4) {
      transition-delay: $delay + $delayStep*2;
    }
  }
}
.fade-leave-active {
  & > p {
    &:nth-child(1) {
      transition-delay: $delay + $delayStep*2;
    }
    &:nth-child(2) {
      transition-delay: $delay + $delayStep;
    }
    &:nth-child(3) {
      transition-delay: $delay;
    }
  }
}

$text-yellow: #ffcf25;

.results-list {
    &--title {
      font-family: 'Ubuntu', sans-serif;
      font-weight: 300;
      font-size: 1.6rem;
      line-height: 1.5;
      text-align: center;
    }
  }

.results-tabs {
  margin-top: 3rem;

  .nav {
    list-style: none;
    margin: 2rem 0;
    padding: 0 0 1rem;
    display: flex;
    border-bottom: 1px solid #fff;

    &-item {
      padding: 0 1rem;
      cursor: pointer;
    }

    &-link {
      color: #fff;
      text-decoration: none;
      font-size: 1.2rem;

      &.active {
        color: $text-yellow;
      }
    }
  }

  .tab-item {
    p {
      span {
        display: block;

        &:first-child {
          font-family: 'Ubuntu', sans-serif;
          font-weight: 300;
          font-size: 1.4rem;
          margin-bottom: .8rem;
        }
      }
    }
  }
}
</style>